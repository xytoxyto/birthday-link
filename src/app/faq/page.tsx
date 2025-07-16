import React from "react";
import FAQItem from "@/components/FAQItem";

export default function FAQPage() {
  return (
    <>
      <div className="text-center text-white mb-6">
        <h1 className="text-4xl font-bold mb-2">❓ Frequently Asked Questions</h1>
        <p className="text-white/80">
          Everything you need to know about Birthday Link.
        </p>
      </div>
      <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl font-bold mb-2">❓ Frequently Asked Questions</h1>
            <p className="text-white/80">
              Everything you need to know about Birthday Link.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            <FAQItem
              question="How do I join a Birthday Link event?"
              answer="Just sign up, match with others who share your birthday, and RSVP to a curated celebration."
            />
            <FAQItem
              question="What's included in the Galaxy Tier?"
              answer="Galaxy Tier includes up to 50 guests, premium venues, and live DJ upgrades."
              tier="Galaxy"
            />
            <FAQItem
              question="Can I upgrade my tier later?"
              answer="Absolutely! You can upgrade anytime to unlock better perks and more guest capacity."
            />
            <FAQItem
              question="How do I invite friends?"
              answer="Use our Invite Friends page to add emails or share your event link."
            />
            <FAQItem
              question="What is Birthday Bless?"
              answer="A crowdfunding-style page where friends and family can contribute money or buy special gifts to make your celebration unforgettable."
            />
          </div>
        </div>
      </section>
    </>
  );
}
