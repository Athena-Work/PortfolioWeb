import Link from "next/link";

export default function Home() {
  return (
    <div className='w-screen h-screen bg-background'>
      <span>Home</span>
      <Link href='/about'>About page</Link>
    </div>
  );
}
