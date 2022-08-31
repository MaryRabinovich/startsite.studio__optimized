import { config } from "../config.js"

function memorizeHelper(arr, value) {
    arr.unshift(value)
    arr.pop()
}

function homogenizeHelper(arr) {
    arr.unshift(arr[0])
    arr.pop()
}

function getAverageHelper(arr) {
    return Math.floor(
        arr.reduce((sum, a) => sum + a) / arr.length
    )
}

function isHomogeniousHelper(arr) {
    return arr.every( (a, i, arr) => a === arr[0] )
}

export function createArchive(elegance) {

    const x = new Array(elegance).fill(config.bubbles.startX)
    
    const y = new Array(elegance).fill(config.bubbles.startY)

    function memorize(xValue, yValue) {
        memorizeHelper(x, xValue)
        memorizeHelper(y, yValue)
    }

    function homogenize() {
        homogenizeHelper(x)
        homogenizeHelper(y)
    }

    function getX() {
        return getAverageHelper(x)
    }

    function getY() {
        return getAverageHelper(y)
    }

    function isHomogenious() {
        return isHomogeniousHelper(x) && isHomogeniousHelper(y)
    }

    return {
        memorize,
        homogenize,
        getX,
        getY,
        isHomogenious
    }
}