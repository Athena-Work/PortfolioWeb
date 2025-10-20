import Link from "next/link";

export default function Home() {
  return (
    <div className=' bg-background'>
      <span>Home</span>
      <Link href='/about'>About page</Link>
    </div>
  );
}
