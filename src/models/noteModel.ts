import mongoose, {Schema, Document} from 'mongoose';

export interface INote extends Document {
    userId: string,
    content: string,
    isArchived: boolean
    
}

const NoteSchema: Schema = new Schema({
    userId: { type: String, required: true },
    content: { type: String, required: true },
    isArchived: { type: Boolean, required: false },
})

export default mongoose.model<INote>('Note',NoteSchema);