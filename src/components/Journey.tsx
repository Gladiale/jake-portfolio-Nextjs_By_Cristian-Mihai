import { journeys } from "@/config/journeys";

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>

      {journeys.map((item, index) => (
        <div key={index} className="flex items-center gap-12 w-full">
          {/* bullets */}
          <div className="w-max">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-[1px] h-[180px] bg-white/10 mx-auto"></div>
          </div>
          {/* text */}
          <div className="max-w-[500px]">
            <p className="mb-6 text-lg text-white/50">{item.years}</p>
            <p className="h4 mb-2">{item.role}</p>
            <p className="text-lg text-white/50">{item.institution}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
