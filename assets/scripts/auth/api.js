const config = require('./../config')
const store = require('./../store')

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

const gameIndex = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/:over?',
    headers: {
      Authorization: 'Token token=' + store.user
    }
  })
}

const gameCreate = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      games: '{}'
    }
  })
}

const gameShow = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Token token=' + store.user
    }
  })
}

const gameUpdate = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data,
          value: data
        },
        over: false
      }
    }
  })
}

module.exports = {
  signUp,
  logIn,
  changePw,
  logOut,
  gameIndex,
  gameCreate,
  gameShow,
  gameUpdate,
  store
}
