# Firebase CMS Setup Guide

## 🚀 Quick Start

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a new project"**
3. Name it (e.g., "sudip-portfolio")
4. Disable Google Analytics (optional)
5. Click **"Create project"** and wait

### Step 2: Add Web App
1. Once project loads, click **⚙️ Settings** (gear icon) in top left
2. Go to **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click **"Add app"** → **"Web"** → **"</>"**
5. Give it a name (e.g., "Portfolio Website")
6. Click **"Register app"**

### Step 3: Copy Firebase Config
1. On the registration page, you'll see config like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDx...",
  authDomain: "sudip-portfolio.firebaseapp.com",
  projectId: "sudip-portfolio",
  storageBucket: "sudip-portfolio.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234..."
};
```

2. Copy each value into `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDx...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=sudip-portfolio.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=sudip-portfolio
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sudip-portfolio.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcd1234...
```

### Step 4: Enable Firestore Database
1. In Firebase Console, click **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Select **"Start in production mode"**
4. Choose region closest to you (e.g., `us-central1`)
5. Click **"Enable"**

### Step 5: Set Firestore Rules (Security)
1. Click **"Rules"** tab in Firestore
2. Replace with:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated admin can write/delete
    match /blog/{document=**} {
      allow read: if true;
      allow write, delete: if request.auth != null;
    }
    match /portfolio/{document=**} {
      allow read: if true;
      allow write, delete: if request.auth != null;
    }
  }
}
```
3. Click **"Publish"**

### Step 6: Configure NextAuth Secret
1. Generate secret in terminal:
```bash
openssl rand -base64 32
# Output: abc123xyz...
```
2. Add to `.env.local`:
```
NEXTAUTH_SECRET=abc123xyz...
```

### Step 7: Set Admin Password
1. Update `.env.local`:
```
ADMIN_PASSWORD=your-secure-password-here
```
2. Keep this password safe! (min 8 characters recommended)

### Step 8: Test Setup
1. Start dev server:
```bash
npm run dev
```
2. Visit: `http://localhost:3000/admin/login`
3. Login with your `ADMIN_PASSWORD`
4. Try creating a blog post or portfolio item

## 📊 Firebase Free Tier Limits

| Feature | Daily Limit | Monthly Storage |
|---------|------------|-----------------|
| Firestore Reads | 50,000 | - |
| Firestore Writes | 20,000 | - |
| Firestore Deletes | 20,000 | - |
| Storage | - | 5 GB |
| Data Transfer | - | 1 GB/month |

**✅ Sufficient for:** Personal portfolio, small blogs, testing

**❌ May need upgrade at:** 100+ daily visitors, large media uploads

## 🔐 Admin Route Protection

The `/admin` route is protected by NextAuth middleware:
- All admin requests require valid session
- Invalid credentials redirect to `/admin/login`
- Firestore rules prevent unauthorized database writes

## 📁 Database Structure

### Blog Collection (`/blog`)
```
{
  id: "auto-generated",
  title: "Post Title",
  description: "Short desc",
  content: "Full content (markdown)",
  image: "https://...",
  author: "Admin",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Portfolio Collection (`/portfolio`)
```
{
  id: "auto-generated",
  title: "Project Name",
  description: "Project description",
  technologies: ["React", "Next.js"],
  metrics: "Results achieved",
  image: "https://...",
  link: "https://...",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 🛠 API Endpoints

### Blog Endpoints
- `GET /api/admin/blog` - Get all posts (public)
- `POST /api/admin/blog` - Create post (requires auth)
- `PUT /api/admin/blog/[id]` - Update post (requires auth)
- `DELETE /api/admin/blog/[id]` - Delete post (requires auth)

### Portfolio Endpoints
- `GET /api/admin/portfolio` - Get all items (public)
- `POST /api/admin/portfolio` - Create item (requires auth)
- `PUT /api/admin/portfolio/[id]` - Update item (requires auth)
- `DELETE /api/admin/portfolio/[id]` - Delete item (requires auth)

## 🐛 Troubleshooting

### "Firebase config not found"
- Check `.env.local` has all `NEXT_PUBLIC_FIREBASE_*` vars
- Restart dev server after updating `.env.local`

### "Permission denied" on write
- Verify Firestore rules are set correctly
- Check admin is logged in (session exists)

### "NextAuth not configured"
- Ensure `NEXTAUTH_SECRET` is set in `.env.local`
- Make sure `middleware.ts` exists in root folder

### Blog/Portfolio not showing in admin
- Check browser DevTools console for errors
- Verify Firestore has data (check Firebase Console)
- Test API: `curl http://localhost:3000/api/admin/blog`

## 📈 Next Steps

1. ✅ Add image upload to Firestore Storage
2. ✅ Implement Markdown editor for blog content
3. ✅ Add pagination to admin tables
4. ✅ Create public blog page (`/blog/[slug]`)
5. ✅ Add analytics to track CMS usage
