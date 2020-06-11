const getFormFields = require('./../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store')
// const cells = ['#one', '', '', '', '', '', '', '', '']

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.logIn(data)
    .then(ui.onLogInSuccess)
    .catch(ui.onLogInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePw(data)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onLogOut = function (event) {
  event.preventDefault()

  api.logOut(event)
    .then(ui.onLogOutSuccess)
}

const onGameCreate = function (event) {
  // event.preventDefault()

  // const onStartGame = function (event) {
  event.preventDefault()
  $('.box').html('')
  store.game.cells = ['', '', '', '', '', '', '', '', '']
  store.game.over = false
  player = 'X'
  // $('.row').show()

  // $('#start-game').on('click', onGameCreate)

  api.gameCreate()
    .then(ui.onGameCreateSuccess)
    .catch(ui.onGameCreateFailure)
}

let player = 'X'
// let gameMove = null
// let gameIndex = null
const onGameUpdate = function (event) {
  event.preventDefault()

  console.log('and then update game', store.game)

  store.game.cells[$(event.target).data('cell-index')] = player

  // gameMove = player
  // gameIndex = $(event.target).data('cell-index')

  if ($(event.target).text() === '') {
    $(event.target).text(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  } else {
    $('#message4').show().text('Box is already taken!')
    return 'invalid move'
  }
  const gameBoard = store.game.cells
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    console.log('Winner is ' + gameBoard[0])
  }

  api.gameUpdate(event)
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePw,
  onLogOut,
  onGameUpdate,
  store,
  onGameCreate,
  player
  // gameMove,
  // gameIndex
}
