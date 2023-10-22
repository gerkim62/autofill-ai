import FAQ from "@/components/FAQ/FAQ";

const faqs = [
  {
    question: "What is Autofill AI?",
    answer:
      "Autofill AI is a browser extension that uses machine learning and AI to automatically give you accurate answers to online exam questions.",
  },
  {
    question: "How does it work?",
    answer:
      "Autofill AI reads the question and uses machine learning to find the correct answer. It then automatically fills in the answer for you.",
  },
  {
    question: "Which school websites does Autofill AI work on?",
    answer:
      "Autofill AI works on any website that uses the Moodle learning management system. This includes most universities and colleges. It will probably work on your school's website, but if it doesn't, please let us know and we'll add support for it.",
  },
  {
    question: "Can I use Autofill AI on my exam?",
    answer:
      "Yes, Autofill AI can be used in online exams, but it's important to emphasize that we do not recommend or condone cheating on real exams. This tool is intended for practice exams only, and academic integrity should always be upheld during official assessments.",
  },
  {
    question: "Will the lecturer know I'm using Autofill AI?",
    answer:
      "No, Autofill AI is completely undetectable. It will not leave any traces of its use, and it will not interfere with your browser or computer in any way.",
  },
  {
    question: "What if i am caught using Autofill AI?",
    answer:
      "We do not condone cheating on real exams. This tool is intended for practice exams only, and academic integrity should always be upheld during official assessments.",
  },
  {
    question:"I found a bug. How can I let you know?",
    answer:"Please use the suggestions form on the Autofill AI website. We'll fix it as soon as possible.",
  }
  ,
  {
    question: "What if Autofill AI doesn't work on my school's website?",
    answer: "Please let us know and we'll add support for it.",
  },

  {
    question: "I have a suggestion for a new feature. How can I let you know?",
    answer:
      "Use the suggestion form on the Autofill AI website. We'd love to hear from you!",
  },
  {
    question:"Can I let Autofill reference my notes when generating answers?",
    answer:"Yes, Autofill AI can use your notes to generate answers. Make sure to press the upload button and turn on the notes in the menu.",
  },
  {
    question:"How do I access Autofill Menu?",
    answer:"Click on the lightbulb icon in the bottom right corner of your browser.",
  }
];

const FaqPage = () => {
  return <div className="mt-20 lg:mt-10 mx-5 ml-20">
    <h1 className="text-xl font-bold mb-2">Frequently Asked Questions</h1>
    <div className="space-y-4">
        <FAQ faqs={faqs} />
    </div>
  </div>;
};

export default FaqPage;
