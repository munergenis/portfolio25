import RevealOnScroll from "../RevealOnScroll";

const AboutMe = () => {
  const frontendSkills = ["JavaScript", "TypeScript", "React", "Tailwind CSS"];

  const backendSkills = ["Express", "MongoDB", "Mongoose"];

  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-extrabold mb-4">Tech</h3>
            <p className="text-gray-300 text-lg mx-auto text-pretty">
              I&apos;ve built websites, tried to figure out how a music
              streaming platform works, and even tinkered with some backends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h4 className="text-xl font-bold mb-4">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h4 className="text-xl font-bold mb-4">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h4 className="text-xl font-bold mb-4">🏫 Education</h4>
                <ul className="flex flex-col gap-4">
                  <li className="flex flex-col">
                    <h5 className="font-semibold">Frontend Dev. Career Path</h5>
                    <span className="italic font-light text-sm">
                      Scrimba & MDN
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <h5 className="font-semibold">Desarrollo de Páginas Web</h5>
                    <span className="italic font-light text-sm">
                      Femxa - Formación y Empleo
                    </span>
                    <small className="text-gray-300/80">
                      Título Oficial de Formación Profesional: IFCD0110 Grado C
                    </small>
                  </li>
                  <li className="flex flex-col">
                    <h5 className="font-semibold">Batchillerato Tecnológico</h5>
                    <span className="italic font-light text-sm">
                      Ins Salvador Espriu, Salt
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h4 className="text-xl font-bold mb-4">💼 Work Experience</h4>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h5 className="font-semibold">Club Tennis Taula Girona</h5>
                    <p className="font-light text-sm italic text-pretty">
                      Volunteer project for Girona Table Tennis Club
                    </p>
                    <p className="text-pretty">
                      Web application for managing table tennis tournaments,
                      focusing on the backend to organize registrations, create
                      matchups, and record results. I also collaborated on parts
                      of the frontend to enhance the user experience.
                    </p>
                    <a
                      href="https://tornejos-tennis-taula-girona.netlify.app"
                      className="text-blue-300"
                    >
                      tornejos-tennis-taula-girona.netlify.app
                    </a>
                  </div>
                  <div>
                    <h5 className="font-semibold">Cinco55</h5>
                    <p className="font-light text-sm italic text-pretty">
                      Development of website, and product configurator for Saher
                    </p>
                    <p className="text-pretty">
                      Internship at Cinco55. Development of the website for
                      Saher, an agricultural machinery company, including the
                      design and implementation of the product configurator for
                      their ecommerce platform. I was assisting as a developer
                      in a team of three, alongside the designer and the product
                      owner.
                    </p>
                    <a href="https://saher.es" className="text-blue-300">
                      saher.es
                    </a>
                  </div>
                  <div>
                    <h5 className="font-semibold">RCCeE a Catalunya</h5>
                    <p className="font-light text-sm italic text-pretty">
                      Volunteer project of a music streaming platform for RCCeE
                    </p>
                    <p className="text-pretty">
                      In the process of a volunteer project, developing a music
                      streaming platform for RCCeE&apos;s music group, featuring
                      playback functions, lyrics display, and sheet music
                      visualization.
                    </p>
                    <p className="text-blue-100">Comming soon...</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-extrabold mt-8 mb-4">Music & Video</h3>
            <p className="text-gray-300 text-lg mb-8 mx-auto text-pretty">
              I&apos;m passionate about music that moves your soul. I have
              taught and shared dance with over 200 students and produced
              countless audiovisual projects. After messing around with the
              guitar, I started fooling around on the drums.
            </p>

            <p className="text-gray-300 border-t border-t-gray-700 text-md italic pt-2 mb-10 mx-auto text-pretty">
              And of course, I&apos;m in love with my striking feline duo of
              black and white that adds a playful twist to life.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default AboutMe;
