const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <div className="bg-gradient-to-b from-orange-700 to-black w-44 mx-auto rounded-full">
          <img
            src="./gmuner-logo.png"
            alt="gmuner logo"
            className="w-44 mb-4"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Hi, I&apos;m Genís Muner
        </h1>

        <p className="text-gray-400 text-lg max-w-xs md:max-w-lg mb-8 mx-auto text-pretty">
          Struggling between optimal structures and chaos.
        </p>
        <p className="text-gray-400 text-lg mb-8 max-w-sm md:max-w-lg mx-auto text-pretty">
          I build websites. I make noise with instruments and I love capturing
          moments and bringing them to life.
        </p>
        <p className="text-gray-400 text-sm italic mb-8 max-w-sm md:max-w-lg mx-auto text-pretty">
          Oh! And I have a couple of fluffy friends with pointy ears.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#web"
            className="bg-blue-500 text-white py-3 px-6 rounded-sm font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          >
            View Web Projects
          </a>
          <a
            href="#productions"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            View Productions
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
