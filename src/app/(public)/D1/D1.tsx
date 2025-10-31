import React from 'react';

// --- Utility Components (Simplified ShadCN Style) ---

// Card component with rounded borders and layered dark shade
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={`
      p-6 bg-gray-900 border border-gray-800 rounded-xl
      shadow-lg transition-shadow hover:shadow-gray-700/20
      ${className}
    `}
  >
    {children}
  </div>
);

// Menu Item component for the sidebar
const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean }> = ({ icon, label, isActive }) => (
  <a
    href="#"
    className={`
      flex items-center space-x-3 p-3 rounded-lg transition-colors
      ${isActive
        ? 'bg-gray-800 text-white font-semibold' // Active state
        : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200' // Inactive state
      }
    `}
  >
    <div className="w-5 h-5">{icon}</div>
    <span>{label}</span>
  </a>
);

// Mock Icons (use actual SVG/Lucide icons in a real project)
const CourseIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.474 9.117 5 7.25 5S3.668 5.474 2.5 6.253v13C3.668 18.474 5.383 18 7.25 18s3.582.474 4.75 1.253m0-13C13.168 5.474 14.883 5 16.75 5s3.582.474 4.75 1.253v13C20.332 18.474 18.617 18 16.75 18s-3.582.474-4.75 1.253" /></svg>;
const AnnounceIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
const GradeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ProgressIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const BatchIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-4 18h4M4 11h16m-2-4h-2m-2 4h.01M17 19h.01M19 19h.01M8 19h.01M12 19h.01M15 19h.01M21 7v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
const ProfileIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

// --- Main Dashboard Component ---

const D1: React.FC = () => {
  const sidebarLinks = [
    { label: "Course Management", icon: CourseIcon, key: 'course' },
    { label: "Schedule Batches", icon: BatchIcon, key: 'batch' },
    { label: "Grade Assignments", icon: GradeIcon, key: 'assignment' },
    { label: "Track Progress", icon: ProgressIcon, key: 'progress' },
    { label: "Announce Updates", icon: AnnounceIcon, key: 'announce' },
    { label: "Profile Settings", icon: ProfileIcon, key: 'profile' },
  ];

  const activeKey = 'course'; // Simulate active page

  return (
    // Outer container: Deep black background
    <div className="min-h-screen bg-black text-white font-sans flex">

      {/* --- Left Sidebar (Routes/Navigation) --- */}
      <aside className="w-64 p-6 border-r border-gray-800 bg-gray-950 flex flex-col space-y-8">
        <h1 className="text-2xl font-extrabold tracking-widest text-white uppercase">
          Instructor Hub
        </h1>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <NavItem
              key={link.key}
              icon={link.icon}
              label={link.label}
              isActive={link.key === activeKey}
            />
          ))}
        </nav>
      </aside>

      {/* --- Right Content Area (Course Management Features UI) --- */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10">
          <h2 className="text-4xl font-bold text-white">Course Management</h2>
          <p className="text-gray-400 mt-1">
            Create new courses, manage lessons, and control visibility.
          </p>
        </header>

        <div className="space-y-10">
          
          {/* Feature 1: Create Course - Add Course Page */}
          <section>
            <h3 className="text-2xl font-semibold mb-5 text-gray-200">
                1. Create Course: The Fundamentals
            </h3>
            <Card className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                  {/* Title & Description */}
                  <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Course Title</label>
                      <input type="text" placeholder="e.g., Gravix Video Editor Mastery" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-1 focus:ring-white/80 outline-none" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Pricing (USD)</label>
                      <input type="number" placeholder="99.99" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-1 focus:ring-white/80 outline-none" />
                  </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Course Description</label>
                  <textarea rows={4} placeholder="Detailed overview of the course content..." className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-1 focus:ring-white/80 outline-none"></textarea>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                  <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Thumbnail Image</label>
                      <div className="h-24 bg-gray-800 border border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-500">
                          Upload File
                      </div>
                  </div>
                  <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-1">Intro Video (URL or Upload)</label>
                      <input type="text" placeholder="https://youtube.com/..." className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-1 focus:ring-white/80 outline-none" />
                  </div>
              </div>
              <button className="px-6 py-2 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition-colors">
                  Save Course Draft
              </button>
            </Card>
          </section>

          {/* Feature 2: Manage Lessons - Course Details / Lessons */}
          <section>
            <h3 className="text-2xl font-semibold mb-5 text-gray-200">
                2. Manage Lessons: Video & Resources
            </h3>
            <Card className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <h4 className="text-xl font-medium text-gray-100">Module 1: Getting Started with Gravix</h4>
                    <button className="text-sm text-gray-400 hover:text-white">
                        + Add New Lesson
                    </button>
                </div>
                {/* Example Lesson Item */}
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <span className="text-gray-300">Lesson 1.1: Interface Overview (Video)</span>
                    <div className="space-x-4 text-sm text-gray-500">
                        <button className="hover:text-white">Edit Video</button>
                        <button className="hover:text-white">Add Notes/PDF</button>
                    </div>
                </div>
            </Card>
          </section>

          {/* Feature 3: Publish/Unpublish & Batches */}
          <section className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-2xl font-semibold mb-5 text-gray-200">
                    3. Visibility & Batches
                </h3>
                {/* Publish/Unpublish */}
                <Card className="space-y-4">
                    <h4 className="text-xl font-medium text-gray-100">Publish/Unpublish Courses</h4>
                    <p className="text-gray-400 text-sm">
                        Current Status: <span className="text-green-400 font-bold">Published</span>
                    </p>
                    <button className="px-4 py-2 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition-colors">
                        Unpublish Course
                    </button>
                </Card>
            </div>
            <div>
                {/* Schedule Batches */}
                <h3 className="text-2xl font-semibold mb-5 text-gray-200">
                    &nbsp;
                </h3> {/* Placeholder to align with card above */}
                <Card className="space-y-4">
                    <h4 className="text-xl font-medium text-gray-100">Schedule Batches</h4>
                    <p className="text-gray-400 text-sm">
                        Manage cohort-based learning sessions.
                    </p>
                    <button className="px-4 py-2 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition-colors">
                        Go to Batch Management
                    </button>
                </Card>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default D1;