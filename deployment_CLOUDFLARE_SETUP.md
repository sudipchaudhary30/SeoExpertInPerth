# Cloudflare Pages Deployment Guide

## Step 1: Prepare Your Repository

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial portfolio commit

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

# Create GitHub repo and push
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sudip-portfolio.git
git push -u origin main
```

## Step 2: Create Cloudflare Account

1. Go to https://pages.cloudflare.com
2. Sign up with your email
3. Verify email

## Step 3: Connect GitHub Repository

1. Click "Create a project"
2. Select "Connect to Git"
3. Authorize GitHub
4. Select your `sudip-portfolio` repository

## Step 4: Configure Build Settings

When Cloudflare asks for build settings:

- **Project name**: `sudip-portfolio`
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Environment variables**:
  ```
  NEXT_PUBLIC_SITE_URL=https://sudipchaudhary101.com.np
  NEXT_PUBLIC_ENVIRONMENT=production
  ```

Click **Save and Deploy**

## Step 5: Point Your Domain

### Option A: Use Cloudflare's Nameservers (Recommended)

1. Go to your domain registrar (where you bought sudipchaudhary101.com.np)
2. Find DNS/Nameserver settings
3. Change nameservers to:
   - `kay.ns.cloudflare.com`
   - `nina.ns.cloudflare.com`
4. Wait 24-48 hours for propagation

### Option B: Add CNAME Record

If you want to keep your current registrar:

1. In Cloudflare Pages, find your deployment
2. Go to "Custom domains"
3. Add `sudipchaudhary101.com.np`
4. In your registrar DNS, add CNAME:
   - Name: `www`
   - Value: `sudip-portfolio.pages.dev`

## Step 6: Add Domain in Cloudflare

1. Go to Cloudflare Dashboard
2. Click "Add site"
3. Enter `sudipchaudhary101.com.np`
4. Choose Free plan
5. Update nameservers (see Step 5)

## Step 7: SSL/HTTPS (Automatic)

Cloudflare automatically provides FREE SSL certificate. Your site is secure! ✅

## Step 8: Enable Edge Caching

In Cloudflare Dashboard:

1. Go to your domain
2. Caching → Page Rules
3. Click "Create Page Rule"
4. URL: `sudipchaudhary101.com.np/*`
5. Settings:
   - Cache Level: `Cache Everything`
   - Browser Cache TTL: `1 month`

## Step 9: Set up Redirects (Optional)

In `public/_redirects` file:

```
# Redirect www to non-www
https://www.sudipchaudhary101.com.np/* https://sudipchaudhary101.com.np/:splat 301

# Redirect old blog posts (if migrating)
/old-post/* /blog/:splat 301
```

## Step 10: Verify Deployment

1. Visit https://sudipchaudhary101.com.np
2. Check that it loads correctly
3. Test mobile responsiveness
4. Check HTTPS (lock icon)

## Troubleshooting

### "Domain not found"
- Wait 24-48 hours for DNS propagation
- Check nameservers are correct
- Run `nslookup sudipchaudhary101.com.np`

### "Build fails"
- Check build logs in Cloudflare Pages
- Make sure `npm run build` works locally
- Verify `next.config.ts` is correct

### "Slow loading"
- Enable caching (see Step 8)
- Check Lighthouse score
- Optimize images

## Environment Variables in Cloudflare

For production features like SendGrid:

1. Go to your Cloudflare Pages project
2. Settings → Environment Variables
3. Add for Production:
   - `SENDGRID_API_KEY`: your_key
   - `SENDGRID_FROM_EMAIL`: noreply@sudipchaudhary101.com.np
   - `CLOUDFLARE_D1_DATABASE_ID`: your_db_id

## Next Steps

1. ✅ Domain pointing to Cloudflare
2. ✅ Site deployed and cached
3. → Next: Set up Google Search Console (see GSC_SETUP.md)
4. → Then: Add SendGrid for contact form emails

## Performance Stats

After setup, you should see:

- ✅ Page loads in <1 second (global)
- ✅ Lighthouse score: 95+
- ✅ Free SSL certificate
- ✅ Automatic backups
- ✅ CDN for images and assets
- ✅ DDoS protection

## Support

- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Email: chsudip28@gmail.com
- Twitter: @sudipchaudhary
