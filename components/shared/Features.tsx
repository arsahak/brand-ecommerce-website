// const features = [
//     {
//       icon: (
//         <svg
//           className="w-8 h-8 stroke-primary"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
//           />
//         </svg>
//       ),
//       title: "Free Shipping",
//       description: "Free shipping on all US order or order above $200",
//     },
//     {
//       icon: (
//         <svg
//           className="w-8 h-8 stroke-primary"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
//           />
//         </svg>
//       ),
//       title: "24X7 Support",
//       description: "Contact us 24 hours a day, 7 days a week",
//     },
//     {
//       icon: (
//         <svg
//           className="w-8 h-8 stroke-primary"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//           />
//         </svg>
//       ),
//       title: "30 Days Return",
//       description: "Simply return it within 30 days for an exchange",
//     },
//     {
//       icon: (
//         <svg
//           className="w-8 h-8 stroke-primary"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       ),
//       title: "Payment Secure",
//       description: "Contact us 24 hours a day, 7 days a week",
//     },
//   ]
  
//   export default function Features() {
//     return (
//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div key={index} className="p-6 bg-white border border-gray-100 rounded-lg text-center">
//               <div className="flex justify-center mb-4">{feature.icon}</div>
//               <h3 className="text-gray-800 text-lg font-medium mb-2">{feature.title}</h3>
//               <p className="text-gray-500 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     )
//   }
  
  
import { BiSolidDollarCircle, BiSolidShieldX } from "react-icons/bi"
import { IoBookOutline } from "react-icons/io5"
import { MdOutlineDirectionsCarFilled } from "react-icons/md"

export default function Feature() {
  return (
    <div className="w-full bg-[#f0f0f0] py-10 my-3">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">
              <MdOutlineDirectionsCarFilled className="h-8 w-8 text-[#d4a017]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Free Shipping</h3>
            <p className="text-sm text-gray-600">Free shipping on all US orders or orders above $200</p>
          </div>

          {/* 24x7 Support */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">
              <IoBookOutline className="h-8 w-8 text-[#d4a017]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">24x7 Support</h3>
            <p className="text-sm text-gray-600">Contact us 24 hours a day, 7 days a week</p>
          </div>

          {/* 30 Days Return */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">
              <BiSolidShieldX className="h-8 w-8 text-[#d4a017]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">30 Days Return</h3>
            <p className="text-sm text-gray-600">Simply returns within 30 days for an exchange</p>
          </div>

          {/* Payment Secure */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">
              <BiSolidDollarCircle className="h-8 w-8 text-[#d4a017]" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Payment Secure</h3>
            <p className="text-sm text-gray-600">Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </div>
    </div>
  )
}
