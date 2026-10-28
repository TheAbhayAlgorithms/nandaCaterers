"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import {
  Plus,
  Search,
  Star,
  Eye,
  EyeOff,
  Edit2,
  Trash2,
  ArrowUp,
  ArrowDown,
  Upload,
  Check,
  X,
  AlertCircle,
  FolderPlus,
  Layers,
} from "lucide-react";
import { resizeImage } from "@/lib/image-upload";
import { createClient } from "@/lib/supabase/client";
import {
  addDishAction,
  updateDishAction,
  toggleDishPopularAction,
  toggleDishVisibilityAction,
  deleteDishAction,
  addCategoryAction,
  updateCategoryAction,
  deleteCategoryAction,
} from "@/app/admin/actions";
import { cn } from "@/lib/cn";

interface Category {
  id: string;
  slug: string;
  name: string;
  sort_order: number;
  is_visible: boolean;
}

interface DishItem {
  id: string;
  category_id: string;
  name: string;
  description: string | null;
  type: "veg" | "non-veg" | null;
  image_url: string | null;
  is_popular: boolean;
  is_visible: boolean;
  sort_order: number;
}

interface MenuManagerProps {
  initialCategories: Category[];
  initialDishes: DishItem[];
}

export function MenuManager({ initialCategories, initialDishes }: MenuManagerProps) {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [dishes, setDishes] = useState<DishItem[]>(initialDishes);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPopularOnly, setFilterPopularOnly] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Modals state
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [editingDish, setEditingDish] = useState<DishItem | null>(null);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryNameInput, setCategoryNameInput] = useState("");

  const [deleteConfirmDishId, setDeleteConfirmDishId] = useState<string | null>(null);

  // Dish Form State
  const [dishForm, setDishForm] = useState({
    name: "",
    category_id: categories[0]?.id || "",
    description: "",
    type: "" as "" | "veg" | "non-veg",
    image_url: "",
    is_popular: false,
  });
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // --------------------------------------------------------------------------
  // CATEGORY OPERATIONS
  // --------------------------------------------------------------------------
  const openAddCategory = () => {
    setEditingCategory(null);
    setCategoryNameInput("");
    setIsCategoryModalOpen(true);
  };

  const openEditCategory = (cat: Category) => {
    setEditingCategory(cat);
    setCategoryNameInput(cat.name);
    setIsCategoryModalOpen(true);
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryNameInput.trim()) return;

    startTransition(async () => {
      try {
        if (editingCategory) {
          await updateCategoryAction(editingCategory.id, { name: categoryNameInput.trim() });
          setCategories((prev) =>
            prev.map((c) => (c.id === editingCategory.id ? { ...c, name: categoryNameInput.trim() } : c))
          );
          showToast(`Category '${categoryNameInput.trim()}' updated.`);
        } else {
          const newCat = await addCategoryAction(categoryNameInput.trim());
          setCategories((prev) => [...prev, newCat]);
          showToast(`Category '${categoryNameInput.trim()}' added.`);
        }
        setIsCategoryModalOpen(false);
      } catch (err: any) {
        showToast(err.message || "Failed to save category.");
      }
    });
  };

  const handleToggleCategoryVisibility = async (cat: Category) => {
    const updated = !cat.is_visible;
    startTransition(async () => {
      try {
        await updateCategoryAction(cat.id, { is_visible: updated });
        setCategories((prev) =>
          prev.map((c) => (c.id === cat.id ? { ...c, is_visible: updated } : c))
        );
        showToast(`Category '${cat.name}' is now ${updated ? "visible" : "hidden"}.`);
      } catch (err: any) {
        showToast(err.message || "Failed to update category visibility.");
      }
    });
  };

  // --------------------------------------------------------------------------
  // DISH OPERATIONS
  // --------------------------------------------------------------------------
  const openAddDish = () => {
    setEditingDish(null);
    setDishForm({
      name: "",
      category_id: selectedCategoryId !== "all" ? selectedCategoryId : categories[0]?.id || "",
      description: "",
      type: "",
      image_url: "",
      is_popular: false,
    });
    setIsDishModalOpen(true);
  };

  const openEditDish = (dish: DishItem) => {
    setEditingDish(dish);
    setDishForm({
      name: dish.name,
      category_id: dish.category_id,
      description: dish.description || "",
      type: dish.type || "",
      image_url: dish.image_url || "",
      is_popular: dish.is_popular,
    });
    setIsDishModalOpen(true);
  };

  // Photo upload with client-side resize
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingPhoto(true);
    try {
      const resizedBlob = await resizeImage(file, 1600, 0.85);
      const supabase = createClient();
      if (!supabase) throw new Error("Supabase is not configured.");

      const filename = `dish_${Date.now()}_${Math.random().toString(36).slice(2, 7)}.webp`;
      const { data, error } = await supabase.storage
        .from("menu-images")
        .upload(filename, resizedBlob, { contentType: "image/webp", upsert: true });

      if (error) throw error;

      const { data: pubData } = supabase.storage.from("menu-images").getPublicUrl(data.path);
      setDishForm((prev) => ({ ...prev, image_url: pubData.publicUrl }));
      showToast("Photo uploaded and resized successfully.");
    } catch (err: any) {
      showToast(err.message || "Failed to upload photo.");
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const handleSaveDish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishForm.name.trim() || !dishForm.category_id) return;

    startTransition(async () => {
      try {
        if (editingDish) {
          await updateDishAction(editingDish.id, {
            name: dishForm.name.trim(),
            category_id: dishForm.category_id,
            description: dishForm.description.trim() || null,
            type: dishForm.type || null,
            image_url: dishForm.image_url.trim() || null,
            is_popular: dishForm.is_popular,
          });

          setDishes((prev) =>
            prev.map((d) =>
              d.id === editingDish.id
                ? {
                    ...d,
                    name: dishForm.name.trim(),
                    category_id: dishForm.category_id,
                    description: dishForm.description.trim() || null,
                    type: dishForm.type || null,
                    image_url: dishForm.image_url.trim() || null,
                    is_popular: dishForm.is_popular,
                  }
                : d
            )
          );
          showToast(`Dish '${dishForm.name.trim()}' updated.`);
        } else {
          const newDish = await addDishAction({
            name: dishForm.name.trim(),
            category_id: dishForm.category_id,
            description: dishForm.description.trim() || undefined,
            type: dishForm.type || null,
            image_url: dishForm.image_url.trim() || null,
            is_popular: dishForm.is_popular,
          });

          setDishes((prev) => [...prev, newDish]);
          showToast(`Dish '${dishForm.name.trim()}' added.`);
        }
        setIsDishModalOpen(false);
      } catch (err: any) {
        showToast(err.message || "Failed to save dish.");
      }
    });
  };

  const handleTogglePopular = async (dish: DishItem) => {
    const updated = !dish.is_popular;
    // Optimistic update
    setDishes((prev) => prev.map((d) => (d.id === dish.id ? { ...d, is_popular: updated } : d)));

    startTransition(async () => {
      try {
        await toggleDishPopularAction(dish.id, updated);
        showToast(`'${dish.name}' ${updated ? "marked as Popular ★" : "unmarked from Popular"}.`);
      } catch (err: any) {
        // Rollback
        setDishes((prev) => prev.map((d) => (d.id === dish.id ? { ...d, is_popular: !updated } : d)));
        showToast(err.message || "Failed to toggle popular status.");
      }
    });
  };

  const handleToggleVisibility = async (dish: DishItem) => {
    const updated = !dish.is_visible;
    setDishes((prev) => prev.map((d) => (d.id === dish.id ? { ...d, is_visible: updated } : d)));

    startTransition(async () => {
      try {
        await toggleDishVisibilityAction(dish.id, updated);
        showToast(`'${dish.name}' is now ${updated ? "visible on site" : "hidden"}.`);
      } catch (err: any) {
        setDishes((prev) => prev.map((d) => (d.id === dish.id ? { ...d, is_visible: !updated } : d)));
        showToast(err.message || "Failed to update visibility.");
      }
    });
  };

  const handleDeleteDish = async (id: string) => {
    startTransition(async () => {
      try {
        await deleteDishAction(id);
        setDishes((prev) => prev.filter((d) => d.id !== id));
        setDeleteConfirmDishId(null);
        showToast("Dish deleted successfully.");
      } catch (err: any) {
        showToast(err.message || "Failed to delete dish.");
      }
    });
  };

  const handleMoveDishOrder = async (dish: DishItem, direction: "up" | "down") => {
    const currentCategoryDishes = dishes.filter((d) => d.category_id === dish.category_id);
    const index = currentCategoryDishes.findIndex((d) => d.id === dish.id);
    if (index === -1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentCategoryDishes.length) return;

    const targetDish = currentCategoryDishes[targetIndex];
    const newOrder = targetDish.sort_order;
    const oldOrder = dish.sort_order;

    setDishes((prev) =>
      prev.map((d) => {
        if (d.id === dish.id) return { ...d, sort_order: newOrder };
        if (d.id === targetDish.id) return { ...d, sort_order: oldOrder };
        return d;
      })
    );

    startTransition(async () => {
      try {
        await updateDishAction(dish.id, { sort_order: newOrder });
        await updateDishAction(targetDish.id, { sort_order: oldOrder });
      } catch (err: any) {
        showToast("Failed to save reorder.");
      }
    });
  };

  // Filtered dishes
  const filteredDishes = dishes
    .filter((d) => (selectedCategoryId === "all" ? true : d.category_id === selectedCategoryId))
    .filter((d) => (filterPopularOnly ? d.is_popular : true))
    .filter((d) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        d.name.toLowerCase().includes(q) ||
        (d.description && d.description.toLowerCase().includes(q))
      );
    })
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

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
            Menu Dishes &amp; Categories
          </h1>
          <p className="text-xs sm:text-sm text-ink/70 mt-0.5">
            Add delicacies, toggle Popular flags, and control menu visibility.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={openAddCategory}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-ink/20 text-xs font-bold text-ink hover:bg-cream transition-colors cursor-pointer"
          >
            <FolderPlus className="w-3.5 h-3.5 text-accent" />
            <span>Category</span>
          </button>

          <button
            type="button"
            onClick={openAddDish}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-[#7A1F2B] hover:bg-[#5C1A1B] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Dish</span>
          </button>
        </div>
      </div>

      {/* Category Pills & Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategoryId("all")}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border",
              selectedCategoryId === "all"
                ? "bg-[#7A1F2B] text-white border-[#7A1F2B] shadow-xs"
                : "bg-paper text-ink border-ink/15 hover:border-ink/30"
            )}
          >
            All Categories ({dishes.length})
          </button>

          {categories.map((cat) => {
            const count = dishes.filter((d) => d.category_id === cat.id).length;
            const isSelected = selectedCategoryId === cat.id;

            return (
              <div key={cat.id} className="relative group shrink-0 flex items-center">
                <button
                  type="button"
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5",
                    isSelected
                      ? "bg-[#7A1F2B] text-white border-[#7A1F2B] shadow-xs"
                      : "bg-paper text-ink border-ink/15 hover:border-ink/30",
                    !cat.is_visible && "opacity-60"
                  )}
                >
                  <span>{cat.name}</span>
                  <span className={isSelected ? "text-white/80" : "text-ink/50"}>
                    ({count})
                  </span>
                  {!cat.is_visible && <EyeOff className="w-3 h-3 text-red-400" />}
                </button>

                {/* Edit Category small icon on hover */}
                <button
                  type="button"
                  onClick={() => openEditCategory(cat)}
                  aria-label={`Edit category ${cat.name}`}
                  className="hidden group-hover:flex ml-1 p-1 rounded-full bg-paper border border-ink/10 text-ink/60 hover:text-ink cursor-pointer"
                  title="Rename category"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Search & Popular Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-ink/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-paper border border-ink/20 text-xs text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilterPopularOnly(!filterPopularOnly)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer",
                filterPopularOnly
                  ? "bg-amber-500/15 border-amber-500/40 text-amber-900 font-bold"
                  : "bg-paper border-ink/15 text-ink/70 hover:text-ink"
              )}
            >
              <Star className={cn("w-3.5 h-3.5", filterPopularOnly ? "fill-amber-500 text-amber-500" : "text-amber-500")} />
              <span>Popular Only</span>
            </button>
            <span className="text-xs text-ink/50">
              Showing {filteredDishes.length} dishes
            </span>
          </div>
        </div>
      </div>

      {/* Dish List Table / Card Grid */}
      <div className="rounded-2xl bg-paper border border-ink/10 overflow-hidden shadow-xs">
        {filteredDishes.length === 0 ? (
          <div className="p-12 text-center text-ink/60 space-y-2">
            <Layers className="w-8 h-8 text-ink/30 mx-auto" />
            <p className="font-semibold text-sm">No dishes found</p>
            <p className="text-xs">Try adjusting your category filter or search query.</p>
          </div>
        ) : (
          <div className="divide-y divide-ink/5">
            {filteredDishes.map((dish, idx) => {
              const cat = categories.find((c) => c.id === dish.category_id);

              return (
                <div
                  key={dish.id}
                  className={cn(
                    "p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-cream/40 transition-colors",
                    !dish.is_visible && "bg-black/5 opacity-70"
                  )}
                >
                  {/* Left: Thumbnail, Name, Badges */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Thumbnail or placeholder */}
                    <div className="w-12 h-12 rounded-xl bg-cream border border-ink/10 overflow-hidden shrink-0 relative flex items-center justify-center">
                      {dish.image_url ? (
                        <Image
                          src={dish.image_url}
                          alt={dish.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-xs font-bold text-ink/30">
                          {dish.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {dish.type && (
                          <span
                            className={cn(
                              "w-2 h-2 rounded-full shrink-0",
                              dish.type === "veg" ? "bg-leaf" : "bg-red-600"
                            )}
                            title={dish.type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                          />
                        )}
                        <h3 className="font-bold text-sm text-ink truncate">
                          {dish.name}
                        </h3>
                        {dish.is_popular && (
                          <span className="px-2 py-0.2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-[10px] font-bold flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                            Popular
                          </span>
                        )}
                        {!dish.is_visible && (
                          <span className="px-2 py-0.2 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">
                            Hidden
                          </span>
                        )}
                      </div>

                      {dish.description && (
                        <p className="text-xs text-ink/65 line-clamp-1 mt-0.5">
                          {dish.description}
                        </p>
                      )}
                      <span className="text-[11px] text-accent font-medium mt-0.5 block">
                        {cat?.name || "Category"}
                      </span>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                    {/* Up / Down Reordering */}
                    <div className="flex items-center border border-ink/10 rounded-lg overflow-hidden bg-white">
                      <button
                        type="button"
                        onClick={() => handleMoveDishOrder(dish, "up")}
                        disabled={idx === 0}
                        aria-label="Move dish up"
                        className="p-1.5 text-ink/50 hover:text-ink disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveDishOrder(dish, "down")}
                        disabled={idx === filteredDishes.length - 1}
                        aria-label="Move dish down"
                        className="p-1.5 text-ink/50 hover:text-ink disabled:opacity-30 cursor-pointer border-l border-ink/10"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Quick Popular Toggle */}
                    <button
                      type="button"
                      onClick={() => handleTogglePopular(dish)}
                      className={cn(
                        "p-2 rounded-lg border transition-colors cursor-pointer",
                        dish.is_popular
                          ? "bg-amber-500/20 border-amber-500/40 text-amber-700 hover:bg-amber-500/30"
                          : "bg-white border-ink/10 text-ink/40 hover:text-amber-600 hover:border-amber-400"
                      )}
                      title={dish.is_popular ? "Remove Popular flag" : "Mark as Popular"}
                    >
                      <Star className={cn("w-4 h-4", dish.is_popular && "fill-amber-500 text-amber-500")} />
                    </button>

                    {/* Visibility Toggle */}
                    <button
                      type="button"
                      onClick={() => handleToggleVisibility(dish)}
                      className="p-2 rounded-lg border border-ink/10 bg-white text-ink/50 hover:text-ink transition-colors cursor-pointer"
                      title={dish.is_visible ? "Hide dish from public menu" : "Show dish on public menu"}
                    >
                      {dish.is_visible ? (
                        <Eye className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-red-500" />
                      )}
                    </button>

                    {/* Edit */}
                    <button
                      type="button"
                      onClick={() => openEditDish(dish)}
                      className="p-2 rounded-lg border border-ink/10 bg-white text-ink/60 hover:text-[#7A1F2B] hover:border-[#7A1F2B]/30 transition-colors cursor-pointer"
                      title="Edit dish"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => setDeleteConfirmDishId(dish.id)}
                      className="p-2 rounded-lg border border-ink/10 bg-white text-ink/40 hover:text-red-600 hover:border-red-300 transition-colors cursor-pointer"
                      title="Delete dish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* ADD / EDIT DISH MODAL                                                */}
      {/* ==================================================================== */}
      {isDishModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-paper shadow-2xl border border-ink/10 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-5 border-b border-ink/10 flex items-center justify-between bg-cream">
              <h2 className="font-heading font-bold text-lg text-ink">
                {editingDish ? "Edit Dish" : "Add New Dish"}
              </h2>
              <button
                type="button"
                onClick={() => setIsDishModalOpen(false)}
                className="p-1 rounded-full text-ink/50 hover:text-ink cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveDish} className="p-5 space-y-4 overflow-y-auto">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Dish Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Paneer Tikka Live Skewers"
                  value={dishForm.name}
                  onChange={(e) => setDishForm({ ...dishForm, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-cream/40 border border-ink/20 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Category <span className="text-red-600">*</span>
                </label>
                <select
                  value={dishForm.category_id}
                  onChange={(e) => setDishForm({ ...dishForm, category_id: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-cream/40 border border-ink/20 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Food Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "", label: "Unspecified" },
                    { value: "veg", label: "Vegetarian (Veg)" },
                    { value: "non-veg", label: "Non-Veg" },
                  ].map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setDishForm({ ...dishForm, type: t.value as any })}
                      className={cn(
                        "py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center",
                        dishForm.type === t.value
                          ? "bg-[#7A1F2B] text-white border-[#7A1F2B]"
                          : "bg-white text-ink border-ink/20 hover:bg-cream"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Short description of ingredients or cooking style..."
                  value={dishForm.description}
                  onChange={(e) => setDishForm({ ...dishForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-cream/40 border border-ink/20 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-[#C9A227] resize-none"
                />
              </div>

              {/* Photo Upload with client resize */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Photo (Auto resized to max 1600px WebP)
                </label>
                <div className="flex items-center gap-3">
                  {dishForm.image_url ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden relative border border-ink/20 shrink-0">
                      <Image
                        src={dishForm.image_url}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setDishForm({ ...dishForm, image_url: "" })}
                        className="absolute top-1 right-1 p-0.5 rounded-full bg-black/60 text-white hover:bg-red-600"
                        title="Remove image"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : null}

                  <label className="flex-1 border-2 border-dashed border-ink/20 hover:border-[#C9A227] rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer transition-colors bg-cream/20">
                    <Upload className="w-4 h-4 text-ink/50" />
                    <span className="text-xs font-semibold text-ink/70">
                      {isUploadingPhoto ? "Resizing & uploading..." : "Choose image to upload"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      disabled={isUploadingPhoto}
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Popular Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  id="dish-popular"
                  type="checkbox"
                  checked={dishForm.is_popular}
                  onChange={(e) => setDishForm({ ...dishForm, is_popular: e.target.checked })}
                  className="w-4 h-4 rounded text-[#7A1F2B] focus:ring-[#C9A227] cursor-pointer"
                />
                <label htmlFor="dish-popular" className="text-xs font-semibold text-ink cursor-pointer">
                  Feature as &ldquo;Popular&rdquo; signature dish on homepage
                </label>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsDishModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-ink/20 text-xs font-semibold text-ink hover:bg-cream cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending || isUploadingPhoto}
                  className="px-6 py-2 rounded-full bg-[#7A1F2B] text-white text-xs font-bold hover:bg-[#5C1A1B] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isPending ? "Saving..." : "Save Dish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* DELETE CONFIRMATION MODAL                                            */}
      {/* ==================================================================== */}
      {deleteConfirmDishId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl bg-paper p-6 shadow-2xl border border-ink/10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-ink">
                Confirm Deletion
              </h3>
              <p className="text-xs text-ink/70 mt-1">
                Are you sure you want to permanently delete this dish? This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmDishId(null)}
                className="px-4 py-2 rounded-full border border-ink/20 text-xs font-semibold text-ink hover:bg-cream cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteDish(deleteConfirmDishId)}
                className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold cursor-pointer"
              >
                Delete Dish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CATEGORY MODAL                                                       */}
      {/* ==================================================================== */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl bg-paper shadow-2xl border border-ink/10 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-ink/10 pb-3">
              <h3 className="font-heading font-bold text-base text-ink">
                {editingCategory ? "Rename Category" : "Add Menu Category"}
              </h3>
              <button
                type="button"
                onClick={() => setIsCategoryModalOpen(false)}
                className="p-1 rounded-full text-ink/40 hover:text-ink cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Traditional Farsan"
                  value={categoryNameInput}
                  onChange={(e) => setCategoryNameInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-cream/40 border border-ink/20 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                />
              </div>

              {editingCategory && (
                <div className="pt-2 border-t border-ink/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleToggleCategoryVisibility(editingCategory)}
                    className="text-xs font-semibold text-ink/70 hover:text-ink flex items-center gap-1 cursor-pointer"
                  >
                    {editingCategory.is_visible ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5 text-red-500" />
                        <span>Hide Category</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Show Category</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-ink/20 text-xs font-semibold text-ink hover:bg-cream cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2 rounded-full bg-[#7A1F2B] text-white text-xs font-bold hover:bg-[#5C1A1B] cursor-pointer"
                >
                  {isPending ? "Saving..." : "Save Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

