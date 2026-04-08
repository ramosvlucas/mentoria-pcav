import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import StorySection from "@/components/StorySection";
import MethodSection from "@/components/MethodSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <WhoIsItForSection />
      <StorySection />
      <MethodSection />
      <DifferentialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
