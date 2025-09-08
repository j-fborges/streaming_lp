function RegisterForm() {
  return (
    <section className="py-8 flex flex-col max-w-[100%] items-center ml-[8%] mr-[5%] pb-18">
      <form action="" className="flex flex-row items-bottom w-[80%] gap-6 max-sm:flex-col lg:w-[65%]">
        <div className="flex flex-col w-[70%] gap-4 lg:w-[50%]">
          <span className="max-w-[300px] text-lg font-medium">
            Inscreva-se agora e tenha acesso a tudo isso por apenas:
          </span>
          <span className=" flex w-[100%] text-5xl font-black text-right max-sm:text-3xl">
            R$23,00
          </span>
        </div>

        <div className="flex lg:flex-row w-[100%] gap-6 flex-col items-end">
          <div className="flex flex-col w-[100%] gap-1 justify-end">
            <label htmlFor="email" className="font-bold">
              Seu melhor Email:
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="border-b w-[100%] h-[24px]"
            />
          </div>
          <button type="submit" className="bg-[#38AF4A] py-3 rounded-xl w-[100%] text-lg font-bold hover:text-white">
            Assine Agora!
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;
