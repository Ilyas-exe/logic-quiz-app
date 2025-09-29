import Question from '../models/QuestionModel.js';

// @desc    Fetch all questions
// @route   GET /api/questions
// @access  Public
const getQuestions = async (req, res) => {
    try {
        // We can add logic here to randomize and limit later
        const questions = await Question.find({});
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export { getQuestions };