import FormSection from "./Components/FormSection/FormSection";
import Introduction from "./Components/Introduction/Introduction";
import SectionInvolved from "./Components/Involved/SectionInvolved";
import Section from "./Components/Press/Section";

export default function Home() {
  return (
    <main className="md:bg-dark-blue md:px-[7vw] md:py-[5vw] grid gap-[20vh]">
      <Introduction />

      <Section />
      <SectionInvolved />

      <FormSection />
    </main>
  );
}
