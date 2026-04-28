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

// DELETE portfolio item
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
    const itemRef = doc(db, "portfolio", id);
    await deleteDoc(itemRef);
    return NextResponse.json({ message: "Portfolio item deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete portfolio item" },
      { status: 500 }
    );
  }
}

// UPDATE portfolio item
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
    const itemRef = doc(db, "portfolio", id);
    await updateDoc(itemRef, {
      ...body,
      updatedAt: Timestamp.now(),
    });
    return NextResponse.json({ message: "Portfolio item updated" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update portfolio item" },
      { status: 500 }
    );
  }
}
