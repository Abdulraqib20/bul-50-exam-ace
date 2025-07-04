import React, { useState } from 'react';
import ExamSetup from '@/components/ExamSetup';
import ExamInterface from '@/components/ExamInterface';
import ExamResults from '@/components/ExamResults';
import { sampleQuestions, Question, examMetadata, getSectionQuestions, getSectionInfo } from '@/data/sampleQuestions';
import { useProgress } from '@/contexts/ProgressContext';

type ExamState = 'setup' | 'taking' | 'results';

const Index = () => {
  const [examState, setExamState] = useState<ExamState>('setup');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState<number>(60);
  const [examScore, setExamScore] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<number[]>([]);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(-1);
  const [examStartTime, setExamStartTime] = useState<number>(0);

  const { addSectionProgress, addFullExamProgress } = useProgress();

  const handleStartExam = (selectedTimeLimit: number, questionCount: number, sectionIndex?: number) => {
    let selectedQuestions: Question[];
    let sectionName = '';

    if (sectionIndex !== undefined && sectionIndex >= 0) {
      // Section practice mode
      selectedQuestions = getSectionQuestions(sectionIndex);
      const sections = getSectionInfo();
      sectionName = sections[sectionIndex].name;
      setCurrentSectionIndex(sectionIndex);
    } else {
      // Full exam mode - shuffle and select the specified number of questions
      const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
      selectedQuestions = shuffled.slice(0, Math.min(questionCount, sampleQuestions.length));
      sectionName = 'Full Exam';
      setCurrentSectionIndex(-1);
    }

    setCurrentQuestions(selectedQuestions);
    setTimeLimit(selectedTimeLimit);
    setCurrentSection(sectionName);
    setExamStartTime(Date.now());
    setExamState('taking');
  };

  const handleExamComplete = (score: number, answers: number[]) => {
    const timeSpent = Math.round((Date.now() - examStartTime) / 60000); // in minutes

    // Save progress
    if (currentSectionIndex >= 0) {
      // Section practice - save section progress
      addSectionProgress({
        sectionId: currentSectionIndex,
        sectionName: currentSection,
        score: score,
        totalQuestions: currentQuestions.length,
        timeSpent: timeSpent
      });
    } else {
      // Full exam - save full exam progress
      addFullExamProgress(score, currentQuestions.length, timeSpent);
    }

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
    setCurrentSectionIndex(-1);
    setExamStartTime(0);
  };

  const handleGoHome = () => {
    setExamState('setup');
    setCurrentQuestions([]);
    setExamScore(0);
    setExamAnswers([]);
    setCurrentSection('');
    setCurrentSectionIndex(-1);
    setExamStartTime(0);
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
