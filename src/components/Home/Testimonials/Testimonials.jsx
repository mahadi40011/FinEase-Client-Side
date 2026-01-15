import { Quote } from "lucide-react";
import Heading from "../../Shared/Heading/Heading";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arif Ahmed",
      role: "Business Owner",
      text: "FinEase changed the way I look at my business expenses. Simply amazing!",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Sarah Khan",
      role: "University Student",
      text: "Finally an app that helps me save for my tuition fees without any stress.",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      name: "Rahat Kabir",
      role: "Freelancer",
      text: "The tracking features are top-notch. I can now manage my taxes easily.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      name: "Mousumi Akter",
      role: "Homemaker",
      text: "Budgeting has never been this simple. Our family savings have doubled!",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section className="text-natural font-poppins container mx-auto">
      <Heading
        title={"User Stories"}
        subtitle={"Hear from those who simplified their finances with us."}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-app-200 shadow-sm rounded-2xl p-7 text-center hover:scale-103 transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <div
                className={`${r.bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Quote className={`${r.textColor}`} size={24} />
              </div>
              <p className="text-sm italic text-gray-600 dark:text-gray-300 mb-3">
                "{r.text}"
              </p>
            </div>

            <div>
              <hr className="border-black/20 dark:border-white/20 mb-4" />
              <h4 className="text-lg font-bold">{r.name}</h4>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {r.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
