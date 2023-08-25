import { useState } from "react";
import { AccordionProps } from "../types";

export default function Accordion({ title, data }: AccordionProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {data &&
        data.map((element) => {
          const [isOpen, setOpen] = useState(false);

          return (
            <div key={element.id}>
              <h3
                className="font-bold text-lg cursor-pointer bg-slate-200 rounded-md p-4 w-full h-full mb-4"
                onClick={() => setOpen(!isOpen)}
              >
                {element.header}
              </h3>
              <div className={`${isOpen ? "block" : "hidden"} mb-5`}>
                {element.content}
              </div>
            </div>
          );
        })}
    </div>
  );
}
