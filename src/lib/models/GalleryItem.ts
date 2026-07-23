import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryItem extends Document {
  title: string;
  category: 'Events' | 'Projects' | 'Coding' | 'Placements' | 'Industrial Visits' | 'Hackathons';
  imageUrl: string;
  caption: string;
  date: string;
}

const GalleryItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Events', 'Projects', 'Coding', 'Placements', 'Industrial Visits', 'Hackathons']
  },
  imageUrl: { type: String, required: true },
  caption: { type: String, default: '' },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] }
});

export default mongoose.models.GalleryItem || mongoose.model<IGalleryItem>('GalleryItem', GalleryItemSchema);
