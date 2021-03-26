import Popover from './popover';

const container = document.querySelector('.btn-container');
const popover = new Popover(container);
popover.bindToDOM();
