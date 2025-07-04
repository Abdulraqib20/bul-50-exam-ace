
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, RotateCcw, Home } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface ExamResultsProps {
  score: number;
  totalQuestions: number;
  answers: number[];
  questions: Question[];
  sectionName?: string;
  onRetakeExam: () => void;
  onGoHome: () => void;
}

const ExamResults: React.FC<ExamResultsProps> = ({
  score,
  totalQuestions,
  answers,
  questions,
  sectionName = 'Practice Exam',
  onRetakeExam,
  onGoHome,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 70; // Assuming 70% is passing grade

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Results Summary */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader className="text-center p-4 sm:p-6">
            <div className="mb-2">
              <div className="text-sm sm:text-base text-gray-600 mb-1">BUL 506 - {sectionName}</div>
              <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                {passed ? 'Congratulations! 🎉' : 'Keep Studying! 📚'}
              </CardTitle>
            </div>
            <div className={`text-4xl sm:text-6xl font-bold mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {percentage}%
            </div>
            <div className="text-lg sm:text-xl text-gray-600">
              Grade: <span className="font-bold text-xl sm:text-2xl">{getGrade(percentage)}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
                <div className="text-sm text-gray-600">Incorrect Answers</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{totalQuestions}</div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <Button onClick={onRetakeExam} className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Retake Exam
              </Button>
              <Button onClick={onGoHome} variant="outline" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Question Review */}
        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                const wasAnswered = userAnswer !== -1;

                return (
                  <div key={question.id} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Question {index + 1}</h3>
                          <Badge variant={isCorrect ? 'default' : 'destructive'}>
                            {isCorrect ? 'Correct' : wasAnswered ? 'Incorrect' : 'Not Answered'}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{question.question}</p>

                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => {
                            const isUserAnswer = userAnswer === optionIndex;
                            const isCorrectAnswer = question.correctAnswer === optionIndex;

                            return (
                              <div
                                key={optionIndex}
                                className={`p-2 rounded text-sm ${isCorrectAnswer
                                  ? 'bg-green-100 text-green-800 border border-green-300'
                                  : isUserAnswer && !isCorrect
                                    ? 'bg-red-100 text-red-800 border border-red-300'
                                    : 'bg-gray-50'
                                  }`}
                              >
                                <span className="font-medium mr-2">
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                {option}
                                {isCorrectAnswer && (
                                  <span className="ml-2 text-green-600 font-medium">✓ Correct</span>
                                )}
                                {isUserAnswer && !isCorrect && (
                                  <span className="ml-2 text-red-600 font-medium">✗ Your Answer</span>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {question.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamResults;
