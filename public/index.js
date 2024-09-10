const navbutton = document.getElementById(`nav-btn`)
const navmenu   = document.getElementById(`nav-menu`)
const navclose  = document.getElementById(`nav-close`)

navbutton.addEventListener(`change`, () => {

    let status = navbutton.checked

    if (status == true) {


        navmenu.style.marginLeft = `0`
        navclose.style.display = `block`

    } else {

        navmenu.style.marginLeft = `-25rem`
        navclose.style.display = 'none'
    }
})

navclose.addEventListener(`click`, () => {

    navclose.style.display = 'none'
    navmenu.style.marginLeft = `-25rem`
    navbutton.checked = false 
})