import initScrollReveal from "./src/scripts/scrollReveal";
import initTiltEffect from "./src/scripts/tiltAnimation";
import { targetElements, defaultProps } from "./src/data/scrollRevealConfig";
import initScripts from "./src/scripts/scripts.js"; 
import {carousel} from "./src/scripts/projectsImg.js";
import {myFunction} from "./src/scripts/myFunction.js";



initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initScripts(carousel, myFunction,);
