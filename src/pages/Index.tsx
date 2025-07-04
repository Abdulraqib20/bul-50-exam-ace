
import React, { useState } from 'react';
import ExamSetup from '@/components/ExamSetup';
import ExamInterface from '@/components/ExamInterface';
import ExamResults from '@/components/ExamResults';
import { sampleQuestions, Question, examMetadata } from '@/data/sampleQuestions';

type ExamState = 'setup' | 'taking' | 'results';

const Index = () => {
  const [examState, setExamState] = useState<ExamState>('setup');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState<number>(60);
  const [examScore, setExamScore] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<number[]>([]);

  const handleStartExam = (selectedTimeLimit: number, questionCount: number) => {
    // Shuffle and select the specified number of questions
    const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, sampleQuestions.length));

    setCurrentQuestions(selected);
    setTimeLimit(selectedTimeLimit);
    setExamState('taking');
  };

  const handleExamComplete = (score: number, answers: number[]) => {
    setExamScore(score);
    setExamAnswers(answers);
    setExamState('results');
  };

  const handleRetakeExam = () => {
    setExamState('setup');
    setCurrentQuestions([]);
    setExamScore(0);
    setExamAnswers([]);
  };

  const handleGoHome = () => {
    setExamState('setup');
    setCurrentQuestions([]);
    setExamScore(0);
    setExamAnswers([]);
  };

  switch (examState) {
    case 'setup':
      return (
        <ExamSetup
          onStartExam={handleStartExam}
          totalQuestions={sampleQuestions.length}
        />
      );

    case 'taking':
      return (
        <ExamInterface
          questions={currentQuestions}
          timeLimit={timeLimit}
          onExamComplete={handleExamComplete}
        />
      );

    case 'results':
      return (
        <ExamResults
          score={examScore}
          totalQuestions={currentQuestions.length}
          answers={examAnswers}
          questions={currentQuestions}
          onRetakeExam={handleRetakeExam}
          onGoHome={handleGoHome}
        />
      );

    default:
      return null;
  }
};

export default Index;
