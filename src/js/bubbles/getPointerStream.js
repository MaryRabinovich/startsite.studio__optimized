export function getPointerStream() {

    const observers = []

    function attach(observer) {
        if (observers.indexOf(observer) > -1) return
        observers.push(observer)
    }

    function notify(x, y) {
        observers.forEach(
            observer => observer.updateWithPointerStream(x, y)
        )
    }

    function start() {
        addEventListener('pointermove', function (event) {
            notify(event.clientX, event.clientY)
        })
    }

    return {
        attach,
        start
    }
}