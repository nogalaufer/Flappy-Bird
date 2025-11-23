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

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined
  }