import mongoose, { Schema } from 'mongoose';
import { Service } from '../../types.js'; // FIX: added .js extension

const serviceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }, // Store icon name as a string
});

export default mongoose.model<Service>('Service', serviceSchema);
