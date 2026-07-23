import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Expense from '@/lib/models/Expense';
import { INITIAL_EXPENSES } from '@/lib/seedData';

let memoryExpenses: any[] = [...INITIAL_EXPENSES.map((item, idx) => ({ ...item, _id: 'exp-' + (idx + 1) }))];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const dbExpenses = await Expense.find().sort({ date: -1 });
      if (dbExpenses.length > 0) {
        return NextResponse.json({ success: true, data: dbExpenses });
      }
    }
    return NextResponse.json({ success: true, data: memoryExpenses });
  } catch (error) {
    return NextResponse.json({ success: true, data: memoryExpenses });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const created = await Expense.create(body);
      return NextResponse.json({ success: true, data: created, message: 'Expense record added successfully' });
    }

    const newItem = { ...body, _id: 'exp-' + Date.now() };
    memoryExpenses.unshift(newItem);
    return NextResponse.json({ success: true, data: newItem, message: 'Expense record added successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (conn) {
      await Expense.findByIdAndDelete(id);
    }
    memoryExpenses = memoryExpenses.filter(e => e._id !== id);

    return NextResponse.json({ success: true, message: 'Expense record deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
