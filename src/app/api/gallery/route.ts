import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import GalleryItem from '@/lib/models/GalleryItem';
import { INITIAL_GALLERY } from '@/lib/seedData';

let memoryGallery: any[] = [...INITIAL_GALLERY.map((item, idx) => ({ ...item, _id: 'gal-' + (idx + 1) }))];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbGallery = await GalleryItem.find().sort({ date: -1 });
      if (dbGallery.length > 0) return NextResponse.json({ success: true, data: dbGallery });
    }
    return NextResponse.json({ success: true, data: memoryGallery });
  } catch (error) {
    return NextResponse.json({ success: true, data: memoryGallery });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const created = await GalleryItem.create(body);
      return NextResponse.json({ success: true, data: created });
    }

    const newItem = { ...body, _id: 'gal-' + Date.now() };
    memoryGallery.unshift(newItem);
    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
