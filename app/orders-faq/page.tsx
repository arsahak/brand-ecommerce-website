"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shared/custom-accordion"
import Link from "next/link"
import { BiShoppingBag } from "react-icons/bi"
import { BsArrowLeft } from "react-icons/bs"

export default function OrdersFAQ() {
  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
          <BsArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <BiShoppingBag className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Orders FAQ</h1>
      </div>

      <div className="text-gray-500 mb-8">
        <p>Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg">
          Find answers to the most common questions about ordering from StyleTreasure, including how to place orders,
          track shipments, and resolve issues.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Placing Orders</h2>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="how-to-order">
            <AccordionTrigger className="text-lg font-medium">How do I place an order?</AccordionTrigger>
            <AccordionContent
             className="text-gray-600">
              <p>To place an order on StyleTreasure:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Browse our collection and select the items you wish to purchase</li>
                <li>Choose your size, color, and quantity</li>
                <li>Click "Add to Cart"</li>
                <li>When you're ready to checkout, click on the cart icon in the top right corner</li>
                <li>Review your items and click "Proceed to Checkout"</li>
                <li>Enter your shipping and billing information</li>
                <li>Select your preferred shipping method</li>
                <li>Enter payment details and click "Place Order"</li>
              </ol>
              <p className="mt-2">You'll receive an order confirmation email shortly after placing your order.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="guest-checkout">
            <AccordionTrigger className="text-lg font-medium">Can I check out as a guest?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                Yes, you can check out as a guest without creating an account. Simply proceed to checkout and fill in
                your shipping and billing information. However, creating an account offers several benefits, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Faster checkout for future purchases</li>
                <li>Ability to track your orders</li>
                <li>Access to your order history</li>
                <li>Easier returns and exchanges</li>
                <li>Exclusive offers and promotions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="promo-codes">
            <AccordionTrigger className="text-lg font-medium">How do I apply a promo code?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>To apply a promo code to your order:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Add items to your cart</li>
                <li>Go to your cart page</li>
                <li>Look for the "Promo Code" or "Discount Code" field</li>
                <li>Enter your code and click "Apply"</li>
              </ol>
              <p className="mt-2">
                The discount will be applied to your order if the code is valid and meets all requirements. Please note
                that some promo codes may have restrictions, such as minimum purchase amounts or exclusions for certain
                products.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment-methods">
            <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>We accept the following payment methods:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Credit/Debit Cards (Visa, Mastercard, American Express, Discover)</li>
                <li>PayPal</li>
                <li>Apple Pay</li>
                <li>Google Pay</li>
                <li>Shop Pay</li>
                <li>StyleTreasure Gift Cards</li>
              </ul>
              <p className="mt-2">
                All payments are securely processed and your payment information is never stored on our servers.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-xl font-semibold">Order Processing</h2>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="order-confirmation">
            <AccordionTrigger className="text-lg font-medium">Will I receive an order confirmation?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                Yes, you will receive an order confirmation email shortly after placing your order. This email contains
                your order number, a summary of the items purchased, billing information, shipping address, and
                estimated delivery date.
              </p>
              <p className="mt-2">
                If you don't receive an order confirmation within 24 hours, please check your spam folder. If you still
                can't find it, please contact our customer service team with your name and the email address you used
                for the order.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="processing-time">
            <AccordionTrigger className="text-lg font-medium">
              How long does it take to process my order?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                Orders are typically processed within 1-2 business days (excluding weekends and holidays). During peak
                seasons or promotional periods, processing may take up to 3 business days.
              </p>
              <p className="mt-2">
                Once your order has been processed, you will receive a shipping confirmation email with tracking
                information. Please note that order processing time is separate from shipping time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="out-of-stock">
            <AccordionTrigger className="text-lg font-medium">
              What happens if an item in my order is out of stock?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                We make every effort to maintain accurate inventory. However, if an item in your order becomes
                unavailable after you've placed your order, we will contact you via email with the following options:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Wait for the item to be restocked (if expected within 30 days)</li>
                <li>Replace with a similar item</li>
                <li>Remove the item from your order and receive a refund for that item</li>
                <li>Cancel the entire order for a full refund</li>
              </ul>
              <p className="mt-2">We will not charge you for out-of-stock items until they are ready to ship.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="order-verification">
            <AccordionTrigger className="text-lg font-medium">Why is my order pending verification?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                In some cases, orders may be flagged for verification as part of our fraud prevention measures. This
                typically happens when:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The billing and shipping addresses are different</li>
                <li>It's your first order with us</li>
                <li>The order value is unusually high</li>
                <li>The order is being shipped internationally</li>
              </ul>
              <p className="mt-2">
                If your order requires verification, our team will contact you within 24 hours. To expedite this
                process, please ensure your contact information is accurate. Once verified, your order will be processed
                immediately.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-xl font-semibold">Order Tracking</h2>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="track-order">
            <AccordionTrigger className="text-lg font-medium">How can I track my order?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>You can track your order in several ways:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>
                  <strong>Account Dashboard:</strong> Log into your account and go to "Order History"
                </li>
                <li>
                  <strong>Shipping Confirmation Email:</strong> Click the tracking link in your shipping confirmation
                  email
                </li>
                <li>
                  <strong>Order Tracking Page:</strong> Visit our{" "}
                  <Link href="/track-order" className="text-blue-600 hover:underline">
                    Order Tracking
                  </Link>{" "}
                  page and enter your order number and email address
                </li>
              </ol>
              <p className="mt-2">
                Please note that tracking information may take 24-48 hours to update after you receive your shipping
                confirmation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="no-tracking">
            <AccordionTrigger className="text-lg font-medium">Why doesn't my tracking number work?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>If your tracking number isn't working, there could be several reasons:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The tracking information may take 24-48 hours to update in the carrier's system</li>
                <li>There might be a delay in scanning the package at the carrier's facility</li>
                <li>The tracking number may have been entered incorrectly</li>
              </ul>
              <p className="mt-2">
                If your tracking number still doesn't work after 48 hours, please contact our customer service team with
                your order number and we'll investigate the issue.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="order-status">
            <AccordionTrigger className="text-lg font-medium">
              What do the different order statuses mean?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>Your order will go through several statuses:</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <strong className="font-medium">Order Placed:</strong> We've received your order and are preparing to
                  process it
                </li>
                <li>
                  <strong className="font-medium">Payment Confirmed:</strong> Your payment has been successfully
                  processed
                </li>
                <li>
                  <strong className="font-medium">Processing:</strong> Your order is being prepared for shipping
                </li>
                <li>
                  <strong className="font-medium">Ready to Ship:</strong> Your order has been packed and is waiting for
                  carrier pickup
                </li>
                <li>
                  <strong className="font-medium">Shipped:</strong> Your order is on its way to you
                </li>
                <li>
                  <strong className="font-medium">Delivered:</strong> Your order has been delivered
                </li>
                <li>
                  <strong className="font-medium">Pending Verification:</strong> Additional verification is needed
                  before processing
                </li>
                <li>
                  <strong className="font-medium">On Hold:</strong> There's an issue with your order that needs to be
                  resolved
                </li>
                <li>
                  <strong className="font-medium">Cancelled:</strong> Your order has been cancelled
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="delivery-estimates">
            <AccordionTrigger className="text-lg font-medium">
              How accurate are your delivery estimates?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                Our delivery estimates are based on average transit times provided by our shipping carriers. While we
                strive for accuracy, actual delivery times may vary due to factors beyond our control, such as:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Weather conditions</li>
                <li>Carrier delays</li>
                <li>Customs processing for international orders</li>
                <li>High volume periods (holidays, sales events)</li>
              </ul>
              <p className="mt-2">
                The estimated delivery date shown at checkout includes both processing time and shipping time. For the
                most up-to-date delivery information, please check your order tracking.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-xl font-semibold">Modifying or Cancelling Orders</h2>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="modify-order">
            <AccordionTrigger className="text-lg font-medium">
              Can I modify my order after it's been placed?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                We process orders quickly to ensure fast shipping. You may be able to modify your order if it hasn't
                entered the processing stage yet. To request a modification:
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Log into your account and check your order status</li>
                <li>
                  If the status is "Order Placed" or "Payment Confirmed," contact our customer service team immediately
                </li>
                <li>Provide your order number and the changes you'd like to make</li>
              </ol>
              <p className="mt-2">Possible modifications include:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Changing the shipping address</li>
                <li>Updating size or color preferences</li>
                <li>Adding or removing items</li>
              </ul>
              <p className="mt-2">
                If your order has already entered the processing stage, we may not be able to make changes. In this
                case, you may need to cancel the order (if possible) and place a new one, or return the items after
                delivery.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cancel-order">
            <AccordionTrigger className="text-lg font-medium">How do I cancel my order?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>To cancel your order:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Log into your account and go to "Order History"</li>
                <li>Find the order you wish to cancel and click "View Order"</li>
                <li>If a "Cancel Order" button is available, click it and follow the instructions</li>
                <li>If no cancellation option is available, contact our customer service team immediately</li>
              </ol>
              <p className="mt-2">
                Orders can only be cancelled if they haven't entered the processing stage. If your order has already
                been processed or shipped, you'll need to follow our return procedure after receiving the items.
              </p>
              <p className="mt-2">
                For cancelled orders, your refund will be processed within 3-5 business days using your original payment
                method.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="add-items">
            <AccordionTrigger className="text-lg font-medium">Can I add items to an existing order?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                We may be able to add items to your order if it hasn't entered the processing stage yet. To request
                this:
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Contact our customer service team immediately</li>
                <li>Provide your order number and the items you'd like to add</li>
                <li>Our team will check if the modification is possible</li>
              </ol>
              <p className="mt-2">
                If we can add the items, we'll send you a payment link for the additional amount. Once payment is
                received, your order will be updated.
              </p>
              <p className="mt-2">
                If your order has already entered the processing stage, we recommend placing a separate order for the
                additional items.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="change-address">
            <AccordionTrigger className="text-lg font-medium">Can I change my shipping address?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                You may be able to change your shipping address if your order hasn't entered the processing stage yet.
                To request an address change:
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Contact our customer service team immediately</li>
                <li>Provide your order number and the new shipping address</li>
                <li>For security purposes, we may require verification of your identity</li>
              </ol>
              <p className="mt-2">
                If your order has already been processed or shipped, we cannot change the delivery address. In this
                case, you may need to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Contact the shipping carrier directly to request a delivery change (additional fees may apply)</li>
                <li>Arrange for someone to receive the package at the original address</li>
                <li>
                  Wait for the package to be returned to us, after which we can ship to the correct address (additional
                  shipping fees will apply)
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-xl font-semibold">Order Issues</h2>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="missing-items">
            <AccordionTrigger className="text-lg font-medium">My order arrived with missing items</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>If your order arrived with missing items, please follow these steps:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Check your order confirmation email to verify what items were included in your order</li>
                <li>
                  Check if your order was split into multiple shipments (this information would be in your shipping
                  confirmation email)
                </li>
                <li>If items are indeed missing, contact our customer service team within 48 hours of delivery</li>
                <li>
                  Provide your order number, a list of the missing items, and photos of the package contents if possible
                </li>
              </ol>
              <p className="mt-2">Our team will investigate the issue and offer one of the following solutions:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Ship the missing items to you as soon as possible</li>
                <li>Issue a refund for the missing items</li>
                <li>Provide store credit for the value of the missing items</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wrong-items">
            <AccordionTrigger className="text-lg font-medium">I received the wrong items</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>If you received incorrect items in your order, please:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Take photos of the incorrect items and the packaging</li>
                <li>Contact our customer service team within 48 hours of delivery</li>
                <li>Provide your order number and details about what you received versus what you ordered</li>
              </ol>
              <p className="mt-2">
                We'll provide you with a prepaid return shipping label for the incorrect items and either:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Ship the correct items to you as soon as possible</li>
                <li>Issue a refund if the correct items are no longer available</li>
                <li>Offer store credit with an additional 10% bonus</li>
              </ul>
              <p className="mt-2">
                You won't be charged for return shipping in this case, and we'll expedite the shipment of your correct
                items.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="damaged-items">
            <AccordionTrigger className="text-lg font-medium">My order arrived damaged</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>If your items arrived damaged, please:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Take clear photos of the damaged items and the packaging</li>
                <li>Contact our customer service team within 48 hours of delivery</li>
                <li>Provide your order number and details about the damage</li>
              </ol>
              <p className="mt-2">
                We'll provide you with a prepaid return shipping label and offer one of the following solutions:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Replace the damaged items (if still available)</li>
                <li>Issue a full refund including original shipping costs</li>
                <li>Provide store credit with an additional 10% bonus</li>
              </ul>
              <p className="mt-2">
                For cosmetic products that may have leaked or spilled during transit, please do not return them. Simply
                send photos showing the damage, and we'll process a replacement or refund.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="not-delivered">
            <AccordionTrigger className="text-lg font-medium">
              My order shows as delivered but I didn't receive it
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>If your tracking information shows your package as delivered but you haven't received it, please:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Check with family members or neighbors who might have accepted the package</li>
                <li>
                  Look around your property, including side doors, garages, and bushes where the package might have been
                  placed
                </li>
                <li>Wait 24 hours, as sometimes tracking updates before actual delivery</li>
                <li>If still missing, contact the shipping carrier first to file a claim and get delivery details</li>
                <li>Then contact our customer service team with your order number and the carrier's response</li>
              </ol>
              <p className="mt-2">
                We'll work with the carrier to locate your package or provide a solution. For verified cases of lost
                packages, we may:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Ship replacement items</li>
                <li>Issue a refund</li>
                <li>File a claim with the shipping carrier</li>
              </ul>
              <p className="mt-2">
                For high-value orders, we may require a police report for missing packages before processing a
                replacement or refund.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="text-xl font-semibold">International Orders</h2>
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="international-shipping">
            <AccordionTrigger className="text-lg font-medium">Do you ship internationally?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                Yes, we ship to most countries worldwide. International shipping typically takes 7-21 business days,
                depending on the destination and customs processing.
              </p>
              <p className="mt-2">
                Please note that some cosmetic products may have shipping restrictions to certain countries due to
                ingredients or regulations. These restrictions will be noted on the product page.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customs-duties">
            <AccordionTrigger className="text-lg font-medium">
              Will I have to pay customs duties and taxes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>
                For international orders, you may be responsible for paying import duties, taxes, and customs clearance
                fees. These charges are not included in our prices or shipping costs and are the buyer's responsibility.
              </p>
              <p className="mt-2">
                Customs policies vary by country, so please check with your local customs office before placing an order
                to understand what additional costs you might incur. We cannot mark packages as "gifts" or declare a
                lower value to help avoid customs fees, as this is against international shipping regulations.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="international-returns">
            <AccordionTrigger className="text-lg font-medium">How do international returns work?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>International customers can return items within 30 days of delivery. However, please note:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>You are responsible for return shipping costs unless the items are defective or incorrect</li>
                <li>You should use a trackable shipping method</li>
                <li>The original shipping costs are non-refundable</li>
                <li>Any customs fees you paid when receiving the order are non-refundable</li>
              </ul>
              <p className="mt-2">
                To initiate an international return, please contact our customer service team for instructions and the
                correct return address. Once we receive and inspect your return, we'll process your refund within 5-10
                business days.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="international-shipping-time">
            <AccordionTrigger className="text-lg font-medium">
              Why is my international order taking so long?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p>International orders typically take longer due to several factors:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Customs inspection and processing, which can take several days to weeks</li>
                <li>Additional security screening</li>
                <li>Transit between multiple shipping facilities</li>
                <li>Local delivery procedures in your country</li>
              </ul>
              <p className="mt-2">
                While we provide estimated delivery timeframes, these are only estimates and actual delivery times may
                vary. If your order has been in transit for more than 21 business days, please contact our customer
                service team with your order number and tracking information, and we'll investigate the status with the
                shipping carrier.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h2 className="text-xl font-semibold mb-4">Need More Help With Your Order?</h2>
        <p className="mb-4">
          If you couldn't find the answer to your question, please contact our customer service team:
        </p>
        <div className="space-y-2">
          <p>
            <strong>Email:</strong> orders@styletreasure.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Hours:</strong> Monday-Friday, 9am-5pm EST
          </p>
          <p className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
