function Header() {
  return (
    <header className="py-8 flex flex-col max-w-[100%] items-start bg-black px-[7%] m-0">
      <div className="flex flex-row w-[100%] border-b border-white justify-between pb-4">
        <div className="flex flex-rol items-center gap-6">
          <h1 className="text-5xl font-bold text-white">STR34M3B4B3</h1>
          <h2 className="text-white font-light text-lg">
            Hand-picked movies and series for you.
          </h2>
        </div>

        <div className="flex flew-row gap-6 items-center">
          <button className="bg-[#994422] cursor-pointer text-white font-bold text-lg px-4 h-12 rounded-2xl border-2 border-transparent hover:bg-transparent hover:border-[#994422] hover:text-[#994422]">
            Assine agora!
          </button>
          <button className="font-thin text-white hover:font-medium cursor-pointer pb-1 hover:border-b">
            Faça Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
