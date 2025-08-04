#!/bin/bash

echo "🎛️ Setting up Silbele Cosmetics CMS..."

# Clear cache
echo "🧹 Clearing cache..."
php bin/grav clear-cache

# Install dependencies
echo "📦 Installing dependencies..."
composer install --no-dev --optimize-autoloader

# Set proper permissions
echo "🔐 Setting permissions..."
chmod -R 755 user/
chmod -R 755 cache/
chmod -R 755 logs/
chmod -R 755 tmp/

# Create backup directory
echo "💾 Creating backup directory..."
mkdir -p backup/cms

# Enable admin plugin if not already enabled
echo "✅ Admin plugin is already enabled"

# Clear any existing cache
echo "🧹 Clearing any existing cache..."
rm -rf cache/*
rm -rf tmp/*

echo "✅ CMS setup complete!"
echo ""
echo "🎛️ Your CMS is ready!"
echo "📱 Admin Panel: http://localhost:8000/admin"
echo "🌐 Website: http://localhost:8000"
echo ""
echo "🔐 Login with: matiurrehman@gmail.com"
echo ""
echo "📚 See CMS_SETUP_GUIDE.md for detailed instructions" 