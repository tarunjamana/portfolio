import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("house", "0.22, 1, 0.36, 1");
CustomEase.create("tb-house", "0.16, 1, 0.3, 1");

export { gsap, ScrollTrigger };
