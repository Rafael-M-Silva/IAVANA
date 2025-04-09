export default function Header() {
  return (
    <header className="bg-[#FF9C00] pt-2">
      <div className="flex justify-between items-center w-6xl m-auto">
        <img src="./logo.svg" alt="" />
        <nav className="flex gap-7 text-xl font-inter">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
