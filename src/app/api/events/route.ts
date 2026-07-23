import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Event from '@/lib/models/Event';

const memoryEvents: any[] = [
  {
    _id: 'evt-1',
    title: 'AI & DS Student Vision Launch Keynote',
    category: 'Campaign Launch',
    date: '2026-07-25',
    location: 'Main Auditorium, Block C',
    description: 'Ragul presents the 30-point roadmap, transparency pledge, and student development portal.',
    status: 'Upcoming'
  },
  {
    _id: 'evt-2',
    title: 'Open AI & Python Masterclass',
    category: 'Workshop',
    date: '2026-07-28',
    location: 'AI Research Lab 2',
    description: 'Free technical hands-on training on PyTorch model deployment for 2nd and 3rd year students.',
    status: 'Upcoming'
  },
  {
    _id: 'evt-3',
    title: 'Placement Peer Mock Interviews',
    category: 'Career',
    date: '2026-08-02',
    location: 'Placement Seminar Hall',
    description: '1-on-1 technical mock interviews conducted by senior product engineers.',
    status: 'Upcoming'
  }
];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbEvents = await Event.find().sort({ date: 1 });
      if (dbEvents.length > 0) return NextResponse.json({ success: true, data: dbEvents });
    }
    return NextResponse.json({ success: true, data: memoryEvents });
  } catch (error) {
    return NextResponse.json({ success: true, data: memoryEvents });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const created = await Event.create(body);
      return NextResponse.json({ success: true, data: created });
    }

    const newItem = { ...body, _id: 'evt-' + Date.now() };
    memoryEvents.unshift(newItem);
    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
