import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get('/api/questions');
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch questions. Please try again later.');
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerClick = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizFinished(true);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="quiz-container">
      {quizFinished ? (
        <div className="results">
          <h2>Quiz Finished!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      ) : (
        questions.length > 0 && (
          <div className="question-section">
            <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
            <p>{questions[currentQuestionIndex].text}</p>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(index)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;