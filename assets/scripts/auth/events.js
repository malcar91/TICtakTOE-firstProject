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
  // $('.box').html('')
  // store.game.cells = ['', '', '', '', '', '', '', '', '']
  // store.game.over = false
  // player = 'X'
  // $('.row').show()

  // $('#start-game').on('click', onGameCreate)

  api.gameCreate()
    .then(ui.onGameCreateSuccess)
    .catch(ui.onGameCreateFailure)
}

let player = 'X'
// let gameMove
// let position
// let gameWin
// let gameModel = ['', '', '', '', '', '', '', '', '']
// let cells = ['', '', '', '', '', '', '', '', '']
const onGameUpdate = function (event) {
  // event.preventDefault()

  // console.log('and then update game', store.game)

  // store.game.cells[$(event.target).data('cell-index')] = position
  // const div = event.target
  // const position = $('.box').data('cell-index')

  // gameMove = player
  const position = $(event.target).data('cell-index')
  store.game.cells[position] = player
  // gameModel[$(event.target).data('cell-index')] = player

  if ($(event.target).text() === '') {
    $(event.target).text(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  } else {
    $('#message4').show().text('BOX IS ALREADY TAKEN!')
    return 'invalid move'
  }
  const box = store.game.cells
  if (box[0] !== '' && box[0] === box[1] && box[0] === box[2]) {
    console.log('Winner is ' + box[0])
    // $('.box').hide()
    // $('#message5').show().text(`Player ${box[0]} won. Want to play again?1, click START GAME`)
    // gameWin = true
  } else if (box[3] !== '' && box[3] === box[4] && box[3] === box[5]) {
    console.log('Winner is ' + box[3])
    $('message#4').text('YOU WON!')
  } else if (box[6] === box[7] && box[6] === box[8] && box[6] !== '') {
    console.log('Winner is' + box[6])
  } else if (box[0] === box[3] && box[0] === box[6] && box[0] !== '') {
    console.log('Winner is ' + box[0])
  } else if (box[1] === box[4] && box[1] === box[7] && box[1] !== '') {
    console.log('Winner is ' + box[1])
  } else if (box[2] === box[5] && box[2] === box[8] && box[2] !== '') {
    console.log('Winner is ' + box[2])
  } else if (box[0] === box[4] && box[0] === box[8] && box[0] !== '') {
    console.log('Winner is' + box[0])
  } else if (box[2] === box[4] && box[2] === box[6] && box[2] !== '') {
    console.log('Winner is' + box[2])
  }

  api.gameUpdate(position, player)
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePw,
  onLogOut,
  onGameUpdate,
  onGameCreate
  // gameModel
  // gameMove,
  // gameIndex
}
