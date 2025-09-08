type FAQQuestion = {
    toggleQuestion: (value: React.SetStateAction<number>) => void
    drawerIndex: number
    currentDrawer: number
    title: string
    text: string
}

function FAQQuestion({toggleQuestion, drawerIndex, currentDrawer, text, title}:FAQQuestion) {
    const isSelected = currentDrawer === drawerIndex
    return (
        <div className="flex flex-col p-6 gap-6 bg-[#EEEEEE]" onClick={isSelected? ()=> {toggleQuestion(0)} : ()=> {toggleQuestion(drawerIndex)}}>
          <div className="flex flex-row justify-between w-[100%]">
            <span className="text-lg font-bold">{title}</span>
            <span className={ isSelected ? "text-2xl font-black relative bottom-2" : "text-4xl font-black relative bottom-2"}>
              {isSelected ? "—" : "+"}
            </span>
          </div>
          { isSelected && <p>
            {text}
          </p>}
        </div>
    )
}

export default FAQQuestion