import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import initScripts from "./scripts/scripts.js";
import { carousel } from "./scripts/projectsImg.js";
import { myFunction } from "./scripts/myFunction.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initScripts(carousel, myFunction);
