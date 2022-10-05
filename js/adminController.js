'use strict'

var gUsersDisplay = 'list'

function onInitAdmin() {
    createUsers()
    checkIfAdmin()
    renderUsers()
}

function renderUsers() {
    const users = getUsersForDisplay()
    var elListDisplay = document.querySelector('.list-display')
    var elCardsDisplay = document.querySelector('.card-display')

    if (gUsersDisplay === 'list') {
        renderByList(users)
        elListDisplay.classList.remove('hide')
        elCardsDisplay.classList.add('hide')
    } else {
        renderByCards(users)
        elListDisplay.classList.add('hide')
        elCardsDisplay.classList.remove('hide')
    }

}

function getTimeStr(time) {
    time = new Date(time)

    return `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
}

function onSetSort(sortBy) {
    setSort(sortBy)
    renderUsers()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function renderByCards(users) {

    var strHTML = users.map(user => `
    <article class="card">
        <span>
            ${user.username}</span>
        <span>
            <i class="fa-solid fa-circle-user" style="color: ${getRandomColor()}; font-size: 100px"></i>
        </span>
        <small style="font-size: 15px">Password: ${user.password}</small>
        <small style="font-size: 15px">LastLoginTime: ${getTimeStr(user.lastLoginTime)}</small>
        <small style="font-size: 15px">IsAdmin: ${user.isAdmin}</small>
    </article>
    `).join(' ')

    document.querySelector('.card-display').innerHTML = strHTML
}

function renderByList(users) {
    var strHTML = users.map(user => `
    \n<tr>\n
    <td>${user.username}</td>\n
    <td>${user.password}</td>\n
    <td>${getTimeStr(user.lastLoginTime)}</td>\n
    <td>${user.isAdmin}</td>\n
    \n</tr>\n
`).join('')

    document.querySelector('.table-body').innerHTML = `<tr class="headers">
<td>userName</td>
<td>Password</td>
<td>LastLoginTime</td>
<td>IsAdmin</td>
</tr>` + strHTML
}

function setUsersDisplay(status) {
    gUsersDisplay = (status === 'list') ? 'list' : 'cards'
    renderUsers()
}