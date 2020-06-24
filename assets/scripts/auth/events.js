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

  store.game.cells[$(event.target).data('cell-index')] = player

  if ($(event.target).is(':empty')) {
    store.game.cells = store.game.player ? 'X' : 'O'
    $(event.target).text(player)
    if (player === 'X') {
      player = 'O'
      $('#message6').show().text(" Now Its Player O's Turn")
    } else {
      player = 'X'
      $('#message6').show().text("Now Its Player X's Turn")
    }
  } else {
    $('#message4').show().fadeOut(5000).text('BOX IS ALREADY TAKEN!')
    // angular.module('ionicApp', ['ionic'])
    // .controller('PlaylistsCtrl', function ($scope, $ionicPopup, $timeout) {
    //     $scope.data = {}
    //
    //     // Triggered on a button click, or some other target
    //     $scope.showPopup = function () {
    //       const alertPopup = $ionicPopup.alert({
    //         title: 'BOX IS ALREADY TAKEN!',
    //         template: 'Pick another box please'
    //       })
    //       alertPopup.then(function (res) {
    //         console.log('it worked!')
    //       })
    //     }
    //   })
    return 'invalid move'
  }

  const box = store.game.cells
  // console.log(box)
  if (box[0] === box[1] && box[0] === box[2] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    $('#message5').show().fadeOut(5000).text('Player ' + box[0] + ' is the WINNER!')
    $('.box').fadeToggle('fast', 'linear')
    $('.box').off('click', onGameUpdate)
    store.game.over = true
  } else if (box[3] === box[4] && box[4] === box[5] && box[3] !== '') {
    console.log('Winner is ' + box[3])
    $('#message5').show().fadeOut(5000).text('Player ' + box[3] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  } else if (box[6] === box[7] && box[7] === box[8] && box[6] !== '') {
    console.log('Winner is ' + box[6])
    $('#message5').show().fadeOut(5000).text('Player ' + box[6] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  } else if (box[0] === box[3] && box[3] === box[6] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    $('#message5').show().fadeOut(3000).text('Player ' + box[0] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  } else if (box[1] === box[4] && box[4] === box[7] && box[1] !== '') {
    console.log('Winner is ' + box[1])
    $('#message5').show().fadeOut(5000).text('Player ' + box[1] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  } else if (box[2] === box[5] && box[5] === box[8] && box[2] !== '') {
    console.log('Winner is ' + box[2])
    $('#message5').show().fadeOut(5000).text('Player ' + box[2] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  } else if (box[0] === box[4] && box[4] === box[8] && box[0] !== '') {
    console.log('Winner is ' + box[0])
    $('#message5').show().fadeOut(5000).text('Player ' + box[0] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  } else if (box[2] === box[4] && box[4] === box[6] && box[2] !== '') {
    console.log('Winner is ' + box[2])
    $('#message5').show().fadeOut(5000).text('Player ' + box[2] + ' is the WINNER!')
    store.game.over = true
    $('.box').off('click', onGameUpdate)
  }
  if (store.game.cells.every(e => e !== '')) {
    console.log('ITS A TIE!')
    $('#message5').show().fadeOut(5000).text('ITS A TIE, PLAY AGAIN!')
    $('.box').off('click', onGameUpdate)
  }
  const position = $(event.target).data('cell-index')

  api.gameUpdate(position, player)
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFailure)
}

const onGameIndex = function (event) {
  // console.log(onGameIndex)
  event.preventDefault()
  api.gameIndex()
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFailure)
}

const onGameShow = function (event) {
  event.preventDefault()
  api.gameShow()
    .then(ui.onGameShowSuccess)
    .catch(ui.onGameShowFailure)
}
// let x = document.getElementById('login')
// let y = document.getElementById('signup')
// let z = document.getElementById('btn')

const onTogSign = function (x, y, z) {
  x.style.left = '-400px'
  y.style.left = '50px'
  z.style.left = '100px'
}
const onTogLog = function (x, y, z) {
  x.style.left = '50px'
  y.style.left = '450px'
  z.style.left = '0px'
}
module.exports = {
  onSignUp,
  onLogIn,
  onChangePw,
  onLogOut,
  onGameCreate,
  onGameUpdate,
  player,
  onGameIndex,
  onGameShow,
  onTogLog,
  onTogSign
  // gameModel
  // gameMove,
  // gameIndex
}
