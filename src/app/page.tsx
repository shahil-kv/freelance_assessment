import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-[#1f1f1f]">
      <div
        className="overflow-hidden h-max w-max flex gap-24 relative py-7 px-5 rounded-[20px] border border-[rgba(255,255,255,0.1)]"
        style={{
          border: "1.84px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-col gap-12">
          <div className="-space-y-2">
            <div className="text-2xl font-medium font-inter text-white">
              Test Tests Tests Test
            </div>
            <div className="text-2xl font-medium font-inter text-[#525252]">
              Test Tests Test Tests.
            </div>
            <div className="text-2xl font-medium font-inter text-white">
              Tests Tests Tests.
            </div>
          </div>

          <button
            className="rounded-full mt-5 z-50 px-6 py-1.5 text-xl text-white border border-white/10 hover:bg-white/5 transition-colors duration-200"
            style={{
              background: `radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0.06) 100%
              )`,
              backdropFilter: "blur(38.41533279418945px)",
              boxShadow: "0px 5.72px 45.79px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            Start a Conversation
          </button>
        </div>

        <div className="h-max w-max flex-1 flex flex-col justify-center items-center">
          <div
            className="z-30 h-[73px] w-[554px] flex items-center gap-4 px-4 py-2 rounded-[20px] border border-white/10"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              boxShadow: "0px 3.75px 30.01px 0px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(500px)",
            }}
          >
            <div className="flex-shrink-0">
              <div
                className="h-[45px] w-[45px] bg-white rounded-full relative bg-center bg-cover"
                style={{ backgroundImage: "url('/Ellipse.png')" }}
              >
                <div className="h-[15px] w-[15px] bg-[#669900] rounded-full border border-white absolute -top-0.5 -right-0.5"></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="text-[15.34px] text-white/80">Tests</div>
              <div className="text-[15.34px] text-[#5C5C5C]">
                @sarahchen5556
              </div>
            </div>
            <div className="ml-auto mr-8 text-right">
              <div className="text-[15.34px] text-white/60">
                Last message 1 week ago
              </div>
              <div className="text-[15.34px] text-[#5C5C5C]">
                First seen 1 week ago
              </div>
            </div>
            <div className="flex-shrink-0 h-5 w-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 10C8.33331 9.07952 9.07951 8.33333 9.99998 8.33333C10.9205 8.33333 11.6666 9.07952 11.6666 10C11.6666 10.9205 10.9205 11.6667 9.99998 11.6667C9.07951 11.6667 8.33331 10.9205 8.33331 10Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 4.16667C8.33331 3.24619 9.07951 2.5 9.99998 2.5C10.9205 2.5 11.6666 3.24619 11.6666 4.16667C11.6666 5.08714 10.9205 5.83333 9.99998 5.83333C9.07951 5.83333 8.33331 5.08714 8.33331 4.16667Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 15.8333C8.33331 14.9129 9.07951 14.1667 9.99998 14.1667C10.9205 14.1667 11.6666 14.9129 11.6666 15.8333C11.6666 16.7538 10.9205 17.5 9.99998 17.5C9.07951 17.5 8.33331 16.7538 8.33331 15.8333Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
          </div>

          <div
            className="relative overflow-hidden z-20 h-[73px] w-[523.64px] flex items-center gap-4 px-4 py-2 rounded-[18.9px] -mt-[23px] border border-white/10"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              boxShadow: "0px 3.55px 28.37px 0px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(472.6px)",
            }}
          >
            <div className="flex-shrink-0">
              <div
                className="h-[45px] w-[45px] bg-white rounded-full relative bg-cover"
                style={{ backgroundImage: "url('/Ellipse-1.png')" }}
              >
                <div className="h-[15px] w-[15px] bg-[#669900] rounded-full border border-white absolute -top-0.5 -right-0.5"></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="text-[15.34px] text-white/80">Tests</div>
              <div className="text-[15.34px] text-[#5C5C5C]">
                @sarahchen5556
              </div>
            </div>
            <div className="ml-auto mr-8 text-right">
              <div className="text-[15.34px] text-white/60">
                Last message 1 week ago
              </div>
              <div className="text-[15.34px] text-[#5C5C5C]">
                First seen 1 week ago
              </div>
            </div>
            <div className="flex-shrink-0 h-5 w-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 10C8.33331 9.07952 9.07951 8.33333 9.99998 8.33333C10.9205 8.33333 11.6666 9.07952 11.6666 10C11.6666 10.9205 10.9205 11.6667 9.99998 11.6667C9.07951 11.6667 8.33331 10.9205 8.33331 10Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 4.16667C8.33331 3.24619 9.07951 2.5 9.99998 2.5C10.9205 2.5 11.6666 3.24619 11.6666 4.16667C11.6666 5.08714 10.9205 5.83333 9.99998 5.83333C9.07951 5.83333 8.33331 5.08714 8.33331 4.16667Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 15.8333C8.33331 14.9129 9.07951 14.1667 9.99998 14.1667C10.9205 14.1667 11.6666 14.9129 11.6666 15.8333C11.6666 16.7538 10.9205 17.5 9.99998 17.5C9.07951 17.5 8.33331 16.7538 8.33331 15.8333Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          </div>

          <div
            className="relative overflow-hidden z-10 h-[73px] w-[478.11px] flex items-center gap-4 px-4 py-2 rounded-[17.26px] -mt-[23px] border border-white/10"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              boxShadow: "0px 3.24px 25.9px 0px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(431.5px)",
            }}
          >
            <div className="flex-shrink-0">
              <div
                className="h-[45px] w-[45px] bg-white rounded-full relative bg-cover"
                style={{ backgroundImage: "url('/Ellipse-2.png')" }}
              >
                <div className="h-[15px] w-[15px] bg-[#669900] rounded-full border border-white absolute -top-0.5 -right-0.5"></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="text-[15.34px] text-white/80">Tests</div>
              <div className="text-[15.34px] text-[#5C5C5C]">
                @sarahchen5556
              </div>
            </div>
            <div className="ml-auto mr-8 text-right">
              <div className="text-[15.34px] text-white/60">
                Last message 1 week ago
              </div>
              <div className="text-[15.34px] text-[#5C5C5C]">
                First seen 1 week ago
              </div>
            </div>
            <div className="flex-shrink-0 h-5 w-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 10C8.33331 9.07952 9.07951 8.33333 9.99998 8.33333C10.9205 8.33333 11.6666 9.07952 11.6666 10C11.6666 10.9205 10.9205 11.6667 9.99998 11.6667C9.07951 11.6667 8.33331 10.9205 8.33331 10Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 4.16667C8.33331 3.24619 9.07951 2.5 9.99998 2.5C10.9205 2.5 11.6666 3.24619 11.6666 4.16667C11.6666 5.08714 10.9205 5.83333 9.99998 5.83333C9.07951 5.83333 8.33331 5.08714 8.33331 4.16667Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33331 15.8333C8.33331 14.9129 9.07951 14.1667 9.99998 14.1667C10.9205 14.1667 11.6666 14.9129 11.6666 15.8333C11.6666 16.7538 10.9205 17.5 9.99998 17.5C9.07951 17.5 8.33331 16.7538 8.33331 15.8333Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
          </div>
        </div>

        <Image
          src="/noice-bg.png"
          alt="Background texture overlay"
          fill
          className="absolute z-[99] inset-0 w-full h-full object-cover blur-sm pointer-events-none"
          priority
        />

        <div
          className="absolute bottom-0 left-0 w-[918px] h-[228px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />

        <div
          className="absolute top-0 right-0 w-[247px] h-[248px] rotate-[270deg] z-[999] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />

        <div
          className="absolute top-0 left-0 w-[918px] h-[72px] rotate-180 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
          }}
        />
      </div>
    </section>
  );
}
