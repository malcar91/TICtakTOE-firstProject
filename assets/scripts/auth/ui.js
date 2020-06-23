const store = require('./../store.js')

const onSignUpSuccess = function (response) {
  $('#message2').text('WELCOME ' + response.user.email + ', log in to PLAY!')
  $('form').trigger('reset')
  $('#signed-in-options').show()
  $('#logged-in').show()
  $('#signed-up').hide()
}

const onSignUpFailure = function () {
  $('#message').fadeOut(3000).text('Sign up FAILED')
  $('form').trigger('reset')
}

const onLogInSuccess = function (response) {
  $('#message2').fadeOut(3000).text('Logged In! Welcome back!')
  $('form').trigger('reset')
  $('#signed-in-options').show()
  $('#game-section').show()
  $('#game-stats').show()
  $('#message-forms23').show()
  $('#message-forms45').show()
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
  $('#message2').show(400).delay(5000).fadeOut(3000).text('LOGGED OUT, See you soon!')
  $('#message2').show(400).fadeIn('BUT WAIT!... COME BACK!')
  $('form').trigger('reset')
  $('#game-section').hide()
  $('#change-pw').hide()
  $('#logged-in').show()
  $('#signed-in-options').hide()
}

const onGameCreateSuccess = function (response) {
  console.log('I created a game first ', response.game)
  $('#message4').text('Player X, Lets Start the GAME!')
  $('form').trigger('reset')
  store.game = response.game
}

const onGameCreateFailure = function () {
  $('#message4').fadeOut(4000).text('Game Create Failure')
}

const onGameUpdateSuccess = function (response) {
  $('#message4').fadeOut(2000).text('Nice Choice')
  $('form').trigger('reset')
  // store.game = response.game
}

const onGameUpdateFailure = function () {
  $('#message4').text('game did not update')
  $('form').trigger('reset')
}

const onGameIndexSuccess = function (response) {
  console.log(response)
  $('#games-played').text(`You've played: ${response.games.length}`)
  // $('#game-id').text(`Your game ID: ${response.game._id}`)
}

const onGameIndexFailure = function () {
  $('#message4').text('Unable to pull up history')
}

const onGameShowSuccess = function (response) {
  $('#game-id').text(`Game info: ${response.games.length}`)
}

const onGameShowFailure = function () {
  $('#game-id').text('Unable to pull game info')
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
  onGameIndexFailure,
  onGameShowSuccess,
  onGameShowFailure
}
