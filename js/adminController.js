'use strict'

function onInitAdmin() {
    createUsers()
    checkIfAdmin()
    renderUsers()
}

function renderUsers() {
    const users = getUsersForDisplay()

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

function getTimeStr(time) {
    time = new Date(time)

    return `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
}

function onSetSort(sortBy) {
    setSort(sortBy)
    renderUsers()
}