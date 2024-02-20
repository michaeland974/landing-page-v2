const fade = {
  selector: `#about-me *[will-transition="true"][fade-status="false"]`,
  getTargets: function(): NodeListOf<Element>{
    return document.querySelectorAll(this.selector)
  }
};

const aboutMeBio: Element | null = document.querySelector("#bio");

aboutMeBio?.addEventListener("click", function(this: Element | null){
  const targets = fade.getTargets();
  targets.forEach((el) => {
    el.setAttribute("fade-status", "true");
  });

  this?.setAttribute("translate-status", "true");
});