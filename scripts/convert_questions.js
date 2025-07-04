import fs from 'fs';

// Read the JSON file
const jsonData = fs.readFileSync('bul506_questions.json', 'utf8');
const data = JSON.parse(jsonData);

const questions = data.questions;
console.log(`Found ${questions.length} questions`);

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
    correctAnswer: ${question.correctAnswer},
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
