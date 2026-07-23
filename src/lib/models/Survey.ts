import mongoose, { Schema, Document } from 'mongoose';

export interface ISurvey extends Document {
  studentName: string;
  studentYear: string;
  voted: string;
  noReason: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  createdAt: Date;
}

const SurveySchema: Schema = new Schema({
  studentName: { type: String, default: 'Anonymous Student' },
  studentYear: { type: String, default: 'AI & DS Student' },
  voted: { type: String, default: 'Yes' },
  noReason: { type: String, default: '' },
  q1: { type: String, default: '' },
  q2: { type: String, default: '' },
  q3: { type: String, default: '' },
  q4: { type: String, default: '' },
  q5: { type: String, default: '' },
  q6: { type: String, default: '' },
  q7: { type: String, default: '' },
  q8: { type: String, default: '' },
  q9: { type: String, default: '' },
  q10: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Survey || mongoose.model<ISurvey>('Survey', SurveySchema);
