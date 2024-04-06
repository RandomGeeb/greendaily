import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-20 bg-slate-100">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <div className="text-2xl text-gray-600 font-bold">
          days to next bonus
        </div>
        <div className="text-7xl text-cyan-500 mb-2">9 Days</div>
        <div className="text-gray-600 font-bold">Current Streak: 371 days</div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <header className="text-2xl text-gray-600 font-bold">
          Todays Quests
        </header>
        <div className="flex flex-row my-4 items-center">
          <div className=" flex h-[48px] w-[48px] bg-cyan-500 text-white items-center justify-center">
            0
          </div>
          <div className="h-[12px] flex flex-1 bg-cyan-500" />
          <div className=" flex h-[48px] w-[48px] bg-cyan-500 text-white items-center justify-center">
            100
          </div>
          <div className="h-[12px] flex flex-1 bg-cyan-500" />
          <div className=" flex h-[48px] w-[48px] bg-cyan-500 text-white items-center justify-center">
            200
          </div>
          <div className="h-[12px] flex flex-1 bg-white" />
          <div className=" flex h-[48px] w-[48px] bg-white items-center justify-center">
            300
          </div>
          <div className="h-[12px] flex flex-1 bg-white" />
          <div className=" flex h-[48px] w-[48px] bg-white items-center justify-center">
            400
          </div>
        </div>
        <button className="flex justify-between bg-white shadow-sm items-center">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-cyan-500 text-white w-[80px] h-[80px]">
            100 pts
          </div>
        </button>
        <button className="flex justify-between  bg-white shadow-sm items-center">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-cyan-500 text-white w-[80px] h-[80px] ">
            200 pts
          </div>
        </button>
        <button className="flex justify-between  bg-white shadow-sm items-center">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-cyan-500 text-white w-[80px] h-[80px]">
            300 pts
          </div>
        </button>
        <button className="flex justify-between  bg-white shadow-sm items-center">
          <span className="p-4">Read up this article</span>
          <div className="py-4 px-6 bg-cyan-500 text-white w-[80px] h-[80px]">
            400 pts
          </div>
        </button>
      </div>
    </main>
  );
}
