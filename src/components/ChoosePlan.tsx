function ChoosePlan(){
    return (
        <section className="flex flex-col items-left w-[100%] pb-16">
        <div className="flex flex-col w-[75%] mb-12 mx-[8%] gap-6">
          <h3 className="text-3xl font-black text-black underline">
            Escolha seu plano:
          </h3>
          <p className="w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            distinctio accusantium eaque veniam, veritatis quam eligendi
            voluptatibus provident! Sequi earum, voluptas aliquid maiores
            explicabo reprehenderit nihil fugiat perspiciatis commodi qui!
          </p>
        </div>
        <div className="flex flex-row w-[100%] justify-between gap-8 px-[12%]">
          <div className="bg-[#999999] w-[400px] h-[500px] rounded-3xl"></div>
          <div className="bg-[#999999] w-[400px] h-[500px] rounded-3xl"></div>
          <div className="bg-[#999999] w-[400px] h-[500px] rounded-3xl"></div>
        </div>
      </section>
    )
}

export default ChoosePlan