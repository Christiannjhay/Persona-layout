import { Plus } from "../../icons/Plus";

export default function PersonaSectionHeader() {
  return (
    <div className="w-full flex justify-between py-4">
      <div className="text-black font-sans  font-bold tracking-wide text-2xl">
        <h1>Persona</h1>
      </div>
      <div className="">
        <div className="bg-yellow-300 rounded-full p-1">
          <Plus />
        </div>
      </div>
    </div>
  );
}
