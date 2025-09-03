function RegisterForm() {
  return (
    <section className="py-8 flex flex-col max-w-[100%] items-start ml-[8%] mr-[5%]">
      <form action="" className="flex flex-row items-end w-[100%] gap-6">
        <div className="flex flex-col w-[100%] gap-4">
          <span className="max-w-[300px] text-lg font-medium">
            Inscreva-se agora e tenha acesso a tudo isso por apenas:
          </span>
          <span className=" flex w-[100%] text-5xl font-black text-right">
            R$23,00
          </span>
        </div>

        <div className="flex flex-row w-[100%] gap-1 max-md:flex-col">
          <label htmlFor="email" className="font-bold">
            Seu melhor Email:
          </label>
          <div className="flex flex-row w-[100%] gap-6 max-md:flex-col">
            <input
              type="email"
              name="email"
              id=""
              className="border-b w-[100%]"
            />
            <button type="submit" className="bg-[#38AF4A] p-2 rounded-xl">
              Assine Agora!
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;
