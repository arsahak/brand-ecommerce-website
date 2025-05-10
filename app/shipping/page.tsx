import Link from "next/link"
import { BsArrowLeft, BsTruck } from "react-icons/bs"

export default function ShippingPolicy() {
  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
          <BsArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <BsTruck className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Shipping Policy</h1>
      </div>

      <div className="text-gray-500 mb-8">
        <p>Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg">
          At StyleTreasure, we strive to provide you with reliable and efficient shipping services. This Shipping Policy
          outlines our practices regarding order processing, shipping methods, delivery times, and international
          shipping.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Order Processing</h2>
        <p>
          All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order
          confirmation email. If we are experiencing a high volume of orders, shipments may be delayed by a few days. If
          there will be a significant delay in the shipment of your order, we will contact you via email.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Methods & Delivery Times</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Shipping Method</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Estimated Delivery Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Standard Shipping</td>
                <td className="border border-gray-300 px-4 py-2">5-7 business days</td>
                <td className="border border-gray-300 px-4 py-2">
                  Free on orders over $50
                  <br />
                  $4.99 for orders under $50
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Express Shipping</td>
                <td className="border border-gray-300 px-4 py-2">2-3 business days</td>
                <td className="border border-gray-300 px-4 py-2">$9.99</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Next Day Delivery</td>
                <td className="border border-gray-300 px-4 py-2">1 business day</td>
                <td className="border border-gray-300 px-4 py-2">$19.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <strong>Note:</strong> Business days are Monday through Friday, excluding federal holidays.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Restrictions</h2>
        <p>
          We currently ship to all 50 U.S. states, Canada, and select international destinations. Some restrictions may
          apply for certain cosmetic products due to shipping regulations. If you have any questions about shipping to
          your location, please contact our customer service team.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">International Shipping</h2>
        <p>
          For international orders, please note that you may be responsible for duties, taxes, and customs clearance
          fees. Import duties and taxes are not included in the item price or shipping cost. These charges are the
          buyer's responsibility. Please check with your country's customs office to determine what these additional
          costs will be prior to purchasing.
        </p>
        <p>
          International shipping typically takes 7-21 business days, depending on the destination and customs
          processing.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tracking Information</h2>
        <p>
          Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can
          use this tracking number to check the status of your delivery. Please allow 24-48 hours for the tracking
          information to become available.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Shipping for Cosmetic Products</h2>
        <p>
          Cosmetic products are carefully packaged to prevent damage during transit. During extreme weather conditions
          (high heat or freezing temperatures), we may temporarily hold shipments of certain temperature-sensitive
          cosmetic products to prevent damage. If this affects your order, we will notify you via email.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Lost or Damaged Packages</h2>
        <p>
          StyleTreasure is not responsible for lost or stolen packages confirmed to be delivered to the address provided
          at checkout. If your tracking information states that your package was delivered but you have not received it,
          please contact the carrier first to file a claim.
        </p>
        <p>
          If your package arrives damaged, please take photos and contact our customer service team within 48 hours of
          delivery. We will work with you to resolve the issue promptly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Address Changes</h2>
        <p>
          If you need to change your shipping address after placing your order, please contact us immediately. We cannot
          guarantee that we will be able to change the shipping address if your order has already been processed.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p>If you have any questions about our shipping policy, please contact our customer service team:</p>
        <div className="mt-4">
          <strong>StyleTreasure</strong>
          <br />
          Email: shipping@styletreasure.com
          <br />
          Phone: (555) 123-4567
          <br />
          Hours: Monday-Friday, 9am-5pm EST
        </div>
      </div>
    </div>
  )
}
