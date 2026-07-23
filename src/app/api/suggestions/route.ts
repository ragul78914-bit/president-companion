import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Suggestion from '@/lib/models/Suggestion';

const memorySuggestions: any[] = [
  {
    _id: 'sug-1',
    category: 'Suggestions',
    title: 'Weekly LeetCode Leaderboard',
    description: 'Can we have a department dashboard highlighting weekly top coders in AI & DS?',
    status: 'In Review',
    upvotes: 42,
    createdAt: new Date()
  },
  {
    _id: 'sug-2',
    category: 'Ideas',
    title: '24-Hour AI Model Training Hackathon',
    description: 'We should host a competition focused on fine-tuning open source LLMs on custom datasets.',
    status: 'Pending',
    upvotes: 38,
    createdAt: new Date()
  },
  {
    _id: 'sug-3',
    category: 'Feature Requests',
    title: 'Digital Department Library for E-Books',
    description: 'Shared Google Drive or cloud drive with machine learning reference papers and placement interview kits.',
    status: 'Resolved',
    upvotes: 65,
    createdAt: new Date()
  }
];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const suggestions = await Suggestion.find().sort({ createdAt: -1 });
      return NextResponse.json({ success: true, count: suggestions.length, data: suggestions });
    }
    return NextResponse.json({ success: true, count: memorySuggestions.length, data: memorySuggestions });
  } catch (error) {
    return NextResponse.json({ success: true, count: memorySuggestions.length, data: memorySuggestions });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const newSuggestion = await Suggestion.create(body);
      return NextResponse.json({ success: true, data: newSuggestion, message: 'Suggestion submitted anonymously!' });
    }

    const savedMock = { 
      ...body, 
      _id: 'sug-' + Date.now(), 
      status: 'Pending',
      upvotes: 1, 
      createdAt: new Date() 
    };
    memorySuggestions.unshift(savedMock);
    return NextResponse.json({ success: true, data: savedMock, message: 'Suggestion submitted anonymously!' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to submit suggestion', error: String(error) }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    const conn = await connectToDatabase();

    if (conn) {
      const updated = await Suggestion.findByIdAndUpdate(id, { status }, { new: true });
      return NextResponse.json({ success: true, data: updated });
    }

    const item = memorySuggestions.find(s => s._id === id);
    if (item) {
      item.status = status;
    }
    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
