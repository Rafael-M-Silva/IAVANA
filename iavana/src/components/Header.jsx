import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#FF9C00] pt-2">
      <div className="flex justify-between items-center w-6xl m-auto">
        <Link href={"/"}><Image width={148.32} height={48.78} alt="logo" src={"/logo.svg"}/></Link>
        <nav className="flex gap-7 text-xl font-inter">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
