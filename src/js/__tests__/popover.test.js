import Popover from '../popover';

test('should render btn', () => {
  document.body.innerHTML = '<div class="btn-container"></div>';
  const container = document.querySelector('.btn-container');
  const widget = new Popover(container);
  widget.bindToDOM();
  expect(container.innerHTML).toBe(widget.constructor.markup);
});

test('should show popover', () => {
  document.body.innerHTML = '<div class="btn-container"></div>';
  const container = document.querySelector('.btn-container');
  const widget = new Popover(container);
  widget.bindToDOM();
  const btn = container.querySelector('.btn');
  const popover = container.querySelector('.popover-container');
  btn.click();
  expect(popover.classList.contains('popover-container_hidden')).toBeFalsy();
});

test('should hide popover, click twice', () => {
  document.body.innerHTML = '<div class="btn-container"></div>';
  const container = document.querySelector('.btn-container');
  const widget = new Popover(container);
  widget.bindToDOM();
  const btn = container.querySelector('.btn');
  const popover = container.querySelector('.popover-container');
  btn.click();
  btn.click();
  expect(popover.classList.contains('popover-container_hidden')).toBeTruthy();
});
