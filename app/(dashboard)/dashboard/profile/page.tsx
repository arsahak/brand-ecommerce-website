import DashboardProfile from '@/components/dashboard/Profile';
import React from 'react';
 const initialUserData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    profileImage: "/assets/product/bindi.jpg",
    notifications: {
      email: true,
      sms: false,
      promotions: true,
    },
  }

const page = () => {
    return (
        <div>
            <DashboardProfile initialUserData={initialUserData}/>
        </div>
    );
};

export default page;