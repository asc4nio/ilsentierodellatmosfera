import gsap from "gsap";
import { sleep } from "../components/utils";

export async function onEnter(el, done) {
  const target = el.getAttribute("data-transition");
  const selector = gsap.utils.selector(el);
  console.log("onEnter", target);

  if (target === "welcome") {
    gsap.timeline().fromTo(
      selector(".layer"),
      {
        y: "50%",
      },
      {
        y: "0%",
        duration: 1,
        stagger: 0.1,
      }
    );
  }

  await sleep(1000);
  done();
}

export async function onLeave(el, done) {
  const target = el.getAttribute("data-transition");
  const selector = gsap.utils.selector(el);
  console.log("onLeave", target);

  if (target === "welcome") {
    gsap.timeline().fromTo(
      selector(".layer"),
      {
        y: "0%",
      },
      {
        y: "50%",
        duration: 1,
        stagger: 0.1,
      }
    );
  }

  await sleep(1000);
  done();
}
