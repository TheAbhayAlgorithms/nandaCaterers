-- Migration: 20261028000000_init_admin_schema.sql
-- Description: Creates schema for menu categories, menu items, gallery images, RLS policies, and storage buckets.

-- 1. Create menu_categories table
CREATE TABLE IF NOT EXISTS public.menu_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_visible BOOLEAN NOT NULL DEFAULT true
);

-- 2. Create menu_items table
CREATE TABLE IF NOT EXISTS public.menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES public.menu_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('veg', 'non-veg')),
  image_url TEXT,
  is_popular BOOLEAN NOT NULL DEFAULT false,
  is_visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Create gallery_images table
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL DEFAULT '',
  caption TEXT NOT NULL DEFAULT '',
  category TEXT,
  is_visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_menu_categories_slug ON public.menu_categories(slug);
CREATE INDEX IF NOT EXISTS idx_menu_items_category_id ON public.menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_popular ON public.menu_items(is_popular) WHERE is_popular = true;
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON public.gallery_images(category);

-- Trigger for updated_at on menu_items
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_menu_items_updated_at ON public.menu_items;
CREATE TRIGGER trigger_menu_items_updated_at
  BEFORE UPDATE ON public.menu_items
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- 4.1 RLS Policies for menu_categories
-- Public can read visible categories; authenticated admin can read all
DROP POLICY IF EXISTS "Public can read visible menu categories" ON public.menu_categories;
CREATE POLICY "Public can read visible menu categories"
  ON public.menu_categories
  FOR SELECT
  USING (is_visible = true OR auth.role() = 'authenticated');

-- Authenticated admins have full write access
DROP POLICY IF EXISTS "Admins can insert menu categories" ON public.menu_categories;
CREATE POLICY "Admins can insert menu categories"
  ON public.menu_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can update menu categories" ON public.menu_categories;
CREATE POLICY "Admins can update menu categories"
  ON public.menu_categories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can delete menu categories" ON public.menu_categories;
CREATE POLICY "Admins can delete menu categories"
  ON public.menu_categories
  FOR DELETE
  TO authenticated
  USING (true);

-- 4.2 RLS Policies for menu_items
-- Public can read visible dishes; authenticated admin can read all
DROP POLICY IF EXISTS "Public can read visible menu items" ON public.menu_items;
CREATE POLICY "Public can read visible menu items"
  ON public.menu_items
  FOR SELECT
  USING (is_visible = true OR auth.role() = 'authenticated');

-- Authenticated admins have full write access
DROP POLICY IF EXISTS "Admins can insert menu items" ON public.menu_items;
CREATE POLICY "Admins can insert menu items"
  ON public.menu_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can update menu items" ON public.menu_items;
CREATE POLICY "Admins can update menu items"
  ON public.menu_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can delete menu items" ON public.menu_items;
CREATE POLICY "Admins can delete menu items"
  ON public.menu_items
  FOR DELETE
  TO authenticated
  USING (true);

-- 4.3 RLS Policies for gallery_images
-- Public can read visible photos; authenticated admin can read all
DROP POLICY IF EXISTS "Public can read visible gallery images" ON public.gallery_images;
CREATE POLICY "Public can read visible gallery images"
  ON public.gallery_images
  FOR SELECT
  USING (is_visible = true OR auth.role() = 'authenticated');

-- Authenticated admins have full write access
DROP POLICY IF EXISTS "Admins can insert gallery images" ON public.gallery_images;
CREATE POLICY "Admins can insert gallery images"
  ON public.gallery_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can update gallery images" ON public.gallery_images;
CREATE POLICY "Admins can update gallery images"
  ON public.gallery_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can delete gallery images" ON public.gallery_images;
CREATE POLICY "Admins can delete gallery images"
  ON public.gallery_images
  FOR DELETE
  TO authenticated
  USING (true);

-- 5. Storage Buckets: menu-images & gallery (5MB limit, image types only)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('menu-images', 'menu-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']),
  ('gallery', 'gallery', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Storage RLS: Public read
DROP POLICY IF EXISTS "Public read storage menu-images and gallery" ON storage.objects;
CREATE POLICY "Public read storage menu-images and gallery"
  ON storage.objects
  FOR SELECT
  USING (bucket_id IN ('menu-images', 'gallery'));

-- Storage RLS: Authenticated write
DROP POLICY IF EXISTS "Admin upload storage menu-images and gallery" ON storage.objects;
CREATE POLICY "Admin upload storage menu-images and gallery"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id IN ('menu-images', 'gallery'));

DROP POLICY IF EXISTS "Admin update storage menu-images and gallery" ON storage.objects;
CREATE POLICY "Admin update storage menu-images and gallery"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id IN ('menu-images', 'gallery'))
  WITH CHECK (bucket_id IN ('menu-images', 'gallery'));

DROP POLICY IF EXISTS "Admin delete storage menu-images and gallery" ON storage.objects;
CREATE POLICY "Admin delete storage menu-images and gallery"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id IN ('menu-images', 'gallery'));

