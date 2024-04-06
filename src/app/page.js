import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-lime-100">
      
      <div className="flex flex-1 flex-col gap-4">
        <div className="text-2xl">Todays Quests</div>
        <button className="flex justify-between bg-orange-100 shadow-sm">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-orange-300 text-white w-[80px]">100</div>
        </button>
        <button className="flex justify-between bg-orange-100 shadow-sm ">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-orange-300 text-white w-[80px]">200</div>
        </button>
        <button className="flex justify-between bg-orange-100 shadow-sm ">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-orange-300 text-white w-[80px]">300</div>
        </button>
      </div>
    </main>
  );
}
