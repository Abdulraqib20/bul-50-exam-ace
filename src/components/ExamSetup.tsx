import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, Users, Award, BookOpen, Target, Timer, Brain, Zap, CheckCircle, PlayCircle } from 'lucide-react';
import { getSectionInfo } from '@/data/sampleQuestions';

interface ExamSetupProps {
  onStartExam: (timeLimit: number, questionCount: number, sectionIndex?: number) => void;
  totalQuestions: number;
}

const ExamSetup: React.FC<ExamSetupProps> = ({ onStartExam, totalQuestions }) => {
  const [questionCount, setQuestionCount] = useState<number>(15); // Default to section size
  const [selectedSection, setSelectedSection] = useState<number>(-1); // -1 means all questions
  const [examMode, setExamMode] = useState<'section' | 'full'>('section');

  const sections = getSectionInfo();

  // Fixed time limits based on mode and question count
  const getTimeLimit = () => {
    if (examMode === 'section') {
      return 10; // 10 minutes for sections
    } else {
      // Full exam: 1.5 minutes per question
      return Math.ceil(questionCount * 1.5);
    }
  };

  const handleStartExam = () => {
    const timeLimit = getTimeLimit();
    if (examMode === 'section' && selectedSection >= 0) {
      onStartExam(timeLimit, sections[selectedSection].questionCount, selectedSection);
    } else {
      onStartExam(timeLimit, questionCount, -1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-lg">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            BUL 506 Exam Ace
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Master Engineering Law with our comprehensive CBT practice platform.
            Practice by sections or take full mock exams with real past questions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700">
              <Target className="w-4 h-4 mr-2" />
              {sections.length} Strategic Sections
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              {totalQuestions} Verified Questions
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700">
              <Timer className="w-4 h-4 mr-2" />
              Timed Practice Sessions
            </Badge>
          </div>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Section Practice Mode */}
          <Card
            className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-xl ${examMode === 'section'
              ? 'border-blue-500 shadow-xl ring-4 ring-blue-100'
              : 'border-gray-200 hover:border-gray-300'
              }`}
            onClick={() => {
              setExamMode('section');
              setSelectedSection(-1);
              setQuestionCount(15);
            }}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${examMode === 'section' ? 'bg-blue-500' : 'bg-gray-400'} text-white flex-shrink-0`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Section Practice</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Practice specific sections with 15 questions each. Perfect for targeted learning and topic mastery.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="font-medium">10 minutes</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="w-4 h-4 mr-2 text-green-500" />
                      <span className="font-medium">15 questions per section</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="font-medium">Quick focused practice</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Exam Mode */}
          <Card
            className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-xl ${examMode === 'full'
              ? 'border-purple-500 shadow-xl ring-4 ring-purple-100'
              : 'border-gray-200 hover:border-gray-300'
              }`}
            onClick={() => {
              setExamMode('full');
              setSelectedSection(-1);
              setQuestionCount(totalQuestions);
            }}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${examMode === 'full' ? 'bg-purple-500' : 'bg-gray-400'} text-white flex-shrink-0`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Full Exam</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Complete mock exams with customizable question count. Simulate real exam conditions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="font-medium">{getTimeLimit()} minutes</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      <span className="font-medium">20-{totalQuestions} questions</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Brain className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="font-medium">Comprehensive assessment</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Section */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-xl">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
              {examMode === 'section' ? 'Configure Section Practice' : 'Configure Full Exam'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">

            <div className="space-y-6 sm:space-y-8">
              {examMode === 'section' && (
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <FileText className="w-5 h-5 inline mr-3 text-blue-600" />
                    Choose Your Section
                  </label>
                  <Select value={selectedSection.toString()} onValueChange={(value) => setSelectedSection(parseInt(value))}>
                    <SelectTrigger className="w-full h-14 text-base border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="Select a section to practice" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.map((section) => (
                        <SelectItem key={section.id} value={section.id.toString()} className="p-4">
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <div className="font-semibold text-base">{section.name}</div>
                              <div className="text-sm text-gray-600">{section.description}</div>
                            </div>
                            <Badge variant="outline" className="ml-4">
                              {section.questionCount} questions
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {examMode === 'full' && (
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <Users className="w-5 h-5 inline mr-3 text-purple-600" />
                    Number of Questions
                  </label>
                  <Select value={questionCount.toString()} onValueChange={(value) => setQuestionCount(parseInt(value))}>
                    <SelectTrigger className="w-full h-14 text-base border-2 border-gray-200 hover:border-purple-300 transition-colors">
                      <SelectValue placeholder="Select number of questions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20" className="p-4">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">Quick Test</span>
                          <Badge variant="outline" className="ml-4">20 questions • 30 min</Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value="50" className="p-4">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">Practice Test</span>
                          <Badge variant="outline" className="ml-4">50 questions • 75 min</Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value={totalQuestions.toString()} className="p-4">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">Full Test</span>
                          <Badge variant="outline" className="ml-4">{totalQuestions} questions • {getTimeLimit()} min</Badge>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Time and Instructions Display */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Timer className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-blue-800 text-lg mb-1">Time Limit</h4>
                  <p className="text-2xl font-bold text-blue-600">{getTimeLimit()} minutes</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-green-800 text-lg mb-1">Passing Grade</h4>
                  <p className="text-2xl font-bold text-green-600">70%</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Exam Instructions
              </h4>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>• Time limit is automatically set based on your selection</li>
                <li>• Navigate freely between questions during the exam</li>
                <li>• Flag questions for review if you're unsure</li>
                <li>• Exam will auto-submit when time expires</li>
                <li>• All questions include detailed explanations</li>
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                onClick={handleStartExam}
                size="lg"
                disabled={examMode === 'section' && selectedSection === -1}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                {examMode === 'section'
                  ? `Start Section ${selectedSection >= 0 ? sections[selectedSection].name : 'Practice'}`
                  : `Start ${questionCount}-Question Exam`
                }
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <p className="text-lg font-medium text-gray-700 mb-2">
              Ready to excel in Engineering Law? 🚀
            </p>
            <p className="text-sm text-gray-600">
              Practice with confidence using our comprehensive question bank and smart timing system.
            </p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ExamSetup;
