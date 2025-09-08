import { useState } from "react";
import FAQQuestion from "./FAQQuestion";

function FAQ() {
  const [currentDrawer, setDrawer] = useState<number>(0);
  return (
    <section className="flex flex-col items-left w-[100%]">
      <div className="flex flex-col w-[75%] mb-12 mx-[8%] gap-6">
        <h3 className="text-3xl font-black text-black underline">
          Perguntas frequentes
        </h3>
      </div>
      <div className="flex flex-col w-[82%] mb-2 mx-[8%] gap-6">
        <FAQQuestion
          title="Oque é a STR34MM3B4B3 ?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt doloribus voluptatum magnam ut harum dignissimos iure neque similique qui animi! Impedit dolores blanditiis, nihil dolor deserunt recusandae nesciunt libero."
          currentDrawer={currentDrawer}
          drawerIndex={1}
          toggleQuestion={setDrawer}
        />
        <FAQQuestion
          title="Quanto custa a STR34MM3B4B3 ?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt doloribus voluptatum magnam ut harum dignissimos iure neque similique qui animi! Impedit dolores blanditiis, nihil dolor deserunt recusandae nesciunt libero."
          currentDrawer={currentDrawer}
          drawerIndex={2}
          toggleQuestion={setDrawer}
        />
        <FAQQuestion
          title="Oque posso assistir na STR34MM3B4B3 ?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt doloribus voluptatum magnam ut harum dignissimos iure neque similique qui animi! Impedit dolores blanditiis, nihil dolor deserunt recusandae nesciunt libero."
          currentDrawer={currentDrawer}
          drawerIndex={3}
          toggleQuestion={setDrawer}
        />
        <FAQQuestion
          title="A STR34MM3B4B3 é adequada para crianças?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt doloribus voluptatum magnam ut harum dignissimos iure neque similique qui animi! Impedit dolores blanditiis, nihil dolor deserunt recusandae nesciunt libero."
          currentDrawer={currentDrawer}
          drawerIndex={4}
          toggleQuestion={setDrawer}
        />
        <FAQQuestion
          title="Como faço para cancelar?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt doloribus voluptatum magnam ut harum dignissimos iure neque similique qui animi! Impedit dolores blanditiis, nihil dolor deserunt recusandae nesciunt libero."
          currentDrawer={currentDrawer}
          drawerIndex={5}
          toggleQuestion={setDrawer}
        />
      </div>
    </section>
  );
}

export default FAQ;
