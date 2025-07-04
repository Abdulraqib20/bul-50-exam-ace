
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, Users, Award } from 'lucide-react';

interface ExamSetupProps {
  onStartExam: (timeLimit: number, questionCount: number) => void;
  totalQuestions: number;
}

const ExamSetup: React.FC<ExamSetupProps> = ({ onStartExam, totalQuestions }) => {
  const [timeLimit, setTimeLimit] = useState<number>(60); // minutes
  const [questionCount, setQuestionCount] = useState<number>(totalQuestions);

  const handleStartExam = () => {
    onStartExam(timeLimit, questionCount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">BUL 506 Exam Ace</h1>
          <p className="text-lg text-gray-600">
            Engineering Law CBT Practice - Master your past questions
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Configure Your Practice Exam</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Questions Available</h3>
                <p className="text-2xl font-bold text-blue-600">{totalQuestions}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Passing Grade</h3>
                <p className="text-2xl font-bold text-green-600">70%</p>
              </div>
            </div>

            <div className="space-y-6">
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
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="90">1 hour 30 minutes</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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
                    <SelectItem value="10">10 questions (Quick Test)</SelectItem>
                    <SelectItem value="20">20 questions (Practice Test)</SelectItem>
                    <SelectItem value={totalQuestions.toString()}>{totalQuestions} questions (Full Test)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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

            <div className="flex justify-center mt-8">
              <Button
                onClick={handleStartExam}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-3 text-lg"
              >
                Start Practice Exam
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
