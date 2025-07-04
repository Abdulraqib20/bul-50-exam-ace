import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Select components no longer needed since full exam mode doesn't have configuration
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, Users, Award, BookOpen, Target, Timer, Brain, Zap, CheckCircle, PlayCircle, BookmarkIcon } from 'lucide-react';
import { getSectionInfo } from '@/data/sampleQuestions';

interface ExamSetupProps {
  onStartExam: (timeLimit: number, questionCount: number, sectionIndex?: number) => void;
  totalQuestions: number;
}

const ExamSetup: React.FC<ExamSetupProps> = ({ onStartExam, totalQuestions }) => {
  // No longer need questionCount state - sections use fixed 15, full exam uses all questions
  const [selectedSection, setSelectedSection] = useState<number>(-1); // -1 means all questions
  const [examMode, setExamMode] = useState<'section' | 'full'>('section');

  const sections = getSectionInfo();

  // Fixed time limits based on mode and question count
  const getTimeLimit = () => {
    if (examMode === 'section') {
      return 7; // 7 minutes for sections
    } else {
      // Full exam: 90 minutes for all 140 questions
      return 90;
    }
  };

  const handleStartExam = () => {
    const timeLimit = getTimeLimit();
    if (examMode === 'section' && selectedSection >= 0) {
      onStartExam(timeLimit, sections[selectedSection].questionCount, selectedSection);
    } else {
      onStartExam(timeLimit, totalQuestions, -1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-3 sm:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-lg">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            BUL 506 PQ
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            compiled from pdfs of BUL 506 engineering law past questions.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700">
              <CheckCircle className="w-3 h-3 mr-1" />
              {totalQuestions} Questions
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700">
              <Timer className="w-3 h-3 mr-1" />
              Timed Practice
            </Badge>
          </div>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Section Practice Mode */}
          <Card
            className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-lg ${examMode === 'section'
              ? 'border-blue-500 shadow-lg ring-2 ring-blue-100'
              : 'border-gray-200 hover:border-gray-300'
              }`}
            onClick={() => {
              setExamMode('section');
              setSelectedSection(-1);
            }}
          >
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${examMode === 'section' ? 'bg-blue-500' : 'bg-gray-400'} text-white flex-shrink-0`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Section Practice</h3>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                    Practice specific sections with 15 questions each.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock className="w-3 h-3 mr-1 text-blue-500" />
                      <span className="font-medium">7 minutes</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Target className="w-3 h-3 mr-1 text-green-500" />
                      <span className="font-medium">15 questions per section</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Exam Mode */}
          <Card
            className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-lg ${examMode === 'full'
              ? 'border-purple-500 shadow-lg ring-2 ring-purple-100'
              : 'border-gray-200 hover:border-gray-300'
              }`}
            onClick={() => {
              setExamMode('full');
              setSelectedSection(-1);
            }}
          >
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${examMode === 'full' ? 'bg-purple-500' : 'bg-gray-400'} text-white flex-shrink-0`}>
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Full Exam</h3>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                    Complete exam with all 140 questions in 90 minutes. Simulate real exam conditions.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock className="w-3 h-3 mr-1 text-blue-500" />
                      <span className="font-medium">90 minutes</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Users className="w-3 h-3 mr-1 text-green-500" />
                      <span className="font-medium">{totalQuestions} questions</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Section */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-xl p-4">
            <CardTitle className="text-lg sm:text-xl font-bold text-center">
              {examMode === 'section' ? 'Configure Section Practice' : 'Configure Full Exam'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">

            <div className="space-y-4 sm:space-y-6">
              {examMode === 'section' && (
                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-3">
                    <BookmarkIcon className="w-4 h-4 inline mr-2 text-blue-600" />
                    Choose Your Section
                  </label>

                  {/* Section Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {sections.map((section) => (
                      <Card
                        key={section.id}
                        className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-md ${selectedSection === section.id
                          ? 'border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-200'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                          }`}
                        onClick={() => setSelectedSection(section.id)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${selectedSection === section.id
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-600'
                                }`}>
                                {section.name.split(' ')[1]}
                              </div>
                              <div className="ml-2">
                                <h4 className="font-bold text-sm text-gray-800">{section.name}</h4>
                                <p className="text-xs text-gray-600">{section.description}</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-600">Questions:</span>
                              <Badge variant="outline" className="text-xs px-2 py-0">
                                {section.questionCount}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-600">Time:</span>
                              <Badge variant="outline" className="text-xs px-2 py-0">
                                7 min
                              </Badge>
                            </div>
                          </div>

                          {selectedSection === section.id && (
                            <div className="mt-2 flex items-center text-blue-600">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              <span className="text-xs font-medium">Selected</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {examMode === 'full' && (
                <div>
                  <div className="text-center bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-2">Full Engineering Law Exam</h3>
                    <p className="text-sm text-purple-700">
                      Complete exam with all {totalQuestions} questions in 90 minutes
                    </p>
                    <div className="flex justify-center gap-4 mt-3">
                      <div className="flex items-center text-sm text-purple-600">
                        <Users className="w-4 h-4 mr-1" />
                        {totalQuestions} Questions
                      </div>
                      <div className="flex items-center text-sm text-purple-600">
                        <Clock className="w-4 h-4 mr-1" />
                        90 Minutes
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Time and Instructions Display */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Timer className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-blue-800 text-sm mb-1">Time Limit</h4>
                  <p className="text-lg font-bold text-blue-600">{getTimeLimit()} minutes</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <h4 className="font-bold text-green-800 text-sm mb-1">Passing Grade</h4>
                  <p className="text-lg font-bold text-green-600">70%</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                N/B:
              </h4>
              <ul className="text-xs text-amber-700 space-y-1">
                <li>• Time limit is automatically set based on your selection</li>
                <li>• Navigate freely between questions during the exam</li>
                <li>• Flag questions for review if you're unsure</li>
                <li>• Exam will auto-submit when time expires</li>
                <li>• All questions include detailed explanations</li>
              </ul>
            </div>

            <div className="flex justify-center mt-6">
              <Button
                onClick={handleStartExam}
                size="lg"
                disabled={examMode === 'section' && selectedSection === -1}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                {examMode === 'section'
                  ? `Start Section ${selectedSection >= 0 ? sections[selectedSection].name : 'Practice'}`
                  : `Start Full Exam (${totalQuestions} Questions)`
                }
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 sm:mt-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-1">
              build with ❤️ by <a href="https://github.com/Abdulraqib20" className="text-blue-600 hover:text-blue-700">raqibcodes</a>
            </p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ExamSetup;
