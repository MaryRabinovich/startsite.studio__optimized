const links = document.getElementsByTagName('a')

function bubblesAddContactClass(bubbles) {
    bubbles.forEach(bubble => {
        bubble.addContactClass()
    })
}

function bubblesRemoveContactClass(bubbles) {
    bubbles.forEach(bubble => {
        bubble.removeContactClass()
    })
}

export function addLinksContactBehaviour(bubbles) {
    for (let link of links) {
        link.addEventListener('pointerenter', event => {
            link.oldColor = link.style.color
            link.style.color = 'orange'
            bubblesAddContactClass(bubbles)
        })
        link.addEventListener('pointerout', event => {
            link.style.color = link.oldColor
            bubblesRemoveContactClass(bubbles)
        })
    }
}