import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Expense from '@/lib/models/Expense';
import GalleryItem from '@/lib/models/GalleryItem';
import Suggestion from '@/lib/models/Suggestion';
import Survey from '@/lib/models/Survey';
import { INITIAL_EXPENSES, INITIAL_GALLERY } from '@/lib/seedData';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({ 
        success: true, 
        message: 'Running in high-performance memory mode. Database seeding skipped because MongoDB URI is not set.' 
      });
    }

    // Seed Expenses
    await Expense.deleteMany({});
    await Expense.insertMany(INITIAL_EXPENSES);

    // Seed Gallery
    await GalleryItem.deleteMany({});
    await GalleryItem.insertMany(INITIAL_GALLERY);

    // Seed initial demo survey & suggestion
    const surveyCount = await Survey.countDocuments();
    if (surveyCount === 0) {
      await Survey.create({
        q1: 'Yes', q2: 'Yes', q3: 'Yes', q4: 'Yes', q5: 'Yes',
        q6: 'Regular AI hackathons and campus placements drills',
        q7: 'Yes', q8: 'Yes', q9: 'Yes', q10: 'Yes', q11: 'Yes', q12: 'Yes',
        additionalComments: 'Ragul has done fantastic work on department projects!'
      });
    }

    const suggestionCount = await Suggestion.countDocuments();
    if (suggestionCount === 0) {
      await Suggestion.create({
        category: 'Suggestions',
        title: 'Department AI Project Incubator',
        description: 'Set up an internal review portal to mentor student startup projects.',
        status: 'In Review',
        upvotes: 24
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'MongoDB database successfully seeded with initial campaign data!' 
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
