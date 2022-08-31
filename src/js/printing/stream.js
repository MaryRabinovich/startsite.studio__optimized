import { config } from "../config.js"
import view from './view.js'
import phrase from './phrase.js'

const cnfg = config.printing.intervals

var interval = null

view.setColor()

function waitOnComplete() {
    // console.log('wait on complete')
    setTimeout(down, cnfg.onComplete)
}

function waitOnEmpty() {
    // console.log('wait on empty')
    phrase.changePhrase()
    view.setColor()
    setTimeout(up, cnfg.onEmpty)
}

function down() {
    interval = setInterval(function () {
        // console.log('erasing')
        phrase.eraseLetter()
        view.showString(phrase.getSubstring())
        if (phrase.isEmpty()) {
            clearInterval(interval)
            waitOnEmpty()
        }
    }, cnfg.erasing)
}

function up() {
    interval = setInterval(function () {
        // console.log('printing')
        phrase.addLetter()
        view.showString(phrase.getSubstring())
        if (phrase.isComplete()) {
            clearInterval(interval)
            waitOnComplete()
        }
    }, cnfg.printing)
}

export default {
    up
}