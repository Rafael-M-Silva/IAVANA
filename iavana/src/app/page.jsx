import CardService from "@/components/CardService";
import Header from "@/components/Header";

export default function Home() {
 
  
  return (
    <>
      <Header />
      <section id="home" className="bg-black text-white  pt-28">
        <div className="w-6xl m-auto flex justify-between h-[calc(100vh-169px)] relative">
          <div className="w-[775px] ">
            <h1 className="text-[112px] font-semibold mb-14">IDEAS GROW ON <a className="inline-flex w-[265px] text-2xl border-1 px-10 py-5 rounded-full transform -translate-6 -translate-x-0.5" href="#">HOW WE WORK</a> THE <span className="text-[#FF9C00]">IAVANA</span> TREE</h1>
            <p className="text-xl">With over a decade of experience, IAVANA is a dynamic and collaborative Brand Studio that works end-to-end across creative processes — from design, illustration, and copywriting to web design. We craft projects that reflect the true essence of each brand’s purpose, combining aesthetics, strategic thinking, and uniqueness.</p>
          </div>
          <img className="absolute right-0 bottom-0" src="./mao.svg" alt="" />
        </div>
      </section>
      <section id="services" className="flex flex-col pt-20 pb-10 w-6xl m-auto gap-20">
        <div className="cards flex justify-between">
          <CardService
            codeIcon={"pincel"}
            title={"Pincel"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe facere ipsa optio similique, ad nesciunt. Illum facere ab natus saepe quas eius."}
          />
          <CardService
            codeIcon={"eye"}
            title={"Eye"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe facere ipsa optio similique, ad nesciunt. Illum facere ab natus saepe quas eius."}
          />
          <CardService
            codeIcon={"user"}
            title={"User"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe facere ipsa optio similique, ad nesciunt. Illum facere ab natus saepe quas eius."}
          />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-semibold max-w-[291px]">PLANT HARVEST GROW</h2>
          <p className="max-w-[658px] text-xl font-light">With over a decade of experience, IAVANA is a dynamic and collaborative Brand Studio that works end-to-end across creative processes — from design, illustration, and copywriting to web design. We craft projects that reflect the true essence of each brand’s purpose, combining aesthetics, strategic thinking, and uniqueness.</p>
        </div>
      </section>
    </>
  );
}
