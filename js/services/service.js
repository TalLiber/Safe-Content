'use strict'

const STORAGE_KEY = 'ItemDB'
var gUsers = []


function createUsers() {

    var users = loadFromStorage(STORAGE_KEY)

    if (!users || !users.length) {
        users = [{
                id: 'u101',
                username: 'puki',
                password: 'secret',
                lastLoginTime: 1601891998864,
                isAdmin: false,
                isLoggedIn: false
            },
            {
                id: 'u102',
                username: 'tal',
                password: 'qwe123',
                lastLoginTime: 1601891998864,
                isAdmin: true,
                isLoggedIn: false
            },
            {
                id: 'u103',
                username: 'naama',
                password: 'zaq123',
                lastLoginTime: 1601891998864,
                isAdmin: false,
                isLoggedIn: false
            }
        ]
    }

    gUsers = users
    _saveUsers()

}

function _saveUsers() {
    saveToStorage(STORAGE_KEY, gUsers)
}

function getUserByDetails(username, password) {
    var user = gUsers.find(user => user.username === username)

    if (user && user.password === password) return user

    alert('Incorrect username or password.')
    return
}

function getUserById(userId) {
    return gUsers.find(user => user.id === userId)

}

function updateLogStatus(user) {
    user.isLoggedIn = !user.isLoggedIn
    saveToStorage(STORAGE_KEY, gUsers)
}

function checkLoggedIn() {
    return gUsers.find(user => user.isLoggedIn)
}

function updateLastLoginTime(currUser) {
    currUser.lastLoginTime = Date.now()
    saveToStorage(STORAGE_KEY, gUsers)
}