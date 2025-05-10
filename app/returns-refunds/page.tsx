"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shared/custom-accordion"
import Link from "next/link"
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi"

export default function ReturnsRefunds() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
          <FiArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <FiRotateCcw
         className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Returns & Refunds</h1>
      </div>

      <div className="text-gray-500 mb-8">
        <p>Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg">
          We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, we're
          here to help.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="return-policy">
          <AccordionTrigger className="text-lg font-medium">Return Policy</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="space-y-4">
              <p>
                You have 30 days from the date of delivery to return your StyleTreasure purchase. To be eligible for a
                return, your item must be in the same condition that you received it, unworn or unused, with tags, and
                in its original packaging.
              </p>
              <h3 className="text-base font-medium text-gray-900">Clothing Returns</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Items must have all original tags attached</li>
                <li>Items must not have been worn, washed, or altered</li>
                <li>Items must be free from perfume, deodorant, or makeup stains</li>
                <li>Items must be returned in their original packaging</li>
              </ul>
              <h3 className="text-base font-medium text-gray-900">Jewelry Returns</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Items must be in their original, undamaged condition</li>
                <li>Items must not show signs of wear or damage</li>
                <li>Items must be returned with all original packaging, certificates, and documentation</li>
                <li>Fine jewelry and precious stones must include original authentication certificates</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="non-returnable">
          <AccordionTrigger className="text-lg font-medium">Non-Returnable Items</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="space-y-4">
              <p>Several types of goods are exempt from being returned. Non-returnable items include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gift cards</li>
                <li>Downloadable products</li>
                <li>Personalized or custom-made items</li>
                <li>Intimate apparel and swimwear (for hygiene reasons)</li>
                <li>Earrings and body piercing jewelry (for hygiene reasons)</li>
                <li>Sale items marked as "Final Sale"</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="refunds">
          <AccordionTrigger className="text-lg font-medium">Refunds Process</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="space-y-4">
              <p>
                Once we receive and inspect your return, we will send you an email to notify you that we have received
                your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p>
                If you are approved, then your refund will be processed, and a credit will automatically be applied to
                your original method of payment within 5-10 business days.
              </p>
              <h3 className="text-base font-medium text-gray-900">Refund Methods</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Credit/Debit Card:</strong> Refund to the original card used for purchase
                </li>
                <li>
                  <strong>Store Credit:</strong> Available for returns without receipt or beyond the return window
                </li>
                <li>
                  <strong>Gift Card Purchases:</strong> Refunded as store credit
                </li>
              </ul>
              <p>
                Please note that depending on your credit card company, it may take an additional 2-10 business days
                after your credit is applied for it to post to your account.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="exchanges">
          <AccordionTrigger className="text-lg font-medium">Exchanges</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="space-y-4">
              <p>
                We offer exchanges for items of the same product in a different size or color, subject to availability.
                To request an exchange, please follow the same process as returns and indicate your exchange preference
                in the return form.
              </p>
              <p>
                If the item you want to exchange for is of higher value, you will need to pay the price difference. If
                it is of lower value, we will refund the difference to your original payment method.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shipping">
          <AccordionTrigger className="text-lg font-medium">Return Shipping</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="space-y-4">
              <p>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs
                are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your
                refund.
              </p>
              <p>
                For items that are damaged, defective, or incorrect upon arrival, we will provide a prepaid return
                shipping label and process a full refund including original shipping costs.
              </p>
              <h3 className="text-base font-medium text-gray-900">Return Address</h3>
              <p>
                StyleTreasure Returns Department
                <br />
                456 Return Lane
                <br />
                Style City, ST 12345
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="damaged-items">
          <AccordionTrigger className="text-lg font-medium">Damaged or Defective Items</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="space-y-4">
              <p>
                If you receive a damaged or defective item, please contact our customer service team within 48 hours of
                receiving your order. Please provide photos of the damaged item and packaging.
              </p>
              <p>For damaged or defective items, we offer:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full refund including shipping costs</li>
                <li>Replacement of the same item (subject to availability)</li>
                <li>Store credit with an additional 10% bonus</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">
          If you have any questions about our return and refund policy, please contact our customer service team:
        </p>
        <div className="space-y-2">
          <p>
            <strong>Email:</strong> returns@styletreasure.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Hours:</strong> Monday-Friday, 9am-5pm EST
          </p>
        </div>
      </div>
    </div>
  )
}
