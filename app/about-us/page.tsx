import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h1>
              <p className="text-gray-600 md:text-xl">
                Founded in 2015, StyleHub began with a simple mission: to provide high-quality, sustainable fashion that
                empowers individuals to express their unique style. What started as a small online boutique has grown
                into a global community of fashion enthusiasts who value quality, sustainability, and self-expression.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/assets/home/hero-img/young-woman-4266712_1280.jpg"
                alt="Our store"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-rose-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 3 3 7-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-gray-600">
                  We believe in creating products that last, using premium materials and expert craftsmanship.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-rose-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 3c.53 0 1.039.211 1.414.586l7 7 .586.586V11c0 .53-.211 1.039-.586 1.414l-7 7c-.375.375-.884.586-1.414.586s-1.039-.211-1.414-.586l-7-7C3.211 12.039 3 11.53 3 11s.211-1.039.586-1.414l7-7C10.961 3.211 11.47 3 12 3z" />
                    <path d="M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to ethical production and reducing our environmental footprint.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-rose-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-gray-600">
                  We foster a global community that celebrates individuality and self-expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate individuals behind our brand
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "With over 15 years in fashion retail, Sarah founded StyleHub with a vision to revolutionize online shopping.",
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Michael brings his unique artistic vision to our brand, overseeing all aspects of design and visual identity.",
              },
              {
                name: "Aisha Patel",
                role: "Head of Sustainability",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Aisha ensures our commitment to ethical practices and sustainable production across our supply chain.",
              },
              {
                name: "David Rodriguez",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "David leads our tech team, creating seamless digital experiences that connect our community worldwide.",
              },
              {
                name: "Emma Wilson",
                role: "Customer Experience Manager",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Emma is dedicated to ensuring every customer interaction with StyleHub exceeds expectations.",
              },
              {
                name: "James Taylor",
                role: "Supply Chain Director",
                image: "/placeholder.svg?height=400&width=400",
                bio: "James oversees our global operations, ensuring quality and efficiency from production to delivery.",
              },
            ].map((member, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-rose-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Milestones Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Journey</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key milestones in our growth story
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            {[
              {
                year: "2015",
                title: "Founded",
                description:
                  "StyleHub launched as an online boutique with a curated collection of sustainable fashion.",
              },
              {
                year: "2017",
                title: "First Physical Store",
                description: "Opened our flagship store in San Francisco, creating a physical space for our community.",
              },
              {
                year: "2019",
                title: "International Expansion",
                description: "Expanded operations to Europe and Asia, bringing our vision to a global audience.",
              },
              {
                year: "2021",
                title: "Sustainability Certification",
                description:
                  "Achieved B Corp certification, recognizing our commitment to social and environmental responsibility.",
              },
              {
                year: "2023",
                title: "Community Milestone",
                description: "Reached 1 million members in our global community of fashion enthusiasts.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col gap-2 md:grid md:grid-cols-[100px_1fr] md:gap-4 lg:gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:h-16 md:w-16">
                  <span className="font-bold">{milestone.year}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our community of fashion enthusiasts
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "StyleHub has transformed my wardrobe with sustainable pieces that I absolutely love. The quality is unmatched!",
                author: "Jessica T.",
                location: "New York, USA",
              },
              {
                quote:
                  "As someone who cares deeply about ethical fashion, I appreciate StyleHub's transparency about their supply chain.",
                author: "Marcus L.",
                location: "Berlin, Germany",
              },
              {
                quote:
                  "The customer service is exceptional. They went above and beyond to help me find the perfect outfit for a special occasion.",
                author: "Sophia K.",
                location: "Toronto, Canada",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <div className="flex flex-col gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-rose-300"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="text-gray-600">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of our journey and stay updated with our latest collections and sustainability initiatives.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/shop">
                <button className="w-full min-[400px]:w-auto px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Shop Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full min-[400px]:w-auto px-6 py-3 text-base font-medium text-primary bg-white border border-primary rounded-md hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connect With Us</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow us on social media for style inspiration, behind-the-scenes content, and community stories.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-white p-4 text-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-4 text-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-4 text-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
