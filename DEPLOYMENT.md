# Deploying Andrea's Pizza to Vercel

## Prerequisites
- GitHub account
- Vercel account (free tier works perfectly)

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

### 3. Custom Domain (Optional)
- After deployment, you can add a custom domain like `andreaspizza.com`
- Go to your project settings in Vercel → Domains

## Build Configuration
- **Build Command**: `vite build` (automatically detected)
- **Output Directory**: `dist/public`
- **Framework**: Static Site (React SPA)

## What Gets Deployed
- ✅ Responsive website with all pages (Home, Menu, About, Contact, Pizza Wheel)
- ✅ Local SEO optimization and schema markup
- ✅ Google Maps integration
- ✅ Pizza Mood Wheel with social sharing
- ✅ Clover online ordering integration
- ✅ Mobile-optimized design

## Performance Features
- Lightning-fast loading with Vercel's global CDN
- Automatic image optimization
- Perfect for restaurant website SEO
- Mobile-first responsive design

## Post-Deployment
Your site will be available at: `https://your-project-name.vercel.app`

You can then:
1. Test all pages and functionality
2. Add a custom domain
3. Monitor performance with Vercel Analytics