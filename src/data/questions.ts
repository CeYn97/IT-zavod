type Question = {
  question: string;
  answer: string;
  selected?: "know" | "unknow";
};

type Data = Question[];

export const data: Data = [
  {
    question: "What is React ?",
    answer: "UI library",
  },
  {
    question: "What is HTML ?",
    answer: "Markup language",
  },
  {
    question: "What is HTTP ?",
    answer: "Network protocol",
  },
  {
    question: "What is JSX ?",
    answer: "Format for dynamic rendering HTML",
  },
];
