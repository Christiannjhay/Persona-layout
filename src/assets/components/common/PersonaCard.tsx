export default function PersonaCard(props: any) {
  return (
    <div className="w-full relative aspect-square rounded-xl overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={props.imageUrl}
          alt={`${props.name} icon`}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#ffd5b4] via-transparent to-transparent opacity-90"></div>

      <div className="absolute inset-0 flex items-end w-full">
        <div className="flex flex-col px-5 pb-6">
          <h1 className="font-bold text-3xl">{props.name}</h1>
          <h1 className="">{props.role}</h1>
        </div>
      </div>
    </div>
  );
}
