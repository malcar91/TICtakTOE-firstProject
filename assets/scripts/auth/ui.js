const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message2').text('WELCOME ' + response.user.email + ', log in to PLAY!')
  $('form').trigger('reset')
  $('#signed-in-options').show()
  $('#logged-in').show()
  $('#signed-up').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up FAILED')
  $('form').trigger('reset')
}

const onLogInSuccess = function (response) {
  $('#message2').fadeOut(5000).text('Logged In! Welcome back!')
  $('form').trigger('reset')
  $('#signed-in-options').show()
  $('#game-section').show()
  $('#logged-in').hide()
  $('#signed-up').hide()
  store.user = response.user
}

const onLogInFailure = function () {
  $('#message').fadeOut(5000).text('Log in FAILED')
  $('form').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#message3').fadeOut(5000).text('Password changed succesfully!')
  $('form').trigger('reset')
}

const onChangePwFailure = function () {
  $('#message3').text('WHOOPS! Didnt work ;(')
  $('form').trigger('reset')
}

const onLogOutSuccess = function () {
  $('#message2').show().text('LOGGED OUT, See you soon!')
  $('form').trigger('reset')
  $('#game-section').hide()
  $('#change-pw').hide()
  $('#logged-in').show()
  $('#signed-in-options').hide()
}

const onGameCreateSuccess = function (response) {
  console.log('I created a game first ', response.game)
  $('#message4').text('Lets Start the GAME!')
  $('form').trigger('reset')
  store.game = response.game
}

const onGameCreateFailure = function () {
  $('#message4').text('Game Create Failure')
}

const onGameUpdateSuccess = function (response) {
  $('#message4').fadeOut(2000).text('Nice Choice')
  $('form').trigger('reset')
  store.game = response.game
}

const onGameUpdateFailure = function () {
  $('#message4').text('game did not update')
  $('form').trigger('reset')
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
  onGameUpdateFailure

}
