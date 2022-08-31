import config from './config.js'
import { createBubble } from './bubbles/createBubble.js'
import { getPointerStream } from './bubbles/getPointerStream.js'
import { getTimerStream } from './bubbles/getTimerStream.js'

const bubbleBig = createBubble('big')
const bubbleSmall = createBubble('small')

const pointerStream = getPointerStream()
pointerStream.attach(bubbleSmall)
pointerStream.attach(bubbleBig)
pointerStream.start()

const timerStream = getTimerStream()
addEventListener('pointermove', function () {
    timerStream.attach(bubbleBig)
    timerStream.attach(bubbleSmall)
    timerStream.start()
})