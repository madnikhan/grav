#!/bin/bash

echo "🚀 Deploying Silbele Cosmetics to Render..."

# Install dependencies
echo "📦 Installing dependencies..."
composer install --no-dev --optimize-autoloader

# Set proper permissions
echo "🔐 Setting permissions..."
chmod -R 755 user/
chmod -R 755 cache/
chmod -R 755 logs/
chmod -R 755 tmp/

# Clear cache
echo "🧹 Clearing cache..."
php bin/grav clear-cache

# Create backup directory
echo "💾 Creating backup directory..."
mkdir -p backup/deploy

# Set production environment
echo "🏭 Setting production environment..."
export GRAV_ENVIRONMENT=production

echo "✅ Deployment script ready!"
echo "🌐 Your site will be available at: https://silbele-cosmetics.onrender.com" 