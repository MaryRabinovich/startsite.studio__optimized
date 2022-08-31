export const config = {
    bubbles: {
        startX: 200,
        startY: 200,
        interval: 20,
        small: {
            elegance: 30
        },
        big: {
            elegance: 50
        }
    },
    printing: {
        colors: ['orange', 'magenta', 'green'],
        phrases: [
            'Пока просто фразы',
            'Заглушки',
            'Потом заменить',
        ],
        intervals: {
            printing: 100,
            onComplete: 3000,
            erasing: 40,
            onEmpty: 1000
        }
    }
}