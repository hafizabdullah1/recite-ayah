export type Course = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  level: string;
  icon: string;
  benefits: string[];
  preparation: string;
  trialFocus: string;
};

export const courses: Course[] = [
  {
    id: "1",
    preparation: "Start here if you are new to Arabic letters or need to rebuild your reading foundations. Tell your tutor which letters or sounds you already recognize.",
    trialFocus: "Use the trial to discuss your reading experience and work through a few letters or vowel marks with your tutor.",
    slug: "quran-reading-basics",
    title: "Quran Reading Basics (Noorani Qaida)",
    shortDescription: "Master the fundamentals of Arabic pronunciation and reading with Noorani Qaida.",
    fullDescription: "Our Noorani Qaida course is designed for beginners of all ages who want to learn how to read the Quran from scratch. You will learn Arabic alphabets, pronunciation (Makharij), and the basic rules of Tajweed, providing a solid foundation for flawless Quran recitation.",
    duration: "Flexible (3-6 months avg)",
    level: "Beginner",
    icon: "book-open",
    benefits: [
      "Learn the Arabic alphabet from scratch",
      "Master correct pronunciation (Makharij)",
      "Understand basic vowel marks (Harakat)",
      "Transition smoothly to reading the full Quran"
    ]
  },
  {
    id: "2",
    preparation: "This intermediate course is for students who can already read Arabic text. If reading is still difficult, discuss starting with Noorani Qaida during your trial.",
    trialFocus: "Bring a short passage you are comfortable reading so you can discuss pronunciation and the Tajweed rules you want to practice.",
    slug: "quran-with-tajweed",
    title: "Quran with Tajweed",
    shortDescription: "Learn to recite the Holy Quran beautifully with the correct rules of Tajweed.",
    fullDescription: "Reciting the Quran with Tajweed is obligatory upon every Muslim. This course focuses on applying all Tajweed rules (Ikhfa, Idgham, Qalqalah, etc.) during recitation. Our expert tutors will help you recite the Quran exactly as it was revealed to Prophet Muhammad (PBUH).",
    duration: "Ongoing",
    level: "Intermediate",
    icon: "star",
    benefits: [
      "Application of advanced Tajweed rules",
      "Improvement of voice and recitation flow",
      "Correction of hidden mistakes (Lahn Khafi)",
      "Deep understanding of articulation points"
    ]
  },
  {
    id: "3",
    preparation: "Tell your tutor what you have already memorized and how much time you can set aside for daily revision. Your reading fluency and review routine help determine a suitable starting point.",
    trialFocus: "Discuss a manageable memorization goal and how to balance new learning with revision of passages you already know.",
    slug: "quran-memorization",
    title: "Quran Memorization (Hifz)",
    shortDescription: "Memorize the Holy Quran with a structured and proven retention methodology.",
    fullDescription: "The Hifz program is tailored for students who wish to commit the Quran to memory. Our structured approach includes new memorization (Sabaq), recent review (Sabaqi), and old review (Manzil) to ensure you memorize and retain the Holy Quran effectively.",
    duration: "1-3 Years",
    level: "All Levels",
    icon: "award",
    benefits: [
      "Customized daily memorization goals",
      "Strong emphasis on retention (Muraja'ah)",
      "Regular testing and evaluation",
      "Guidance from certified Hafiz tutors"
    ]
  },
  {
    id: "4",
    preparation: "Parents can share their child's age, previous Islamic learning, and topics they would like to focus on. No prior course completion is required to discuss a starting point.",
    trialFocus: "Use the trial to discuss an age-appropriate starting topic, such as daily Duas, Salah, or Islamic manners, and how a parent can support practice.",
    slug: "islamic-studies-for-kids",
    title: "Islamic Studies for Kids",
    shortDescription: "A comprehensive Islamic curriculum covering Duas, Hadith, Seerah, and Fiqh for children.",
    fullDescription: "Provide your children with a strong Islamic upbringing. This course covers essential daily Duas, basic Fiqh (Wudu, Salah), stories of the Prophets (Seerah), and Islamic manners (Tarbiyah) in an engaging, kid-friendly environment.",
    duration: "Ongoing",
    level: "Kids / Beginner",
    icon: "users",
    benefits: [
      "Learn essential daily supplications (Duas)",
      "Understand the basics of Wudu and Salah",
      "Engaging stories of Prophets and Sahaba",
      "Development of strong Islamic character"
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}
