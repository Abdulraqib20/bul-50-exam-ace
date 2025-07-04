
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, Users, Award, BookOpen } from 'lucide-react';
import { getSectionInfo } from '@/data/sampleQuestions';

interface ExamSetupProps {
  onStartExam: (timeLimit: number, questionCount: number, sectionIndex?: number) => void;
  totalQuestions: number;
}

const ExamSetup: React.FC<ExamSetupProps> = ({ onStartExam, totalQuestions }) => {
  const [timeLimit, setTimeLimit] = useState<number>(60); // minutes
  const [questionCount, setQuestionCount] = useState<number>(15); // Default to section size
  const [selectedSection, setSelectedSection] = useState<number>(-1); // -1 means all questions
  const [examMode, setExamMode] = useState<'section' | 'full'>('section');

  const sections = getSectionInfo();

  const handleStartExam = () => {
    if (examMode === 'section' && selectedSection >= 0) {
      onStartExam(timeLimit, sections[selectedSection].questionCount, selectedSection);
    } else {
      onStartExam(timeLimit, questionCount, -1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">BUL 506 Exam Ace</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Engineering Law CBT Practice - Master your past questions
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-sm">
              {sections.length} Sections Available
            </Badge>
            <Badge variant="outline" className="text-sm">
              {totalQuestions} Total Questions
            </Badge>
          </div>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Configure Your Practice Exam</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg text-center">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Mode</h3>
                <p className="text-lg sm:text-2xl font-bold text-blue-600">
                  {examMode === 'section' ? 'Section Practice' : 'Full Exam'}
                </p>
              </div>

              <div className="bg-green-50 p-4 sm:p-6 rounded-lg text-center">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Passing Grade</h3>
                <p className="text-lg sm:text-2xl font-bold text-green-600">70%</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Exam Mode
                </label>
                <Select value={examMode} onValueChange={(value: 'section' | 'full') => {
                  setExamMode(value);
                  setSelectedSection(-1);
                  setQuestionCount(value === 'section' ? 15 : totalQuestions);
                }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select exam mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="section">Section Practice (15 questions)</SelectItem>
                    <SelectItem value="full">Full Exam (112 questions)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {examMode === 'section' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Select Section
                  </label>
                  <Select value={selectedSection.toString()} onValueChange={(value) => setSelectedSection(parseInt(value))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a section to practice" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.map((section) => (
                        <SelectItem key={section.id} value={section.id.toString()}>
                          {section.name} - {section.description} ({section.questionCount} questions)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Time Limit
                </label>
                <Select value={timeLimit.toString()} onValueChange={(value) => setTimeLimit(parseInt(value))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time limit" />
                  </SelectTrigger>
                  <SelectContent>
                    {examMode === 'section' ? (
                      <>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="20">20 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">1 hour 30 minutes</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="150">2 hours 30 minutes</SelectItem>
                        <SelectItem value="180">3 hours</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              {examMode === 'full' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Questions
                  </label>
                  <Select value={questionCount.toString()} onValueChange={(value) => setQuestionCount(parseInt(value))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select number of questions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20 questions (Quick Test)</SelectItem>
                      <SelectItem value="50">50 questions (Practice Test)</SelectItem>
                      <SelectItem value={totalQuestions.toString()}>{totalQuestions} questions (Full Test)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Exam Instructions:</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Answer all questions to the best of your ability</li>
                <li>• You can flag questions for review</li>
                <li>• Time will be displayed at the top of the screen</li>
                <li>• The exam will auto-submit when time runs out</li>
                <li>• You can navigate between questions freely</li>
              </ul>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <Button
                onClick={handleStartExam}
                size="lg"
                disabled={examMode === 'section' && selectedSection === -1}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 sm:px-8 py-3 text-base sm:text-lg"
              >
                {examMode === 'section'
                  ? `Start Section ${selectedSection >= 0 ? sections[selectedSection].name : 'Practice'}`
                  : 'Start Full Exam'
                }
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">
            Good luck with your BUL 506 Engineering Law preparation! 🍀
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamSetup;
