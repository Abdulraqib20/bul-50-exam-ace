import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Select components no longer needed since full exam mode doesn't have configuration
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, FileText, Users, Award, BookOpen, Target, Timer, Brain, Zap, CheckCircle, PlayCircle, BookmarkIcon, TrendingUp } from 'lucide-react';
import { getSectionInfo } from '@/data/sampleQuestions';
import ThemeToggle from '@/components/ThemeToggle';
import { useProgress } from '@/contexts/ProgressContext';

interface ExamSetupProps {
  onStartExam: (timeLimit: number, questionCount: number, sectionIndex?: number) => void;
  totalQuestions: number;
}

const ExamSetup: React.FC<ExamSetupProps> = ({ onStartExam, totalQuestions }) => {
  // No longer need questionCount state - sections use fixed 15, full exam uses all questions
  const [selectedSection, setSelectedSection] = useState<number>(-1); // -1 means all questions
  const [examMode, setExamMode] = useState<'section' | 'full'>('section');

  const sections = getSectionInfo();
  const { overallStats, getProgressPercentage, getSectionStatus } = useProgress();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-3 sm:p-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Header with Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Progress Overview */}
        {getProgressPercentage() > 0 && (
          <Card className="mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                  Your Progress
                </h3>
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  {getProgressPercentage()}% Complete
                </Badge>
              </div>
              <Progress value={getProgressPercentage()} className="h-2 mb-3" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{overallStats.totalSectionsCompleted}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Sections Done</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{overallStats.totalFullExamsCompleted}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Full Exams</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">{overallStats.averageScore}%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Avg Score</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <div className="text-lg font-bold text-orange-600 dark:text-orange-400">{Math.round(overallStats.totalTimeSpent / 60)}h</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Study Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white p-3 rounded-xl shadow-lg">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
            BUL 506 PQ
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            compiled from pdfs of BUL 506 engineering law past questions.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <CheckCircle className="w-3 h-3 mr-1" />
              {totalQuestions} Questions
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400">
              <Timer className="w-3 h-3 mr-1" />
              Timed Practice
            </Badge>
          </div>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Section Practice Mode */}
          <Card
            className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-lg bg-white dark:bg-gray-800 ${examMode === 'section'
              ? 'border-blue-500 shadow-lg ring-2 ring-blue-100 dark:ring-blue-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            onClick={() => {
              setExamMode('section');
              setSelectedSection(-1);
            }}
          >
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${examMode === 'section' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'} text-white flex-shrink-0`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Section Practice</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                    Practice specific sections with 15 questions each.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <Clock className="w-3 h-3 mr-1 text-blue-500 dark:text-blue-400" />
                      <span className="font-medium">7 minutes</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <Target className="w-3 h-3 mr-1 text-green-500 dark:text-green-400" />
                      <span className="font-medium">15 questions per section</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Exam Mode */}
          <Card
            className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-lg bg-white dark:bg-gray-800 ${examMode === 'full'
              ? 'border-purple-500 shadow-lg ring-2 ring-purple-100 dark:ring-purple-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            onClick={() => {
              setExamMode('full');
              setSelectedSection(-1);
            }}
          >
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${examMode === 'full' ? 'bg-purple-500' : 'bg-gray-400 dark:bg-gray-600'} text-white flex-shrink-0`}>
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Full Exam</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                    Complete exam with all 140 questions in 90 minutes. Simulate real exam conditions.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <Clock className="w-3 h-3 mr-1 text-blue-500 dark:text-blue-400" />
                      <span className="font-medium">90 minutes</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <Users className="w-3 h-3 mr-1 text-green-500 dark:text-green-400" />
                      <span className="font-medium">{totalQuestions} questions</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Section */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 dark:from-gray-900 dark:to-gray-800 text-white rounded-t-xl p-4">
            <CardTitle className="text-lg sm:text-xl font-bold text-center">
              {examMode === 'section' ? 'Configure Section Practice' : 'Configure Full Exam'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">

            <div className="space-y-4 sm:space-y-6">
              {examMode === 'section' && (
                <div>
                  <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    <BookmarkIcon className="w-4 h-4 inline mr-2 text-blue-600 dark:text-blue-400" />
                    Choose Your Section
                  </label>

                  {/* Section Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {sections.map((section) => {
                      const isCompleted = getSectionStatus(section.id) === 'completed';
                      return (
                        <Card
                          key={section.id}
                          className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-md bg-white dark:bg-gray-800 ${selectedSection === section.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md ring-1 ring-blue-200 dark:ring-blue-800'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-25'
                            }`}
                          onClick={() => setSelectedSection(section.id)}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center">
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${selectedSection === section.id
                                  ? 'bg-blue-500 text-white'
                                  : isCompleted
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                                  }`}>
                                  {isCompleted ? '✓' : section.name.split(' ')[1]}
                                </div>
                                <div className="ml-2">
                                  <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200">{section.name}</h4>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">{section.description}</p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Questions:</span>
                                <Badge variant="outline" className="text-xs px-2 py-0 border-gray-300 dark:border-gray-600">
                                  {section.questionCount}
                                </Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Time:</span>
                                <Badge variant="outline" className="text-xs px-2 py-0 border-gray-300 dark:border-gray-600">
                                  7 min
                                </Badge>
                              </div>
                            </div>

                            {selectedSection === section.id && (
                              <div className="mt-2 flex items-center text-blue-600 dark:text-blue-400">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                <span className="text-xs font-medium">Selected</span>
                              </div>
                            )}

                            {isCompleted && selectedSection !== section.id && (
                              <div className="mt-2 flex items-center text-green-600 dark:text-green-400">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                <span className="text-xs font-medium">Completed</span>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {examMode === 'full' && (
                <div>
                  <div className="text-center bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Full Engineering Law Exam</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-400">
                      Complete exam with all {totalQuestions} questions in 90 minutes
                    </p>
                    <div className="flex justify-center gap-4 mt-3">
                      <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                        <Users className="w-4 h-4 mr-1" />
                        {totalQuestions} Questions
                      </div>
                      <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                        <Clock className="w-4 h-4 mr-1" />
                        90 Minutes
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Time and Instructions Display */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-full">
                      <Timer className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-1">Time Limit</h4>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{getTimeLimit()} minutes</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full">
                      <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h4 className="font-bold text-green-800 dark:text-green-300 text-sm mb-1">Passing Grade</h4>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">70%</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                N/B:
              </h4>
              <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1">
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
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              built with ❤️ by <a href="" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">raqibcodes</a>
            </p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ExamSetup;
