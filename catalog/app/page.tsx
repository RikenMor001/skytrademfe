import Image from "next/image";

export default function Home() {
  return <div>
    <div className="text-xl font-bold">
      Hello from the catalog page
    </div>
  <div className="flex justify-center items-center bg-slate-200 p-3 text-lg font-bold flex-col">
    <nav>
      <a href="/">Home</a> | <a href="catalog">Catalog</a>
    </nav>
  </div>
</div>
}
