import productions from "../data/productions";

const Videos = () => {
  return (
    <>
      {productions.map(({ sectionTitle, videos }) => (
        <>
          <h3 className="text-xl mt-8 mb-4 font-bold">{sectionTitle}</h3>
          <div key={sectionTitle} className="grid-auto-fit">
            {videos.map(({ id }) => (
              <div
                key={id}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <div className=" aspect-video">
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
        </>
      ))}
    </>
  );
};
export default Videos;
