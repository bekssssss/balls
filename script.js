const balloons = document.querySelectorAll('.balloon')
const toggleAllButton = document.getElementById('toggleAll')
let isAllToggled = false

balloons.forEach(balloon => {
    balloon.addEventListener('click', () => {
        balloon.classList.toggle('toggled')
    })
})

toggleAllButton.addEventListener('click', () => {
    isAllToggled = !isAllToggled
    balloons.forEach(balloon => {
        if (isAllToggled) {
            balloon.classList.add('toggled')
        } else {
            balloon.classList.remove('toggled')
        }
    })
})