import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import CoreCompetencies from '@/components/CoreCompetencies';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background print:bg-white">
      <Header />
      <main className="pt-12 print:pt-0">
        <HeroSection />
        <SummarySection />
        <CoreCompetencies />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
