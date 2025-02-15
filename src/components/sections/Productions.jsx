import RevealOnScroll from "../RevealOnScroll";
import "@justinribeiro/lite-youtube";
import Videos from "../Videos";

const Productions = () => {
  return (
    <section
      id="productions"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Audiovisual Productions
          </h2>
          <Videos />
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Productions;
