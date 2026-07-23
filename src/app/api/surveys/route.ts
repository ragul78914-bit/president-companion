import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Survey from '@/lib/models/Survey';

const memorySurveys: any[] = [];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbSurveys = await Survey.find().sort({ createdAt: -1 });
      return NextResponse.json(
        { success: true, count: dbSurveys.length, data: dbSurveys },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }
  } catch (error) {
    console.error('Error fetching surveys from MongoDB:', error);
  }

  return NextResponse.json(
    { success: true, count: memorySurveys.length, data: memorySurveys },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const surveyDoc = {
      studentName: body.studentName || 'Anonymous Student',
      studentYear: body.studentYear || 'AI & DS Student',
      voted: body.voted || 'Yes',
      noReason: body.noReason || '',
      q1: body.q1 || '',
      q2: body.q2 || '',
      q3: body.q3 || '',
      q4: body.q4 || '',
      q5: body.q5 || '',
      q6: body.q6 || '',
      q7: body.q7 || '',
      q8: body.q8 || '',
      q9: body.q9 || '',
      q10: body.q10 || ''
    };

    const memoryDoc = {
      ...surveyDoc,
      _id: 'surv-' + Date.now(),
      createdAt: new Date()
    };
    memorySurveys.unshift(memoryDoc);

    try {
      const conn = await connectToDatabase();
      if (conn) {
        const createdDBDoc = await Survey.create(surveyDoc);
        return NextResponse.json({
          success: true,
          data: createdDBDoc,
          message: 'Student response and vote recorded to MongoDB successfully!'
        });
      }
    } catch (dbErr) {
      console.warn('MongoDB write warning, response saved in active server memory:', dbErr);
    }

    return NextResponse.json({
      success: true,
      data: memoryDoc,
      message: 'Student response and vote recorded successfully!'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to record response', error: String(error) },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 });
    }

    const memIndex = memorySurveys.findIndex(s => s._id === id);
    if (memIndex !== -1) memorySurveys.splice(memIndex, 1);

    try {
      const conn = await connectToDatabase();
      if (conn && id.length > 10) {
        await Survey.findByIdAndDelete(id);
      }
    } catch (dbErr) {
      console.warn('MongoDB delete warning:', dbErr);
    }

    return NextResponse.json({ success: true, message: 'Voter response deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
