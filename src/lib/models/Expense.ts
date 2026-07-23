import mongoose, { Schema, Document } from 'mongoose';

export interface IExpense extends Document {
  title: string;
  category: 'Symposium' | 'Workshops' | 'Industrial Visit' | 'Department Function' | 'Cultural' | 'Guest Lecture' | 'Association Fund' | 'Miscellaneous';
  allocatedAmount: number;
  spentAmount: number;
  description: string;
  date: string;
}

const ExpenseSchema: Schema = new Schema({
  title: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Symposium', 'Workshops', 'Industrial Visit', 'Department Function', 'Cultural', 'Guest Lecture', 'Association Fund', 'Miscellaneous'],
    default: 'Workshops'
  },
  allocatedAmount: { type: Number, required: true },
  spentAmount: { type: Number, required: true },
  description: { type: String, default: '' },
  date: { type: String, required: true, default: () => new Date().toISOString().split('T')[0] }
});

export default mongoose.models.Expense || mongoose.model<IExpense>('Expense', ExpenseSchema);
