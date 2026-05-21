"use client";

import { useState } from "react";
import { MapPin, User, Phone, Home, Building } from "lucide-react";
import Link from "next/link";
import { notify } from "@/utils/helper";
import { useRouter } from "next/navigation";
import GlobalLoader from "@/app/components/user components/GlobalLoader";

export default function AddAddressPage() {
    const router = useRouter()
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const [loader,setLoader] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    try {
        await fetch("/api/user/address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then(async (response)=>{
                const data = await response.json()

                if(data.success){
                    notify(data.masg, true)
                    router.refresh()
                    router.push('/profile/address')
                } else {
                    notify(data.masg || "Address not saved", false)
                }
            })
            .catch((error)=>{
                console.log(error)
                notify("Address not saved", false)
            }).finally(()=>{
                setLoader(false)
            })
    } catch (error) {
        
    }
  };

  return (
    <div>
        {
            loader ? <GlobalLoader/> :   <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-8">
      
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                  Add New Address
                </h1>
                <p className="text-gray-500 mt-1">
                  Fill in your delivery details
                </p>
              </div>
      
              <form onSubmit={handleSubmit} className="space-y-5">
      
                {/* Full Name + Phone */}
                <div className="grid md:grid-cols-2 gap-5">
      
                  <div>
                    <label className="text-sm text-gray-600">Full Name</label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                        required
                      />
                    </div>
                  </div>
      
                  <div>
                    <label className="text-sm text-gray-600">Phone</label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                        required
                      />
                    </div>
                  </div>
      
                </div>
      
                {/* Address Line 1 */}
                <div>
                  <label className="text-sm text-gray-600">Address Line 1</label>
                  <div className="relative mt-1">
                    <Home className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      name="addressLine1"
                      value={form.addressLine1}
                      onChange={handleChange}
                      placeholder="House no, Street, Area"
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                      required
                    />
                  </div>
                </div>
      
                {/* Address Line 2 */}
                <div>
                  <label className="text-sm text-gray-600">Address Line 2 (Optional)</label>
                  <input
                    name="addressLine2"
                    value={form.addressLine2}
                    onChange={handleChange}
                    placeholder="Apartment, Landmark"
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                  />
                </div>
      
                {/* City, State, Postal */}
                <div className="grid md:grid-cols-2 gap-5">
      
                  
      
                  <div>
                    <label className="text-sm text-gray-600">Type</label>
                    <input
                    placeholder="ex. Home,Office"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                      required
                    />
                  </div>
      
                  <div>
                    <label className="text-sm text-gray-600">Postal Code</label>
                    <input
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                      required
                    />
                  </div>
      
                </div>
                {/* city */}
                <div>
                    <label className="text-sm text-gray-600">City</label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                      required
                    />
                  </div>
                {/* state */}
                <div>
                    <label className="text-sm text-gray-600">State</label>
                    <input
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                      required
                    />
                  </div>
                {/* Country */}
                <div>
                  <label className="text-sm text-gray-600">Country</label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl bg-gray-100 text-gray-600"
                    disabled
                  />
                </div>
      
                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
      
                  <Link
                    href="/profile/address"
                    className="px-6 py-3 rounded-xl border text-gray-600 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </Link>
      
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#01A49E] text-white hover:bg-[#01857f] transition shadow-md"
                  >
                    Save Address
                  </button>
      
                </div>
      
              </form>
      
            </div>
      
          </div>
        }

    </div>
  
  );
}
