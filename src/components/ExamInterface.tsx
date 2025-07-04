import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ThemeToggle from '@/components/ThemeToggle';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface ExamInterfaceProps {
  questions: Question[];
  timeLimit: number; // in minutes
  sectionName?: string;
  onExamComplete: (score: number, answers: number[]) => void;
}

const ExamInterface: React.FC<ExamInterfaceProps> = ({ questions, timeLimit, sectionName = 'Practice Exam', onExamComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60); // convert to seconds
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFlagQuestion = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex);
    } else {
      newFlagged.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleSubmitExam = () => {
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    onExamComplete(score, answers);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredQuestions = answers.filter(answer => answer !== -1).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-2 sm:p-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-0">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-200">BUL 506 {sectionName}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{questions.length} Questions</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-red-600 dark:text-red-400">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{formatTime(timeLeft)}</span>
              </div>
              <ThemeToggle />
              <Button onClick={handleSubmitExam} variant="destructive" size="sm" className="text-sm">
                Submit
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{answeredQuestions} answered</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-4 sm:mb-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">Question {currentQuestionIndex + 1}</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={handleFlagQuestion}
              className={`text-xs sm:text-sm border-gray-300 dark:border-gray-600 ${flaggedQuestions.has(currentQuestionIndex)
                ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              <Flag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {flaggedQuestions.has(currentQuestionIndex) ? 'Flagged' : 'Flag'}
            </Button>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
            <p className="text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{currentQuestion.question}</p>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${answers[currentQuestionIndex] === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-800/50'
                    }`}
                >
                  <div className="flex items-start">
                    <span className="font-semibold mr-2 sm:mr-3 text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base min-w-[20px]">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="space-y-4">
          {/* Primary Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="text-sm sm:text-base border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>

            <div className="text-center">
              <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {answeredQuestions} answered • {flaggedQuestions.size} flagged
              </div>
            </div>

            <Button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              variant="outline"
              className="text-sm sm:text-base border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4 ml-1 sm:ml-2" />
            </Button>
          </div>

          {/* Question Grid Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Question Navigator</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`aspect-square rounded text-xs sm:text-sm font-medium transition-colors ${index === currentQuestionIndex
                    ? 'bg-blue-600 text-white'
                    : answers[index] !== -1
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-600'
                      : flaggedQuestions.has(index)
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  title={`Question ${index + 1}${answers[index] !== -1 ? ' (Answered)' : ''}${flaggedQuestions.has(index) ? ' (Flagged)' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Flagged</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Unanswered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
