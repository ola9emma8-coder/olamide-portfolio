import React from "react";
import { Link } from "react-router-dom";
import { Eye, Phone, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaGlobe, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const projectRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  function scrollIntoAboutSection(): void {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }
  function scrollIntoProjectSection(): void {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }
  function scrollIntoContactSection(): void {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  const goToGitHubProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://github.com/ola9emma8-coder", "_blank", "noopener noreferrer");
  };
  const goToWhasAppChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://wa.me/2347086575277", "_blank", "noopener noreferrer");
  };

  const projects = {
    project1: "https://github.com/ola9emma8-coder/food-ordering-webapp",
    project2: "https://zelta-878473667930.europe-west1.run.app/",
    project3: "https://github.com/ola9emma8-coder/ecommerce-project",
    project4: "https://github.com/ola9emma8-coder",
    project5: "https://x.com/olaemmma",
  };

  const goToFoodProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(projects.project1, "_blank", "noopener noreferrer");
  };
  const goToZeltaProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(projects.project2, "_blank", "noopener noreferrer");
  };
  const goToECommerceProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(projects.project3, "_blank", "noopener noreferrer");
  };
  const goToGitHub = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(projects.project4, "_blank", "noopener noreferrer");
  };
  const goToTwitterProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(projects.project5, "_blank", "noopener noreferrer");
  };

  const code = "</>";
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [nameph, setNamePh] = React.useState("What's your good name?");
  const [emailph, setEmailPh] = React.useState("What's your web address?");
  const [messageph, setMessagePh] = React.useState("What you want to say?");

  const portfolioFooter = {
    name: "Olaemma",
    date: new Date().getFullYear(),
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!name || !email || !message) return;
    const phone = "2347086575277";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener noreferrer");
  }

  const techIcons = [
    { Icon: FaHtml5, color: "text-orange-500", label: "HTML5" },
    { Icon: SiTailwindcss, color: "text-cyan-400", label: "Tailwind" },
    { Icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
    { Icon: FaReact, color: "text-sky-400", label: "React" },
    { Icon: SiTypescript, color: "text-blue-500", label: "TypeScript" },
    { Icon: SiNextdotjs, color: "text-white", label: "Next.js" },
    { Icon: SiFirebase, color: "text-amber-400", label: "Firebase" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="bg-white/5 sticky top-0 z-50 w-[95%] sm:w-[90%] lg:w-[80%] mx-auto mt-2
        backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="bg-gradient-to-r bg-clip-text text-transparent from-sky-400 to-cyan-300
            text-sm sm:text-base font-semibold whitespace-nowrap">
            Olamide{code} | WebDev Mastery
          </h3>

          <div className="hidden lg:flex items-center gap-5">
            <Link id="links" to="/">Home</Link>
            <span className="text-white/20">|</span>
            <Link id="links" to="/" onClick={scrollIntoAboutSection}>About</Link>
            <span className="text-white/20">|</span>
            <Link id="links" to="/" onClick={scrollIntoContactSection}>Contact</Link>
            <span className="text-white/20">|</span>
            <Link id="links" to="/" onClick={scrollIntoProjectSection}>Projects</Link>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-sky-400 transition-all duration-300 origin-center
              ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-sky-400 transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-sky-400 transition-all duration-300 origin-center
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-4 mt-3 pt-3 border-t border-white/10 pb-2">
            <Link id="links" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link id="links" to="/" onClick={scrollIntoAboutSection}>About</Link>
            <Link id="links" to="/" onClick={scrollIntoContactSection}>Contact</Link>
            <Link id="links" to="/" onClick={scrollIntoProjectSection}>Projects</Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <main className="flex flex-col lg:flex-row items-center justify-center gap-10
        px-6 sm:px-10 lg:px-16 mt-12 max-w-7xl mx-auto w-full">

        <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold
            bg-clip-text text-transparent from-sky-400 to-cyan-300 bg-gradient-to-r leading-tight">
            Hi, I am Olamide
          </h1>
          <p className="text-lg sm:text-xl text-sky-300 font-bold">
            Frontend Developer | BaaS Developer
          </p>
          <p className="text-sm sm:text-base text-white font-bold">
            Crafting modern, responsive, and user-friendly websites with passion and precision
          </p>
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            I'm a skilled software developer with experience in TypeScript and JavaScript, and
            expertise in frameworks like React, Next.js, and Firebase. I'm a quick learner and
            collaborate closely with clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. Let's work together to bring your ideas to life!
          </p>

          <div className="flex justify-center lg:justify-start gap-10 w-full mt-1">
            {[["2+", "Years Experience"], ["15+", "Projects Built"], ["8+", "Technologies"]].map(([num, label]) => (
              <div key={label} className="flex flex-col items-center lg:items-start">
                <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white">{num}</span>
                <span className="text-white/70 font-light text-xs sm:text-sm">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-1">
            <button onClick={goToGitHubProfile} id="buttons">
              View my works <Eye className="w-4 h-4" />
            </button>
            <button onClick={goToWhasAppChat} id="buttons">
              Contact Me <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[440px]
              rounded-xl object-cover shadow-2xl shadow-cyan-900/30"
            src="/images/3d olamide.jpeg"
            alt="Olamide typing on his laptop"
          />
        </div>
      </main>

      {/* ABOUT */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl text-center bg-clip-text bg-gradient-to-r
          text-transparent from-sky-400 to-cyan-300 font-bold mb-6">
          About Me
        </h2>
        <p className="text-white/80 text-center text-sm sm:text-base leading-relaxed">
          I'm a frontend developer focused on building fast, responsive, and modern web applications.
          I work mainly with React, TypeScript, Next.js, and Tailwind CSS, and I sometimes use Firebase
          for backend features like auth and databases. I enjoy turning ideas into clean, functional
          interfaces and I'm currently focused on building real-world projects and improving my frontend skills.
        </p>
      </motion.section>

      {/* TECH ICONS */}
      <section className="px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-2xl mx-auto"
        >
          {techIcons.map(({ Icon, color, label }) => (
            <div key={label}
              className="bg-white/5 border border-white/10 w-16 h-16 sm:w-20 sm:h-20
                rounded-full flex items-center justify-center
                hover:border-sky-400/40 transition duration-300">
              <Icon className={`${color} w-7 h-7 sm:w-10 sm:h-10`} />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ROLE CARDS */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6 px-6 sm:px-10 mt-12"
      >
        {[
          { Icon: FaGlobe, color: "text-sky-400", label: "Web Developer" },
          { Icon: Cpu, color: "text-blue-500", label: "Software Engineer" },
        ].map(({ Icon, color, label }) => (
          <div key={label}
            className="bg-white/5 border border-sky-500/10 rounded-xl
              w-full max-w-xs h-44 flex flex-col items-center justify-center gap-4
              hover:border-sky-400/30 transition duration-300">
            <Icon className={`${color} w-12 h-12`} />
            <h3 className="text-white font-semibold text-xl">{label}</h3>
          </div>
        ))}
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        className="mt-20 px-6 sm:px-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
      >
        <h3 className="bg-gradient-to-r text-4xl sm:text-5xl text-transparent bg-clip-text
          from-sky-400 to-cyan-300 font-bold text-center mb-4">
          Projects
        </h3>
        <p className="text-white/70 text-center text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A collection of real-world projects highlighting my skills, creativity, and technical experience —
          from concept to execution.
        </p>
      </motion.section>

      <motion.section
        ref={projectRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch
          gap-6 px-6 sm:px-10 mt-8 max-w-6xl mx-auto"
      >
        {[
          {
            img: "/images/food.png", alt: "food ordering app", title: "Food Ordering Web App",
            tags: [{ l: "#react", c: "text-sky-400" }, { l: "#tailwindcss", c: "text-cyan-400" }, { l: "#typescript", c: "text-blue-400" }],
            onClick: goToFoodProject, delay: 0.6,
          },
          {
            img: "/images/zelta.jpg", alt: "ZELTA AI assistant", title: "ZELTA",
            tags: [{ l: "#nextjs", c: "text-white" }, { l: "#tailwindcss", c: "text-cyan-400" }, { l: "#typescript", c: "text-blue-400" }],
            onClick: goToZeltaProject, delay: 0.8,
          },
          {
            img: "/images/commerce.png", alt: "e-commerce website", title: "E-commerce Website",
            tags: [{ l: "#react", c: "text-sky-400" }, { l: "#tailwindcss", c: "text-cyan-400" }, { l: "#javascript", c: "text-yellow-400" }],
            onClick: goToECommerceProject, delay: 1.0,
          },
        ].map(({ img, alt, title, tags, onClick, delay }) => (
          <motion.div
            key={title}
            className="bg-white/5 border border-sky-500/10 rounded-2xl overflow-hidden
              w-full sm:w-72 md:w-80 flex flex-col
              hover:scale-[1.03] transition-transform duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: delay, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <img src={img} alt={alt} className="w-full h-44 object-cover" />
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map(({ l, c }) => (
                  <span key={l} className={`${c} text-xs font-mono`}>{l}</span>
                ))}
              </div>
              <button onClick={onClick} className="btn mt-1">View Project</button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CONTACT */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="w-full max-w-md mx-auto mt-20 px-6 sm:px-0"
      >
        <div className="bg-white/5 border border-sky-500/10 rounded-2xl p-6 sm:p-8">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Get In Touch</p>
          <h2 className="font-bold text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r
            text-transparent from-sky-400 to-cyan-300 mb-8">
            Contact.
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <input
                type="text" id="name" name="name" value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={nameph}
                onFocus={() => setNamePh("")}
                onBlur={() => setNamePh("What's your good name?")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Your Email</label>
              <input
                type="email" id="email" name="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailph}
                onFocus={() => setEmailPh("")}
                onBlur={() => setEmailPh("What's your web address?")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message" value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={messageph}
                onFocus={() => setMessagePh("")}
                onBlur={() => setMessagePh("What you want to say?")}
                rows={5}
              />
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </motion.section>

      {/* AVAILABLE FOR */}
      <motion.h3
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="text-white text-2xl sm:text-3xl font-bold text-center mt-20 mb-8"
      >
        Available For:
      </motion.h3>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
          px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto"
      >
        {["Frontend Development", "Freelance Projects", "Collaborations", "UI/UX Interfaces"].map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-sm sm:text-base">{label}</h3>
            <div className="w-full h-1.5 bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 2.5 }}
                className="bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full h-full"
              />
            </div>
          </div>
        ))}
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3 }}
        className="mt-20 pb-10 flex flex-col items-center gap-4"
      >
        <div className="flex gap-5">
          <button onClick={goToGitHub} aria-label="GitHub"
            className="text-white/70 hover:text-white transition duration-300">
            <FaGithub className="w-8 h-8" />
          </button>
          <button onClick={goToTwitterProfile} aria-label="Twitter/X"
            className="text-white/70 hover:text-white transition duration-300">
            <FaXTwitter className="w-8 h-8" />
          </button>
        </div>
        <TypeAnimation
          className="text-white/60 font-medium text-sm text-center px-4"
          sequence={[
            `${portfolioFooter.name} © ${portfolioFooter.date} · Let's work together`,
            2000,
            "",
            500,
          ]}
          speed={20}
          repeat={Infinity}
        />
      </motion.footer>
    </div>
  );
}