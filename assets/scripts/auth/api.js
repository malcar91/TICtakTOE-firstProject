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

const gameCreate = function () {
  // console.log('store in game create is ', store)
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

const gameIndex = function (status) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const gameShow = function (data) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/games/:id',
//     headers: {
//       Authorization: 'Token token=' + store.user
//     }
//   })
// }

const gameUpdate = function (position, player) {
  console.log('position is ', position)
  console.log('player is ', player)
  console.log('id is ', store.game._id)
  console.log('over is ' + store.game.over)

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
  gameIndex,
  gameCreate,
  gameUpdate
}
