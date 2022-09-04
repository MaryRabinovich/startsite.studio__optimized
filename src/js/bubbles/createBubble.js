import { config } from "../config.js";
import { createArchive } from "./createArchive.js";

const cnfg = config.bubbles

export function createBubble(type) {

    const view = document.createElement('div')
    view.classList.add('bubble')
    view.classList.add(`bubble-${type}`)
    document.querySelector('body').appendChild(view)

    function addContactClass() {
        view.classList.add(`bubble-${type}-contact`)
    }

    function removeContactClass() {
        view.classList.remove(`bubble-${type}-contact`)
    }

    const archive = createArchive(
        cnfg[type].elegance
    )

    function adjustPosition() {
        view.style.setProperty('left', archive.getX() + 'px')
        view.style.setProperty('top', archive.getY() + 'px')
    }

    function updateWithPointerStream(x, y) {
        archive.memorize(x, y)
        adjustPosition()
    }

    function updateWithTimerStream() {
        archive.homogenize()
        adjustPosition()
    }

    function readyToDetachFromTimerStream() {
        return archive.isHomogenious()
    }

    return {
        addContactClass,
        removeContactClass,
        updateWithPointerStream,
        updateWithTimerStream,
        readyToDetachFromTimerStream
    }
}