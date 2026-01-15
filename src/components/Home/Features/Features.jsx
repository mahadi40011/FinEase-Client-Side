import { ShieldCheck, Zap, BarChart3, Smartphone } from "lucide-react";
import Heading from "../../Shared/Heading/Heading";

const Features = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Real-time Tracking",
      desc: "See your transactions update instantly as you spend.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Data",
      desc: "Your financial data is encrypted and safe with us.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Deep Analytics",
      desc: "Visualize your spending patterns with beautiful charts.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Ready",
      desc: "Access your dashboard from any device, anywhere.",
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-app-200 text-natural rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="text-sky-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-sm ">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
