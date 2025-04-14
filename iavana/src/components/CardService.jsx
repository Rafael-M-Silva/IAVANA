import Icon from "./Icon";

export default function CardService({ title, description, codeIcon }) {
  return (
    <div className="w-[300px] h-[416px] bg-[#FF9C00] rounded-[45px] flex justify-center items-center cursor-pointer group hover:bg-black">
      <div className="front-card bg-black rounded-full w-[185px] h-[185px] flex justify-center items-center group-hover:scale-50 group-hover:translate-y-[-200px] duration-300 absolute z-10 group-hover:bg-[#FF9C00]">
      <Icon
       className={"fill-[#FF9C00] group-hover:fill-black"}
       codeIcon={codeIcon}
      />
      </div>
      <div className="back-card opacity-0 group-hover:opacity-100 transition-all duration-700 p-10 pb-2 text-white">
        <h2 className="text-5xl mb-4">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
