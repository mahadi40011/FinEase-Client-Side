import Heading from "../../Shared/Heading/Heading";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is FinEase free to use?",
      answer:
        "Yes! Our core tracking features are completely free for everyone. We also offer a premium plan for advanced analytics.",
    },
    {
      question: "How secure is my financial data?",
      answer:
        "We use bank-grade encryption and Firebase security protocols to ensure your data is always safe and private.",
    },
    {
      question: "Can I export my transaction reports?",
      answer:
        "Absolutely! You can export your monthly or yearly data in CSV or PDF format directly from your dashboard.",
    },
    {
      question: "How do I set a monthly budget?",
      answer:
        "Go to the 'Budgets' tab, set your limit for different categories, and we'll notify you when you're close to reaching it.",
    },
  ];

  return (
    <section className="text-natural font-poppins container mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold font-poppins text-natural text-center mb-4">
        Common Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="collapse collapse-plus bg-app-200 shadow-sm rounded-2xl "
          >
            {/* Hidden radio button makes it an accordion */}
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={i === 0}
            />

            <div className="collapse-title text-xl font-semibold flex items-center gap-3">
              <HelpCircle className="text-blue-600" size={20} />
              {faq.question}
            </div>

            <div className="collapse-content">
              <hr className="border-black/20 dark:border-white/20 mb-3" />
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
