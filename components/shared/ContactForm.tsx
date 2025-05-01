"use client"

import React, { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3">
          <FaCheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Message Sent Successfully</h3>
        <p className="mb-6 text-gray-500">
          Thank you for contacting us. We'll get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="rounded border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="block text-sm font-medium">
            First name
          </label>
          <input
            id="first-name"
            required
            placeholder="John"
            className="w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="block text-sm font-medium">
            Last name
          </label>
          <input
            id="last-name"
            required
            placeholder="Doe"
            className="w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="john.doe@example.com"
          className="w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
          className="w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject
        </label>
        <select
          id="subject"
          required
          className="w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select a subject</option>
          <option value="order">Order Inquiry</option>
          <option value="return">Return/Refund</option>
          <option value="product">Product Information</option>
          <option value="shipping">Shipping Question</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="order-number" className="block text-sm font-medium">
          Order Number (if applicable)
        </label>
        <input
          id="order-number"
          placeholder="e.g. #12345678"
          className="w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">
          How would you prefer to be contacted?
        </label>
        <div className="flex space-x-6">
          <label className="flex items-center space-x-2 text-sm font-normal">
            <input type="radio" name="contact-method" value="email" defaultChecked className="accent-primary"
            />
            <span>Email</span>
          </label>
          <label className="flex items-center space-x-2 text-sm font-normal">
            <input type="radio" name="contact-method" value="phone" className="accent-primary"
            />
            <span>Phone</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          placeholder="Please provide details about your inquiry..."
          className="min-h-[120px] w-full rounded border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="privacy-policy"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="privacy-policy" className="text-sm font-normal leading-snug">
          I agree to the{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>{" "}
          and consent to the processing of my data.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/80 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
