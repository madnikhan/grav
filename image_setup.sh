#!/bin/bash

echo "🖼️ Silbele Cosmetics - Image Setup Helper"
echo "=========================================="

# Check current image status
echo ""
echo "📊 Current Image Status:"
echo "========================"

cd user/themes/quark/images/

# Check product images
echo ""
echo "📦 Product Images:"
for i in {1..12}; do
    if [ -f "product-$i.jpg" ]; then
        size=$(stat -f%z "product-$i.jpg" 2>/dev/null || stat -c%s "product-$i.jpg" 2>/dev/null || echo "0")
        if [ "$size" -eq 0 ]; then
            echo "❌ product-$i.jpg - EMPTY (0 bytes)"
        else
            echo "✅ product-$i.jpg - $size bytes"
        fi
    else
        echo "❌ product-$i.jpg - MISSING"
    fi
done

# Check other important images
echo ""
echo "🎨 Other Important Images:"
important_images=("logo.jpg" "hero-model.jpg" "testimonial-1.jpg" "testimonial-2.jpg" "testimonial-3.jpg" "testimonial-4.jpg")

for img in "${important_images[@]}"; do
    if [ -f "$img" ]; then
        size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null || echo "0")
        if [ "$size" -eq 0 ]; then
            echo "❌ $img - EMPTY (0 bytes)"
        else
            echo "✅ $img - $size bytes"
        fi
    else
        echo "❌ $img - MISSING"
    fi
done

echo ""
echo "📋 Image Upload Options:"
echo "========================"
echo "1. 🎛️ Admin Panel Upload:"
echo "   - Go to: http://localhost:8000/admin"
echo "   - Click 'Media' in sidebar"
echo "   - Click 'Upload' button"
echo "   - Select your product images"
echo ""
echo "2. 📁 Direct File Upload:"
echo "   - Copy images to: user/themes/quark/images/"
echo "   - Replace empty files with your actual images"
echo "   - Ensure proper file permissions"
echo ""
echo "3. 🖼️ File Manager:"
echo "   - Admin Panel → Tools → File Manager"
echo "   - Navigate to images directory"
echo "   - Upload images directly"
echo ""
echo "📏 Image Requirements:"
echo "====================="
echo "• Product Images: 400x400px or 500x500px (square)"
echo "• Format: JPG, PNG, or WebP"
echo "• Background: Clean, professional"
echo "• Quality: High resolution, optimized for web"
echo ""
echo "✅ After uploading images:"
echo "1. Check file sizes (should not be 0 bytes)"
echo "2. Test website: http://localhost:8000/products"
echo "3. Clear browser cache if needed"
echo ""
echo "🎯 Ready to upload your product images!" 