import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswerIndex: { type: Number, required: true },
    category: { type: String, default: 'General' },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;