/**
 * Guarda true si el usuario esta logeado, de lo contrario guarda null y me redirige a la pantalla login
 */
const logged = sessionStorage.getItem('auth')

if(!logged)
    location.href = './../html/login.html'