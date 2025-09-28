"use client"

import React, { useState } from 'react'

export default function Profile() {

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    if (isEditing) {
      console.log("Saved data:", formData);
    }
    setIsEditing(!isEditing);
  };
  return (
    <div>
      <div className="flex flex-col gap-8">
        {/* infromation */}
        <div className="rounded-lg shadow-sm border border-[#ECECEC]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-b-[#ECECEC] py-3 px-4">
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-2xl">
              Account Information
            </h1>
            <button
              onClick={toggleEdit}
              className="rounded-sm py-1 px-3 gap-2 font-semibold text-sm lg:text-base border border-[#3BB77E] text-[#3BB77E]"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          {/* Form */}
          <div className="px-4 py-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#253D4E] font-semibold text-sm lg:text-base">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                className={`text-xs font-semibold focus:outline-none px-3 py-3 text-[#253D4E] ${
                  isEditing
                    ? "border border-[#ECECEC] rounded-sm "
                    : "border-b border-b-[#ECECEC]"
                }`}
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#253D4E] font-semibold text-sm lg:text-base">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                 className={`text-xs font-semibold focus:outline-none px-3 py-3 text-[#253D4E] ${
                  isEditing
                    ? "border border-[#ECECEC] rounded-sm "
                    : "border-b border-b-[#ECECEC]"
                }`}
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2">
              <label className="text-[#253D4E] font-semibold text-sm lg:text-base">
                Contact Number
              </label>
              <input
                type="number"
                name="contactNumber"
                placeholder="Enter Your Number"
                value={formData.contactNumber}
                onChange={handleChange}
                disabled={!isEditing}
                 className={`text-xs font-semibold focus:outline-none px-3 py-3 text-[#253D4E] ${
                  isEditing
                    ? "border border-[#ECECEC] rounded-sm "
                    : "border-b border-b-[#ECECEC]"
                }`}
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label className="text-[#253D4E] font-semibold text-sm lg:text-base">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                placeholder="Enter Your Gender"
                value={formData.gender}
                onChange={handleChange}
                disabled={!isEditing}
                 className={`text-xs font-semibold focus:outline-none px-3 py-3 text-[#253D4E] ${
                  isEditing
                    ? "border border-[#ECECEC] rounded-sm "
                    : "border-b border-b-[#ECECEC]"
                }`}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[#253D4E] font-semibold text-sm lg:text-base">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                 className={`text-xs font-semibold focus:outline-none px-3 py-3 text-[#253D4E] ${
                  isEditing
                    ? "border border-[#ECECEC] rounded-sm "
                    : "border-b border-b-[#ECECEC]"
                }`}
              />
            </div>
          </div>
        </div>
        {/* Account Security */}
        <div className="rounded-lg shadow-sm border border-[#ECECEC]">
          {/*  */}
          <div className="flex items-center justify-between border-b border-b-[#ECECEC] py-3 px-4">
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-2xl">
              Account Security
            </h1>
          </div>
          {/*  */}
          <div className="px-4 py-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
            {/* Current Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="currentpassword"
                className="text-[#253D4E] font-semibold text-sm lg:text-base"
              >
                Current Password
              </label>
              <input
                type="text"
                placeholder="Enter Your Current Password"
                className="text-xs border border-[#ECECEC] font-semibold focus:outline-none rounded-sm px-3 py-3 text-[#253D4E]"
              />
            </div>
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="newpassword"
                className="text-[#253D4E] font-semibold text-sm lg:text-base"
              >
                New Password
              </label>
              <input
                type="text"
                placeholder="Enter Your New Password"
                className="text-xs border border-[#ECECEC] font-semibold focus:outline-none rounded-sm px-3 py-3 text-[#253D4E]"
              />
            </div>
            {/* confirm password */}
            <div className="flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="confirmpassword"
                className="text-[#253D4E] font-semibold text-sm lg:text-base"
              >
                Confirm Password
              </label>
              <input
                type="text"
                placeholder="Enter Your Confirm Password"
                className="text-xs border border-[#ECECEC] font-semibold focus:outline-none rounded-sm px-3 py-3 text-[#253D4E]"
              />
            </div>
          </div>
          {/*  */}
          <div className="px-4 pb-4">
            <button
              className={`rounded-sm py-1 px-3 gap-2 font-semibold text-sm border border-[#3BB77E] text-[#3BB77E] cursor-pointer`}
            >
              Save Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
