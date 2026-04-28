import { NextRequest, NextResponse } from "next/server";
import { deleteDoc, doc, updateDoc, Timestamp } from "firebase/firestore";
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

// DELETE blog post
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = await requireAuth();
  if (authError) {
    return NextResponse.json(
      { error: authError.error },
      { status: authError.status }
    );
  }

  try {
    const { id } = params;
    const postRef = doc(db, "blog", id);
    await deleteDoc(postRef);
    return NextResponse.json({ message: "Blog post deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

// UPDATE blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const authError = await requireAuth();
  if (authError) {
    return NextResponse.json(
      { error: authError.error },
      { status: authError.status }
    );
  }

  try {
    const { id } = params;
    const body = await request.json();
    const postRef = doc(db, "blog", id);
    await updateDoc(postRef, {
      ...body,
      updatedAt: Timestamp.now(),
    });
    return NextResponse.json({ message: "Blog post updated" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}
