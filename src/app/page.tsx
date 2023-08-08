import { Divider, Button, ColumnContainer } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-slate-950">
          Awesome Parallax Effect
        </h1>
        <p className="text-lg font-medium text-slate-700">
          Developed with NextJS, Framer Motion and Lenis Scroll. Scroll down to
          check it out.
        </p>
        <Divider />
        <Button />
        <p className="text-sm mt-6 text-slate-400">Scroll down ↓</p>
      </div>
      <ColumnContainer />
      <div className="h-screen w-full p-6 bg-slate-50">
        <Link href="https://unsplash.com/" className="underline text-slate-950">
          Images from Unsplash ↗
        </Link>
      </div>
    </main>
  );
}
