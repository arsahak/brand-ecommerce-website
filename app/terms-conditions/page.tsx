import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { FiFileText } from "react-icons/fi"

export default function TermsConditions() {
  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
          <BsArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <FiFileText className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Terms & Conditions</h1>
      </div>

      <div className="text-gray-500 mb-8">
        <p>Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg">
          Welcome to StyleTreasure. These Terms and Conditions govern your use of our website and the purchase of
          products from our online store. By accessing our website or placing an order, you agree to be bound by these
          Terms and Conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these Terms and Conditions and all applicable laws
          and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this
          site.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account on our website.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the website and for any activities or
          actions under your password. You agree not to disclose your password to any third party. You must notify us
          immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Products and Pricing</h2>
        <p>
          We make every effort to display as accurately as possible the colors, features, specifications, and details of
          the products available on our store. However, we cannot guarantee that your computer's display of any color
          will be accurate.
        </p>
        <p>
          We reserve the right, but are not obligated, to limit the sales of our products to any person, geographic
          region, or jurisdiction. We may exercise this right on a case-by-case basis. All descriptions of products and
          pricing are subject to change at any time without notice, at our sole discretion.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Orders and Payments</h2>
        <p>
          We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel
          quantities purchased per person, per household, or per order. These restrictions may include orders placed by
          or under the same customer account, the same credit card, and/or orders that use the same billing and/or
          shipping address.
        </p>
        <p>
          You agree to provide current, complete, and accurate purchase and account information for all purchases made
          at our store. You agree to promptly update your account and other information, including your email address
          and credit card numbers and expiration dates, so that we can complete your transactions and contact you as
          needed.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Shipping and Delivery</h2>
        <p>
          Shipping and delivery dates are estimates only and cannot be guaranteed. We are not liable for any delays in
          shipments. Risk of loss and title for items purchased from our website pass to you upon delivery of the items
          to the carrier.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Product Usage and Safety</h2>
        <p>
          <strong>Clothing:</strong> All clothing items should be washed before first use according to the care
          instructions on the label. We are not responsible for any allergic reactions or skin irritations that may
          occur from wearing our clothing products.
        </p>
        <p>
          <strong>Cosmetics:</strong> All cosmetic products should be patch tested before full application. Do not use
          cosmetic products if you have known allergies to any of the ingredients listed. Discontinue use immediately if
          irritation occurs. Keep all cosmetic products away from children and avoid contact with eyes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
        <p>
          The website and its entire contents, features, and functionality (including but not limited to all
          information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
          thereof), are owned by StyleTreasure, its licensors, or other providers of such material and are protected by
          copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
        <p>
          In no event shall StyleTreasure, nor its directors, employees, partners, agents, suppliers, or affiliates, be
          liable for any indirect, incidental, special, consequential, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or
          use of or inability to access or use the website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless StyleTreasure, its affiliates, licensors, and service
          providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
          suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
          losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
          violation of these Terms and Conditions or your use of the website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
        <p>
          These Terms and Conditions and any separate agreements whereby we provide you Services shall be governed by
          and construed in accordance with the laws of the United States and the State of New York.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms and
          Conditions by posting updates and changes to our website. It is your responsibility to check our website
          periodically for changes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
        <p>Questions about the Terms and Conditions should be sent to us at:</p>
        <div className="mt-4">
          <strong>StyleTreasure</strong>
          <br />
          Email: legal@styletreasure.com
          <br />
          Phone: (555) 123-4567
          <br />
          Address: 123 Fashion Avenue, Style City, ST 12345
        </div>
      </div>
    </div>
  )
}
