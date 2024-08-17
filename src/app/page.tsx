import HeroData from "@/components/HeroData";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 h-100">
      <HeroData />
    </main>
  );
}
