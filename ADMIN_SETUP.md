# Admin Panel Setup Guide

## 🎯 Quick Start

### Access Admin Panel
1. **Start your dev server**: `npm run dev`
2. **Go to**: `http://localhost:3000/admin`
3. **Default password**: `admin123`
   - **Change it in `.env.local`** under `NEXT_PUBLIC_ADMIN_PASSWORD`

---

## 📝 Managing Blog Posts

### Create a Blog Post
1. Click **📝 Blog Posts** tab
2. Click **+ Create New Post**
3. Fill in:
   - **Post Title**: Your blog post title
   - **Description**: Short summary (shown in previews)
   - **Image URL**: Link to a blog post image (or upload using the image upload API)
   - **Content**: The full blog post content
4. Click **Save**

**Posts stored in**: `src/data/blog.json`
**Display location**: `/blog` page

---

## 💼 Managing Portfolio / Work

### Add Your Work
1. Click **💼 Portfolio** tab
2. Click **+ Add Project**
3. Fill in:
   - **Project Title**: Name of your project/work
   - **Description**: What you did and the outcome
   - **Technologies**: Comma-separated list (e.g., `SEO, Schema Markup, Analytics`)
   - **Metrics**: Optional results (e.g., `+320% organic traffic`)
   - **Project Image URL**: Link to project image
   - **Project Link**: Live project link (optional)
4. Click **Save**

**Projects stored in**: `src/data/portfolio.json`
**Display location**: `/portfolio` page (and homepage)

---

## 🖼️ Image Upload

### Upload Images
You can use external image services like:
- **Imgur**: https://imgur.com (free, simple)
- **ImgBB**: https://imgbb.com (free)
- **Cloudinary**: https://cloudinary.com (free tier available)
- **AWS S3**: For production

For now, just upload your image to one of these services and paste the image URL in the forms.

**Local uploads saved to**: `public/uploads/` (images persist with your site)

---

## 🔐 Security

### Change Admin Password
Edit `.env.local`:
```
NEXT_PUBLIC_ADMIN_PASSWORD=your_new_password_here
```

Then restart your dev server.

### For Production
1. **Change the default password** before deploying
2. **Use environment variables** instead of hardcoding
3. Consider adding:
   - Admin authentication with database
   - Edit/Update functionality
   - Role-based access control

---

## 📊 Data Storage

### Blog Posts (`src/data/blog.json`)
```json
[
  {
    "id": "uuid-here",
    "title": "Post Title",
    "description": "Short summary",
    "content": "Full content",
    "image": "https://image-url.com",
    "date": "2024-04-27",
    "createdAt": "2024-04-27T10:30:00.000Z"
  }
]
```

### Portfolio Items (`src/data/portfolio.json`)
```json
[
  {
    "id": "uuid-here",
    "title": "Project Title",
    "description": "What you did",
    "technologies": ["Tech1", "Tech2"],
    "metrics": "+300% growth",
    "image": "https://image-url.com",
    "link": "https://project-link.com",
    "createdAt": "2024-04-27T10:30:00.000Z"
  }
]
```

---

## 🚀 Deploy Your Site

### With Blog & Portfolio Data
Your blog posts and portfolio items are stored in JSON files in the `src/data/` folder.
- **On Vercel/Netlify**: These files are included automatically during deployment
- **On custom servers**: Make sure `src/data/` is included in your deployment

### Limitations with Serverless (Vercel/Netlify)
- The admin panel works during development
- On serverless platforms, data doesn't persist between deployments
- **Solution**: Use a database like:
  - MongoDB
  - Firebase
  - PostgreSQL
  - Supabase

---

## ✨ Next Steps

### Recommended Improvements
1. Add **edit** functionality for posts and projects
2. Connect to a **database** for production
3. Add **image upload** directly in the admin panel
4. Implement **proper authentication** (OAuth, JWT)
5. Add **rich text editor** for blog content (e.g., React Quill)
6. Set up **automatic backups**

---

## 🆘 Troubleshooting

### Password not working?
- Check `.env.local` for correct password
- Restart dev server after changing password
- Clear browser localStorage and try again

### Blog posts not showing?
- Check if data is saved in `src/data/blog.json`
- Refresh the `/blog` page
- Check browser console for errors

### Admin panel won't load?
- Make sure you ran `npm install` to install dependencies
- Restart dev server: `npm run dev`
- Check if `http://localhost:3000/admin` is the correct URL

---

## 📞 Support

Need help? Check your blog and portfolio pages:
- Blog: `http://localhost:3000/blog`
- Portfolio: `http://localhost:3000/portfolio` (also on homepage)
- Admin: `http://localhost:3000/admin`

Your data is safe in the `src/data/` folder - back it up if needed!
