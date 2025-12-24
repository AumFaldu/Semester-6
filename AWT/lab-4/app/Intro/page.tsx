import Link from "next/link";

export default function Intro() {
  return (
    <>
      <h1 className="text-5xl font-bold">Hi, I'm Aum Faldu</h1>

      <p className="mt-4 text-xl">
        I'm an undergraduate Computer Science student passionate about learning new
        technologies. I work with the MERN stack, .NET Core, SQL, and love building
        full-stack applications. I enjoy exploring new frameworks, improving my skills,
        and creating impactful projects.
      </p>

       <Link
        href="/"
        className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back
      </Link>
    </>
  );
}
