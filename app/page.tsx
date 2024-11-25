import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col px-4 pb-20">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-5xl lg:text-7xl font-sans py-2 md:pb-10 relative z-20 font-bold tracking-tight">
        Evently
      </h2>
      <p className="max-w-xl mx-auto text-md md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
        Los mejores eventos estan aqui
      </p>
    </BackgroundLines>
  );
}
