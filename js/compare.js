document.querySelectorAll('[data-compare]').forEach((compare) => {
  const range = compare.querySelector('.compare-range');
  const overlay = compare.querySelector('.compare-overlay');
  const divider = compare.querySelector('.compare-divider');
  const topImage = compare.querySelector('.compare-top');

  function syncImageWidth() {
    topImage.style.width = compare.clientWidth + 'px';
    topImage.style.height = '100%';
  }

  function update(value) {
    overlay.style.width = value + '%';
    divider.style.left = value + '%';
    range.setAttribute('aria-valuetext', `${value} percent of the before image visible`);
  }

  syncImageWidth();
  update(range.value);
  range.addEventListener('input', () => update(range.value));
  window.addEventListener('resize', syncImageWidth);
  if ('ResizeObserver' in window) {
    new ResizeObserver(syncImageWidth).observe(compare);
  }
});
