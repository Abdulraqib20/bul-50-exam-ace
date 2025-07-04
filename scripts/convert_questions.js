import fs from 'fs';

// Read the JSON file
const jsonData = fs.readFileSync('bul506_past_questions.json', 'utf8');
const data = JSON.parse(jsonData);

const questions = data.questions;
console.log(`Found ${questions.length} questions`);

// Function to convert letter answer to number index
const convertAnswerToIndex = (letter) => {
    const letterToIndex = {
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3
    };
    return letterToIndex[letter.toUpperCase()] || 0;
};

// Create TypeScript content
let tsContent = `
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// BUL 506 Engineering Law Past Questions
export const sampleQuestions: Question[] = [
`;

// Convert each question
questions.forEach((question, index) => {
    const cleanQuestion = question.question.replace(/"/g, '\\"');
    const cleanExplanation = (question.explanation || '').replace(/"/g, '\\"');

    tsContent += `  {
    id: ${question.id},
    question: "${cleanQuestion}",
    options: [
`;

    // Add options
    question.options.forEach(option => {
        const cleanOption = option.replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
        tsContent += `      "${cleanOption}",\n`;
    });

    tsContent += `    ],
    correctAnswer: ${convertAnswerToIndex(question.correctAnswer)},
    explanation: "${cleanExplanation}"
  }`;

    // Add comma except for last question
    if (index < questions.length - 1) {
        tsContent += ',';
    }
    tsContent += '\n';
});

tsContent += `
];

// Section information for organizing questions
export const getSectionQuestions = (sectionIndex: number): Question[] => {
  const questionsPerSection = 15;
  const totalSections = Math.ceil(sampleQuestions.length / questionsPerSection);

  if (sectionIndex < 0 || sectionIndex >= totalSections) {
    return [];
  }

  const startIndex = sectionIndex * questionsPerSection;
  const endIndex = Math.min(startIndex + questionsPerSection, sampleQuestions.length);

  return sampleQuestions.slice(startIndex, endIndex);
};

export const getSectionInfo = () => {
  const questionsPerSection = 15;
  const totalSections = Math.ceil(sampleQuestions.length / questionsPerSection);
  const sections = [];

  for (let i = 0; i < totalSections; i++) {
    const startQuestion = i * questionsPerSection + 1;
    const endQuestion = Math.min((i + 1) * questionsPerSection, sampleQuestions.length);
    const actualQuestionCount = endQuestion - startQuestion + 1;

    sections.push({
      id: i,
      name: \`Section \${String.fromCharCode(65 + i)}\`, // A, B, C, etc.
      description: \`Questions \${startQuestion}-\${endQuestion}\`,
      questionCount: actualQuestionCount,
      topics: \`BUL 506 Engineering Law - Part \${i + 1}\`
    });
  }

  return sections;
};

// Export exam metadata
export const examMetadata = {
  title: "BUL 506 - Engineering Law Past Questions",
  totalQuestions: ${questions.length}
};
`;

// Write the TypeScript file
fs.writeFileSync('src/data/sampleQuestions.ts', tsContent);
console.log(`✅ Successfully converted ${questions.length} questions to TypeScript!`);
console.log('📁 Updated: src/data/sampleQuestions.ts');
