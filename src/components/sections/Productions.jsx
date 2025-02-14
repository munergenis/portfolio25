import productions from "../../data/productions";
import RevealOnScroll from "../RevealOnScroll";
import "@justinribeiro/lite-youtube";

const Productions = () => {
  return (
    <section
      id="productions"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Audiovisual Productions
          </h2>
          <div className="grid-auto-fit">
            {productions.map(({ id }) => (
              <div
                key={id}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <div className="w-full aspect-video">
                  <lite-youtube videoid={id}></lite-youtube>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="block text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View all my productions &rarr;
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Productions;
