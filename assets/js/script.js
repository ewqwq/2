const square = document.getElementById('square');
const input = document.getElementById('input');

//(/(\d+%|\D+)/) - это регулярное выражение для разделения строки на части на основе заданных шаблонов.
// / - Это обозначает начало и конец регулярного выражения.
// \d+% - Это шаблон, который ищет последовательность символов, начиная с числового значения (\d+), за которым следует знак процента %. Это используется для поиска значений типа "50%", "25%", и т.д.
// | - Это символ "или", который позволяет выбирать один из двух вариантов.
// \D+ - Это шаблон, который ищет последовательность символов, не являющихся числами (\D+). Это используется для поиска значений, таких как "red", "green", "blue" и т.д.
input.addEventListener('input', function() {
    const value = this.value.trim().toLowerCase();
    const parts = value.split(/(\d+%|\D+)/).filter(Boolean);
    
    let borderRadius = '0';
    let color = 'black';
    //parts массив что содержит все части строки после ее разделения с помощью регулярного выражения /(\d+%|\D+)/.
    parts.forEach(part => {
        if (part.includes('%')) {
            borderRadius = part;
        } else if (part === 'red' || part === 'green' || part === 'blue') {
            color = part;
        }
    });

    if (color === 'red' || color === 'green' || color === 'blue') {
        square.style.borderRadius = borderRadius;
        square.style.backgroundColor = color;
    } else {
        square.style.borderRadius = borderRadius;
        square.style.backgroundColor = '';
    }
});