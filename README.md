# Silbele Cosmetics Website

A modern, beautiful website for Silbele Cosmetics built with Grav CMS. This website showcases premium cosmetics and skincare products with an elegant, user-friendly design.

## 🌟 Features

- **Modern Design**: Beautiful, responsive design optimized for beauty brands
- **CMS Admin Panel**: Easy content management through Grav's admin interface
- **Live Chat**: Tawk.to integration for customer support
- **Mobile Optimized**: Perfect experience on all devices
- **SEO Ready**: Optimized for search engines
- **Fast Loading**: Optimized performance for better user experience

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url> silbele
   cd silbele
   ```

2. **Install dependencies**
   ```bash
   bin/grav install
   ```

3. **Install admin panel**
   ```bash
   bin/gpm install admin
   ```

4. **Start local server**
   ```bash
   php -S localhost:8000
   ```

5. **Access your site**
   - Website: http://localhost:8000
   - Admin Panel: http://localhost:8000/admin

## 📁 Project Structure

```
silbele/
├── user/
│   ├── pages/           # Website content (markdown files)
│   │   ├── 01.home/     # Homepage
│   │   ├── 02.about/    # About page
│   │   ├── 03.products/ # Products page
│   │   └── 04.contact/  # Contact page
│   ├── themes/quark/    # Customized Quark theme
│   │   ├── css/custom.css # Silbele-specific styles
│   │   └── templates/   # Theme templates
│   └── config/          # Site configuration
├── system/              # Grav core files
└── render.yaml          # Render.com deployment config
```

## 🎨 Customization

### Adding New Pages

1. Create a new folder in `user/pages/` (e.g., `05.blog/`)
2. Add a `default.md` file with your content
3. Use YAML front matter for page configuration:

```markdown
---
title: My New Page
menu: My Page
---

# Page Content Here
```

### Modifying Styles

Edit `user/themes/quark/css/custom.css` to customize:
- Colors and branding
- Typography
- Layout and spacing
- Animations and effects

### Tawk.to Chat Setup

1. Sign up at [Tawk.to](https://www.tawk.to)
2. Get your widget code
3. Replace `YOUR_TAWK_TO_WIDGET_CODE` in `user/themes/quark/templates/partials/base.html.twig`

## 🌐 Deployment

### Render.com (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Silbele website"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [Render.com](https://render.com)
   - Create new Web Service
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` configuration

3. **Custom Domain**
   - Add your domain in Render dashboard
   - Update DNS records to point to Render

### Alternative Hosting

For other hosting providers (InfinityFree, 000WebHost, etc.):

1. **Build for production**
   ```bash
   bin/grav clear-cache
   ```

2. **Upload files** via FTP or file manager
3. **Set permissions** (755 for folders, 644 for files)
4. **Configure domain** in hosting panel

## 🔧 Configuration

### Site Settings

Edit `user/config/site.yaml`:
```yaml
title: Silbele Cosmetics
author:
  name: Silbele Team
  email: hello@silbele.com
metadata:
  description: Premium cosmetics and skincare products
```

### Theme Settings

Edit `user/themes/quark/quark.yaml`:
```yaml
enabled: true
production-mode: false  # Set to true for production
header-transparent: true
```

## 📱 Admin Panel

Access the admin panel at `/admin` to:
- Edit page content
- Manage media files
- Configure site settings
- Install plugins and themes
- Monitor site performance

## 🛠️ Development

### Adding Plugins

```bash
bin/gpm install <plugin-name>
```

### Updating Grav

```bash
bin/gpm selfupgrade
bin/gpm update
```

### Clearing Cache

```bash
bin/grav clear-cache
```

## 🎯 SEO Optimization

The site includes:
- Meta descriptions and titles
- Structured data markup
- Optimized images and content
- Mobile-friendly design
- Fast loading times

## 📞 Support

For technical support or customization requests:
- Email: hello@silbele.com
- Documentation: [Grav Documentation](https://learn.getgrav.org)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Silbele Cosmetics** - Your beauty, redefined with premium cosmetics and skincare products.
