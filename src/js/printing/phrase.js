import { config } from "../config.js"

const cnfg = config.printing.phrases

var phraseIndex = 0

var letterIndex = 0

function getPhrase() {
    return cnfg[phraseIndex]
}

function changePhrase() {
    phraseIndex++
    if (phraseIndex === cnfg.length) {
        phraseIndex = 0
    }
}

function getSubstring() {
    return getPhrase().substring(0, letterIndex)
}

function isComplete() {
    return letterIndex === getPhrase().length
}

function addLetter() {
    letterIndex++
}

function isEmpty() {
    return letterIndex === 0
}

function eraseLetter() {
    letterIndex--
}

export default {
    changePhrase,
    getSubstring,
    isComplete,
    addLetter,
    isEmpty,
    eraseLetter
}