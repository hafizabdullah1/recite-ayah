export const plans = [
  {
    name: "2 Days / Week",
    price: "$35",
    period: "/ month",
    description: "Perfect for beginners or young children with busy school schedules.",
    features: [
      "8 classes per month",
      "30 mins per session",
      "1-on-1 private classes",
      "Monthly progress report",
      "Male/Female tutors available"
    ],
    popular: false
  },
  {
    name: "3 Days / Week",
    price: "$50",
    period: "/ month",
    description: "Our most balanced plan for steady progress in Reading or Tajweed.",
    features: [
      "12 classes per month",
      "30 mins per session",
      "1-on-1 private classes",
      "Monthly progress report",
      "Male/Female tutors available",
      "Make-up classes allowed"
    ],
    popular: true
  },
  {
    name: "5 Days / Week",
    price: "$75",
    period: "/ month",
    description: "Intensive plan recommended for Hifz (Memorization) students.",
    features: [
      "20 classes per month",
      "30 mins per session",
      "1-on-1 private classes",
      "Weekly progress report",
      "Male/Female tutors available",
      "Make-up classes allowed"
    ],
    popular: false
  }
];

export const startingPrice = plans[0].price;
