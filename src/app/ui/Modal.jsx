'use client'
import React, { useEffect, useRef, useState } from "react";

export default function TermsModal() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        assistance: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    function handleOverlayClick(e) {
        if (e.target === overlayRef.current) setOpen(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function validate() {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = " Number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = " Number must be 10 digits";
        }
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.assistance.trim()) newErrors.assistance = "This field is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted:", formData);
            setOpen(false);
        }
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="mt-10 px-10 py-4 border-2 border-white rounded-xl text-sm md:text-lg lg:text-xl font-semibold tracking-wide hover:bg-white hover:text-black transition duration-300 shadow-lg"
                type="button"
            >
                🚀 Claim Your Free Business Book ➝
            </button>

            {open && (
                <div
                    ref={overlayRef}
                    onClick={handleOverlayClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="terms-title"
                    tabIndex={-1}
                    className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
                >
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-black border border-gray-700 rounded-2xl shadow-lg">
                            {/* Header */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-700">
                                <h3 id="terms-title" className="text-base lg:text-2xl font-bold text-white">
                                    Claim your <span className="text-yellow-500 mx-0.5">FREE</span> Business Book 📚
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="text-gray-400 hover:text-white transition"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-white text-start">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
                                        />
                                        {errors.name && <p className="text-red-400 text-sm mt-1 text-start">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-white text-start">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1 text-start">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-white text-start">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
                                        />
                                        {errors.phone && <p className="text-red-400 text-sm mt-1 text-start">{errors.phone}</p>}
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium text-white text-start">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
                                        />
                                        {errors.city && <p className="text-red-400 text-sm mt-1 text-start">{errors.city}</p>}
                                    </div>
                                </div>

                                {/* Assistance */}
                                <div>
                                    <label className="block text-sm font-medium text-white text-start">How can we best assist you?*</label>
                                    <textarea
                                        name="assistance"
                                        value={formData.assistance}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
                                    />
                                    {errors.assistance && <p className="text-red-400 text-sm mt-1 text-start">{errors.assistance}</p>}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-4 border-t border-gray-700 pt-6">
                                    <button
                                        type="submit"
                                        className="px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="px-6 py-2.5 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
