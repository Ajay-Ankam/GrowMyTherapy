import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import OurOffice from "@/components/OurOffice";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import ContactFooter from "@/components/ContactFooter";

export const metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Therapy for Anxiety & Trauma in Santa Monica, CA",
  description:
    "Licensed Clinical Psychologist in Santa Monica, CA specializing in anxiety, panic, trauma, EMDR, and burnout. In-person and online therapy available.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-50 text-secondary-800 font-sans antialiased">
      <Navbar />
      <Hero />
      <About/>
      <Specialties />
      <OurOffice />
      <Faqs />
      <ContactFooter />
    </div>
  );
}
