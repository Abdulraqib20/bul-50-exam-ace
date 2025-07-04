
import React, { useState } from 'react';
import ExamSetup from '@/components/ExamSetup';
import ExamInterface from '@/components/ExamInterface';
import ExamResults from '@/components/ExamResults';
import { sampleQuestions, Question, examMetadata, getSectionQuestions, getSectionInfo } from '@/data/sampleQuestions';

type ExamState = 'setup' | 'taking' | 'results';

const Index = () => {
  const [examState, setExamState] = useState<ExamState>('setup');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState<number>(60);
  const [examScore, setExamScore] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<number[]>([]);
  const [currentSection, setCurrentSection] = useState<string>('');

  const handleStartExam = (selectedTimeLimit: number, questionCount: number, sectionIndex?: number) => {
    let selectedQuestions: Question[];
    let sectionName = '';

    if (sectionIndex !== undefined && sectionIndex >= 0) {
      // Section practice mode
      selectedQuestions = getSectionQuestions(sectionIndex);
      const sections = getSectionInfo();
      sectionName = sections[sectionIndex].name;
    } else {
      // Full exam mode - shuffle and select the specified number of questions
      const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
      selectedQuestions = shuffled.slice(0, Math.min(questionCount, sampleQuestions.length));
      sectionName = 'Full Exam';
    }

    setCurrentQuestions(selectedQuestions);
    setTimeLimit(selectedTimeLimit);
    setCurrentSection(sectionName);
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
    setCurrentSection('');
  };

  const handleGoHome = () => {
    setExamState('setup');
    setCurrentQuestions([]);
    setExamScore(0);
    setExamAnswers([]);
    setCurrentSection('');
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
          sectionName={currentSection}
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
          sectionName={currentSection}
          onRetakeExam={handleRetakeExam}
          onGoHome={handleGoHome}
        />
      );

    default:
      return null;
  }
};

export default Index;
