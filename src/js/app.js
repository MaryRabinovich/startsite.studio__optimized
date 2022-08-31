import { createBubble } from './bubbles/createBubble.js'
import { getPointerStream } from './bubbles/getPointerStream.js'
import { getTimerStream } from './bubbles/getTimerStream.js'
import printingStream from './printing/stream.js'

printingStream.up()

const bubbles = {
    big: createBubble('big'),
    small: createBubble('small'),
    pointerStream: getPointerStream(),
    timerStream: getTimerStream()
}
bubbles.pointerStream.attach(bubbles.big)
bubbles.pointerStream.attach(bubbles.small)
bubbles.pointerStream.start()
addEventListener('pointermove', function () {
    bubbles.timerStream.attach(bubbles.big)
    bubbles.timerStream.attach(bubbles.small)
    bubbles.timerStream.start()
})