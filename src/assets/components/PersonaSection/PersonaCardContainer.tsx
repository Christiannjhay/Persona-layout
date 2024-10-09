import PersonaCard from "../common/PersonaCard";
import personaData from "../../../data/persona";

export default function PersonaCardContainer() {
  return (
    <div className="w-full flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {personaData.map((persona, index) => (
        <PersonaCard
          key={index}
          imageUrl={persona.imageUrl}
          name={persona.name}
          role={persona.role}
        />
      ))}
    </div>
  );
}
