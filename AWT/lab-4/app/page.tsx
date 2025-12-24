import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="text-7xl">Hello World from Next Application</h1>
      <Link
  href="/Intro"
  className="mt-6 inline-block px-6 py-3 backdrop-blur-md bg-white/20 text-white border border-white/30 rounded-lg shadow-md hover:bg-white/30 transition"
>
  Click Me!
</Link>

    </>
  );
}
