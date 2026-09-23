export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Fatima A.",
    role: "Parent, USA",
    content: "Alhamdulillah, my kids love learning from their tutor. The teaching method is very engaging and we have seen massive improvements in their Tajweed within a month.",
    rating: 5,
    initials: "FA"
  },
  {
    id: "2",
    name: "Omar K.",
    role: "Adult Student, UK",
    content: "I always struggled with reading the Quran fluently. My tutor at Recite Ayah was incredibly patient and helped me correct my Makharij. Highly recommended for adults!",
    rating: 5,
    initials: "OK"
  },
  {
    id: "3",
    name: "Aisha M.",
    role: "Parent, Canada",
    content: "We specifically requested a female tutor for our daughters, and we are so happy with the experience. The classes are punctual, structured, and very professional.",
    rating: 5,
    initials: "AM"
  }
];
