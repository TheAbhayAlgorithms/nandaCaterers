"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Check,
  AlertCircle,
  Sparkles,
  Filter,
} from "lucide-react";
import { resizeImage } from "@/lib/image-upload";
import { createClient } from "@/lib/supabase/client";
import {
  addGalleryImageAction,
  updateGalleryImageAction,
  deleteGalleryImageAction,
} from "@/app/admin/actions";
import { cn } from "@/lib/cn";

interface GalleryImageItem {
  id: string;
  image_url: string;
  alt_text: string;
  caption: string;
  category: string | null;
  is_visible: boolean;
  sort_order: number;
}

const CATEGORIES = ["Weddings", "Corporate", "Decor", "Food"] as const;

export function GalleryManager({
  initialImages,
}: {
  initialImages: GalleryImageItem[];
}) {
  const [images, setImages] = useState<GalleryImageItem[]>(initialImages);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Upload Progress State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ current: number; total: number } | null>(null);

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // --------------------------------------------------------------------------
  // MULTI-IMAGE UPLOAD WITH CLIENT-SIDE RESIZE & STORAGE UPLOAD
  // --------------------------------------------------------------------------
  const handleMultiUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress({ current: 0, total: files.length });

    const supabase = createClient();
    if (!supabase) {
      showToast("Supabase is not configured.");
      setIsUploading(false);
      return;
    }

    const uploadedNewImages: GalleryImageItem[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        // Resize before upload (max 1600px, WebP)
        const resizedBlob = await resizeImage(file, 1600, 0.85);
        const filename = `gal_${Date.now()}_${Math.random().toString(36).slice(2, 7)}.webp`;

        const { data, error } = await supabase.storage
          .from("gallery")
          .upload(filename, resizedBlob, { contentType: "image/webp", upsert: true });

        if (error) throw error;

        const { data: pubData } = supabase.storage.from("gallery").getPublicUrl(data.path);
        const imageUrl = pubData.publicUrl;

        // Auto default caption from file name
        const cleanCaption = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

        // Save record to DB
        const created = await addGalleryImageAction({
          image_url: imageUrl,
          caption: cleanCaption,
          alt_text: cleanCaption,
          category: activeCategory !== "All" ? activeCategory : "Weddings",
        });

        uploadedNewImages.push(created);
      } catch (err: any) {
        console.error(`Failed uploading file ${file.name}:`, err);
      } finally {
        setUploadProgress({ current: i + 1, total: files.length });
      }
    }

    if (uploadedNewImages.length > 0) {
      setImages((prev) => [...prev, ...uploadedNewImages]);
      showToast(`Successfully uploaded ${uploadedNewImages.length} photos.`);
    }

    setIsUploading(false);
    setUploadProgress(null);
    e.target.value = "";
  };

  // --------------------------------------------------------------------------
  // EDIT CAPTION, ALT TEXT, CATEGORY
  // --------------------------------------------------------------------------
  const handleUpdateDetails = async (
    id: string,
    field: "caption" | "alt_text" | "category",
    value: string
  ) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, [field]: value } : img))
    );

    startTransition(async () => {
      try {
        await updateGalleryImageAction(id, { [field]: value });
        showToast("Photo details saved.");
      } catch (err: any) {
        showToast(err.message || "Failed to save details.");
      }
    });
  };

  const handleToggleVisibility = async (img: GalleryImageItem) => {
    const updated = !img.is_visible;
    setImages((prev) =>
      prev.map((item) => (item.id === img.id ? { ...item, is_visible: updated } : item))
    );

    startTransition(async () => {
      try {
        await updateGalleryImageAction(img.id, { is_visible: updated });
        showToast(`Photo is now ${updated ? "visible" : "hidden"}.`);
      } catch (err: any) {
        setImages((prev) =>
          prev.map((item) => (item.id === img.id ? { ...item, is_visible: !updated } : item))
        );
        showToast(err.message || "Failed to update visibility.");
      }
    });
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    startTransition(async () => {
      try {
        await deleteGalleryImageAction(id, imageUrl);
        setImages((prev) => prev.filter((item) => item.id !== id));
        setDeleteConfirmId(null);
        showToast("Photo removed from gallery and storage.");
      } catch (err: any) {
        showToast(err.message || "Failed to delete photo.");
      }
    });
  };

  const handleReorder = async (img: GalleryImageItem, direction: "up" | "down") => {
    const index = images.findIndex((i) => i.id === img.id);
    if (index === -1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= images.length) return;

    const targetImg = images[targetIndex];
    const newOrder = targetImg.sort_order;
    const oldOrder = img.sort_order;

    setImages((prev) =>
      prev.map((item) => {
        if (item.id === img.id) return { ...item, sort_order: newOrder };
        if (item.id === targetImg.id) return { ...item, sort_order: oldOrder };
        return item;
      })
    );

    startTransition(async () => {
      try {
        await updateGalleryImageAction(img.id, { sort_order: newOrder });
        await updateGalleryImageAction(targetImg.id, { sort_order: oldOrder });
      } catch (err: any) {
        showToast("Failed to reorder images.");
      }
    });
  };

  // Filtered list
  const filteredImages = images
    .filter((img) => (activeCategory === "All" ? true : img.category === activeCategory))
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 py-2.5 px-4 rounded-xl bg-ink text-white text-xs font-semibold shadow-warm flex items-center gap-2 animate-fade-in border border-white/10">
          <Check className="w-4 h-4 text-[#C9A227]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header & Multi-Upload Bar */}
      <div className="rounded-3xl bg-paper p-6 sm:p-8 border border-ink/10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#7A1F2B] block mb-1">
            MEDIA ASSETS
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
            Gallery Photo Manager
          </h1>
          <p className="text-xs sm:text-sm text-ink/70 mt-1">
            Upload multiple banquet photos at once. Images are automatically resized and converted to high-quality WebP.
          </p>
        </div>

        {/* Upload Trigger Button */}
        <div>
          <label className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A1F2B] hover:bg-[#5C1A1B] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Upload Photos (Batch)</span>
            <input
              type="file"
              multiple
              accept="image/*"
              disabled={isUploading}
              onChange={handleMultiUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Upload Progress Bar if active */}
      {isUploading && uploadProgress && (
        <div className="p-4 rounded-2xl bg-[#7A1F2B]/10 border border-[#7A1F2B]/20 text-xs text-[#7A1F2B] space-y-2">
          <div className="flex items-center justify-between font-bold">
            <span>Uploading &amp; resizing photos...</span>
            <span>
              {uploadProgress.current} / {uploadProgress.total} (
              {Math.round((uploadProgress.current / uploadProgress.total) * 100)}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-white overflow-hidden">
            <div
              className="h-full bg-[#7A1F2B] transition-all duration-200"
              style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {["All", ...CATEGORIES].map((cat) => {
            const count =
              cat === "All"
                ? images.length
                : images.filter((img) => img.category === cat).length;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border",
                  isSelected
                    ? "bg-[#7A1F2B] text-white border-[#7A1F2B] shadow-xs"
                    : "bg-paper text-ink border-ink/15 hover:border-ink/30"
                )}
              >
                <span>{cat}</span>
                <span className={isSelected ? "text-white/80 ml-1.5" : "text-ink/50 ml-1.5"}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-xs text-ink/60 font-medium">
          Showing {filteredImages.length} photos
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.length === 0 ? (
          <div className="col-span-full p-12 text-center text-ink/60 bg-paper rounded-2xl border border-ink/10 space-y-2">
            <p className="font-semibold text-sm">No photos in this category</p>
            <p className="text-xs">Click &ldquo;Upload Photos&rdquo; above to add images to the gallery.</p>
          </div>
        ) : (
          filteredImages.map((img, idx) => (
            <div
              key={img.id}
              className={cn(
                "rounded-2xl bg-paper border border-ink/10 overflow-hidden shadow-xs hover:shadow-card transition-all flex flex-col justify-between",
                !img.is_visible && "opacity-60 bg-black/5"
              )}
            >
              {/* Image Preview & Order Controls */}
              <div className="relative aspect-[4/3] w-full bg-cream overflow-hidden">
                <Image
                  src={img.image_url}
                  alt={img.alt_text || "Gallery photo"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                {/* Floating Reorder and Visibility Pills Top Right */}
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => handleReorder(img, "up")}
                    disabled={idx === 0}
                    aria-label="Move photo left/up"
                    className="p-1 text-white/80 hover:text-white disabled:opacity-30 cursor-pointer"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReorder(img, "down")}
                    disabled={idx === filteredImages.length - 1}
                    aria-label="Move photo right/down"
                    className="p-1 text-white/80 hover:text-white disabled:opacity-30 cursor-pointer"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleVisibility(img)}
                    className="p-1 text-white/80 hover:text-white cursor-pointer ml-1"
                    title={img.is_visible ? "Hide photo on public gallery" : "Show photo on public gallery"}
                  >
                    {img.is_visible ? (
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <EyeOff className="w-3.5 h-3.5 text-red-400" />
                    )}
                  </button>
                </div>

                {!img.is_visible && (
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold">
                    Hidden from public
                  </div>
                )}
              </div>

              {/* Form Controls for Caption, Alt, and Category */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-ink/60 mb-1">
                      Caption
                    </label>
                    <input
                      type="text"
                      value={img.caption}
                      placeholder="e.g. Royal Wedding Banquet Setup"
                      onChange={(e) =>
                        setImages((prev) =>
                          prev.map((item) =>
                            item.id === img.id ? { ...item, caption: e.target.value } : item
                          )
                        )
                      }
                      onBlur={(e) => handleUpdateDetails(img.id, "caption", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-cream/40 border border-ink/20 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-ink/60 mb-1">
                      Alt Text (SEO &amp; Accessibility)
                    </label>
                    <input
                      type="text"
                      value={img.alt_text}
                      placeholder="e.g. Grand wedding dining banquet decor"
                      onChange={(e) =>
                        setImages((prev) =>
                          prev.map((item) =>
                            item.id === img.id ? { ...item, alt_text: e.target.value } : item
                          )
                        )
                      }
                      onBlur={(e) => handleUpdateDetails(img.id, "alt_text", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-cream/40 border border-ink/20 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-ink/60 mb-1">
                      Category
                    </label>
                    <select
                      value={img.category || "Weddings"}
                      onChange={(e) => handleUpdateDetails(img.id, "category", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-cream/40 border border-ink/20 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-3 border-t border-ink/5 flex items-center justify-between">
                  <span className="text-[10px] text-ink/40">
                    Order #{img.sort_order}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDeleteConfirmId(img.id)}
                    className="p-1.5 rounded-lg text-ink/40 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Delete photo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ==================================================================== */}
      {/* DELETE CONFIRMATION MODAL                                            */}
      {/* ==================================================================== */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl bg-paper p-6 shadow-2xl border border-ink/10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-ink">
                Delete Photo
              </h3>
              <p className="text-xs text-ink/70 mt-1">
                Are you sure you want to delete this photo? This will also remove the file from storage.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-full border border-ink/20 text-xs font-semibold text-ink hover:bg-cream cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const target = images.find((i) => i.id === deleteConfirmId);
                  if (target) handleDelete(target.id, target.image_url);
                }}
                className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold cursor-pointer"
              >
                Delete Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

