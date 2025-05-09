import JobListings from "@/components/shared/JobListing"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FiArrowRight, FiCheckCircle, FiClock, FiGlobe } from "react-icons/fi"


export const metadata: Metadata = {
  title: "Careers | Your E-commerce Store",
  description: "Join our team and help shape the future of online shopping.",
}

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Join Our Growing Team
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            Help us shape the future of e-commerce and build exceptional shopping experiences for customers worldwide.
          </p>
          <button className="inline-flex items-center justify-center h-12 px-6 font-medium bg-white text-primary rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors">
            View Open Positions
            <FiArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Join ShopStyle</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We're building the future of online shopping with a team of passionate individuals who thrive on innovation
            and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiCheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p className="text-gray-500">
              Comprehensive health insurance, retirement plans, generous PTO, parental leave, and employee discounts.
            </p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiGlobe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Remote-First Culture</h3>
            <p className="text-gray-500">
              Work from anywhere with flexible hours. We believe in results, not where or when you work.
            </p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiClock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p className="text-gray-500">
              Continuous learning with education stipends, mentorship programs, and clear career advancement paths.
            </p>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Culture</h2>
              <p className="text-lg text-gray-500 mb-6">
                At ShopStyle, we foster an inclusive environment where diverse perspectives are valued and innovation
                thrives. Our team is passionate about creating exceptional shopping experiences while supporting each
                other's growth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Collaborative and supportive team environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Focus on work-life balance and employee wellbeing</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Regular team events, both virtual and in-person</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Commitment to diversity, equity, and inclusion</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/assets/product/mannequin.jpg"
                  alt="Team member collaborating"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square"
                />
                <Image
                  src="/assets/product/clothes.jpg"
                  alt="Office space"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/assets/product/mannequins.jpg"
                  alt="Team event"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square"
                />
                <Image
                  src="/assets/product/women.png"
                  alt="Team working remotely"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Open Positions</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Find your perfect role and join our team of passionate professionals.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <JobListings />
        </div>
      </section>

      {/* Employee Testimonials */}
      {/* <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Hear from the people who make ShopStyle an amazing place to work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Employee"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Senior Product Designer</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "Working at ShopStyle has been the highlight of my career. The collaborative environment and focus on
                  innovation allows me to create meaningful experiences for our customers while growing professionally."
                </p>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Employee"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "The remote-first approach and emphasis on work-life balance has been game-changing. I get to work
                  with cutting-edge technologies while having the flexibility to live where I want."
                </p>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Employee"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Priya Patel</h3>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "The growth opportunities at ShopStyle are unmatched. In just two years, I've been able to advance my
                  career while working with an amazing team that supports and challenges me every day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Process */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Hiring Process</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We've designed a thoughtful process to find the right candidates while respecting your time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Application</h3>
            <p className="text-sm text-gray-500">
              Submit your resume and answer a few questions about your experience and interests.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Initial Interview</h3>
            <p className="text-sm text-gray-500">
              A 30-minute video call with a recruiter to discuss your background and the role.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Skills Assessment</h3>
            <p className="text-sm text-gray-500">
              A practical exercise related to the role to showcase your skills and approach.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">4</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Final Interviews</h3>
            <p className="text-sm text-gray-500">Meet with team members and leadership to discuss the role in depth.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Common questions about working at ShopStyle</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-medium mb-2">Do you offer remote work options?</h3>
              <p className="text-gray-500">
                Yes, we're a remote-first company. While we have offices in major cities, most of our team works
                remotely, and we've built our culture around supporting distributed teams.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What's the interview process like?</h3>
              <p className="text-gray-500">
                Our process typically includes an initial screening, a skills assessment, and interviews with team
                members and leadership. We aim to be respectful of your time and transparent throughout.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">How often do you promote from within?</h3>
              <p className="text-gray-500">
                We prioritize internal growth and have a strong track record of promoting from within. We provide clear
                career paths and the support needed to advance your career.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What benefits do you offer?</h3>
              <p className="text-gray-500">
                We offer comprehensive health insurance, retirement plans with matching, generous PTO, parental leave,
                learning stipends, wellness programs, and employee discounts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Do you sponsor visas?</h3>
              <p className="text-gray-500">
                Yes, we sponsor visas for exceptional candidates. We have team members from around the world and value
                the diverse perspectives they bring.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What's your company culture like?</h3>
              <p className="text-gray-500">
                We foster a collaborative, inclusive environment where innovation thrives. We value work-life balance,
                continuous learning, and making an impact for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Don't See the Right Fit?</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind
          for future opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/careers/apply"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          >
            Submit Your Resume
            <FiArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-6 font-medium border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          >
            Contact Recruiting Team
          </Link>
        </div>
      </section>
    </div>
  )
}
