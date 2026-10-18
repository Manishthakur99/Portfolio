import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Enterprise RAG",
    category: "AI / Cloud Platform",
    tools: "Python, GCP, Vertex AI, LangChain, BigQuery, Docker",
    image: "/images/project-enterprise-rag.png",
    link: "https://github.com/Manishthakur99/enterprise-rag-gcp",
  },
  {
    name: "Secure EHR Insight",
    category: "AI / Healthcare",
    tools: "Python, FastAPI, LangChain, FHIR, NLP, PostgreSQL",
    image: "/images/project-ehr.png",
    link: "https://github.com/Manishthakur99/Secure-EHR-Insight-Clinical-validator",
  },
  {
    name: "BrambleAI",
    category: "AI App Builder",
    tools: "React, Node.js, OpenAI API, LangChain, MongoDB, TypeScript",
    image: "/images/project-bramble.png",
    link: "https://github.com/Manishthakur99/brambleAiAppBuilder",
  },
  {
    name: "CodeForge",
    category: "EdTech Platform",
    tools: "React, Node.js, MongoDB, Razorpay, Cloudinary, YouTube API",
    image: "/images/project-codeforge.png",
    link: "https://github.com/Manishthakur99/CodeForge",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      const workFlex = document.querySelector(".work-flex") as HTMLElement | null;
      if (!box.length || !container || !workFlex) return 0;

      const lastBox = box[box.length - 1] as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const currentTranslateX =
        (gsap.getProperty(".work-flex", "x") as number) || 0;
      const lastBoxRight =
        lastBox.getBoundingClientRect().right - currentTranslateX;

      // Compensate for the negative margin-left on .work-flex
      // which shifts the grid left initially and causes over-scroll
      const marginLeft = parseFloat(getComputedStyle(workFlex).marginLeft) || 0;
      const marginOffset = marginLeft < 0 ? Math.abs(marginLeft) : 0;

      const targetRight = containerRect.right;
      translateX = Math.max(0, lastBoxRight - targetRight - marginOffset);
      return translateX;
    }

    ScrollTrigger.getById("work")?.kill(true);
    const workElem = document.getElementById("work");
    if (workElem && workElem.parentElement?.classList.contains("pin-spacer")) {
      workElem.parentElement.replaceWith(workElem);
    }

    translateX = setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${setTranslateX()}`,
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        pinType: ScrollTrigger.isTouch ? "fixed" : "transform",
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -setTranslateX(),
      ease: "none",
    });

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        translateX = setTranslateX();
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill(true);
      const elem = document.getElementById("work");
      if (elem && elem.parentElement?.classList.contains("pin-spacer")) {
        elem.parentElement.replaceWith(elem);
      }
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
