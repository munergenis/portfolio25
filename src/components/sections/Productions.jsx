import RevealOnScroll from "../RevealOnScroll";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/**
             * Productions here
             * // TODO: Map through productions and maybe extract to config or data file
             */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Video title</h3>
              <div className="text-2xl">TODO: Video iframe youtube</div>
            </div>
            <div className="mt-8 text-5xl">TODO</div>
            {/**
             * Until here
             */}
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
