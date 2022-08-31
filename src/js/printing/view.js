import { config } from "../config.js"

const cnfg = config.printing.colors

const view = document.getElementById('printing')

function setColor() {
    view.style.color = cnfg[
        Math.floor(Math.random() * cnfg.length)
    ]
}

function showString(string) {
    view.innerText = string
}

export default {
    setColor,
    showString
}