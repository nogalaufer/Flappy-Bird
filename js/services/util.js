'use strict'

function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function countUp(element, target, duration = 800) {
  let start = 0
  let startTime = null

  function animate(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = timestamp - startTime
    const percent = Math.min(progress / duration, 1)

    const current = Math.floor(percent * target)
    element.innerText = current

    if (percent < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined
  }