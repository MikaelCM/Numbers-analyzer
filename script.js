let txtNumber = document.querySelector("#txtnumber")
let array = []
let select = document.querySelector("#select")
let result = document.querySelector("#resultado")

function addToArray() {
    let number = Number(txtNumber.value)

    if (txtNumber.value.length == 0) {
        alert("Insira um valor")

    } else if (txtNumber.value.length > 3 || number > 100) {
        alert("Valor ultrapassou 100")

    } else if (number < 1) {
        alert("Valor abaixo de 1.")

    } else if (array.includes(number)) {
        alert("Valor já encontrado na lista")

    } else {
        array.push(number)
        let option = document.createElement('option')
        select.appendChild(option)
        option.innerText = `Valor ${number} adicionado.`
        
    }

    txtNumber.focus()
    txtNumber.value = ""
}

function finish() {
    let number = Number(txtNumber.value)

    if (array.length == 0) {
        alert("Adicione um valor antes de finalizar!")

    } else {
        const total = array.length
        const largest = Math.max(...array)
        const smallest = Math.min(...array)
        let sum = 0;


        for(let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        
        const average = sum / total

        if (array.length == 1) {
            result.innerHTML = `<p>Ao todo, temos ${total} número cadastrado</p>`
            result.innerHTML += `<p>O maior valor informado foi ${largest}</p>`
            result.innerHTML += `<p>O menor valor informado foi ${smallest}</p>`
            result.innerHTML += `<p>Somando todos os valores, temos ${sum}</p>`
            result.innerHTML += `<p>A média dos valores digitados é ${average}</p>`

        } else {
            result.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`
            result.innerHTML += `<p>O maior valor informado foi ${largest}</p>`
            result.innerHTML += `<p>O menor valor informado foi ${smallest}</p>`
            result.innerHTML += `<p>Somando todos os valores, temos ${sum}</p>`
            result.innerHTML += `<p>A média dos valores digitados é ${average}</p>`
        }
    }
}