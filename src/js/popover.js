export default class Popover {
  constructor(container) {
    this.container = container;
  }

  static get markup() {
    return `
      <button class="btn">Click to toggle popover</button>
      <div class="popover-container popover-container_hidden">
        <div class="popover__arrow"></div>
        <h1 class="popover__title">Popover title</h1>
        <div class="popover__text">And here's some amazing content. It's very engaging. Right?</div>
      </div>
    `;
  }

  bindToDOM() {
    this.container.innerHTML = this.constructor.markup;
    this.btn = document.querySelector('.btn');
    this.popover = document.querySelector('.popover-container');
    this.setClickListener();
    this.setBlurListener();
  }

  showPopover() {
    if (this.popover.classList.contains('popover-container_hidden')) {
      this.popover.classList.remove('popover-container_hidden');
      this.calcPopoverCoords();
    } else {
      this.popover.classList.add('popover-container_hidden');
    }
  }

  setCoords() {
    if (!this.coords) {
      this.coords = this.btn.getBoundingClientRect();
    }
  }

  calcPopoverCoords() {
    this.setCoords();
    this.popover.style.left = `${window.scrollX + this.coords.left + this.btn.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
    this.popover.style.top = `${window.scrollY + this.coords.top - this.popover.offsetHeight - 12}px`;
  }

  setClickListener() {
    this.btn.addEventListener('click', () => {
      this.showPopover();
    });
  }

  setBlurListener() {
    this.btn.addEventListener('blur', () => {
      if (!this.popover.classList.contains('popover-container_hidden')) {
        this.popover.classList.add('popover-container_hidden');
      }
    });
  }
}
