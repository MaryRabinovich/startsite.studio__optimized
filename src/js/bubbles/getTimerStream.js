import { config } from "../config.js"

export function getTimerStream() {

    const observers = []

    var timerID = null
    
    function start() {
        if (timerID) return 
        // console.log('START')
        timerID = setInterval(function () {
            notify()
            // console.log('tick')
        }, config.bubbles.interval)
    }

    function stop() {
        if (!timerID) return
        // console.log('STOP')
        clearInterval(timerID)
        timerID = null
    }
    
    function notify() {
        observers.forEach(observer => {
            if (observer.readyToDetachFromTimerStream()) {
                detach(observer)
            }
            observer.updateWithTimerStream()
        })
    }
    
    function attach(observer) {
        if (observers.indexOf(observer) > -1) return
        observers.push(observer)
    }

    function detach(observer) {
        const index = observers.indexOf(observer)
        if (index > -1) observers.splice(index, 1)
        if (observers.length === 0) stop()
    }

    return {
        attach,
        start
    }
}