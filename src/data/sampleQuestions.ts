
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// Sample questions for BUL 50 - replace these with your actual PDF content
export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of contract law?",
    options: [
      "To punish wrongdoers",
      "To provide a framework for voluntary agreements",
      "To regulate government activities",
      "To establish criminal penalties"
    ],
    correctAnswer: 1,
    explanation: "Contract law primarily serves to provide a legal framework that enables and enforces voluntary agreements between parties, ensuring that promises are kept and expectations are met."
  },
  {
    id: 2,
    question: "Which of the following is NOT an essential element of a valid contract?",
    options: [
      "Offer",
      "Acceptance", 
      "Consideration",
      "Written documentation"
    ],
    correctAnswer: 3,
    explanation: "While written documentation can be important for certain types of contracts, it is not universally required. Many contracts can be valid even if they are oral, though some specific types of contracts must be in writing under the Statute of Frauds."
  },
  {
    id: 3,
    question: "What is the 'mirror image rule' in contract law?",
    options: [
      "Contracts must be identical in all respects",
      "An acceptance must match the terms of the offer exactly",
      "Both parties must have equal bargaining power",
      "The contract must reflect the true intentions of both parties"
    ],
    correctAnswer: 1,
    explanation: "The mirror image rule states that an acceptance must match the terms of the offer exactly. Any variation in terms constitutes a counteroffer rather than an acceptance."
  },
  {
    id: 4,
    question: "In tort law, what is 'negligence'?",
    options: [
      "Intentional harm to another person",
      "Failure to exercise reasonable care",
      "Breaking a contractual obligation",
      "Violating a criminal statute"
    ],
    correctAnswer: 1,
    explanation: "Negligence is the failure to exercise the standard of care that a reasonably prudent person would exercise in similar circumstances, resulting in harm to another person."
  },
  {
    id: 5,
    question: "What is the doctrine of 'piercing the corporate veil'?",
    options: [
      "Allowing shareholders to see corporate financial records",
      "Holding shareholders personally liable for corporate debts",
      "Permitting corporate mergers without shareholder approval",
      "Requiring public disclosure of corporate activities"
    ],
    correctAnswer: 1,
    explanation: "Piercing the corporate veil is a legal doctrine that allows courts to hold shareholders personally liable for corporate debts when the corporation is used to commit fraud or when corporate formalities are not properly maintained."
  },
  {
    id: 6,
    question: "Which of the following best describes 'consideration' in contract law?",
    options: [
      "Being polite and respectful during negotiations",
      "Taking time to think about the contract terms",
      "Something of value exchanged between parties",
      "The legal capacity to enter into a contract"
    ],
    correctAnswer: 2,
    explanation: "Consideration is something of value (money, goods, services, or a promise) that each party gives to the other as part of their agreement. It's what makes a contract legally binding rather than just a gift or promise."
  },
  {
    id: 7,
    question: "What is the primary difference between civil law and criminal law?",
    options: [
      "Civil law deals with contracts, criminal law deals with torts",
      "Civil law involves private disputes, criminal law involves offenses against society",
      "Civil law is federal, criminal law is state-based",
      "Civil law requires a jury, criminal law does not"
    ],
    correctAnswer: 1,
    explanation: "The primary difference is that civil law deals with private disputes between individuals or entities, while criminal law involves offenses against society as a whole, prosecuted by the government."
  },
  {
    id: 8,
    question: "What is 'specific performance' as a contract remedy?",
    options: [
      "Monetary compensation for damages",
      "Cancellation of the contract",
      "Court order requiring actual performance of contract terms",
      "Punishment for breach of contract"
    ],
    correctAnswer: 2,
    explanation: "Specific performance is an equitable remedy where a court orders the breaching party to actually perform their contractual obligations rather than simply paying monetary damages."
  },
  {
    id: 9,
    question: "In employment law, what is 'at-will employment'?",
    options: [
      "Employees can only be fired for specific reasons",
      "Employment can be terminated by either party at any time for any legal reason",
      "Employees must give two weeks notice before quitting",
      "Employers must provide severance pay upon termination"
    ],
    correctAnswer: 1,
    explanation: "At-will employment means that either the employer or employee can terminate the employment relationship at any time, for any legal reason, or for no reason at all, without advance notice."
  },
  {
    id: 10,
    question: "What is the 'statute of limitations'?",
    options: [
      "The maximum penalty for a crime",
      "The time limit for bringing a legal action",
      "The number of witnesses required in court",
      "The standard of proof required in civil cases"
    ],
    correctAnswer: 1,
    explanation: "The statute of limitations is a law that sets the maximum time period within which legal proceedings must be initiated. After this time period expires, the claim is typically barred."
  },
  {
    id: 11,
    question: "What does 'due process' mean in constitutional law?",
    options: [
      "The right to a speedy trial",
      "Fair treatment through the normal judicial system",
      "The right to remain silent",
      "Protection against unreasonable searches"
    ],
    correctAnswer: 1,
    explanation: "Due process refers to the constitutional guarantee that legal proceedings will be fair and that individuals will be given notice and an opportunity to be heard before the government acts to take away their life, liberty, or property."
  },
  {
    id: 12,
    question: "In business law, what is a 'fiduciary duty'?",
    options: [
      "An obligation to pay debts on time",
      "A duty to act in another's best interests",
      "A requirement to maintain confidentiality",
      "An obligation to follow company policies"
    ],
    correctAnswer: 1,
    explanation: "A fiduciary duty is a legal obligation to act in the best interests of another party. This includes duties of loyalty, care, and good faith, commonly seen in relationships like attorney-client, trustee-beneficiary, or corporate officer-shareholder relationships."
  },
  {
    id: 13,
    question: "What is 'intellectual property'?",
    options: [
      "Physical property owned by smart people",
      "Creations of the mind protected by law",
      "Property used for educational purposes",
      "Government-owned research facilities"
    ],
    correctAnswer: 1,
    explanation: "Intellectual property refers to creations of the mind - such as inventions, literary and artistic works, designs, symbols, names, and images - that are protected by law through patents, copyrights, trademarks, and trade secrets."
  },
  {
    id: 14,
    question: "What is the difference between a 'void' and 'voidable' contract?",
    options: [
      "There is no difference; the terms are synonymous",
      "Void contracts are illegal; voidable contracts are unethical",
      "Void contracts have no legal effect; voidable contracts can be cancelled by one party",
      "Void contracts are written; voidable contracts are oral"
    ],
    correctAnswer: 2,
    explanation: "A void contract has no legal effect from the beginning and cannot be enforced. A voidable contract is valid until one of the parties chooses to void it, typically due to factors like fraud, duress, or lack of capacity."
  },
  {
    id: 15,
    question: "What is 'alternative dispute resolution' (ADR)?",
    options: [
      "Going to a different court",
      "Methods of resolving disputes outside of traditional litigation",
      "Appealing a court decision",
      "Hiring a different lawyer"
    ],
    correctAnswer: 1,
    explanation: "Alternative Dispute Resolution (ADR) refers to methods of resolving disputes outside of traditional court litigation, including mediation, arbitration, and negotiation. These methods are often faster, less expensive, and more private than going to court."
  }
];
