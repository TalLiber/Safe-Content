'use strict'

const STORAGE_KEY = 'ItemDB'
var gUsers = []
var gSortBy = ''

function getUsersForDisplay() {
    var users = gUsers

    if (gSortBy === 'lastLogin') users.sort((a, b) => a.lastLoginTime - b.lastLoginTime)
    else users.sort((a, b) => a.username.localeCompare(b.username))

    return users
}

function createUsers() {

    var users = loadFromStorage(STORAGE_KEY)

    if (!users || !users.length) {
        users = [{
                id: 'u101',
                username: 'Puki',
                password: 'secret',
                lastLoginTime: 1601891998864,
                isAdmin: false,
                isLoggedIn: false
            },
            {
                id: 'u102',
                username: 'Tal',
                password: '123',
                lastLoginTime: 1601891998864,
                isAdmin: true,
                isLoggedIn: false
            },
            {
                id: 'u103',
                username: 'Naama',
                password: 'zaq123',
                lastLoginTime: 1601891998864,
                isAdmin: false,
                isLoggedIn: false
            },
            {
                id: 'u104',
                username: 'Shani',
                password: '1234',
                lastLoginTime: 1601891998864,
                isAdmin: false,
                isLoggedIn: false
            },
            {
                id: 'u105',
                username: 'Yarden',
                password: '1234',
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

function checkIfAdmin() {
    if (!gUsers.find(user => user.isLoggedIn && user.isAdmin)) location.href = 'index.html'
}

function setSort(sortBy) {
    gSortBy = sortBy
}