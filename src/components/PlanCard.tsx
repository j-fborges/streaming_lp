type PlanCardProps = {
    title: string
    price: string
}

function PlanCard({title, price}:PlanCardProps){
    return(
        <div className="flex flex-col bg-[#EEEEEE] lg:max-w-[400px] w-[100%] lg:h-[500px] rounded-3xl p-8 gap-12 justify-between cursor-pointer hover:scale-[102%] shadow-xl">
          <div className="flex flex-col gap-6">
            <span className="text-xl font-bold">{title}</span>
            <span className="text-4xl font-black">{`R$ ${price}`}</span>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio labore quos ratione explicabo tenetur quaerat
              quam, ad maiores saepe quae inventore ab? Sed, a eos excepturi
              facilis ratione magnam.
            </p>
          </div>
          <button className="bg-[#994422] cursor-pointer text-white font-bold text-lg px-4 h-12 rounded-2xl border-2 border-transparent hover:bg-transparent hover:border-[#994422] hover:text-[#994422]">
            Assine agora!
          </button>
        </div>
    )
}

export default PlanCard