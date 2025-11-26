'use strict'
const STORAGE_KEY = 'Flappy Bird Best Score'
const STORAGE_KEY_SOUND = "Flappy Bird Sound On"



const gameService = {
  query,
  post,
  getSoundPref,
  setSoundPref,


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

function getSoundPref() {
  const json = localStorage.getItem(STORAGE_KEY_SOUND)
  if (json === null) {
    localStorage.setItem(STORAGE_KEY_SOUND, JSON.stringify(true))
    return true
  }
  return JSON.parse(json)
}


function setSoundPref(isOn) {
  localStorage.setItem(STORAGE_KEY_SOUND, JSON.stringify(isOn))
}