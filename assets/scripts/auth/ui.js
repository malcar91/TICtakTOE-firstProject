const store = require('./../store.js')

const onSignUpSuccess = function (response) {
  $('#message2').text('WELCOME ' + response.user.email + ', log in to PLAY!').css('font-size', '18px')
  $('form').trigger('reset')
  $('#logged-in').show()
  $('#signed-up').hide()
}

const onSignUpFailure = function () {
  $('#message7').fadeOut(3000).text('Sign up FAILED').css('font-size', '24px')
  $('form').trigger('reset')
}

const onLogInSuccess = function (response) {
  $('#message2').show().fadeOut(5000).text('Logged In! Welcome back!').css('font-size', '24px')
  $('form').trigger('reset')
  $('#game-header').show()
  $('#nav-bar').show()
  // $('#change-pw2').show().on('click', $('#change-password').show())
  $('#logged-in').hide()
  $('#signed-up').hide()
  store.user = response.user
}

const onLogInFailure = function () {
  $('#message3').show().fadeOut(5000).text('Log in FAILED!, try again please').css('font-size', '24px')
  $('form').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#message').show().fadeOut(5000).text('Password changed succesfully!').css('font-size', '18px')
  $('#change-password').hide()
  $('form').trigger('reset')
}

const onChangePwFailure = function () {
  $('#message').show().fadeOut(5000).text('WHOOPS! Didnt work').css('font-size', '18px')
  $('form').trigger('reset')
}

const onLogOutSuccess = function () {
  $('#message2').show().fadeOut(5000).text('LOGGED OUT, See you soon!').css('font-size', '24px')
  // $('#message3').fadeIn(5000).text('BUT WAIT... COME BACK!')
  $('form').trigger('reset')
  $('#game-board').hide()
  // $('#change-pw').hide()
  $('#game-header').hide()
  // $('#signed-in-options').hide()
  $('#game-stats').hide()
  $('#nav-bar').hide()
  $('#logged-in').show()
}

const onGameCreateSuccess = function (response) {
  console.log('I created a game first ', response.game)
  $('#message4').fadeOut(5000).text('Player X, Lets Start the GAME!')
  $('#game-board').show()
  $('#game-stats').show()
  $('form').trigger('reset')
  store.game = response.game
  store.games = response.games
}

const onGameCreateFailure = function () {
  $('#message4').fadeOut(4000).text('Game Create Failure')
}

const onGameUpdateSuccess = function () {
  $('form').trigger('reset')
}

const onGameUpdateFailure = function () {
  $('#message4').text('Game did not update')
  $('form').trigger('reset')
}

const onGameIndexSuccess = function (response) {
  console.log(onGameIndexSuccess)
  $('#games-played').text(`You've played: ${response.games.length} games`).css('font-size', '24px')
}

const onGameIndexFailure = function () {
  $('#games-played').text('Unable to pull up history')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onLogInSuccess,
  onLogInFailure,
  store,
  onChangePwSuccess,
  onChangePwFailure,
  onLogOutSuccess,
  onGameCreateSuccess,
  onGameCreateFailure,
  onGameUpdateSuccess,
  onGameUpdateFailure,
  onGameIndexSuccess,
  onGameIndexFailure
}
