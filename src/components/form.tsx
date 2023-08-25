import { useRef } from "react";

export default function Form({ setSearchTerm }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="mb-6"
      onSubmit={(ev) => {
        ev.preventDefault();
        setSearchTerm(inputRef?.current?.value as string);
      }}
    >
      <input
        className="border border-slate-500 rounded-md p-2"
        type="text"
        name=""
        id=""
        ref={inputRef}
      />
      <button
        className="bg-slate-600 text-white p-2 rounded-lg ml-2"
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
}
