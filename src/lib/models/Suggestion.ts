import mongoose, { Schema, Document } from 'mongoose';

export interface ISuggestion extends Document {
  category: 'Suggestions' | 'Complaints' | 'Ideas' | 'Problems' | 'Feature Requests' | 'Anonymous Feedback';
  title: string;
  description: string;
  status: 'Pending' | 'In Review' | 'Resolved';
  upvotes: number;
  createdAt: Date;
}

const SuggestionSchema: Schema = new Schema({
  category: { 
    type: String, 
    required: true, 
    enum: ['Suggestions', 'Complaints', 'Ideas', 'Problems', 'Feature Requests', 'Anonymous Feedback'],
    default: 'Suggestions'
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'In Review', 'Resolved'], default: 'Pending' },
  upvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Suggestion || mongoose.model<ISuggestion>('Suggestion', SuggestionSchema);
