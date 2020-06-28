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
  // $('#chnage-pw2').show($('#change-password'))

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

  if (store.game.over === true) {
    console.log('Cant play anymore')
    $('#message6').show().fadeOut(5000).text('NO MORE MOVES, play another game!')
    return
  }

  // store.game.cells[event.target.id] = player
  if ($(event.target).is(':empty')) {
    // console.log(store.game.cells)
    store.game.cells[$(event.target).data('cell-index')] = player
    // console.log(store.game.cells)
    // console.log(player)
    $(event.target).text(player)

    if (player === 'X') {
      player = 'O'
      $('#message4').show().fadeOut(5000).text(`Its player ${player}'s turn'`)
    } else {
      player = 'X'
      $('#message5').show().fadeOut(5000).text(`Its player ${player}'s turn'`)
    }
  } else {
    $('#message6').show().fadeOut(5000).text('BOX IS ALREADY TAKEN!').css('font-size', '18px')
    // return 'invalid move'
  }

  const position = $(event.target).data('cell-index')

  gameWinner()

  api.gameUpdate(position, player)
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFailure)
}

const gameWinner = function () {
  const box = store.game.cells
  console.log(box)
  if (box[0] === box[1] && box[1] === box[2] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    $('#message8').show().fadeOut(8000).text('Player ' + box[0] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[3] === box[4] && box[4] === box[5] && box[3] !== '') {
    console.log('Winner is ' + box[3])
    $('#message8').show().fadeOut(8000).text('Player ' + box[3] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[6] === box[7] && box[7] === box[8] && box[6] !== '') {
    console.log('Winner is ' + box[6])
    $('#message8').show().fadeOut(8000).text('Player ' + box[6] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[0] === box[3] && box[3] === box[6] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    $('#message8').show().fadeOut(8000).text('Player ' + box[0] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[1] === box[4] && box[4] === box[7] && box[1] !== '') {
    console.log('Winner is ' + box[1])
    $('#message8').show().fadeOut(8000).text('Player ' + box[1] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[2] === box[5] && box[5] === box[8] && box[2] !== '') {
    console.log('Winner is ' + box[2])
    $('#message8').show().fadeOut(8000).text('Player ' + box[2] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[0] === box[4] && box[4] === box[8] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    $('#message8').show().fadeOut(8000).text('Player ' + box[0] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  } else if (box[2] === box[4] && box[4] === box[6] && box[2] !== '') {
    console.log('Winner is ' + box[2])
    $('#message8').show().fadeOut(8000).text('Player ' + box[2] + ' is the WINNER!').css('font-size', '24px')
    store.game.over = true
  }
  if (store.game.cells.every(e => e !== '')) {
    console.log('ITS A TIE!')
    $('#message6').show().fadeOut(8000).text('ITS A TIE, PLAY AGAIN!').css('font-size', '24px')
  }
  // console.log(box, 'end game winner')
}

const onGameIndex = function (event) {
  // console.log(onGameIndex)
  event.preventDefault()
  api.gameIndex()
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFailure)
}

// const onGameShow = function (event) {
//   event.preventDefault()
//   api.gameShow()
//     .then(ui.onGameShowSuccess)
//     .catch(ui.onGameShowFailure)
// }

module.exports = {
  onSignUp,
  onLogIn,
  onChangePw,
  onLogOut,
  onGameCreate,
  onGameUpdate,
  onGameIndex
  // player
  // onGameShow
}
