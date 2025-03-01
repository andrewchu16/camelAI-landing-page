"use client";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/widgets/PrimaryButton";

export const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      // TODO: Implement your newsletter subscription API call here
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 500));
      setSuccess(true);
      setEmail("");
    } catch {
      setError("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-fit">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/main-camelai.webp"
            alt="CamelAI Logo"
            width={300}
            height={78.5}
            className="object-contain"
            priority
          />
        </div>
        <p className="text-white">
          Subscribe to our newsletter for product updates
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email"
              className={`px-4 py-2 bg-transparent border ${
                error ? 'border-red-500' : 'border-white/60'
              } rounded-[20px] min-w-[140px] md:min-w-[240px] text-white placeholder:text-white/60 focus:outline-none focus:border-white`}
            />
            <PrimaryButton onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)} className="press-me-animation">
              Subscribe
            </PrimaryButton>
          </div>
          {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm ml-2">
              Successfully subscribed!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FooterNewsletter;
