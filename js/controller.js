'use strict'

function onInit() {
    createUsers()

    var currUser = checkLoggedIn()
    updateDisplay(currUser)
}

function onDoLogin(ev) {
    ev.preventDefault()

    const elUsername = document.querySelector('[name=username]')
    const username = elUsername.value

    const elPassword = document.querySelector('[name=password]')
    const password = elPassword.value

    var currUser = getUserByDetails(username, password)
    if (currUser) {
        updateLogStatus(currUser)
        updateLastLoginTime(currUser)
        updateDisplay(currUser)
    }

    elUsername.value = ''
    elPassword.value = ''
}

function updateDisplay(currUser) {
    var elUserDisplay = document.querySelector('.user-display-container')
    var elLoginDisplay = document.querySelector('.login-container')

    if (currUser) {
        var strHTML = `
    <h2 class="welcome-user">welcome ${currUser.username}</h2>
        <img src="img/top-secret.png" />
        <section class="buttons-container">
            <button class="admin ${(currUser.isAdmin) ? '' : 'hide'}">Admin</button>
            <button class="logout" onclick="onLogout('${currUser.id}')">Logout</button>
        </section>
    `

        elUserDisplay.innerHTML = strHTML
        elUserDisplay.classList.remove('hide')
        elLoginDisplay.classList.add('hide')
    } else {
        elUserDisplay.classList.add('hide')
        elLoginDisplay.classList.remove('hide')
    }
}

function onLogout(userId) {
    var currUser = getUserById(userId)
    updateLogStatus(currUser)
    updateDisplay()
}