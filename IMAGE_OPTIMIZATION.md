# Image Optimization Guide

## Current Issue
Your event images are currently **936KB to 2.6MB** each, which is causing significant performance issues. These should be optimized to under 200KB each for web use.

## Recommended Actions

### 1. Compress Images
Use one of these tools to compress your images:

**Online Tools:**
- [Squoosh](https://squoosh.app/) - Google's image compression tool
- [TinyPNG](https://tinypng.com/) - Compresses JPG and PNG
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization

**Command Line (if you have ImageMagick):**
```bash
cd webapp/public/dsc-post
for img in *.jpg *.jpeg; do
  convert "$img" -quality 85 -resize 1920x1920\> "optimized_$img"
done
```

### 2. Create Responsive Image Sizes
For better performance, create multiple sizes:
- Thumbnail: 400x400px (for grid view)
- Medium: 800x800px (for lightbox on mobile)
- Large: 1920x1920px (for lightbox on desktop)

### 3. Use WebP Format (Optional but Recommended)
WebP provides 25-35% better compression than JPEG:
```bash
# Using cwebp (install via: brew install webp)
for img in *.jpg; do
  cwebp -q 85 "$img" -o "${img%.jpg}.webp"
done
```

### 4. Update Image Paths
After optimization, update the paths in `src/pages/Events.jsx` if you use WebP or different filenames.

## Target Sizes
- **Thumbnail images**: 50-100KB
- **Full-size images**: 150-300KB
- **Total page load**: Under 2MB for all images

## Current vs Target
- Current total: ~11MB (all images)
- Target total: ~1.5MB (optimized)
- **Improvement: ~85% reduction in image size**

