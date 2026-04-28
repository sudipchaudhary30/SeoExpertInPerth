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

// Protect routes
async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { error: "Unauthorized", status: 401 };
  }
  return null;
}

// GET all portfolio items
export async function GET() {
  try {
    const itemsRef = collection(db, "portfolio");
    const snapshot = await getDocs(itemsRef);
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch portfolio items" },
      { status: 500 }
    );
  }
}

// POST - Create new portfolio item
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
    const { title, description, technologies, metrics, image, link } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const itemsRef = collection(db, "portfolio");
    const docRef = await addDoc(itemsRef, {
      title,
      description,
      technologies: Array.isArray(technologies) ? technologies : [],
      metrics: metrics || "",
      image: image || "",
      link: link || "",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return NextResponse.json(
      { id: docRef.id, message: "Portfolio item created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create portfolio item" },
      { status: 500 }
    );
  }
}
