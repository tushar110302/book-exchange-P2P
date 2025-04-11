import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1>P2P Book Exchange Portal</h1>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </div>
  );
}
