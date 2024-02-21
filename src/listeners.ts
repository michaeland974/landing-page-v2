const fade = {
  selector: `#about-me *[will-transition="true"][fade-status="false"]`,
  getTargets: function(): NodeListOf<Element>{
    return document.querySelectorAll(this.selector)
  }
};

const aboutMeBio: Element | null = document.querySelector("#bio");