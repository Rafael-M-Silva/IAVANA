import Link from "next/link";
import Image from "next/image";
import ImgProject from "../img/img.jpg";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import CardService from "@/components/CardService";
export default function Main() {
  const projects = [
    {
      id: 1,
      slug: "projeto1",
      img: ImgProject,
    },
    {
      id: 2,
      slug: "projeto2",
      img: ImgProject,
    },
    {
      id: 3,
      slug: "projeto3",
      img: ImgProject,
    },
    {
      id: 4,
      slug: "projeto4",
      img: ImgProject,
    },
    {
      id: 5,
      slug: "projeto5",
      img: ImgProject,
    },
    {
      id: 6,
      slug: "projeto6",
      img: ImgProject,
    },
  ];

  return (
    <main>
      <section id="home" className="bg-black text-white  pt-28">
        <div className="w-6xl m-auto flex justify-between h-[calc(100vh-169px)] relative">
          <div className="w-[775px]">
            <h1 className="text-[112px] font-semibold mb-14">
              IDEAS GROW ON{" "}
              <a
                className="inline-flex w-[265px] text-2xl border-1 px-10 py-5 rounded-full transform -translate-6 -translate-x-0.5"
                href="#"
              >
                HOW WE WORK
              </a>{" "}
              THE <span className="text-[#FF9C00]">IAVANA</span> TREE
            </h1>
            <p className="text-xl">
              With over a decade of experience, IAVANA is a dynamic and
              collaborative Brand Studio that works end-to-end across creative
              processes — from design, illustration, and copywriting to web
              design. We craft projects that reflect the true essence of each
              brand’s purpose, combining aesthetics, strategic thinking, and
              uniqueness.
            </p>
          </div>
          <img className="absolute right-0 bottom-0" src="./mao.svg" alt="" />
        </div>
      </section>
      <section id="services"
        className="flex flex-col pt-20 pb-10 w-6xl m-auto gap-20"
      >
        <div className="cards flex justify-between">
          <CardService
            codeIcon={"pincel"}
            title={"Pincel"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe facere ipsa optio similique, ad nesciunt. Illum facere ab natus saepe quas eius."
            }
          />
          <CardService
            codeIcon={"eye"}
            title={"Eye"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe facere ipsa optio similique, ad nesciunt. Illum facere ab natus saepe quas eius."
            }
          />
          <CardService
            codeIcon={"user"}
            title={"User"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe facere ipsa optio similique, ad nesciunt. Illum facere ab natus saepe quas eius."
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-semibold max-w-[291px]">
            PLANT HARVEST GROW
          </h2>
          <p className="max-w-[658px] text-xl font-light">
            With over a decade of experience, IAVANA is a dynamic and
            collaborative Brand Studio that works end-to-end across creative
            processes — from design, illustration, and copywriting to web
            design. We craft projects that reflect the true essence of each
            brand’s purpose, combining aesthetics, strategic thinking, and
            uniqueness.
          </p>
        </div>
      </section>
      <section id="projects" className="py-10 w-6xl m-auto">
        <div className="cards flex justify-between flex-wrap gap-7">
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.slug}`}>
              <Image
                className="rounded-[45px] h-[392px] object-cover bg-amber-300"
                src={project.img}
                width={365}
                height={392}
                alt="img"
              />
            </Link>
          ))}
        </div>
      </section>
      <section id="contact" className="py-10">
        <InfiniteMovingCards
          items={[
            {
              quote: "teste1",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste2",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste3",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
            {
              quote: "teste4",
              name: "teste",
              title: "teste",
            },
          ]}
          direction="left"
          speed="slow"
        />
        <div className="w-6xl m-auto mt-20 flex gap-8 justify-center items-end pb-10">
          <h2 className="font-semibold text-6xl">CREATING WITH</h2>
          <Image
            className="mb-1"
            src="./logo.svg"
            width={208}
            height={69}
            alt="logo"
          />
        </div>
      </section>
    </main>
  );
}
