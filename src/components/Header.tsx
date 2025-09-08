function Header() {
  return (
    <header className="py-8 flex flex-col max-w-[100%] items-start bg-black px-[7%] m-0">
      <div className="flex lg:flex-row w-[100%] border-b border-white justify-between pb-4 max-sm:flex-col">
        <div className="flex lg:flex-row items-center gap-6 flex-col max-sm:text-center">
          <h1 className="text-5xl font-bold text-white max-sm:text-3xl">STR34M3B4B3</h1>
          <h2 className="text-white font-light text-lg max-sm:text-base">
            Hand-picked movies and series for you.
          </h2>
        </div>

        <div className="flex flew-row gap-6 items-center max-sm:justify-between max-sm:pt-6 max-sm:px-[2%]">
          <button className="font-thin text-white hover:font-medium cursor-pointer pb-1 hover:border-b">
            Faça Login
          </button>
          <button className="bg-[#994422] cursor-pointer text-white font-bold text-lg px-4 h-12 rounded-2xl border-2 border-transparent hover:bg-transparent hover:border-[#994422] hover:text-[#994422] max-sm:text-base">
            Assine agora!
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
