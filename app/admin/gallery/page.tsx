import React from "react";
import { GalleryManager } from "@/components/admin/GalleryManager";
import { getAdminGalleryImages } from "../actions";
import { galleryImages } from "@/data/gallery";

export default async function AdminGalleryPage() {
  let images: any[] = [];

  try {
    images = await getAdminGalleryImages();
  } catch (err) {
    console.warn("Could not load gallery photos from Supabase, rendering fallback:", err);
  }

  // If database has no photos yet, provide default fallback structure from data/gallery.ts
  if (images.length === 0) {
    images = galleryImages.map((img, i) => ({
      id: img.id,
      image_url: img.src,
      alt_text: img.alt,
      caption: img.title,
      category: img.category,
      is_visible: true,
      sort_order: i,
    }));
  }

  return (
    <div className="space-y-6">
      <GalleryManager initialImages={images} />
    </div>
  );
}

