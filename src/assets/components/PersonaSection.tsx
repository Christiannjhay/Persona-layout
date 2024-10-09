import PersonaCardContainer from "./PersonaSection/PersonaCardContainer";
import PersonaSectionHeader from "./PersonaSection/PersonaSectionHeader";

export default function PersonaSection() {
  return (
    <div className="w-full py-5 flex flex-col justify-between items-center px-4 md:px-10 lg:px-16 xl:px-20">
      <PersonaSectionHeader />
      <PersonaCardContainer />
    </div>
  );
}
