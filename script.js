function slide()
{
    let noButton = document.getElementById("no")

    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let maxX = windowWidth - noButton.offsetWidth
    let maxY = windowHeight - noButton.offsetHeight

    let randomX = Math.random() * maxX + 1
    let randomY = Math.random() * maxY + 1

    if(!noButton.style.left || !noButton.style.top)
    {
        noButton.style.left = `${noButton.offsetLeft}px`
        noButton.style.top = `${noButton.offsetTop}px`
    }

    requestAnimationFrame(() =>
    {
        noButton.style.left = `${randomX}px`
        noButton.style.top = `${randomY}px`
    })
}

document.getElementById("no").addEventListener("touchstart", slide)