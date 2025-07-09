
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
    question: "Engineering company Ltd may terminate her employment contract because of all the following except one",
    options: [
      "Insubordination",
      "Notice",
      "Lapse of time",
      "dishonesty",
    ],
    correctAnswer: 1,
    explanation: "Notice is a proper way to terminate employment, not an improper reason"
  },
  {
    id: 2,
    question: "One of the remedies for illegal termination of employee's contract in an Engineering company is",
    options: [
      "damages",
      "damage",
      "suing",
      "Reporting to Council of Engineers",
    ],
    correctAnswer: 0,
    explanation: "Damages is the proper legal remedy for illegal termination"
  },
  {
    id: 3,
    question: "Employer must provide work in the following contract of employment",
    options: [
      "Exhibition of Skill",
      "Contract of necessity",
      "contract of acquisition",
      "Transfer of skill and necessity",
    ],
    correctAnswer: 0,
    explanation: "Exhibition of Skill contracts require the employer to provide work opportunities"
  },
  {
    id: 4,
    question: "Employer is not oblige to provide work for his employee as it was held in the case of",
    options: [
      "Turner v. Sandom",
      "Sandom v. Turner",
      "Turner v. Cooker",
      "Cooker v. Sandom",
    ],
    correctAnswer: 0,
    explanation: "Turner v. Sandom established the principle that employers are generally not obliged to provide work"
  },
  {
    id: 5,
    question: "It is not mandatory for the employer to give reference to any of his employee, however, if he must give, it must be honest otherwise the employee may sue for",
    options: [
      "defamation",
      "damages",
      "damage",
      "compensation",
    ],
    correctAnswer: 0,
    explanation: "Dishonest references can constitute defamation"
  },
  {
    id: 6,
    question: "One of the defences available to engineering company,employer where she breached her duty to employee is",
    options: [
      "Remoteness of damage",
      "damages of remoteness",
      "Remoteness of damages",
      "Remoteness of compensation",
    ],
    correctAnswer: 0,
    explanation: "Remoteness of damage is a valid defense in breach of duty cases"
  },
  {
    id: 7,
    question: "Duty to provide safe place of work is tantamount to",
    options: [
      "duty of care",
      "duty of employee",
      "Collective duty of employee and employer",
      "employment duty",
    ],
    correctAnswer: 0,
    explanation: "Providing a safe workplace is fundamentally a duty of care"
  },
  {
    id: 8,
    question: "The latin word used to described consent in a contract of employment is",
    options: [
      "Consensus ad idem",
      "Consciouness ade dim",
      "Consent requree",
      "ad idem consen sus",
    ],
    correctAnswer: 0,
    explanation: "Consensus ad idem means 'agreement of the minds'"
  },
  {
    id: 9,
    question: "The general function of COREN is",
    options: [
      "to regulate engineering work and practices in Nigeria",
      "To punish the engineers",
      "to prosecute the engineers",
      "Measure the standard engineering practices in Nigeria",
    ],
    correctAnswer: 0,
    explanation: "COREN's primary function is to regulate engineering work and practices in Nigeria"
  },
  {
    id: 10,
    question: "Induction of registered engineering technicians is contained in",
    options: [
      "sec. 2 Coren Act",
      "S. 2(g) Coren Act",
      "S. 2(3) Coren Act",
      "S.3 (2) Coren Act",
    ],
    correctAnswer: 1,
    explanation: "Section 2(g) of the COREN Act deals with induction of registered engineering technicians"
  },
  {
    id: 11,
    question: "Consideration must move",
    options: [
      "from promisee to promisor",
      "Promisor to promisee",
      "Oferee to offerror",
      "Acceptor to Acceptee",
    ],
    correctAnswer: 0,
    explanation: "Consideration must move from the promisee to the promisor"
  },
  {
    id: 12,
    question: "Carllil v. Carbolic depicts",
    options: [
      "Unilateral contract",
      "Multilateral Contract",
      "a & b",
      "None",
    ],
    correctAnswer: 0,
    explanation: "Carlill v. Carbolic is a classic case depicting unilateral contracts"
  },
  {
    id: 13,
    question: "…….contract on one hand is a contract whereby parties exchange promises to one another",
    options: [
      "Bilateral",
      "Unilateral",
      "Multilateral",
      "Execution",
    ],
    correctAnswer: 0,
    explanation: "Bilateral contracts involve exchange of promises between parties"
  },
  {
    id: 14,
    question: "……….contract is the one where it is only one party that promise to do an act in exchange for another promise",
    options: [
      "Unilateral",
      "Multilateral",
      "Bilateral",
      "a & b",
    ],
    correctAnswer: 0,
    explanation: "Unilateral contracts involve only one party making a promise in exchange for an act"
  },
  {
    id: 15,
    question: "…..is an invitation to make an offer",
    options: [
      "Invitation to treat",
      "Invitation to offer",
      "inviting acceptance",
      "Offer",
    ],
    correctAnswer: 0,
    explanation: "Invitation to treat is an invitation to make an offer"
  },
  {
    id: 16,
    question: "……an expression of readiness to contract",
    options: [
      "Offer",
      "Offeror",
      "Offeree",
      "Acceptance",
    ],
    correctAnswer: 0,
    explanation: "An offer is an expression of readiness to contract"
  },
  {
    id: 17,
    question: "Display of engineering product or goods in a shop window is illustrated in the case of",
    options: [
      "Pharmaceutical Society v. Great Britain",
      "Britain v Boot",
      "Cash v Boot",
      "Pharmaceutical co. v. Britain Society",
    ],
    correctAnswer: 0,
    explanation: "Pharmaceutical Society v. Great Britain deals with display of goods in shop windows"
  },
  {
    id: 18,
    question: "Illiterate is bound",
    options: [
      "Contract of necessity",
      "Invalid",
      "Valid and Void Contract",
      "Voidable Contract",
    ],
    correctAnswer: 0,
    explanation: "Illiterate persons are bound by contracts of necessity"
  },
  {
    id: 19,
    question: "Acceptance may be conditional",
    options: [
      "TRUE",
      "FALSE",
    ],
    correctAnswer: 1,
    explanation: "Conditional acceptance is not valid acceptance in contract law"
  },
  {
    id: 20,
    question: "Customary law must repugnant to constitution",
    options: [
      "TRUE",
      "FALSE",
    ],
    correctAnswer: 1,
    explanation: "Customary law must NOT be repugnant to the constitution"
  },
  {
    id: 21,
    question: "Which of these is not criteria for contract formation",
    options: [
      "Offer & Acceptance",
      "Consideration",
      "Law relations",
      "Contractual Capacity",
    ],
    correctAnswer: 2,
    explanation: "Law relations is not a standard criteria for contract formation"
  },
  {
    id: 22,
    question: "Expression from offeree starting that he accept the statement of the offer from the offeror is",
    options: [
      "offer",
      "consideration",
      "invitation to treat",
      "acceptance",
    ],
    correctAnswer: 3,
    explanation: "This describes acceptance of an offer"
  },
  {
    id: 23,
    question: "Importation of Communication equipment is ........contract",
    options: [
      "a void",
      "illegal contract",
      "voidable",
      "contract under seal",
    ],
    correctAnswer: 1,
    explanation: "Importation of communication equipment may be illegal contract depending on regulations"
  },
  {
    id: 24,
    question: "All except..........is not a characteristics of an offer",
    options: [
      "It must be complete and final",
      "it must be clear",
      "synonymous to invitation to treat",
      "it is a declaration to enter negotiation",
    ],
    correctAnswer: 2,
    explanation: "An offer is not synonymous to invitation to treat"
  },
  {
    id: 25,
    question: "An offer becomes effective",
    options: [
      "by post",
      "before it reaches the acceptance",
      "when it reaches the offeree",
      "when it reaches the offeror",
    ],
    correctAnswer: 2,
    explanation: "An offer becomes effective when it reaches the offeree"
  },
  {
    id: 26,
    question: "An offer accept by anyone could be seen as a contract",
    options: [
      "YES",
      "NO",
    ],
    correctAnswer: 1,
    explanation: "Not everyone can accept an offer - there must be proper capacity and consideration"
  },
  {
    id: 27,
    question: "A valid acceptance need to be",
    options: [
      "conditional",
      "unconditional",
      "conditional and equivocal",
      "unconditional and unequivocal",
    ],
    correctAnswer: 3,
    explanation: "A valid acceptance must be unconditional and unequivocal"
  },
  {
    id: 28,
    question: "Another name for formal contract is",
    options: [
      "company",
      "speciality",
      "implied",
      "expressed",
    ],
    correctAnswer: 1,
    explanation: "Formal contracts are also known as specialty contracts"
  },
  {
    id: 29,
    question: "A promise made by one party in exchange for an act of other party",
    options: [
      "executed",
      "executory",
      "expressed",
      "simple",
    ],
    correctAnswer: 0,
    explanation: "This describes an executed contract"
  },
  {
    id: 30,
    question: "An offer would terminate under any of the following except",
    options: [
      "on the rejection of the offer",
      "on the death of either of offeror or offeree",
      "by non acceptance of the offer within the time prescribed for the acceptance",
      "by non acceptance of the offer within the time prescribed for the offer",
    ],
    correctAnswer: 3,
    explanation: "The last option is incorrectly worded - it should be 'acceptance' not 'offer'"
  },
  {
    id: 31,
    question: "Counter offer",
    options: [
      "validate the original offer",
      "legalizes the original offer",
      "legalizes and validate the original offer",
      "none of the above",
    ],
    correctAnswer: 3,
    explanation: "Counter offer actually destroys the original offer"
  },
  {
    id: 32,
    question: "Consideration must move from promisor to promisee?",
    options: [
      "YES",
      "NO",
    ],
    correctAnswer: 1,
    explanation: "Consideration must move from promisee to promisor"
  },
  {
    id: 33,
    question: "An offer may be revoke before",
    options: [
      "it being accepted",
      "after it being accepted",
      "before and after it being accepted",
      "invitation to treat",
    ],
    correctAnswer: 0,
    explanation: "An offer may be revoked before it is accepted"
  },
  {
    id: 34,
    question: "All agreements are contract but not all contracts are agreements",
    options: [
      "YES",
      "NO",
    ],
    correctAnswer: 1,
    explanation: "All contracts are agreements but not all agreements are contracts"
  },
  {
    id: 35,
    question: "All legal agreements are contract but not all legal contracts are agreements",
    options: [
      "YES",
      "NO",
      "CONFUSED",
    ],
    correctAnswer: 1,
    explanation: "This statement is incorrect - all contracts are agreements"
  },
  {
    id: 36,
    question: "case of Pharmaceutical Society of Great Britain V Boots Cash Chemist describes a/an",
    options: [
      "offer",
      "acceptance",
      "invitation to treat",
      "counter offer",
    ],
    correctAnswer: 2,
    explanation: "This case is about invitation to treat"
  },
  {
    id: 37,
    question: "Lagunjo V Abake case is an example of a/an",
    options: [
      "capacity to contract",
      "acceptance",
      "contract to marry",
      "counter offer",
    ],
    correctAnswer: 0,
    explanation: "This case deals with capacity to contract"
  },
  {
    id: 38,
    question: "Who among these has no capacity to contract",
    options: [
      "Allien",
      "infant & married woman",
      "illiterate",
      "All of the above",
    ],
    correctAnswer: 1,
    explanation: "Infants and married women (historically) have limited capacity to contract"
  },
  {
    id: 39,
    question: "Application of force to the person is",
    options: [
      "battery",
      "assault",
      "assault and battery",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Application of force to a person is battery"
  },
  {
    id: 40,
    question: "Price paid by one party for the act or promise of other party is",
    options: [
      "offer",
      "acceptance",
      "consideration",
      "capacity",
    ],
    correctAnswer: 2,
    explanation: "This describes consideration"
  },
  {
    id: 41,
    question: "Two types of consideration are",
    options: [
      "implied and expressed",
      "executed and executory",
      "bilateral and unilateral",
      "none",
    ],
    correctAnswer: 1,
    explanation: "The two types of consideration are executed and executory"
  },
  {
    id: 42,
    question: "The law that regulate the internal affairs of the company is",
    options: [
      "memorandum of association",
      "memorandum of directors of company",
      "article of association",
      "share and Debentures",
    ],
    correctAnswer: 2,
    explanation: "Articles of association regulate internal affairs of a company"
  },
  {
    id: 43,
    question: "Element of contract is of",
    options: [
      "4",
      "5",
      "6",
      "3",
    ],
    correctAnswer: 0,
    explanation: "There are 4 main elements of contract"
  },
  {
    id: 44,
    question: "Transfer of Land without the consent of the head of the family is ..........contract",
    options: [
      "voidable",
      "void",
      "illegal",
      "implied",
    ],
    correctAnswer: 0,
    explanation: "Such transfers are voidable contracts"
  },
  {
    id: 45,
    question: "An offer may come to an end by all except",
    options: [
      "Lapse",
      "revocation",
      "rejection",
      "consideration",
    ],
    correctAnswer: 3,
    explanation: "Consideration does not end an offer"
  },
  {
    id: 46,
    question: "Where a counter offer is accepted then its terms and not the terms of the original offer becomes the terms of the contract",
    options: [
      "TRUE",
      "FALSE",
    ],
    correctAnswer: 0,
    explanation: "This is true - counter offer terms become the contract terms if accepted"
  },
  {
    id: 47,
    question: "Hyde v Wrench, On June 6 A offered B a farm for #250000; B made a counter offer of #150000. On 27 June, A rejected the counter offer. On 29 June B made a purported acceptance of the offer of June 6. Would there be a contract?",
    options: [
      "YES",
      "NO",
    ],
    correctAnswer: 1,
    explanation: "No contract - the counter offer destroyed the original offer"
  },
  {
    id: 48,
    question: "The principle of Unilateral Contract was laid down in................when made to the public",
    options: [
      "the case of Carlil v Carbolic Smoke ball and co",
      "the case of Kalil v Carbolic Smoke ball",
      "the case of Payne v cave",
      "the case of Carlil v Kabolic smoke Ball and Co",
    ],
    correctAnswer: 0,
    explanation: "Carlill v Carbolic Smoke Ball Co established the principle of unilateral contracts"
  },
  {
    id: 49,
    question: "To kiss someone without his/her consent is",
    options: [
      "battery",
      "assault",
      "assault and battery",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Unwanted physical contact is battery"
  },
  {
    id: 50,
    question: "All but one of the following are the document required for the incorporation of company",
    options: [
      "list of directors",
      "memorandum of association",
      "total share declaration",
      "none",
    ],
    correctAnswer: 2,
    explanation: "Total share declaration is not a required document for incorporation"
  },
  {
    id: 51,
    question: "All but one of these types of contract is enforceable against an infant",
    options: [
      "contract that have element of a valid contract",
      "contract of employment",
      "contract willingly entered by an infant",
      "contract for necessaries and services",
    ],
    correctAnswer: 0,
    explanation: "General contracts are not enforceable against infants"
  },
  {
    id: 52,
    question: "An example of contract under seal is",
    options: [
      "Multilateral contract",
      "Ordinary contract",
      "Unilateral contract",
      "none of the above",
    ],
    correctAnswer: 3,
    explanation: "None of the given options are examples of contracts under seal"
  },
  {
    id: 53,
    question: "Which of these rules is not correct",
    options: [
      "Consideration must not be past",
      "Consideration need not be inadequate",
      "Consideration must not be illegal",
      "Consideration not be vague",
    ],
    correctAnswer: 0,
    explanation: "The rule 'Consideration must not be past' is incorrect - consideration can be past in some cases"
  },
  {
    id: 54,
    question: "An act made by one party in exchange for a promise of other party",
    options: [
      "executed",
      "executory",
      "expressed",
      "simple",
    ],
    correctAnswer: 0,
    explanation: "This describes an executed consideration"
  },
  {
    id: 55,
    question: "Before there could be a valid contract, the parties to the agreement must have ------ to enter into that type of contract",
    options: [
      "offer",
      "intention to create legal relation",
      "acceptance",
      "capacity",
    ],
    correctAnswer: 3,
    explanation: "Parties must have capacity to enter into a contract"
  },
  {
    id: 56,
    question: "Past event which used as back up in the present is",
    options: [
      "Evidence",
      "judicial precedence",
      "article",
      "none of the above",
    ],
    correctAnswer: 1,
    explanation: "Judicial precedence uses past events as backup for present decisions"
  },
  {
    id: 57,
    question: "------ does not determine the validity of customary law",
    options: [
      "repugnancy test",
      "incompatibility test",
      "inconsistency test",
      "inequality test",
    ],
    correctAnswer: 3,
    explanation: "Inequality test does not determine validity of customary law"
  },
  {
    id: 58,
    question: "To point a gun at someone and to slap someone is",
    options: [
      "battery",
      "assault",
      "assault and battery",
      "all of the above",
    ],
    correctAnswer: 2,
    explanation: "Pointing a gun is assault, slapping is battery - together they are assault and battery"
  },
  {
    id: 59,
    question: "A moral promise is a valid consideration",
    options: [
      "YES",
      "NO",
    ],
    correctAnswer: 1,
    explanation: "A moral promise is not valid consideration"
  },
  {
    id: 60,
    question: "Insane and drunken persons are bound to pay a reasonable price for necessaries according to the same rules that apply to infants",
    options: [
      "YES",
      "NO",
    ],
    correctAnswer: 0,
    explanation: "Yes, insane and drunken persons follow similar rules as infants for necessaries"
  },
  {
    id: 61,
    question: "The essence of Engineering law is to",
    options: [
      "guide the activities of Engineers in engineering activities",
      "guide Engineer in all his endeavour",
      "protect engineers across the world",
      "guide the activities of humanbeing in the society",
    ],
    correctAnswer: 0,
    explanation: "Engineering law specifically guides engineers in their professional activities"
  },
  {
    id: 62,
    question: "One of the characteristics of customary law is",
    options: [
      "Mirror of acceptable usage",
      "meet repulganancy test",
      "meet consistency test",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Customary law is a mirror of acceptable usage"
  },
  {
    id: 63,
    question: "The enforcement of which that may be backed by sanction is",
    options: [
      "Law",
      "Custom",
      "Morality",
      "custom and morality",
    ],
    correctAnswer: 0,
    explanation: "Law is backed by sanctions for enforcement"
  },
  {
    id: 64,
    question: "Law passed by the Nigeria legislators on the ways and manner engineering business should be conducted is",
    options: [
      "COREN Act",
      "Engineering principles",
      "Engineering law",
      "Common law",
    ],
    correctAnswer: 0,
    explanation: "COREN Act governs engineering business conduct in Nigeria"
  },
  {
    id: 65,
    question: "......can be defined as the rules and regulations guiding the conduct of engineers in the discharge of their duties backed by sanction",
    options: [
      "Engineering law",
      "common law of engineering",
      "Equitable principle of engineering",
      "Acts of national assembly",
    ],
    correctAnswer: 0,
    explanation: "This definition describes Engineering law"
  },
  {
    id: 66,
    question: "The major source of Engineering law in Nigeria is",
    options: [
      "Nigeria Constitution, 1999 as amended",
      "National Assembly law, 1999 as amended",
      "Nigeria Constitution, 1990 as amended",
      "Nigeria Constitution, 1989 as amended",
    ],
    correctAnswer: 0,
    explanation: "The Nigerian Constitution 1999 as amended is the major source"
  },
  {
    id: 67,
    question: "An example of Nigerian Statutes applicable to Engineering practices is",
    options: [
      "COREN Act",
      "Common law",
      "Equity",
      "Received English law",
    ],
    correctAnswer: 0,
    explanation: "COREN Act is a Nigerian statute applicable to engineering practices"
  },
  {
    id: 68,
    question: "one of the primary sources of Engineering law is",
    options: [
      "Received English law",
      "subsidiary legislation",
      "Local government bye-law",
      "State engineering law",
    ],
    correctAnswer: 0,
    explanation: "Received English law is a primary source of Engineering law"
  },
  {
    id: 69,
    question: "Engineering law made by the central legislature before 1st october, 1954 is",
    options: [
      "Ordinance",
      "Act",
      "Edict",
      "Bye-law",
    ],
    correctAnswer: 0,
    explanation: "Laws made by central legislature before 1954 were called Ordinances"
  },
  {
    id: 70,
    question: "Engineering law made by the state legislature during the military era is",
    options: [
      "Edict",
      "ordinance",
      "Bye-law",
      "Act",
    ],
    correctAnswer: 0,
    explanation: "State laws during military era were called Edicts"
  },
  {
    id: 71,
    question: "Law made by the Federal military government to regulate engineering business in Nigeria is called",
    options: [
      "Decree",
      "Bye-law",
      "Edict",
      "Act",
    ],
    correctAnswer: 0,
    explanation: "Federal military government laws were called Decrees"
  },
  {
    id: 72,
    question: "one of the characteristics of custom as applicable to engineering business in Nigeria is",
    options: [
      "unwritten",
      "unknown to custom",
      "unknown to law",
      "need not be proved",
    ],
    correctAnswer: 0,
    explanation: "Custom is typically unwritten"
  },
  {
    id: 73,
    question: "An engineer can prove custom of his profession by any of the following:",
    options: [
      "Calling president of COREN",
      "calling legal practitioner",
      "by written statement",
      "by tendering constitution 1999",
    ],
    correctAnswer: 0,
    explanation: "The president of COREN can testify to engineering customs"
  },
  {
    id: 74,
    question: "Engineering law that is against public assessment would be accepted as standard of behaviour:",
    options: [
      "No",
      "yes",
    ],
    correctAnswer: 0,
    explanation: "Laws against public interest would not be accepted as standard behavior"
  },
  {
    id: 75,
    question: "The principle that customary law must be a mirror of acceptable usage is decided in the case of",
    options: [
      "Owonyi v. omotosho",
      "Dampamg v Sale",
      "Ada v adeola",
      "omotosho v owonyi",
    ],
    correctAnswer: 0,
    explanation: "Owonyi v. Omotosho established this principle"
  },
  {
    id: 76,
    question: "Judgment of the court whereby engineering principle is being generated is called",
    options: [
      "Precedent",
      "Authority",
      "judgement",
      "Statement",
    ],
    correctAnswer: 0,
    explanation: "Court judgments that establish principles are called precedents"
  },
  {
    id: 77,
    question: "A court where its decision binds all other courts in Nigeria is",
    options: [
      "Supreme court",
      "court of Appeal",
      "Shariah court",
      "High court",
    ],
    correctAnswer: 0,
    explanation: "Supreme Court decisions bind all other courts in Nigeria"
  },
  {
    id: 78,
    question: "One of the court of record is",
    options: [
      "High court of kwara state",
      "Magistrate court of kwara state",
      "Upper Area court",
      "Area court",
    ],
    correctAnswer: 0,
    explanation: "High courts are courts of record"
  },
  {
    id: 79,
    question: "Court of Appeal and High Court are court of coordinate jurisdiction",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Court of Appeal is superior to High Court, not coordinate"
  },
  {
    id: 80,
    question: "state High and Federal High court are courts of coordinate jurisdiction",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "State High Court and Federal High Court are of coordinate jurisdiction"
  },
  {
    id: 81,
    question: "Federal High court and National Industrial court are court of coordinate jurisdiction",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Federal High Court and National Industrial Court are of coordinate jurisdiction"
  },
  {
    id: 82,
    question: "Shariah court of Appeal and Customary court of Appeal are not courts of coordinate jurisdiction",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Shariah Court of Appeal and Customary Court of Appeal are courts of coordinate jurisdiction"
  },
  {
    id: 83,
    question: "Magistrate, Upper or Area and District courts are courts of Record",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Magistrate, Upper Area and District courts are not courts of record"
  },
  {
    id: 84,
    question: "A court is a court of record because it is not mentioned in the constitution",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "A court is a court of record because it IS mentioned in the constitution"
  },
  {
    id: 85,
    question: "The decision of court of Appeal on Engineering matter binds the Supreme court",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Court of Appeal decisions do not bind the Supreme Court"
  },
  {
    id: 86,
    question: "Tortious liability of an engineer may be inform of all of the following except",
    options: [
      "partial false imprisonment",
      "Assault",
      "Negligent",
      "Battery",
    ],
    correctAnswer: 0,
    explanation: "Partial false imprisonment is not a recognized form of tortious liability"
  },
  {
    id: 87,
    question: "An engineer putting fear into the mind of his colleagues that a battery is about to be committed is responsible for the tort of",
    options: [
      "Assault",
      "Battery",
      "Battery and Assault",
      "Assault or battery",
    ],
    correctAnswer: 0,
    explanation: "Creating fear of imminent harm constitutes assault"
  },
  {
    id: 88,
    question: "Engineer Ajadi approached Engineer Oloje menacingly. Engineer Ajadi has committed the tort of:",
    options: [
      "Assault",
      "Battery",
      "False prison",
      "none of the above",
    ],
    correctAnswer: 0,
    explanation: "Menacing approach constitutes assault"
  },
  {
    id: 89,
    question: "Projection of torch light on the body of another is",
    options: [
      "Battery",
      "Battery and Assault",
      "Assault and Battery",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: "Physical contact (even light) can constitute battery"
  },
  {
    id: 90,
    question: "Intentional application of force into the body of another is simply refer to as",
    options: [
      "Battery",
      "Assault",
      "Assault and Battery",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation: "Intentional application of force is the definition of battery"
  },
  {
    id: 91,
    question: "In the case of ........... the court held that in false imprisonment, restraint must be complete and total",
    options: [
      "Bird v. Jones",
      "Jones v Bird",
      "Bird Jones v Jones Bird",
      "Bird v.Bird",
    ],
    correctAnswer: 0,
    explanation: "Bird v. Jones established the principle of complete restraint in false imprisonment"
  },
  {
    id: 92,
    question: "Volunti non fit injuria is a defence available to trespass to person",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Volunti non fit injuria (voluntary assumption of risk) is a defense to trespass to person"
  },
  {
    id: 93,
    question: "..............is an intentional or unintentional act of bringing offensive object into the property of another",
    options: [
      "Strict liability",
      "Negligence",
      "Vicarious liability",
      "Tortious liability",
    ],
    correctAnswer: 0,
    explanation: "This describes strict liability"
  },
  {
    id: 94,
    question: "Res ipsa loquitor is interpreted to mean",
    options: [
      "Thing speaks for itself",
      "many things speak for them selves",
      "all of the above",
      "none of the above",
    ],
    correctAnswer: 0,
    explanation: "Res ipsa loquitur means 'the thing speaks for itself'"
  },
  {
    id: 95,
    question: "An Engineer who wants to proof the tort of negligence must prove all the following except",
    options: [
      "Consent",
      "Duty of care",
      "Breach of duty of care",
      "Damage",
    ],
    correctAnswer: 0,
    explanation: "Consent is not an element to prove negligence"
  },
  {
    id: 96,
    question: "All but one is a locus classical case on the tort of negligence",
    options: [
      "Donoghue v stevenson",
      "Aigoro v, Anabuwa",
      "Bird v Jones",
      "Jones v Bird",
    ],
    correctAnswer: 1,
    explanation: "Aigoro v Anabuwa is NOT a classical case on negligence (the question asks for the exception)"
  },
  {
    id: 97,
    question: "All but one is not an element of engineering contract",
    options: [
      "creation of contractual relationship",
      "Offer",
      "intention to create legal relation",
      "capacity",
    ],
    correctAnswer: 0,
    explanation: "Creation of contractual relationship is not a standard element of contract formation"
  },
  {
    id: 98,
    question: "an invitation to make an offer is..............",
    options: [
      "invitation to treat",
      "offer",
      "invitation to offer",
      "invitation to accept",
    ],
    correctAnswer: 0,
    explanation: "An invitation to make an offer is called invitation to treat"
  },
  {
    id: 99,
    question: "All but one is a form of contract that must be signed sealed and delivered",
    options: [
      "Formal contract",
      "Informal contract",
      "Former contract",
      "Informer contract",
    ],
    correctAnswer: 1,
    explanation: "Informal contract does NOT need to be signed, sealed and delivered (the question asks for the exception)"
  },
  {
    id: 100,
    question: "The price at which the promise of an engineer is bought is called........",
    options: [
      "Consideration",
      "market price",
      "conditional price",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: "The price of a promise is called consideration"
  },
  {
    id: 101,
    question: "all but One is not a valid contract of a minor",
    options: [
      "loan",
      "Beneficial contract",
      "Apprentice",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Loan is not a valid contract for a minor"
  },
  {
    id: 102,
    question: "A person below the age of 17 years 11 months can validly enter into a contract",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "A person below 18 years cannot validly enter into most contracts"
  },
  {
    id: 103,
    question: "A conditional acceptance is a valid acceptance",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "A conditional acceptance is not a valid acceptance"
  },
  {
    id: 104,
    question: "An offer can be made to the whole world",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "An offer can be made to the whole world (as in Carlill v Carbolic)"
  },
  {
    id: 105,
    question: "Consideration must be past",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Consideration must not be past"
  },
  {
    id: 106,
    question: "Consideration need not be adequate but",
    options: [
      "Sufficient",
      "Cogent",
      "reasonable",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Consideration need not be adequate but must be sufficient"
  },
  {
    id: 107,
    question: "Acceptance must not be communicated to the offerror",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Acceptance must be communicated to the offeror"
  },
  {
    id: 108,
    question: "Acceptance must be communicated to offeror in unilateral contract",
    options: [
      "True",
      "false",
    ],
    correctAnswer: 0,
    explanation: "In unilateral contracts, acceptance must be communicated"
  },
  {
    id: 109,
    question: "Carlil v carbolic represents offer to the whole world",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Carlill v Carbolic is the classic case of offer to the whole world"
  },
  {
    id: 110,
    question: "Carlil v carbolic is case on example of unilateral contract",
    options: [
      "true",
      "false",
    ],
    correctAnswer: 0,
    explanation: "Carlill v Carbolic is indeed an example of unilateral contract"
  },
  {
    id: 111,
    question: "Acceptance must be direct and go straight to the term of offer",
    options: [
      "true",
      "false",
    ],
    correctAnswer: 0,
    explanation: "Acceptance must be direct and correspond to the terms of the offer"
  },
  {
    id: 112,
    question: "Acceptance in ignorance of offer constitutes a valid acceptance in the eyes of the law",
    options: [
      "false",
      "true",
    ],
    correctAnswer: 0,
    explanation: "Acceptance in ignorance of offer is not valid"
  },
  {
    id: 113,
    question: "One of the characteristics of customary law is",
    options: [
      "Mirror of acceptable usage",
      "meet repulganancy test",
      "meet consistency test",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Customary law is a mirror of acceptable usage"
  },
  {
    id: 114,
    question: "The enforcement of which that may be backed by sanction is",
    options: [
      "Law",
      "Custom",
      "Morality",
      "custom and morality",
    ],
    correctAnswer: 0,
    explanation: "Law enforcement is backed by sanctions"
  },
  {
    id: 115,
    question: "Law passed by the Nigeria legislators on the ways and manner engineering business should be conducted is",
    options: [
      "COREN Act",
      "Engineering principles",
      "Engineering law",
      "Common law",
    ],
    correctAnswer: 0,
    explanation: "COREN Act governs engineering business conduct"
  },
  {
    id: 116,
    question: "Law made by the Federal military government to regulate engineering business in Nigeria is called",
    options: [
      "Decree",
      "Bye-law",
      "Edict",
      "Act",
    ],
    correctAnswer: 0,
    explanation: "Federal military laws were called Decrees"
  },
  {
    id: 117,
    question: "An engineer can prove custom of his profession by any of the following:",
    options: [
      "Calling president of COREN",
      "calling legal practitioner",
      "by written statement",
      "by tendering constitution 1999",
    ],
    correctAnswer: 0,
    explanation: "COREN president can testify to engineering customs"
  },
  {
    id: 118,
    question: "The principle that customary law must be a mirror of acceptable usage is decided in the case of",
    options: [
      "Owonyi v. omotosho",
      "Dampamg v Sale",
      "Ada v adeola",
      "omotosho v owonyi",
    ],
    correctAnswer: 0,
    explanation: "Owonyi v. Omotosho established this principle"
  },
  {
    id: 119,
    question: "Court of Appeal and High Court are court of coordinate jurisdiction",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Court of Appeal is superior to High Court"
  },
  {
    id: 120,
    question: "state High and Federal High court are courts of coordinate jurisdiction",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "State High Court and Federal High Court are of coordinate jurisdiction"
  },
  {
    id: 121,
    question: "Federal High court and National Industrial court are court of coordinate jurisdiction",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Federal High Court and National Industrial Court are of coordinate jurisdiction"
  },
  {
    id: 122,
    question: "Shariah court of Appeal and Customary court of Appeal are not courts of coordinate jurisdiction",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "They ARE courts of coordinate jurisdiction"
  },
  {
    id: 123,
    question: "Magistrate, Upper or Area and District courts are courts of Record",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "These are not courts of record"
  },
  {
    id: 124,
    question: "A court is a court of record because it is not mentioned in the constitution",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Courts of record ARE mentioned in the constitution"
  },
  {
    id: 125,
    question: "The decision of court of Appeal on Engineering matter binds the Supreme court",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Court of Appeal decisions do not bind the Supreme Court"
  },
  {
    id: 126,
    question: "Tortious liability of an engineer may be inform of all of the following except",
    options: [
      "partial false imprisonment",
      "Assault",
      "Negligent",
      "Battery",
    ],
    correctAnswer: 0,
    explanation: "Partial false imprisonment is not a recognized tortious liability"
  },
  {
    id: 127,
    question: "..............is an intentional or unintentional act of bringing offensive object into the property of another",
    options: [
      "Strict liability",
      "Negligence",
      "Vicarious liability",
      "Tortious liability",
    ],
    correctAnswer: 0,
    explanation: "This describes strict liability"
  },
  {
    id: 128,
    question: "an invitation to make an offer is..............",
    options: [
      "invitation to treat",
      "offer",
      "invitation to offer",
      "invitation to accept",
    ],
    correctAnswer: 0,
    explanation: "An invitation to make an offer is invitation to treat"
  },
  {
    id: 129,
    question: "All but one is a form of contract that must be signed sealed and delivered",
    options: [
      "Formal contract",
      "Informal contract",
      "Former contract",
      "Informer contract",
    ],
    correctAnswer: 1,
    explanation: "Informal contract does NOT need to be signed, sealed and delivered (the question asks for the exception)"
  },
  {
    id: 130,
    question: "The price at which the promise of an engineer is bought is called........",
    options: [
      "Consideration",
      "market price",
      "conditional price",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation: "The price of a promise is consideration"
  },
  {
    id: 131,
    question: "all but One is not a valid contract of a minor",
    options: [
      "loan",
      "Beneficial contract",
      "Apprentice",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Loan is not a valid contract for a minor"
  },
  {
    id: 132,
    question: "A person below the age of 17 years 11 months can validly enter into a contract",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Persons below 18 cannot validly enter into most contracts"
  },
  {
    id: 133,
    question: "A conditional acceptance is a valid acceptance",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Conditional acceptance is not valid acceptance"
  },
  {
    id: 134,
    question: "An offer can be made to the whole world",
    options: [
      "True",
      "False",
    ],
    correctAnswer: 0,
    explanation: "Offers can be made to the whole world"
  },
  {
    id: 135,
    question: "Consideration must be past",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Consideration must not be past"
  },
  {
    id: 136,
    question: "Consideration need not be adequate but",
    options: [
      "Sufficient",
      "Cogent",
      "reasonable",
      "all of the above",
    ],
    correctAnswer: 0,
    explanation: "Consideration need not be adequate but must be sufficient"
  },
  {
    id: 137,
    question: "Acceptance must not be communicated to the offerror",
    options: [
      "False",
      "True",
    ],
    correctAnswer: 0,
    explanation: "Acceptance must be communicated to the offeror"
  },
  {
    id: 138,
    question: "Acceptance must be communicated to offeror in unilateral contract",
    options: [
      "True",
      "false",
    ],
    correctAnswer: 0,
    explanation: "In unilateral contracts, acceptance must be communicated"
  },
  {
    id: 139,
    question: "Acceptance must be direct and go straight to the term of offer",
    options: [
      "true",
      "false",
    ],
    correctAnswer: 0,
    explanation: "Acceptance must be direct and correspond to offer terms"
  },
  {
    id: 140,
    question: "Acceptance in ignorance of offer constitutes a valid acceptance in the eyes of the law",
    options: [
      "false",
      "true",
    ],
    correctAnswer: 0,
    explanation: "Acceptance in ignorance of offer is not valid"
  }

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
      name: `Section ${String.fromCharCode(65 + i)}`, // A, B, C, etc.
      description: `Questions ${startQuestion}-${endQuestion}`,
      questionCount: actualQuestionCount,
      topics: `BUL 506 Engineering Law - Part ${i + 1}`
    });
  }

  return sections;
};

// Export exam metadata
export const examMetadata = {
  title: "BUL 506 - Engineering Law Past Questions",
  totalQuestions: 140
};
