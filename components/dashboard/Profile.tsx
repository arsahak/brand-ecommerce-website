"use client"

import { useState, useRef, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import { FaUser, FaCamera, FaCheck, FaExclamationTriangle } from "react-icons/fa"
import { FiMail, FiPhone, FiLock, FiMapPin, FiSave } from "react-icons/fi"

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  profileImage?: string;
  notifications: {
    email: boolean;
    sms: boolean;
    promotions: boolean;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

const DashboardProfile = ({ initialUserData }: { initialUserData: UserData }) => {
  // Form states
  const [userData, setUserData] = useState(initialUserData)
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })
  const [profileImage, setProfileImage] = useState<string | null>(initialUserData.profileImage || null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle input changes for basic fields
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target

//     if (name.includes(".")) {
//       // Handle nested objects (e.g., address.street)
//       const [parent, child] = name.split(".")
//       setUserData({
//         ...userData,
//         [parent]: {
//           ...userData[parent as keyof typeof userData],
//           [child]: type === "checkbox" ? checked : value,
//         },
//       })
//     } else if (name.startsWith("notifications.")) {
//       // Handle notifications specifically
//       const notificationType = name.split(".")[1]
//       setUserData({
//         ...userData,
//         notifications: {
//           ...userData.notifications,
//           [notificationType]: checked,
//         },
//       })
//     } else {
//       // Handle top-level fields
//       setUserData({
//         ...userData,
//         [name]: value,
//       })
//     }

//     // Clear error for this field if it exists
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }
//   }

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
  
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
  
      if (typeof userData[parent as keyof UserData] === "object" && userData[parent as keyof UserData] !== null) {
        setUserData({
          ...userData,
          [parent]: {
            ...userData[parent as keyof UserData] as object, // Type assertion
            [child]: type === "checkbox" ? checked : value,
          },
        });
      }
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };
  

  // Handle password changes
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswords({
      ...passwords,
      [name]: value,
    })

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle profile image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a preview URL for the selected image
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
    }
  }

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Basic validation
    if (!userData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!userData.lastName.trim()) newErrors.lastName = "Last name is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!userData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (basic)
    if (userData.phone && userData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Password validation (only if changing password)
    if (passwords.current || passwords.new || passwords.confirm) {
      if (!passwords.current) newErrors["current"] = "Current password is required"
      if (!passwords.new) {
        newErrors["new"] = "New password is required"
      } else if (passwords.new.length < 8) {
        newErrors["new"] = "Password must be at least 8 characters"
      }

      if (!passwords.confirm) {
        newErrors["confirm"] = "Please confirm your new password"
      } else if (passwords.new !== passwords.confirm) {
        newErrors["confirm"] = "Passwords do not match"
      }
    }

    // Address validation (basic)
    if (userData.address.zipCode && !/^\d{5}(-\d{4})?$/.test(userData.address.zipCode)) {
      newErrors["address.zipCode"] = "Please enter a valid ZIP code"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Clear previous messages
    setMessage(null)

    // Validate form
    if (!validateForm()) {
      setMessage({
        type: "error",
        text: "Please fix the errors in the form",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success message
      setMessage({
        type: "success",
        text: "Profile updated successfully",
      })

      // Reset password fields
      setPasswords({
        current: "",
        new: "",
        confirm: "",
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred while updating your profile",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Status Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            <div className="flex items-center">
              {message.type === "success" ? (
                <FaCheck className="mr-2 h-5 w-5 text-green-500" />
              ) : (
                <FaExclamationTriangle className="mr-2 h-5 w-5 text-red-500" />
              )}
              <p>{message.text}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Image Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 border">
                        {profileImage ? (
                          <Image
                            src={profileImage || "/placeholder.svg"}
                            alt="Profile"
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-gray-200">
                            <FaUser className="h-16 w-16 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={triggerFileInput}
                        className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full hover:bg-gray-800"
                      >
                        <FaCamera className="h-4 w-4" />
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                    <h3 className="text-lg font-medium">
                      {userData.firstName} {userData.lastName}
                    </h3>
                    <p className="text-gray-500 text-sm">{userData.email}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Notification Preferences</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="email-notifications"
                          name="notifications.email"
                          type="checkbox"
                          checked={userData.notifications.email}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                          Email Notifications
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sms-notifications"
                          name="notifications.sms"
                          type="checkbox"
                          checked={userData.notifications.sms}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <label htmlFor="sms-notifications" className="ml-3 text-sm text-gray-700">
                          SMS Notifications
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="promo-notifications"
                          name="notifications.promotions"
                          type="checkbox"
                          checked={userData.notifications.promotions}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <label htmlFor="promo-notifications" className="ml-3 text-sm text-gray-700">
                          Promotional Emails
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-aviano-regular uppercase font-bold flex items-center">
                    <FaUser className="mr-2 h-5 w-5 text-gray-500" />
                    Personal Information
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${errors.firstName ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${errors.lastName ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 px-3 py-2 border ${errors.email ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={userData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 px-3 py-2 border ${errors.phone ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-aviano-regular uppercase font-bold flex items-center">
                    <FiLock className="mr-2 h-5 w-5 text-gray-500" />
                    Change Password
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="current" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current"
                        name="current"
                        value={passwords.current}
                        onChange={handlePasswordChange}
                        className={`w-full px-3 py-2 border ${errors.current ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                      />
                      {errors.current && <p className="mt-1 text-sm text-red-600">{errors.current}</p>}
                    </div>
                    <div>
                      <label htmlFor="new" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new"
                        name="new"
                        value={passwords.new}
                        onChange={handlePasswordChange}
                        className={`w-full px-3 py-2 border ${errors.new ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                      />
                      {errors.new && <p className="mt-1 text-sm text-red-600">{errors.new}</p>}
                    </div>
                    <div>
                      <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={passwords.confirm}
                        onChange={handlePasswordChange}
                        className={`w-full px-3 py-2 border ${errors.confirm ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                      />
                      {errors.confirm && <p className="mt-1 text-sm text-red-600">{errors.confirm}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-aviano-regular uppercase font-bold flex items-center">
                    <FiMapPin className="mr-2 h-5 w-5 text-gray-500" />
                    Address Information
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="street"
                        name="address.street"
                        value={userData.address.street}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="address.city"
                        value={userData.address.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State / Province
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="address.state"
                        value={userData.address.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP / Postal Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="address.zipCode"
                        value={userData.address.zipCode}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${errors["address.zipCode"] ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-black focus:border-black`}
                      />
                      {errors["address.zipCode"] && (
                        <p className="mt-1 text-sm text-red-600">{errors["address.zipCode"]}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="address.country"
                        value={userData.address.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <FiSave className="mr-2 -ml-1 h-5 w-5" />
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashboardProfile

