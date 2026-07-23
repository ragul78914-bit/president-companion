import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'ragul_aids_president_secret_key_2026';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '78914';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'Wolf';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = jwt.sign(
        { username, role: 'admin', department: 'AI & DS' },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return NextResponse.json({
        success: true,
        token,
        user: { username, role: 'admin' }
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid Admin Credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Authentication Error', error: String(error) },
      { status: 500 }
    );
  }
}
