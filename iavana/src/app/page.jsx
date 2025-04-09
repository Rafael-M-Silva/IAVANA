import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section id="home" className="bg-black text-white h-[calc(100vh-57px)] pt-28">
        <div className="w-6xl m-auto flex justify-between">
          <div className="w-[775px]">
            <h1 className="text-[112px] font-semibold mb-14">IDEAS GROW ON <a className="inline-flex w-[265px] text-2xl border-1 px-10 py-5 rounded-full transform -translate-6 -translate-x-0.5" href="#">HOW WE WORK</a> THE <span className="text-[#FF9C00]">IAVANA</span> TREE</h1>
            <p className="text-xl">With over a decade of experience, IAVANA is a dynamic and collaborative Brand Studio that works end-to-end across creative processes — from design, illustration, and copywriting to web design. We craft projects that reflect the true essence of each brand’s purpose, combining aesthetics, strategic thinking, and uniqueness.</p>
          </div>
          <img src="./mao.svg" alt="" />
        </div>
      </section>
      <section id="services">
      
      </section>
    </>
  );
}
