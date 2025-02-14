import RevealOnScroll from "../RevealOnScroll";
import webProjects from "../../data/webProjects";

const WebProjects = () => {
  return (
    <section
      id="web-projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Web Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webProjects.map(
              ({ title, subtitle, imagePath, url, techStack, status }) => (
                <div
                  key={title}
                  className="p-6 rounded-xl border border-white/10 flex flex-col hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                  {imagePath ? (
                    <img
                      src={imagePath}
                      className="object-cover aspect-video rounded-t-lg"
                      alt={`${title} project screenshot preview`}
                    />
                  ) : (
                    <div className="bg-gray-800/30 aspect-video rounded-t-lg flex items-center justify-center">
                      <span className="text-gray-400 text-2xl">
                        Coming soon
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
                  <p className="text-gray-300 italic text-sm mb-4">
                    {subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    {status !== "Completed" && (
                      <span className="text-sm">{status}</span>
                    )}
                    <div className="flex justify-between items-center">
                      {status !== "In progress" && (
                        <a
                          href={url}
                          className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
                        >
                          View Project &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default WebProjects;
