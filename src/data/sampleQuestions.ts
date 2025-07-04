
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// BUL 506 Engineering Law Past Questions
export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "The essence of Engineering law is to",
    options: [
      "guide the activities of Engineers in engineering activities",
      "guide Engineer in all his endeavour",
      "protect engineers across the world",
      "guide the activities of humanbeing in the society",
    ],
    correctAnswer: 0,
    explanation: "Engineering law specifically guides engineers in their professional engineering activities."
  },
  {
    id: 2,
    question: "One of the characteristics of customary law is",
    options: [
      "Mirror of acceptable usage",
      "meet repulganancy test",
      "meet consistency test",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Customary law must be a mirror of acceptable usage in the community."
  },
  {
    id: 3,
    question: "The enforcement of which that may be backed by sanction is",
    options: [
      "Law",
      "Custom",
      "Morality",
      "custom and morality",
    ],
    correctAnswer: 0,
    explanation: "Law is the only one that can be enforced with legal sanctions."
  },
  {
    id: 4,
    question: "Law passed by the Nigeria legislators on the ways and manner engineering business should be conducted is",
    options: [
      "COREN Act",
      "Engineering principles",
      "Engineering law",
      "Common law",
    ],
    correctAnswer: 0,
    explanation: "The COREN Act specifically regulates engineering practice in Nigeria."
  },
  {
    id: 5,
    question: "______ can be defined as the rules and regulations guiding the conduct of engineers in the discharge of their duties backed by sanction",
    options: [
      "Engineering law",
      "common law of engineering",
      "Equitable principle of engineering",
      "Acts of national assembly",
    ],
    correctAnswer: 0,
    explanation: "Engineering law specifically governs engineer conduct with legal backing."
  },
  {
    id: 6,
    question: "The major source of Engineering law in Nigeria is",
    options: [
      "Nigeria Constitution, 1999 as amended",
      "National Assembly law, 1999 as amended",
      "Nigeria Constitution, 1990 as amended",
      "Nigeria Constitution, 1989 as amended",
    ],
    correctAnswer: 0,
    explanation: "The 1999 Constitution is the supreme law and major source of all laws in Nigeria."
  },
  {
    id: 7,
    question: "An example of Nigerian Statutes applicable to Engineering practices is",
    options: [
      "COREN Act",
      "Common law",
      "Equity",
      "Received English law",
    ],
    correctAnswer: 0,
    explanation: "COREN Act is a specific Nigerian statute for engineering practice."
  },
  {
    id: 8,
    question: "One of the primary sources of Engineering law is",
    options: [
      "Received English law",
      "subsidiary legislation",
      "Local government bye-law",
      "State engineering law",
    ],
    correctAnswer: 0,
    explanation: "Received English law is a primary source of Nigerian law system."
  },
  {
    id: 9,
    question: "Engineering law made by the central legislature before 1st october, 1954 is",
    options: [
      "Ordinance",
      "Act",
      "Edict",
      "Bye-law",
    ],
    correctAnswer: 0,
    explanation: "Laws made by central legislature before independence were called Ordinances."
  },
  {
    id: 10,
    question: "Engineering law made by the state legislature during the military era is",
    options: [
      "Edict",
      "ordinance",
      "Bye-law",
      "Act",
    ],
    correctAnswer: 0,
    explanation: "State laws during military rule were called Edicts."
  },
  {
    id: 11,
    question: "Law made by the Federal military government to regulate engineering business in Nigeria is called",
    options: [
      "Decree",
      "Bye-law",
      "Edict",
      "Act",
    ],
    correctAnswer: 0,
    explanation: "Federal military government laws were called Decrees."
  },
  {
    id: 12,
    question: "One of the characteristics of custom as applicable to engineering business in Nigeria is",
    options: [
      "unwritten",
      "unknown to custom",
      "unknown to law",
      "need not be proved",
    ],
    correctAnswer: 0,
    explanation: "Customary law is traditionally unwritten and passed down orally."
  },
  {
    id: 13,
    question: "An engineer can prove custom of his profession by any of the following:",
    options: [
      "Calling president of COREN",
      "calling legal practitioner",
      "by written statement",
      "by tendering constitution 1999",
    ],
    correctAnswer: 0,
    explanation: "The president of COREN would be an expert witness on engineering customs."
  },
  {
    id: 14,
    question: "Engineering law that is against public assessment would be accepted as standard of behaviour:",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "Laws against public interest cannot be accepted as standard behavior."
  },
  {
    id: 15,
    question: "The principle that customary law must be a mirror of acceptable usage is decided in the case of",
    options: [
      "Owonyi v. omotosho",
      "Dampamg v Sale",
      "Ada v adeola",
      "omotosho v owonyi",
    ],
    correctAnswer: 0,
    explanation: "Owonyi v. Omotosho established this principle in customary law."
  },
  {
    id: 16,
    question: "Judgment of the court whereby engineering principle is being generated is called",
    options: [
      "Precedent",
      "Authority",
      "judgement",
      "Statement",
    ],
    correctAnswer: 0,
    explanation: "Precedent refers to court decisions that establish legal principles."
  },
  {
    id: 17,
    question: "A court where its decision binds all other courts in Nigeria is",
    options: [
      "Supreme court",
      "court of Appeal",
      "Shariah court",
      "High court",
    ],
    correctAnswer: 0,
    explanation: "The Supreme Court is the highest court with binding authority over all others."
  },
  {
    id: 18,
    question: "One of the court of record is",
    options: [
      "High court of kwara state",
      "Magistrate court of kwara state",
      "Upper Area court",
      "Area court",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation: "High Courts are courts of record as established by the Constitution."
  },
  {
    id: 19,
    question: "Court of Appeal and High Court are court of coordinate jurisdiction",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Court of Appeal is superior to High Court, so they are not coordinate."
  },
  {
    id: 20,
    question: "State High and Federal High court are courts of coordinate jurisdiction",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "State and Federal High Courts have coordinate jurisdiction."
  },
  {
    id: 21,
    question: "Federal High court and National Industrial court are court of coordinate jurisdiction",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Both are federal courts with coordinate jurisdiction."
  },
  {
    id: 22,
    question: "Shariah court of Appeal and Customary court of Appeal are not courts of coordinate jurisdiction",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "They are courts of coordinate jurisdiction at the appellate level."
  },
  {
    id: 23,
    question: "Magistrate, Upper or Area and District courts are courts of Record",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "These are not courts of record under the Constitution."
  },
  {
    id: 24,
    question: "A court is a court of record because it is not mentioned in the constitution",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Courts of record are specifically mentioned in the Constitution."
  },
  {
    id: 25,
    question: "The decision of court of Appeal on Engineering matter binds the Supreme court",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Lower courts cannot bind higher courts; Supreme Court is not bound by Court of Appeal."
  },
  {
    id: 26,
    question: "Tortious liability of an engineer may be inform of all of the following except",
    options: [
      "partial false imprisonment",
      "Assault",
      "Negligent",
      "Battery",
    ],
    correctAnswer: 0,
    explanation: "There is no 'partial false imprisonment' in tort law."
  },
  {
    id: 27,
    question: "An engineer putting fear into the mind of his colleagues that a battery is about to be committed is responsible for the tort of",
    options: [
      "Assault",
      "Battery",
      "Battery and Assault",
      "Assault or battery",
    ],
    correctAnswer: 0,
    explanation: "Assault is creating apprehension of immediate battery."
  },
  {
    id: 28,
    question: "Engineer Ajadi approached Engineer Oloje menacingly. Engineer Ajadi has committed the tort of:",
    options: [
      "Assault",
      "Battery",
      "False prison",
      "none of the above",
    ],
    correctAnswer: 0,
    explanation: "Menacing approach creates apprehension, which is assault."
  },
  {
    id: 29,
    question: "Projection of torch light on the body of another is",
    options: [
      "Battery",
      "Battery and Assault",
      "Assault and Battery",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: "Physical contact with light beam constitutes battery."
  },
  {
    id: 30,
    question: "Intentional application of force into the body of another is simply refer to as",
    options: [
      "Battery",
      "Assault",
      "Assault and Battery",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation: "Battery is the actual physical contact/application of force."
  },
  {
    id: 31,
    question: "In the case of _______ the court held that in false imprisonment, restraint must be complete and total",
    options: [
      "Bird v. Jones",
      "Jones v Bird",
      "Bird Jones v Jones Bird",
      "Bird v. Bird",
    ],
    correctAnswer: 0,
    explanation: "Bird v. Jones established the principle of complete restraint for false imprisonment."
  },
  {
    id: 32,
    question: "Volenti non fit injuria is a defence available to trespass to person",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Volenti non fit injuria (consent) is a valid defence to trespass to person."
  },
  {
    id: 33,
    question: "_______ is an intentional or unintentional act of bringing offensive object into the property of another",
    options: [
      "Strict liability",
      "Negligence",
      "Vicarious liability",
      "Tortious liability",
    ],
    correctAnswer: 0,
    explanation: "This appears to be describing strict liability scenarios."
  },
  {
    id: 34,
    question: "Res ipsa loquitur is interpreted to mean",
    options: [
      "Thing speaks for itself",
      "many things speak for themselves",
      "all of the above",
      "none of the above",
    ],
    correctAnswer: 0,
    explanation: "Res ipsa loquitur literally means 'the thing speaks for itself'."
  },
  {
    id: 35,
    question: "An Engineer who wants to prove the tort of negligence must prove all the following except",
    options: [
      "Consent",
      "Duty of care",
      "Breach of duty of care",
      "Damage",
    ],
    correctAnswer: 0,
    explanation: "Consent is not an element of negligence; it's a defence."
  },
  {
    id: 36,
    question: "All but one is a locus classical case on the tort of negligence",
    options: [
      "Donoghue v Stevenson",
      "Aigoro v. Anabuwa",
      "Bird v Jones",
      "Jones v Bird",
    ],
    correctAnswer: 0,
    explanation: "The question asks for which is NOT a negligence case - Donoghue v Stevenson IS the classic negligence case."
  },
  {
    id: 37,
    question: "All but one is not an element of engineering contract",
    options: [
      "creation of contractual relationship",
      "Offer",
      "intention to create legal relation",
      "capacity",
    ],
    correctAnswer: 0,
    explanation: "The question asks what is NOT an element - 'creation of contractual relationship' is not a standard element."
  },
  {
    id: 38,
    question: "An invitation to make an offer is _______",
    options: [
      "invitation to treat",
      "offer",
      "invitation to offer",
      "invitation to accept",
    ],
    correctAnswer: 0,
    explanation: "An invitation to make an offer is legally termed 'invitation to treat'."
  },
  {
    id: 39,
    question: "All but one is a form of contract that must be signed sealed and delivered",
    options: [
      "Formal contract",
      "Informal contract",
      "Former contract",
      "Informer contract",
    ],
    correctAnswer: 0,
    explanation: "The question asks which is NOT - Formal contracts DO require signing, sealing and delivery."
  },
  {
    id: 40,
    question: "The price at which the promise of an engineer is bought is called _______",
    options: [
      "Consideration",
      "market price",
      "conditional price",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: "In contract law, consideration is the price paid for a promise."
  },
  {
    id: 41,
    question: "All but one is not a valid contract of a minor",
    options: [
      "loan",
      "Beneficial contract",
      "Apprentice",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Loan contracts are NOT valid for minors."
  },
  {
    id: 42,
    question: "A person below the age of 18 years can validly enter into a contract",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Minors generally cannot enter into valid contracts except for necessaries."
  },
  {
    id: 43,
    question: "A conditional acceptance is a valid acceptance",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Conditional acceptance is actually a counter-offer, not valid acceptance."
  },
  {
    id: 44,
    question: "An offer can be made to the whole world",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Offers can be made to the world at large, as in Carlill v Carbolic."
  },
  {
    id: 45,
    question: "Consideration must be past",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Consideration must NOT be past; it must be present or future."
  },
  {
    id: 46,
    question: "Consideration need not be adequate but must be _______",
    options: [
      "Sufficient",
      "Cogent",
      "reasonable",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Consideration need not be adequate but must be sufficient."
  },
  {
    id: 47,
    question: "Acceptance must not be communicated to the offeror",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Acceptance MUST be communicated to the offeror."
  },
  {
    id: 48,
    question: "Acceptance must be communicated to offeror in unilateral contract",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "In unilateral contracts, acceptance is by performance, not communication."
  },
  {
    id: 49,
    question: "Carlill v Carbolic represents offer to the whole world",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Carlill v Carbolic is the classic case of offer to the world."
  },
  {
    id: 50,
    question: "Carlill v Carbolic is case on example of unilateral contract",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Carlill v Carbolic is the classic unilateral contract case."
  },
  {
    id: 51,
    question: "Acceptance must be direct and go straight to the term of offer",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Acceptance must mirror the terms of the offer exactly."
  },
  {
    id: 52,
    question: "Acceptance in ignorance of offer constitutes a valid acceptance in the eyes of the law",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "One cannot accept an offer they don't know about."
  },
  {
    id: 53,
    question: "Engineering company Ltd may terminate her employment contract because of all the following except one",
    options: [
      "Notice",
      "Insubordination",
      "Lapse of time",
      "dishonesty",
    ],
    correctAnswer: 0,
    explanation: "Notice is a method of termination, not a reason for termination."
  },
  {
    id: 54,
    question: "One of the remedies for illegal termination of employee's contract in an Engineering company is",
    options: [
      "damages",
      "damage",
      "suing",
      "Reporting to Council of Engineers",
    ],
    correctAnswer: 0,
    explanation: "Damages is the legal remedy for wrongful termination."
  },
  {
    id: 55,
    question: "Employer must provide work in the following contract of employment",
    options: [
      "Exhibition of Skill",
      "Contract of necessity",
      "contract of acquisition",
      "Transfer of skill and necessity",
    ],
    correctAnswer: 0,
    explanation: "In exhibition of skill contracts, work must be provided for skill demonstration."
  },
  {
    id: 56,
    question: "Employer is not obliged to provide work for his employee as it was held in the case of",
    options: [
      "Turner v. Sawdon",
      "Sawdon v. Turner",
      "Turner v. Cooker",
      "Cooker v. Sawdon",
    ],
    correctAnswer: 0,
    explanation: "Turner v. Sawdon established that employers generally need not provide work."
  },
  {
    id: 57,
    question: "It is not mandatory for the employer to give reference to any of his employee, however, if he must give, it must be honest otherwise the employee may sue for",
    options: [
      "defamation",
      "damages",
      "damage",
      "compensation",
    ],
    correctAnswer: 0,
    explanation: "Dishonest references can give rise to defamation claims."
  },
  {
    id: 58,
    question: "One of the defences available to engineering company, employer where she breached her duty to employee is",
    options: [
      "Remoteness of damage",
      "damages of remoteness",
      "Remoteness of damages",
      "Remoteness of compensation",
    ],
    correctAnswer: 0,
    explanation: "Remoteness of damage is a valid defence limiting liability."
  },
  {
    id: 59,
    question: "Duty to provide safe place of work is tantamount to",
    options: [
      "duty of care",
      "duty of employee",
      "Collective duty of employee and employer",
      "employment duty",
    ],
    correctAnswer: 0,
    explanation: "Providing safe workplace is part of the employer's duty of care."
  },
  {
    id: 60,
    question: "The latin word used to describe consent in a contract of employment is",
    options: [
      "Consensus ad idem",
      "Consciousness ade dim",
      "Consent requree",
      "ad idem consensus",
    ],
    correctAnswer: 0,
    explanation: "Consensus ad idem means 'meeting of minds' or mutual consent."
  },
  {
    id: 61,
    question: "The general function of COREN is",
    options: [
      "to regulate engineering work and practices in Nigeria",
      "To punish the engineers",
      "to prosecute the engineers",
      "Measure the standard engineering practices in Nigeria",
    ],
    correctAnswer: 0,
    explanation: "COREN's primary function is to regulate engineering practices."
  },
  {
    id: 62,
    question: "Induction of registered engineering technicians is contained in",
    options: [
      "S. 2(g) COREN Act",
      "sec. 2 COREN Act",
      "S. 2(3) COREN Act",
      "S.3 (2) COREN Act",
    ],
    correctAnswer: 0,
    explanation: "Section 2(g) of COREN Act deals with technician induction."
  },
  {
    id: 63,
    question: "Consideration must move",
    options: [
      "from promisee to promisor",
      "Promisor to promisee",
      "Offeree to offeror",
      "Acceptor to Acceptee",
    ],
    correctAnswer: 0,
    explanation: "Consideration must move from the promisee to the promisor."
  },
  {
    id: 64,
    question: "Carlill v. Carbolic depicts",
    options: [
      "Unilateral contract",
      "Multilateral Contract",
      "both a & b",
      "None",
    ],
    correctAnswer: 0,
    explanation: "Carlill v. Carbolic is the classic unilateral contract case."
  },
  {
    id: 65,
    question: "_______ contract on one hand is a contract whereby parties exchange promises to one another",
    options: [
      "Bilateral",
      "Unilateral",
      "Multilateral",
      "Execution",
    ],
    correctAnswer: 0,
    explanation: "Bilateral contracts involve exchange of promises by both parties."
  },
  {
    id: 66,
    question: "_______ contract is the one where it is only one party that promises to do an act in exchange for another promise",
    options: [
      "Unilateral",
      "Multilateral",
      "Bilateral",
      "both a & b",
    ],
    correctAnswer: 0,
    explanation: "Unilateral contracts involve only one party making a promise."
  },
  {
    id: 67,
    question: "_______ is an invitation to make an offer",
    options: [
      "Invitation to treat",
      "Invitation to offer",
      "inviting acceptance",
      "Offer",
    ],
    correctAnswer: 0,
    explanation: "Invitation to treat is the legal term for invitation to make an offer."
  },
  {
    id: 68,
    question: "_______ an expression of readiness to contract",
    options: [
      "Offer",
      "Offeror",
      "Offeree",
      "Acceptance",
    ],
    correctAnswer: 0,
    explanation: "An offer is an expression of readiness to contract on specific terms."
  },
  {
    id: 69,
    question: "Display of engineering product or goods in a shop window is illustrated in the case of",
    options: [
      "Pharmaceutical Society of Great Britain v. Boots Cash Chemist",
      "Britain v Boot",
      "Cash v Boot",
      "Pharmaceutical co. v. Britain Society",
    ],
    correctAnswer: 0,
    explanation: "This case established that shop displays are invitations to treat."
  },
  {
    id: 70,
    question: "Illiterate is bound by",
    options: [
      "Contract of necessity",
      "Invalid contract",
      "Valid and Void Contract",
      "Voidable Contract",
    ],
    correctAnswer: 0,
    explanation: "Illiterate persons are bound by contracts for necessaries."
  },
  {
    id: 71,
    question: "Acceptance may be conditional",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Conditional acceptance is not valid acceptance but a counter-offer."
  },
  {
    id: 72,
    question: "Customary law must not be repugnant to constitution",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Customary law must not be repugnant to the Constitution."
  },
  {
    id: 73,
    question: "Which of these is not criteria for contract formation",
    options: [
      "Contractual Capacity",
      "Offer & Acceptance",
      "Consideration",
      "Legal relations",
    ],
    correctAnswer: 0,
    explanation: "All listed are criteria for contract formation - this appears to be a poorly worded question."
  },
  {
    id: 74,
    question: "Expression from offeree stating that he accepts the statement of the offer from the offeror is",
    options: [
      "acceptance",
      "offer",
      "consideration",
      "invitation to treat",
    ],
    correctAnswer: 0,
    explanation: "This describes acceptance of an offer."
  },
  {
    id: 75,
    question: "Importation of Communication equipment is _______ contract",
    options: [
      "legal",
      "void",
      "illegal",
      "voidable",
    ],
    correctAnswer: 0,
    explanation: "Importation of communication equipment is generally legal."
  },
  {
    id: 76,
    question: "All except _______ is not a characteristic of an offer",
    options: [
      "synonymous to invitation to treat",
      "It must be complete and final",
      "it must be clear",
      "it is a declaration to enter negotiation",
    ],
    correctAnswer: 0,
    explanation: "Offer is NOT synonymous to invitation to treat."
  },
  {
    id: 77,
    question: "An offer becomes effective",
    options: [
      "when it reaches the offeree",
      "by post",
      "before it reaches the offeree",
      "when it reaches the offeror",
    ],
    correctAnswer: 0,
    explanation: "An offer becomes effective when it reaches the offeree."
  },
  {
    id: 78,
    question: "An offer accepted by anyone could be seen as a contract",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "Only the intended offeree can accept an offer."
  },
  {
    id: 79,
    question: "A valid acceptance needs to be",
    options: [
      "unconditional and unequivocal",
      "conditional",
      "unconditional",
      "conditional and equivocal",
    ],
    correctAnswer: 0,
    explanation: "Valid acceptance must be unconditional and unequivocal."
  },
  {
    id: 80,
    question: "Another name for formal contract is",
    options: [
      "specialty",
      "company",
      "implied",
      "expressed",
    ],
    correctAnswer: 0,
    explanation: "Formal contracts are also called specialty contracts."
  },
  {
    id: 81,
    question: "A promise made by one party in exchange for an act of other party",
    options: [
      "unilateral",
      "executed",
      "executory",
      "expressed",
    ],
    correctAnswer: 0,
    explanation: "This describes a unilateral contract."
  },
  {
    id: 82,
    question: "An offer would terminate under any of the following except",
    options: [
      "by non acceptance of the offer within the time prescribed for the offer",
      "on the rejection of the offer",
      "on the death of either offeror or offeree",
      "by non acceptance of the offer within the time prescribed for the acceptance",
    ],
    correctAnswer: 0,
    explanation: "The question asks what does NOT terminate an offer - this option is poorly worded."
  },
  {
    id: 83,
    question: "Counter offer",
    options: [
      "destroys the original offer",
      "validates the original offer",
      "legalizes the original offer",
      "legalizes and validates the original offer",
    ],
    correctAnswer: 0,
    explanation: "A counter offer destroys/terminates the original offer."
  },
  {
    id: 84,
    question: "Consideration must move from promisor to promisee",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "Consideration must move from promisee to promisor, not the other way."
  },
  {
    id: 85,
    question: "An offer may be revoked before",
    options: [
      "it being accepted",
      "after it being accepted",
      "before and after it being accepted",
      "invitation to treat",
    ],
    correctAnswer: 0,
    explanation: "An offer can only be revoked before acceptance."
  },
  {
    id: 86,
    question: "All agreements are contracts but not all contracts are agreements",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "All contracts are agreements, but not all agreements are contracts."
  },
  {
    id: 87,
    question: "All legal agreements are contracts but not all legal contracts are agreements",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "This statement is logically incorrect."
  },
  {
    id: 88,
    question: "Case of Pharmaceutical Society of Great Britain V Boots Cash Chemist describes",
    options: [
      "invitation to treat",
      "offer",
      "acceptance",
      "counter offer",
    ],
    correctAnswer: 0,
    explanation: "This case established that shop displays are invitations to treat."
  },
  {
    id: 89,
    question: "Lagunjo V Abake case is an example of",
    options: [
      "contract to marry",
      "capacity to contract",
      "acceptance",
      "counter offer",
    ],
    correctAnswer: 0,
    explanation: "This case deals with marriage contracts."
  },
  {
    id: 90,
    question: "Who among these has no capacity to contract",
    options: [
      "infant & married woman",
      "Alien",
      "illiterate",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: "Traditionally, infants and married women had limited contractual capacity."
  },
  {
    id: 91,
    question: "Application of force to the person is",
    options: [
      "battery",
      "assault",
      "assault and battery",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Battery is the actual application of force to a person."
  },
  {
    id: 92,
    question: "Price paid by one party for the act or promise of other party is",
    options: [
      "consideration",
      "offer",
      "acceptance",
      "capacity",
    ],
    correctAnswer: 0,
    explanation: "Consideration is the price paid for a promise or act."
  },
  {
    id: 93,
    question: "Two types of consideration are",
    options: [
      "executed and executory",
      "implied and expressed",
      "bilateral and unilateral",
      "none",
    ],
    correctAnswer: 0,
    explanation: "Consideration is classified as executed or executory."
  },
  {
    id: 94,
    question: "The law that regulates the internal affairs of the company is",
    options: [
      "article of association",
      "memorandum of association",
      "memorandum of directors of company",
      "share and Debentures",
    ],
    correctAnswer: 0,
    explanation: "Articles of Association govern internal company affairs."
  },
  {
    id: 95,
    question: "Elements of contract are",
    options: [
      "4",
      "5",
      "6",
      "3",
    ],
    correctAnswer: 0,
    explanation: "The four elements are: offer, acceptance, consideration, and intention to create legal relations."
  },
  {
    id: 96,
    question: "Transfer of Land without the consent of the head of the family is _______ contract",
    options: [
      "void",
      "voidable",
      "illegal",
      "implied",
    ],
    correctAnswer: 0,
    explanation: "Such transfers are void under customary law."
  },
  {
    id: 97,
    question: "An offer may come to an end by all except",
    options: [
      "consideration",
      "Lapse",
      "revocation",
      "rejection",
    ],
    correctAnswer: 0,
    explanation: "Consideration does not terminate an offer."
  },
  {
    id: 98,
    question: "Where a counter offer is accepted then its terms and not the terms of the original offer becomes the terms of the contract",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "When a counter offer is accepted, its terms become the contract terms."
  },
  {
    id: 99,
    question: "Hyde v Wrench: On June 6 A offered B a farm for #250000; B made a counter offer of #150000. On 27 June, A rejected the counter offer. On 29 June B made a purported acceptance of the offer of June 6. Would there be a contract?",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "The counter offer destroyed the original offer, so no contract exists."
  },
  {
    id: 100,
    question: "The principle of Unilateral Contract was laid down in _______ when made to the public",
    options: [
      "Carlill v Carbolic Smoke Ball Co",
      "Kalil v Carbolic Smoke ball",
      "Payne v Cave",
      "Carlill v Kabolic smoke Ball Co",
    ],
    correctAnswer: 0,
    explanation: "Carlill v Carbolic Smoke Ball Co established unilateral contract principles."
  },
  {
    id: 101,
    question: "To kiss someone without his/her consent is",
    options: [
      "battery",
      "assault",
      "assault and battery",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Unwanted physical contact constitutes battery."
  },
  {
    id: 102,
    question: "All but one of the following are documents required for incorporation of company",
    options: [
      "total share declaration",
      "list of directors",
      "memorandum of association",
      "none",
    ],
    correctAnswer: 0,
    explanation: "Total share declaration is not a required incorporation document."
  },
  {
    id: 103,
    question: "All but one of these types of contract is enforceable against an infant",
    options: [
      "contract that have element of a valid contract",
      "contract of employment",
      "contract willingly entered by an infant",
      "contract for necessaries and services",
    ],
    correctAnswer: 0,
    explanation: "General contracts are not enforceable against infants."
  },
  {
    id: 104,
    question: "An example of contract under seal is",
    options: [
      "Deed",
      "Multilateral contract",
      "Ordinary contract",
      "Unilateral contract",
    ],
    correctAnswer: 0,
    explanation: "Deeds are contracts under seal."
  },
  {
    id: 105,
    question: "Which of these rules is not correct",
    options: [
      "Consideration need not be inadequate",
      "Consideration must not be past",
      "Consideration must not be illegal",
      "Consideration must not be vague",
    ],
    correctAnswer: 0,
    explanation: "The correct rule is 'Consideration need not be adequate'."
  },
  {
    id: 106,
    question: "An act made by one party in exchange for a promise of other party",
    options: [
      "executed consideration",
      "executory consideration",
      "expressed",
      "simple",
    ],
    correctAnswer: 0,
    explanation: "This describes executed consideration."
  },
  {
    id: 107,
    question: "Before there could be a valid contract, the parties to the agreement must have _______ to enter into that type of contract",
    options: [
      "capacity",
      "offer",
      "intention to create legal relation",
      "acceptance",
    ],
    correctAnswer: 0,
    explanation: "Contractual capacity is essential for valid contracts."
  },
  {
    id: 108,
    question: "Past event which is used as backup in the present is",
    options: [
      "judicial precedent",
      "Evidence",
      "article",
      "none of the above",
    ],
    correctAnswer: 0,
    explanation: "Judicial precedent uses past decisions for present cases."
  },
  {
    id: 109,
    question: "_______ does not determine the validity of customary law",
    options: [
      "inequality test",
      "repugnancy test",
      "incompatibility test",
      "inconsistency test",
    ],
    correctAnswer: 0,
    explanation: "Inequality test is not a recognized test for customary law validity."
  },
  {
    id: 110,
    question: "To point a gun at someone and to slap someone is",
    options: [
      "assault and battery",
      "battery",
      "assault",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Pointing gun is assault, slapping is battery - both together."
  },
  {
    id: 111,
    question: "A moral promise is a valid consideration",
    options: [
      "No",
      "Yes",
    ],
    correctAnswer: 0,
    explanation: "Moral promises are not legally sufficient consideration."
  },
  {
    id: 112,
    question: "Insane and drunken persons are bound to pay a reasonable price for necessaries according to the same rules that apply to infants",
    options: [
      "Yes",
      "No",
    ],
    correctAnswer: 0,
    explanation: "Similar rules apply to all persons with limited capacity."
  }

];

// Export exam metadata
export const examMetadata = {
  title: "BUL 506 - Engineering Law Past Questions",
  totalQuestions: 112
};
