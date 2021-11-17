//Завдання 1
function readNumber() {

    let num

    do {
        num = prompt("Введите число")
    } while (!isFinite(num)) 

    if (num == '' || num == null) {
      return null
    }

    return +num;
}

alert(`Число: ${readNumber()}`)

//Завдання 2
function random(min, max) {
    return Math.random() * (max - min) + min;
}

alert(`Рандомное число: ${random(1, 10).toFixed(1)}`)

//Завдання 3
function sum() {

    let num1 = +prompt("Введите первое число", 0)
    let num2 = +prompt("Введите второе число", 0)

    let sum = num1 + num2
    return sum
}
  
alert(`Сумма = ${sum()}`)