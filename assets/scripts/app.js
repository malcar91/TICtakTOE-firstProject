'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userAction = require('./auth/events')
// const boxClicks = require('./auth/events')
// const gameStart = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', userAction.onSignUp)
  $('#log-in').on('submit', userAction.onLogIn)
  $('#change-pw').on('submit', userAction.onChangePw)
  $('#log-out').on('click', userAction.onLogOut)

  $('#signed-in-options').hide()
  $('#game-section').hide()

  $('#game-create').on('click', userAction.onGameCreate)

  $('#one').on('click', userAction.onGameUpdate)
  $('#two').on('click', userAction.onGameUpdate)
  $('#three').on('click', userAction.onGameUpdate)
  $('#four').on('click', userAction.onGameUpdate)
  $('#five').on('click', userAction.onGameUpdate)
  $('#six').on('click', userAction.onGameUpdate)
  $('#seven').on('click', userAction.onGameUpdate)
  $('#eight').on('click', userAction.onGameUpdate)
  $('#nine').on('click', userAction.onGameUpdate)
})
