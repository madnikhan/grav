# Silbele Logo Setup Instructions

## 🖼️ **Adding Your Custom Logo**

### **Step 1: Add Your Logo File**

Copy your `logo.jpg` file to one of these locations:

**Option A: Theme Images Folder (Recommended)**
```bash
cp images/logo.jpg user/themes/quark/images/logo.jpg
```

**Option B: Main Images Folder**
```bash
cp images/logo.jpg images/logo.jpg
```

### **Step 2: Logo Specifications**

For best results, your logo should be:
- **Format**: JPG, PNG, or SVG
- **Size**: 200px width × 40px height (or similar ratio)
- **Background**: Transparent or white background
- **Quality**: High resolution (300 DPI recommended)

### **Step 3: Test Your Logo**

1. Refresh your browser at http://localhost:8000
2. The logo should appear in the top-left corner of the header
3. It will automatically resize to fit the header height

### **Step 4: Customize Logo Size (Optional)**

If you need to adjust the logo size, edit `user/themes/quark/css/custom.css`:

```css
.navbar .logo a img {
    height: 40px;        /* Adjust height */
    width: auto;
    max-width: 200px;    /* Adjust max width */
    object-fit: contain;
}
```

### **Step 5: Mobile Logo (Optional)**

For a different logo on mobile devices, add:
```bash
cp images/logo-mobile.jpg user/themes/quark/images/logo-mobile.jpg
```

## 🎨 **Logo Design Tips**

- **Keep it simple** - Clean, readable design
- **Use high contrast** - Should be visible on white background
- **Consider the space** - Header height is 80px
- **Test responsiveness** - Should look good on all devices

## ✅ **Current Status**

Your Silbele website is ready to display your custom logo! Just add the logo file and it will automatically appear in the header.

---

*Your logo will replace the text "Silbele Cosmetics" in the header* 