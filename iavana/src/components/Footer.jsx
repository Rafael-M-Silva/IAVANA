import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="w-6xl m-auto">
        <div className="flex justify-between mb-[108px]">
          <div className="flex flex-col gap-2 text-lg">
            <p className="text-[#FF9C00]">TALK WITH US</p>
            <p className="text-white">IANAVA@STUDIO.COM</p>
          </div>
          <div className="text-lg flex flex-col gap-2">
            <div className="flex items-center w-[479px] justify-between">
              <div>
                <p className="text-[#FF9C00]">SOCIAL</p>
                <div className="text-white flex gap-5">
                  <a href="#">INSTAGRAM</a>
                  <a href="#">BEHANCE</a>
                  <a href="#">LINKEDIN</a>
                </div>
              </div>
              <a href="#home">
                <div className="w-9 h-9 bg-[#FF9C00] rounded-full justify-center flex items-center">
                  <ArrowUp strokeWidth={1} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-[#4A4A4A] text-lg">
          <p>SÃO JOSÉ DO RIO PARDO, SÃO PAULO - BRASIL</p>
          <div>
            <p className="text-white mb-2">IAVANA STUDIO CO</p>
            <p>{new Date().getFullYear()} &copy; ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
