import Link from "next/link"
import { BiShield } from "react-icons/bi"
import { BsArrowLeft } from "react-icons/bs"
// import { ArrowLeft, Shield } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <BsArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <BiShield className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      </div>

      <div className="text-muted-foreground mb-8">
        <p>Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="lead">
          At StyleTreasure, we value your privacy and are committed to protecting your personal information. This
          Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a
          purchase.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you visit our website, we may collect certain information about your device, including information about
          your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          When you make a purchase or attempt to make a purchase through the website, we collect certain information
          from you, including your name, billing address, shipping address, payment information (including credit card
          numbers), email address, and phone number.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our website</li>
          <li>To process your orders and manage your account</li>
          <li>To fulfill any other purpose for which you provide it</li>
          <li>To provide you with information, products, or services that you request from us</li>
          <li>To improve our website, products, and services</li>
          <li>To personalize your experience and deliver content and product offerings relevant to your interests</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We may share your personal information with our business partners, trusted affiliates, and service providers
          to help us provide services to you, as long as those parties agree to keep this information confidential.
        </p>

        <h2>Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information when you place
          an order or enter, submit, or access your personal information. We offer the use of a secure server. All
          supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to help us remember and process the items in your shopping cart, understand and save your
          preferences for future visits, and compile aggregate data about site traffic and site interaction.
        </p>

        <h2>Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information
          unless we provide you with advance notice. This does not include website hosting partners and other parties
          who assist us in operating our website, conducting our business, or servicing you, so long as those parties
          agree to keep this information confidential.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date at the top of this page.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="not-prose">
          <strong>StyleTreasure</strong>
          <br />
          Email: privacy@styletreasure.com
          <br />
          Phone: (555) 123-4567
          <br />
          Address: 123 Fashion Avenue, Style City, ST 12345
        </p>
      </div>
    </div>
  )
}
