/**
 * Client-side image resizer.
 * Resizes images to max 1600px width/height and converts to WebP/JPEG before upload.
 */
export async function resizeImage(file: File, maxDimension = 1600, quality = 0.85): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target?.result) {
        reject(new Error("Failed to read image file"));
        return;
      }
      img.src = e.target.result as string;
    };

    reader.onerror = () => reject(new Error("File reading error"));

    img.onload = () => {
      let { width, height } = img;

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get 2d context for image resize"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Prefer WebP with fallback to JPEG
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            // Fallback to jpeg if webp unsupported
            canvas.toBlob(
              (jpegBlob) => {
                if (jpegBlob) resolve(jpegBlob);
                else reject(new Error("Failed to convert image to blob"));
              },
              "image/jpeg",
              quality
            );
          }
        },
        "image/webp",
        quality
      );
    };

    img.onerror = () => reject(new Error("Invalid image format"));
    reader.readAsDataURL(file);
  });
}

