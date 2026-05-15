import React from "react";
import { Link } from "react-router-dom";
import { Eye, Phone, Cpu } from "lucide-react";
import {motion} from "framer-motion";
import { FaReact, FaHtml5, FaGlobe, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
export default function App() {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const projectRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  function scrollIntoAboutSection(): void{
    aboutRef.current?.scrollIntoView({behavior: "smooth"});
  };
  function scrollIntoProjectSection(): void{
    projectRef.current?.scrollIntoView({behavior: "smooth"});
  };
  function scrollIntoContactSection(): void{
      contactRef.current?.scrollIntoView({behavior: "smooth"});
  };
  const goToGitHubProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://github.com/ola9emma8-coder", "_blank", "noopener noreferrer");
  };
  const goToWhasAppChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://wa.me/2347086575277", "_blank", "noopener noreferrer");
  };
  interface projects{
    project1: string,
    project2: string,
    project3: string,
    project4: string,
    project5: string
  }
  const projects: projects = {
    project1: "https://github.com/ola9emma8-coder/food-ordering-webapp",
    project2: "https://zelta-878473667930.europe-west1.run.app/",
    project3: "https://github.com/ola9emma8-coder/ecommerce-project",
    project4: 'https://github.com/ola9emma8-coder',
    project5: "https://x.com/olaemmma"
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
    window.open(projects.project4)
  }
  const goToTwitterProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(projects.project5, "_blank", "noopener noreferrer");
  };
  const code: string = "</>";
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [nameph, setNamePh] = React.useState<string>("What's your good name?");
  const [emailph, setEmailPh] = React.useState<string>("What's your web address?");
  const [messageph, setMessagePh] = React.useState<string>("What you want to say?")
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void{
      setName(e.target.value);
  };
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void{
    setEmail(e.target.value);
  };
  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>): void{
    setMessage(e.target.value);
  };
  interface footer{
    name: string,
    date: number
  };
  const portfolioFooter: footer = {
    name: "Olaemma",
    date: new Date().getFullYear()
  };
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>): void{
    e.preventDefault();
    if(!name || !email || !message){
      return;
    }
    const text = `${message}`
    const phone = "2347086575277";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
   <div>
    <div className="bg-white/5 sticky top-0 w-[95%] lg:w-[80%]
    block m-auto mt-2 lg:h-10 min-h-10 backdrop-blur-md border border-white/10
    rounded-br-2xl rounded-bl-2xl rounded-tr-2xl px-3 py-2 lg:px-3 lg:py-0 rounded-tl-2xl">
      <div className="flex flex-col lg:flex-row justify-center gap-2 items-center mt-1 lg:gap-5">
        <h3 className="bg-linear-to-r text-lg md:text-base lg:text-lg bg-clip-text text-transparent
        from-sky-400 to-cyan-300 lg:-translate-x-50">Olamide{code} | WebDev Mastery</h3>
        <div className="flex flex-wrap -translate-x-50 lg:flex-row md:gap-3 items-center gap-3">
          <Link id="links" to="/">Home <span className="ml-2">|</span></Link>
           <Link onClick={scrollIntoAboutSection}
            id="links" to="/">About <span className="ml-2">|</span> </Link>
            <Link onClick={scrollIntoContactSection}
            id="links" to="/">Contact <span className="ml-2">|</span> </Link>
             <Link onClick={scrollIntoProjectSection}
             id="links" to="/">Projects</Link>
        </div>
      </div>
    </div>
        <main className="flex flex-col lg:flex-row mt-5 justify-center m-auto gap-10">
          <div className="flex ml-2 lg:ml-2 flex-col gap-3">
            <h1 className="text-4xl md:text-center lg:text-6xl font-semibold
           bg-clip-text text-transparent from-sky-400 to-cyan-300 bg-linear-to-r">
            Hi, i am Olamide
          </h1>
          <p className="text-2xl md:text-center text-sky-300 font-bold">Frontend Developer
            | BaaS developer
          </p>
          <p className="text-lg md:text-center text-white font-bold">Crafting modern, responsive, and
            user-friendly websites with passion and precison
          </p>
          <p className="text-lg md:text-center text-white font-light">
            I'm a skilled software developer with experience in TypeScript and JavaScript, and<br/> expertise in frameworks like React, Next.js, and firebase. I'm a quick learner and<br/> collaborate closely with clients to create efficient, scalable, and user-friendly solutions<br/> that solve real-world problems. Let's work together to bring your ideas to life!
          </p>
          <div className="flex justify-center items-center gap-5 lg:gap-10">
           <div className="flex flex-col gap-1">
            <h3 className="font-bold text-3xl lg:text-4xl ml-15 text-white">2+</h3>
            <p className="text-white font-light lg:text-2xl text-lg">Years Experience
              <span className="ml-5">|</span>
            </p>
           </div>
           <div className="flex flex-col gap-1">
            <h3 className="font-bold text-3xl lg:text-4xl ml-10 text-white">15+</h3>
            <p className="text-white font-light text-lg lg:text-2xl">Projects Builts
              <span className="ml-5">|</span>
            </p>
           </div>
           <div className="flex flex-col gap-1">
            <h3 className="font-bold text-3xl lg:text-4xl ml-8 text-white">8+</h3>
            <p className="text-white font-light text-lg lg:text-2xl">Technologies
            </p>
           </div>
          </div>
<div className="flex justify-center mt-2 items-center gap-2">
            <button onClick={goToGitHubProfile} className="text-lg" id="buttons">
              <span className="translate-y-1 inline-block">View my works</span>
             <Eye className="text-white w-5 h-5 translate-x-3 lg:translate-x-4 -translate-y-5"/>
            </button>
            <button onClick={goToWhasAppChat} className="text-lg" id="buttons">
              <span className="translate-y-1 inline-block">Contact Me</span>
             <Phone className="text-white w-5 h-5 translate-x-7 lg:translate-x-8
             -translate-y-5"/>
            </button>
           </div>
          </div>
          <img className="w-90 h-110 translate-x-15 md:translate-x-65 lg:translate-x-0 rounded-lg"
           src="/images/3d olamide.jpeg"
           alt="olamide typing on his laptop"/>
        </main>


        {/* about me */}
        <motion.section ref={aboutRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ amount: 0.3 }}
      className="p-10 overflow-hidden"
    >
      <h2 
      className="text-3xl md:text-4xl lg:text-5xl text-center bg-clip-text bg-linear-to-r text-transparent from-sky-400 to-cyan-300 font-bold">About Me</h2>
      <p className="text-white text-center mt-3">
        I’m a frontend developer focused on building fast, responsive, and modern web applications. I work mainly
        with React, TypeScript, Next.js, and Tailwind CSS, and I sometimes use Firebase for backend features like auth
        and databases.
        I enjoy turning ideas into clean, functional interfaces and I’m currently focused on building real-world<br/>
        projects and improving my frontend skills.
      </p>
    </motion.section>


       {/* icons */}
     <section className="block m-auto">
      <motion.section className="overflow-hidden"
      initial={{opacity: 0, y: 60}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8, ease: "easeIn"}}
      viewport={{amount: 0.3}}>
        <div className="grid grid-cols-3 ml-15 md:ml-40 lg:ml-0 justify-center lg:flex items-center gap-5 lg:gap-10">
          <div className="bg-white/5 border w-20 h-20 rounded-full border-white/10">
            <FaHtml5 className="block m-auto translate-y-4 text-orange-500 w-12 h-12"/>
          </div>
          <div className="bg-white/5 border w-20 h-20 rounded-full border-white/10">
            <SiTailwindcss className="block m-auto translate-y-4 text-cyan-400 w-12 h-12"/>
          </div>
          <div className="bg-white/5 border w-20 h-20 rounded-full border-white/10">
             <SiJavascript className="block m-auto translate-y-4 text-yellow-400 w-12 h-12"/>
          </div>
          <div className="bg-white/5 border w-20 h-20 rounded-full border-white/10">
          <FaReact className="block m-auto translate-y-4 text-sky-400 w-12 h-12"/>
          </div>
          <div className="bg-white/5 border w-20 h-20 rounded-full border-white/10">
          <SiTypescript className="block m-auto translate-y-4 text-blue-600 w-12 h-12"/>
          </div>
          <div className="bg-white/5 border w-20 h-20 rounded-full border-white/10">
           <SiNextdotjs className="block m-auto translate-y-4 text-white w-12 h-12"/>
          </div>
          <div className="bg-white/5 border translate-x-37 md:translate-x-67 lg:translate-x-0
           w-20 h-20 rounded-full border-white/10">
           <SiFirebase className="block m-auto translate-y-4 text-amber-400 w-12 h-12"/>
          </div>
        </div>
      </motion.section>
     </section>


       
     <motion.section
     initial = {{opacity: 0, y: 60}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.6, ease: "easeIn"}}
     viewport={{amount: 0.3}}
      className="flex flex-col justify-center gap-3 lg:flex-row overflow-hidden items-center mt-10 lg:gap-10">
       <div className="border-sky-500/10 rounded bg-white/5 border w-75 h-50 lg:w-80">
         <FaGlobe className="w-15 h-15 block m-auto text-sky-400 translate-y-10"/>
           <h3 className="text-white translate-y-15 text-center mt-2 font-semibold text-2xl">Web Developer</h3>
       </div>
       <div className="border-sky-500/10 rounded bg-white/5 border w-75 lg:w-80 h-50">
         <Cpu className="w-15 h-15 text-blue-500 block m-auto translate-y-10"/>
         <h3 className="text-white translate-y-15 text-center mt-2 font-semibold text-2xl">
          Sofware Engineer
         </h3>
       </div>
     </motion.section>

     <motion.section className="mt-10"
     initial={{opacity: 0, y: 60}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.6, ease: "easeIn"}}
     viewport={{amount: 0.3}}>
        <h3 className="bg-linear-to-r -translate-y-2 text-3xl lg:text-5xl md:text-4xl text-transparent bg-clip-text from-sky-400 to-cyan-300 font-bold text-center mt-2">
      Projects
     </h3>
       <p className="text-white text-center mt-2 text-md">
        The following projects is a collection of real-world projects that highlight my skills, creativity, and technical experience.<br/>
         These projects demonstrate my problem-solving ability and experience across different technologies. Showcasing practical examples of my work—from concept to execution.
       </p>
     </motion.section>
        
        {/* projects */}
        <motion.section ref={projectRef}
        initial = {{opacity: 0, y: 60}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: "easeIn"}}
        viewport={{amount: 0.3}}
         className="flex justify-center lg:flex-row lg:gap-5 flex-col ml-12 items-center mt-2 gap-5">
             <motion.div className="border-sky-500/10 duration-700 transition-all ease-in-out
             rounded-br-2xl rounded-bl-2xl not-hover:scale-[1]
              bg-white/5 border w-80 md:w-90 lg:w-100 h-100 lg:h-98 rounded-tr-2xl rounded-tl-2xl hover:scale-[1.1]"
              initial={{opacity: 0, x: -60}} whileInView={{opacity: 1, x: 0}}
             transition={{duration: 0.6, ease: "easeOut"}} viewport={{amount: 0.3}}>
                <img alt="a food catalogue" src="/images/food.png" className="w-full
                rounded-bt-2xl rounded-br-2xl rounded-tr-2xl rounded-tl-2xl h-40"/>
                <h3 className="text-white font-bold mt-5 text-xl lg:text-2xl ml-5">Food Ordering Web App</h3>
                <p className="text-white text-md font-extralight ml-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-row mt-1 justify-start gap-2 ml-5">
                  <p className="text-sky-400 text-md">#react</p>
                   <p className="text-cyan-400 text-md">#tailwindcss</p>
                   <p className="text-blue-500 text-md">#typescript</p>
                </div>
                <button onClick={goToFoodProject} className="btn">View Project</button>
             </motion.div>

              <motion.div className="border-sky-500/10 transition-all duration-700
              rounded-br-2xl rounded-bl-2xl hover:scale-[1.1] not-hover:scale-[1] ease-in-out
               bg-white/5 borderw-80 lg:w-100 md:w-90 h-100 lg:h-98 rounded-tr-2xl rounded-tl-2xl"
              initial={{opacity: 0, x: -60}} whileInView={{opacity: 1, x: 0}}
             transition={{duration: 0.8, ease: "easeOut"}} viewport={{amount: 0.3}}>
               <img alt="an ai assistant" src="/images/zelta.jpg" className="w-full 
               h-40 rounded-bt-2xl rounded-br-2xl rounded-tr-2xl rounded-tl-2xl"/>
               <h3 className="text-white font-bold mt-5 text-xl lg:text-2xl ml-5">ZELTA</h3>
                <p className="text-white text-md font-extralight ml-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-row mt-1 justify-start gap-2 ml-5">
                  <p className="text-white text-md">#nextjs</p>
                   <p className="text-cyan-400 text-md">#tailwindcss</p>
                   <p className="text-blue-500 text-md">#typescript</p>
                </div>
                <button onClick={goToZeltaProject} className="btn">View Project</button>
             </motion.div>

              <motion.div className="border-sky-500/10 hover:scale-[1.1] not-hover:scale-[1] 
              rounded-br-2xl rounded-bl-2xl duration-700 ease-in-out transition-all
               bg-white/5 border w-80 lg:w-100 md:w-90 h-100 lg:h-98 rounded-tr-2xl rounded-tl-2xl"
              initial={{opacity: 0, x: -60}} whileInView={{opacity: 1, x: 0}}
             transition={{duration: 1.0, ease: "easeOut"}} viewport={{amount: 0.3}}>
                <img src="/images/commerce.png" className="w-full
                h-40 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl"/>
                 <h3 className="text-white font-bold mt-5 text-xl lg:text-2xl ml-5">E-commerce Website</h3>
                <p className="text-white text-md font-extralight ml-5 mt-1">
                  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-row mt-1 justify-start gap-2 ml-5">
                  <p className="text-sky-400 text-md">#react</p>
                   <p className="text-cyan-400 text-md">#tailwindcss</p>
                   <p className="text-yellow-400 text-md">#javascript</p>
                </div>
                <button onClick={goToECommerceProject} className="btn">View Project</button>
             </motion.div>
        </motion.section>
     
        {/* contact */}
        <motion.section ref={contactRef}
        initial={{opacity: 0, y: 60}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: "easeIn"}}
        viewport={{amount: 0.3}} 
        className="w-110 lg:w-120 lg:h-130 h-130 mt-10 block m-auto rounded-br-2xl rounded-bl-2xl
        rounded-tr-2xl rounded-tl-2xl border-sky-500/10 bg-white/5">
          <h3 className="translate-y-10 ml-5 text-white text-lg">GET IN TOUCH</h3>
          <h2 className="translate-y-12 ml-5 font-bold text-5xl bg-clip-text bg-linear-to-r text-transparent
          from-sky-400 to-cyan-300">Contact.</h2>
             <form onSubmit={handleSubmit} className="translate-y-20">
               <div className="flex flex-col gap-2">
                 <label className="text-md" htmlFor="name">Your Name</label>
               <input type="text" name="name" value={name} onChange={handleNameChange}
               placeholder={nameph} onFocus={() => setNamePh("")} 
               onBlur={() => setNamePh("What's your good name?")} />
               </div>

               <div className="flex flex-col gap-2 mt-5">
                 <label className="text-md" htmlFor="email">Your Email</label>
               <input type="email" name="email" value={email} onChange={handleEmailChange}
               placeholder={emailph} onFocus={() => setEmailPh("")} 
               onBlur={() => setNamePh("What's your web address?")} />
               </div>

               <div className="flex flex-col gap-2 mt-5">
                <label className="text-md" htmlFor="message">Your Message</label>
                <textarea placeholder={messageph} value={message} onFocus={() => setMessagePh("")}
                onBlur={() => setMessagePh("What you want to say?")} onChange={handleMessageChange} />
               </div>

               <button type="submit" className="btn translate-y-1">Submit</button>
             </form>
              
        </motion.section>

         <motion.h3 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y:0}} 
          transition={{duration: 0.6, ease:"easeIn"}} viewport={{amount: 0.3}}
          className="text-white text-3xl font-bold text-center translate-y-8">
            Available For:
          </motion.h3>

        <motion.section initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.6, ease: "easeIn"}} viewport={{amount: 0.3}}
        className="lg:flex lg:justify-center 
        sm:flex-row md:flex-row lg:items-center 
        translate-y-10 lg:translate-y-10 lg:gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-white ml-2 lg:ml-0 font-bold text-lg">Frontend Development</h3>
            <div className="w-[95%] lg:w-full ml-1.5 lg:ml-0 h-2 bg-white/10 overflow-hidden rounded-full">
              <motion.div initial={{width: 0}} whileInView={{width: "95%"}} transition={{duration: 3}}
             className="bg-sky-400 rounded-full h-full" />
            </div>
            
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white ml-2 lg:ml-2 mt-2 lg:mt-0 font-bold text-lg">Freelance Projects</h3>
            <div className="w-[95%] lg:w-full ml-1.5 lg:ml-0 h-2 bg-white/10 overflow-hidden rounded-full">
              <motion.div initial={{width: 0}} whileInView={{width: "95%"}} transition={{duration: 3}}
             className="bg-sky-400 rounded-full h-full" />
            </div>
          </div>
         
          <div className="flex flex-col gap-2">
            <h3 className="text-white ml-2 lg:ml-0 mt-2 lg:mt-0 font-bold text-lg">Collaborations</h3>
            <div className="w-[95%] lg:w-full ml-1.5 lg:ml-0 h-2 bg-white/10 overflow-hidden rounded-full">
              <motion.div initial={{width: 0}} whileInView={{width: "95%"}} transition={{duration: 3}}
             className="bg-sky-400 rounded-full h-full" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white ml-2 lg:ml-0 mt-2 lg:mt-0 font-bold text-lg">UI/Ux Interfaces</h3>
            <div className="w-[95%] lg:w-full ml-1.5 lg:ml-0 h-2 bg-white/10 overflow-hidden rounded-full">
              <motion.div initial={{width: 0}} whileInView={{width: "95%"}} transition={{duration: 3}}
             className="bg-sky-400 rounded-full h-full" />
            </div>
          </div>
        </motion.section>

       <motion.footer
       initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.6, ease: "easeIn"}} viewport={{amount: 0.3}} 
       className="translate-y-15">
         <div className="flex justify-center flex-row gap-2">
           <button onClick={goToGitHub}>
            <FaGithub className="w-10 h-10 text-white"/></button>
           <button onClick={goToTwitterProfile}>
            <FaXTwitter className="text-white w-10 h-10"/></button>
          </div>
          <TypeAnimation className="text-white mt-2 flex justify-center font-bold text-md"
         sequence={[`${portfolioFooter.name} ${portfolioFooter.date}. Let's work together`, 2000,
          "", 500
         ]}
         speed={20} repeat={Infinity} />
       </motion.footer>
         
        
   </div>
  );
}