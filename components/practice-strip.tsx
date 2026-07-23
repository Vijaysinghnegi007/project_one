import { PRACTICE_AREAS } from "@/lib/context";

function PracticeStrip() {
  return (
    <section className="border-y border-hairline py-9">
      <div className="side-width">
        <ul className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6 lg:gap-0">
          {PRACTICE_AREAS.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-1.5 px-2 lg:px-5 border-left"
            >
              <span className="text-muted-ink uppercase font-mono text-sm">{item.no}</span>
              <span className="text-sm font-medium  text-ink">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PracticeStrip;
