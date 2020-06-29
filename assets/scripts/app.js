'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userAction = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', userAction.onSignUp)
  $('#log-in').on('submit', userAction.onLogIn)
  $('#change-pw').on('submit', userAction.onChangePw)
  $('#log-out').on('click', userAction.onLogOut)

  // <----------- Tab login menu ---------------------------------->
  $('.login').hide()
  $('.log2').css('background', 'none')

  $('.log2').click(function () {
    $('.signup').hide()
    $('.login').show()
    $('.sign2').css('background', 'none')
    $('.log2').css('background', '#fff')
  })
  $('.sign2').click(function () {
    $('.signup').show()
    $('.login').hide()
    $('.log2').css('background', 'none')
    $('.sign2').css('background', '#fff')
  })
  // <----------   ----      -----         ------------->

  $('#nav-bar').hide()
  $('#change-password').hide()
  $('#change-password').hide()
  $('#game-board').hide()
  $('#game-stats').hide()
  $('#game-header').hide()

  $('#game-create').on('click', userAction.onGameCreate)
  $('#game-index').on('click', userAction.onGameIndex)

  $('#change-pw2').click(function () {
    $('#change-password').show()
  })

  $('.box').on('click', userAction.onGameUpdate)
})
