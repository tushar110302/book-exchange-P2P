import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-4xl font-bold mb-4">P2P Book Exchange Portal</h1>
      <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</Link>
      <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md">Signup</Link>
    </div>
  );
}
