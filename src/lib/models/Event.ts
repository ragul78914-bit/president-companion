import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  status: 'Upcoming' | 'Completed' | 'In Progress';
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Upcoming', 'Completed', 'In Progress'], default: 'Upcoming' }
});

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
