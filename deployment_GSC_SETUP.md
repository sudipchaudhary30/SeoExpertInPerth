# Google Search Console Setup Guide

## Step 1: Create Google Account

If you don't have one already, create a free Google account at https://accounts.google.com

## Step 2: Access Google Search Console

1. Go to https://search.google.com/search-console
2. Click "Start now"
3. Sign in with your Google account

## Step 3: Add Property

### Option A: URL Prefix (Easier)

1. Select "URL prefix"
2. Enter: `https://sudipchaudhary101.com.np`
3. Click Continue

### Option B: Domain (Better for subdomains)

1. Select "Domain"
2. Enter: `sudipchaudhary101.com.np`
3. Google gives you DNS verification steps
4. Go to Cloudflare → DNS Records → Add TXT record
5. Follow Google's instructions
6. Wait for verification (can take 24+ hours)

## Step 4: Verify Ownership

### For Domain Option:

1. In Google Search Console, copy the TXT record
2. Go to Cloudflare Dashboard
3. Navigate to DNS Records
4. Click "Add record"
5. Type: TXT
6. Name: (copy from Google)
7. Content: (copy from Google)
8. TTL: Auto
9. Click Save
10. Return to Google Search Console
11. Click "Verify"

### For URL Prefix:

Can verify multiple ways:
- HTML file upload
- HTML tag
- DNS record (recommended)
- Google Analytics
- Google Tag Manager

## Step 5: Submit Sitemap

1. In Search Console, go to "Sitemaps"
2. Enter: `https://sudipchaudhary101.com.np/sitemap.xml`
3. Click "Submit"

Google will crawl your sitemap and index all pages.

## Step 6: Monitor Performance

### Check Indexed Pages

1. Go to "Pages"
2. Should show all your pages being indexed
3. Wait 24-48 hours for initial crawl

### Track Rankings

1. Go to "Performance"
2. See which keywords you're ranking for
3. Track click-through rates (CTR)
4. Monitor impressions and positions

### Fix Issues

1. Go to "Coverage"
2. Check for crawl errors
3. Fix any "Excluded" pages
4. Monitor mobile usability

## Step 7: Set Crawl Rate (Optional)

1. Go to Settings
2. Crawl stats: Shows how many pages Google crawls daily
3. You can suggest slower crawl if crawling too much

## Step 8: Configure URL Parameters (Optional)

If your site has URL parameters (?id=123, etc):

1. Go to Settings
2. URL Parameters
3. Tell Google which parameters to ignore

## Step 9: Set Preferred Domain

1. Go to Settings
2. Preferred domain: Choose www or non-www version
3. Google will treat as same domain

## Step 10: Link External Resources

1. Google Analytics (optional, for deeper insights)
2. Google Tag Manager (optional, for event tracking)
3. Bing Webmaster Tools (optional, for Bing rankings)

## Step 11: Request Indexing

To speed up indexing of new pages:

1. Click "Inspect URL"
2. Paste your page URL
3. Click "Request indexing"
4. Google will crawl within hours

## Understanding Search Console Data

### Impressions
- How many times your site appeared in search results
- Goal: Increase impressions over time

### Clicks
- How many people clicked your result
- Goal: Increase clicks

### CTR (Click-Through Rate)
- Percentage of impressions that become clicks
- Target: 3-5% for most industries
- Improve by: Better title tags, meta descriptions

### Average Position
- Your average ranking position
- Position 1-3 = Great
- Position 4-10 = Good
- Position 11+ = Work on optimization

## SEO Actions to Take

Based on Search Console data:

1. **Low CTR** → Improve meta descriptions and titles
2. **High Impressions, Low Clicks** → Optimize content for intent
3. **Not Indexed** → Check for robots.txt blocks, noindex tags
4. **Crawl Errors** → Fix broken links, check site structure
5. **Mobile Issues** → Test on mobile, fix viewport settings

## Keywords to Target

Monitor these keyword categories:

1. **Branded**: Your name, domain (you'll rank #1)
2. **SEO**: "SEO specialist Nepal", "SEO consultant"
3. **Flutter**: "Flutter developer", "Flutter apps"
4. **Services**: "SEO services", "web development"
5. **Location**: "Digital marketing Nepal"

## Bonus: Set up Google Analytics

For deeper insights:

1. Go to https://analytics.google.com
2. Create account
3. Add property: `https://sudipchaudhary101.com.np`
4. Follow setup steps
5. Add tracking code to your site (done if using Next.js integration)

In Analytics, you can track:
- User behavior
- Conversion goals
- Traffic sources
- Device types
- Geographic data

## Timeline Expectations

- **Day 1**: Submit sitemap, verify ownership
- **Week 1**: Google crawls and indexes most pages
- **Week 2-4**: First keywords start appearing in search
- **Month 2-3**: Build ranking authority
- **Month 3-6**: Noticeable traffic increase
- **Month 6+**: Compound results from content

## Ranking Factors to Focus On

1. **Page Speed** (Core Web Vitals)
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

2. **Mobile Friendly**
   - Responsive design
   - Touch-friendly buttons
   - Readable text

3. **Quality Content**
   - Original articles
   - Keyword optimized
   - Comprehensive

4. **Backlinks**
   - Other sites linking to you
   - Improves authority
   - Build with guest posts

5. **Technical SEO**
   - Fast site speed
   - Clean URLs
   - Proper meta tags
   - Structured data

## Monthly Checklist

- [ ] Check Search Console performance
- [ ] Review new keywords
- [ ] Fix crawl errors
- [ ] Submit new content
- [ ] Monitor Core Web Vitals
- [ ] Check mobile usability
- [ ] Update old content
- [ ] Build backlinks

## Resources

- Google Search Central: https://developers.google.com/search
- Search Console Help: https://support.google.com/webmasters
- Core Web Vitals Guide: https://web.dev/vitals/
- SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide

## Need Help?

Contact: chsudip28@gmail.com
Twitter: @sudipchaudhary

---

**You're now tracking your SEO performance! Monitor and optimize regularly for best results.** 🚀
