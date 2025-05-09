"use client"

import { useState } from "react"
import Link from "next/link"
import { FiChevronDown, FiChevronUp, FiMapPin } from "react-icons/fi"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "engineering",
    location: "Remote (US)",
    type: "Full-time",
    posted: "2 weeks ago",
    description:
      "We're looking for a Senior Frontend Developer to join our team and help build exceptional user experiences for our e-commerce platform. You'll work closely with designers and backend developers to implement responsive, accessible, and performant interfaces.",
    responsibilities: [
      "Develop and maintain high-quality frontend code using React, Next.js, and TypeScript",
      "Collaborate with designers to implement UI/UX designs with pixel-perfect accuracy",
      "Optimize applications for maximum speed and scalability",
      "Ensure cross-browser compatibility and responsive design",
      "Write unit and integration tests for your code",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, Next.js, and TypeScript",
      "Experience with modern CSS techniques and preprocessors",
      "Understanding of web performance optimization techniques",
      "Knowledge of frontend testing frameworks",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "design",
    location: "Remote (Worldwide)",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our e-commerce platform. You'll work on everything from user research to visual design, helping to shape the future of our product.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with product managers and engineers to define features",
      "Design accessible, responsive interfaces for web and mobile",
      "Contribute to and maintain our design system",
    ],
    requirements: [
      "3+ years of experience in UX/UI design for digital products",
      "Proficiency in design tools like Figma or Sketch",
      "Portfolio demonstrating strong visual design skills",
      "Experience with user research and usability testing",
      "Understanding of accessibility standards",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "marketing",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "We're looking for a Digital Marketing Specialist to help grow our online presence and drive customer acquisition. You'll be responsible for planning and executing marketing campaigns across various digital channels.",
    responsibilities: [
      "Plan and execute digital marketing campaigns across email, social media, and paid advertising",
      "Analyze campaign performance and optimize for better results",
      "Manage our social media presence and community engagement",
      "Collaborate with the content team to create compelling marketing materials",
      "Stay up-to-date with digital marketing trends and best practices",
    ],
    requirements: [
      "3+ years of experience in digital marketing",
      "Experience with email marketing platforms, social media management, and paid advertising",
      "Strong analytical skills and experience with marketing analytics tools",
      "Excellent written and verbal communication skills",
      "Knowledge of SEO/SEM principles",
    ],
  },
  {
    id: 4,
    title: "Backend Developer",
    department: "engineering",
    location: "Remote (US)",
    type: "Full-time",
    posted: "3 weeks ago",
    description:
      "We're seeking a Backend Developer to help build and maintain the server-side of our e-commerce platform. You'll work on API development, database design, and ensuring the scalability and security of our systems.",
    responsibilities: [
      "Design and implement APIs and backend services",
      "Work with databases and optimize queries for performance",
      "Implement security and data protection measures",
      "Collaborate with frontend developers to integrate user-facing elements",
      "Write clean, maintainable, and well-tested code",
    ],
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency in Node.js, Python, or similar backend technologies",
      "Experience with SQL and NoSQL databases",
      "Knowledge of API design principles and best practices",
      "Understanding of cloud services (AWS, GCP, or Azure)",
    ],
  },
  {
    id: 5,
    title: "Product Manager",
    department: "product",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    posted: "5 days ago",
    description:
      "We're looking for a Product Manager to help define and execute our product strategy. You'll work closely with engineering, design, and marketing teams to build features that delight our customers and drive business growth.",
    responsibilities: [
      "Define product requirements and create detailed specifications",
      "Prioritize features and build product roadmaps",
      "Collaborate with engineering and design teams throughout the development process",
      "Analyze user feedback and metrics to inform product decisions",
      "Present product plans and results to stakeholders",
    ],
    requirements: [
      "3+ years of experience in product management, preferably in e-commerce",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Experience with agile development methodologies",
      "Data-driven approach to decision making",
    ],
  },
]

export default function JobListings({ filter = "all" }) {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  const toggleJob = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const filteredJobs = activeTab === "all" ? jobs : jobs.filter((job) => job.department === activeTab)

  return (
    <div>
      {/* Custom Tabs */}
      <div className="flex border-b mb-8">
        <button
          onClick={() => handleTabChange("all")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "all" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleTabChange("engineering")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "engineering"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Engineering
        </button>
        <button
          onClick={() => handleTabChange("design")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "design" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Design
        </button>
        <button
          onClick={() => handleTabChange("marketing")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "marketing" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Marketing
        </button>
      </div>

      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No open positions in this department at the moment.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex items-center mt-1 text-gray-500 text-sm">
                      <FiMapPin className="h-4 w-4 mr-1" />
                      {job.location} • {job.type}
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {job.department}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-4 mb-4">{job.description}</p>
                {expandedJob === job.id && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center border-t bg-gray-50 px-6 py-3">
                <span className="text-sm text-gray-500">Posted {job.posted}</span>
                <div className="flex gap-3">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={() => toggleJob(job.id)}
                  >
                    {expandedJob === job.id ? (
                      <>
                        Less Details
                        <FiChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        More Details
                        <FiChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </button>
                  <Link
                    href={`/careers/apply/${job.id}`}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
