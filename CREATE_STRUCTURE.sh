#!/bin/bash
# Complete Portfolio Setup Script
# Run this to create all directories

echo "Creating complete portfolio structure..."

# Root config files
mkdir -p src
mkdir -p src/app
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/styles
mkdir -p content
mkdir -p content/blog
mkdir -p public
mkdir -p public/images
mkdir -p deployment
mkdir -p deployment/cloudflare
mkdir -p deployment/database

echo "✅ Directory structure created!"
echo ""
echo "📁 Project Structure:"
echo "sudip-portfolio/"
echo "├── src/"
echo "│   ├── app/              # Next.js pages & API routes"
echo "│   ├── components/       # React components"
echo "│   ├── lib/             # Utilities & helpers"
echo "│   └── styles/          # Global CSS"
echo "├── content/"
echo "│   └── blog/            # Blog posts (MDX)"
echo "├── public/              # Static assets"
echo "│   └── images/          # Image assets"
echo "├── deployment/          # Deployment guides"
echo "│   ├── cloudflare/      # Cloudflare setup"
echo "│   └── database/        # Database setup"
echo "├── package.json"
echo "├── tsconfig.json"
echo "├── next.config.ts"
echo "├── tailwind.config.ts"
echo "├── postcss.config.js"
echo "└── README.md"
echo ""
echo "📚 Installation guide: See INSTALLATION.md"
