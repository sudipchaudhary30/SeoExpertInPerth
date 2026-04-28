import { promises as fs } from 'fs';
import path from 'path';

async function getBlogPosts() {
  try {
    const dataFile = path.join(process.cwd(), 'src/data/blog.json');
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-gradient-to-b from-[#f9fdff] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl">Blog</h1>
        <p className="mb-12 text-xl text-slate-600">Articles on SEO, Flutter, and web development</p>
        
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <p className="text-slate-600">Check back soon for latest articles on SEO strategies, Flutter development tips, and web technologies.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post: any) => (
              <article key={post.id} className="border border-sky-200 bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                {post.image && (
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-4" />
                )}
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{post.title}</h2>
                <p className="text-slate-500 text-sm mb-3">{new Date(post.date || post.createdAt).toLocaleDateString()}</p>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <p className="text-slate-700">{post.content}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}