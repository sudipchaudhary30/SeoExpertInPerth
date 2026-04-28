import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Protect routes - require authentication
async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { error: "Unauthorized", status: 401 };
  }
  return null;
}

// GET all blog posts
export async function GET() {
  try {
    const postsRef = collection(db, "blog");
    const snapshot = await getDocs(postsRef);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  const authError = await requireAuth();
  if (authError) {
    return NextResponse.json(
      { error: authError.error },
      { status: authError.status }
    );
  }

  try {
    const body = await request.json();
    const { title, description, content, image, author } = body;

    if (!title || !description || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const postsRef = collection(db, "blog");
    const docRef = await addDoc(postsRef, {
      title,
      description,
      content,
      image: image || "",
      author: author || "Admin",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return NextResponse.json(
      { id: docRef.id, message: "Blog post created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}

