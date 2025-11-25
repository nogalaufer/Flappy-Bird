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
    return 0
  }
  return JSON.parse(json)

}


function post(newScore) {
  if (newScore == null) return
  _save(STORAGE_KEY, newScore)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newScore))
    return newScore
}


function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}