class UnderlinePlugin {
  static get isInline() {
    return true;
  }

  constructor({ data }) {
    this.data = data;
    this.button = null;
    this.tag = "U";
  }

  render() {
    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.innerHTML = this.toolbox.icon;

    return this.button;
  }

  handleClick = () => {
    this.data = !this.data;
    this.toggleUnderline();
  };

  toggleUnderline() {
    if (this.data) {
      this.button.classList.add("active");
    } else {
      this.button.classList.remove("active");
    }
  }

  static get sanitize() {
    return {
      u: {},
    };
  }

  get toolbox() {
    return {
      icon: '<svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 0H16C7.16 0 0 7.16 0 16v16c0 8.84 7.16 16 16 16h16v400H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-16V48h16c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16zM64 128h320v32H64zm0 96h192v32H64zm0 96h192v32H64zm0 96h192v32H64zm0 96h192v32H64z"/></svg>',
    };
  }
}

export default UnderlinePlugin;
