import Image from "next/image";

export default function Home() {
  return <div className="flex justify-center items-center bg-slate-200 p-3 text-lg font-bold flex-col">
    <div>
      Hello there from dashboard app 
    </div>
    <div>
      <nav>
        <a href="/">Home</a> | <a href="catalog">Catalog</a>
      </nav>
    </div>
  </div>
}
