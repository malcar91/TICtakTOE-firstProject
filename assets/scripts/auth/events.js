const getFormFields = require('./../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
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
  event.preventDefault()
  $('.box').html('')
  player = 'X'

  api.gameCreate()
    .then(ui.onGameCreateSuccess)
    .catch(ui.onGameCreateFailure)
}

let player = 'X'
const onGameUpdate = function (event) {
  event.preventDefault()

  // console.log('and then update game', store.game)

  // store.game.cells[$(event.target).data('cell-index')] = position
  // const div = event.target
  // const position = $('.box').data('cell-index')

  // gameMove = player

  store.game.cells[$(event.target).data('cell-index')] = player
  // store.game.cells[position] = player
  // gameModel[$(event.target).data('cell-index')] = player

  if ($(event.target).is(':empty')) {
    $(event.target).text(player)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  } else {
    $('#message4').show().fadeOut(4000).text('BOX IS ALREADY TAKEN!')
    return 'invalid move'
  }

  // const checkWinner = function () {
  const box = store.game.cells
  console.log(box)
  if (box[0] === box[1] && box[0] === box[2] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    // $('.box').hide()
    // $('#message5').show().text(`Player ${box[0]} won. Want to play again?1, click START GAME`)
    // gameWin = true
    store.game.over = true
  } else if (box[3] === box[4] && box[4] === box[5] && box[3] !== '') {
    console.log('Winner is ' + box[3])
    $('message#4').text('YOU WON!')
    store.game.over = true
  } else if (box[6] === box[7] && box[7] === box[8] && box[6] !== '') {
    console.log('Winner is ' + box[6])
    store.game.over = true
  } else if (box[0] === box[3] && box[3] === box[6] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    store.game.over = true
  } else if (box[1] === box[4] && box[4] === box[7] && box[1] !== '') {
    console.log('Winner is ' + box[1])
    store.game.over = true
  } else if (box[2] === box[5] && box[5] === box[8] && box[2] !== '') {
    console.log('Winner is ' + box[2])
    store.game.over = true
  } else if (box[0] === box[4] && box[4] === box[8] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    store.game.over = true
  } else if (box[2] === box[4] && box[4] === box[6] && box[2] !== '') {
    console.log('Winner is ' + box[2])
    store.game.over = true
  }
  const position = $(event.target).data('cell-index')

  api.gameUpdate(position, player)
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFailure)
}

const onGameIndex = function (event) {
  console.log(onGameIndex)
  event.preventDefault()
  api.gameIndex()
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePw,
  onLogOut,
  onGameCreate,
  onGameUpdate,
  player,
  onGameIndex
  // gameModel
  // gameMove,
  // gameIndex
}
