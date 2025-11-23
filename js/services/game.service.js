'use strict'
const STORAGE_KEY = 'Flappy Bird Best Score'


const gameService = {
  query,
  post,

}


function query() {
  const json = localStorage.getItem(STORAGE_KEY)
 if (!json) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(0))
    return localStorage.getItem(STORAGE_KEY)
  }
}


function post(newScore) {
  if (newScore == null) return
  const currentBest = query()
  if (newScore > currentBest) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newScore))
    return newScore
  }

  return currentBest
}


function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}