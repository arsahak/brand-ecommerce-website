// app/contact/page.tsx or similar path

import ContactForm from "@/components/shared/ContactForm"
import type { Metadata } from "next"
import Link from "next/link"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Contact Us | Your E-commerce Store",
  description: "Get in touch with our customer support team for any questions or concerns.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="mt-4 text-gray-500">
          We're here to help! Reach out to us with any questions or concerns.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Info Card */}
        <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="aspect-video w-full bg-gray-100">
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <FaMapMarkerAlt className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Visit Our Store</h3>
            <div className="space-y-3 text-gray-500">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0" />
                <p>123 Shopping Avenue, Retail District, City, 10001</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="h-5 w-5 shrink-0" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 shrink-0" />
                <p>support@yourecommercestore.com</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-2 font-medium">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <div>Monday - Friday</div>
                <div>9:00 AM - 8:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 6:00 PM</div>
                <div>Sunday</div>
                <div>11:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="md:col-span-1 lg:col-span-2 rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-500">Find quick answers to common questions</p>
        </div>

        <div className="grid gap-6 md:grid-cols=2 lg:grid-cols-3">
          {[
            {
              question: "What are your shipping options?",
              answer: "We offer standard (3-5 business days), express (1-2 business days), and international shipping options.",
            },
            {
              question: "How can I track my order?",
              answer:
                "You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.",
            },
            {
              question: "What is your return policy?",
              answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
            },
            {
              question: "Do you offer international shipping?",
              answer:
                "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
            },
            {
              question: "How do I apply a discount code?",
              answer:
                "You can enter your discount code during checkout in the designated promo code field before completing your purchase.",
            },
            {
              question: "Do you have a loyalty program?",
              answer:
                "Yes, join our rewards program to earn points on purchases that can be redeemed for discounts on future orders.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-medium">{faq.question}</h3>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-500">Still have questions? Check our comprehensive help center.</p>
          <Link
            href="/help-center"
            className="inline-block rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/80 transition"
          >
            Visit Help Center
          </Link>
        </div>
      </div>
    </div>
  )
}
