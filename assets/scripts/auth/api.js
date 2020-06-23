const config = require('./../config.js')
const store = require('./../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const logIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const changePw = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}

const logOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameCreate = function (response) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const gameIndex = function (over) {
  over = over === undefined ? '' : '?over=' + over
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games' + over,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameShow = function (data) {
  // console.log('gameShow', gameShow)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdate = function (position, player) {
  console.log('position is ', position)
  console.log('player is ', player)
  // console.log('id is ', store.game._id)
  // console.log('over is ' + store.game.over)
  // set index to 0 and value to x

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: position,
          value: player
        },
        over: store.game.over
      }
    }
  })
}

module.exports = {
  signUp,
  logIn,
  changePw,
  logOut,
  gameCreate,
  gameIndex,
  gameShow,
  gameUpdate
}
