
const elements = {
    inc: document.querySelector('[data-increment]'),
    dec: document.querySelector('[data-decrement]'),
    reset: document.querySelector('[data-reset]'),
    counter: document.querySelector('[data-counter]')
}

counterText = 0

elements.inc.addEventListener('click', () => {
    counterText += 1
    elements.counter.innerText = counterText
})

elements.dec.addEventListener('click', () => {
    counterText -= 1
    elements.counter.innerText = counterText
})

elements.reset.addEventListener('click', () => {
    counterText = 0
    elements.counter.innerText = counterText
})
