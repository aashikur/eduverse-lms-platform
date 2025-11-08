import React from 'react';

// Define the structure for the course content and features
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Removed unused props interface — this component doesn't accept props yet.

// --- Utility Components (Simplified ShadCN style) ---

// A simple button component for actions
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button
    className={`
      px-6 py-3 rounded-xl font-semibold transition-colors
      bg-purple-600 hover:bg-purple-700 text-white
      shadow-lg shadow-purple-900/50
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// A card component for content sections
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={`
      p-8 rounded-2xl border border-gray-800
      bg-gray-900 shadow-2xl transition-all hover:shadow-purple-500/10
      ${className}
    `}
  >
    {children}
  </div>
);

// A component to display a feature
const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-start space-y-4">
    <div className="text-purple-400 text-4xl">{icon}</div>
    <h3 className="text-xl font-bold text-gray-50">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </Card>
);

// --- Main Course Details Component ---

const CourseDetails: React.FC = () => {
  // Mock icons (use actual SVG/Lucide icons in a real project)
  const CheckIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
  const MoneyIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
  const CodeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;

  const courseFeatures: FeatureProps[] = [
    {
      icon: CheckIcon,
      title: "Master Gravix Editor",
      description: "Go from beginner to pro in the specialized Gravix editor, learning all its advanced features.",
    },
    {
      icon: MoneyIcon,
      title: "Monetization Blueprint",
      description: "Learn proven strategies to land high-paying clients and build a sustainable income stream.",
    },
    {
      icon: CodeIcon,
      title: "Pro Workflow & Speed",
      description: "Implement efficient, industry-standard workflows that drastically reduce editing time.",
    },
  ];

  return (
    // Outer container: Black background, subtle text, full-page design
    <div className="min-h-screen bg-black text-gray-200 font-sans p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* --- 1. Hero Section: The Problem & The Solution (Dark/Light Shade Contrast) --- */}
        <header className="pt-16 pb-12 text-center relative overflow-hidden rounded-3xl bg-gray-950 border border-purple-900/50 shadow-2xl">
           {/* Background subtle gradient for premium feel */}
           <div className="absolute inset-0 from-gray-900 to-black opacity-70"></div>
           <div className="relative z-10 p-8 sm:p-12">
              <p className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-2">The Gravix Mastery Course</p>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
                  <span className="text-purple-500">Gravix</span>: Edit. Earn. Elevate.
              </h1>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-300 max-w-4xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, esse?
              </h2>
              <div className="mt-8">
                 <Button>
                    Enroll Now & Start Earning
                 </Button>
              </div>
           </div>
        </header>

        {/* --- 2. The Problem Statement (Dark Shade) --- */}
        <section>
           <h2 className="text-4xl font-bold text-center text-white mb-10">❌ The Cycle of Frustration</h2>
           <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card>
                 <h3 className="text-2xl font-semibold text-purple-300 mb-2">Lack of Direction</h3>
                 <p className="text-gray-400">Tutorial overload leads to fragmented skills and no clear path to professional-grade work.</p>
              </Card>
              <Card>
                 <h3 className="text-2xl font-semibold text-purple-300 mb-2">No Monetization Skills</h3>
                 <p className="text-gray-400">Technical skills are useless without the knowledge to find, pitch, and land paying clients.</p>
              </Card>
              <Card>
                 <h3 className="text-2xl font-semibold text-purple-300 mb-2">Gravix Gaps</h3>
                 <p className="text-gray-400">Struggling to utilize the unique power of the **Gravix video editor** for fast, high-quality results.</p>
              </Card>
           </div>
        </section>

        {/* --- 3. The Solution (Feature Grid - Varying Dark Shades) --- */}
        <section>
           <h2 className="text-4xl font-bold text-center text-white mb-10">✅ This Course Solves The Problem</h2>
           <div className="grid lg:grid-cols-3 gap-8">
              {courseFeatures.map((feature) => (
                 <FeatureItem key={feature.title} {...feature} />
              ))}
           </div>
        </section>

        {/* --- 4. Call to Action (CTA - Light/Dark Contrast) --- */}
        <section className="text-center py-16 bg-gray-800 rounded-2xl border border-purple-600/50 shadow-xl shadow-purple-900/30">
           <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Transform Your Skills into Income?</h2>
           <p className="text-xl text-gray-300 mb-8">Stop watching tutorials and start getting paid. Your career starts now.</p>
           <Button className="scale-105">
              Secure Your Spot Today!
           </Button>
        </section>

      </div>
    </div>
  );
};

export default CourseDetails;