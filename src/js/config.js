export const config = {
    bubbles: {
        startX: 200,
        startY: 200,
        interval: 20,
        small: {
            elegance: 20
        },
        big: {
            elegance: 30
        }
    },
    printing: {
        colors: ['orange', 'magenta', 'green', 'white'],
        phrases: [
            'подробнее',
            'код и readme.md',
            'у меня',
            'на гитхабе',
            'MaryRabinovich',
            'проект startsite optimized'
        ],
        intervals: {
            printing: 100,
            onComplete: 3000,
            erasing: 40,
            onEmpty: 1000
        }
    }
}