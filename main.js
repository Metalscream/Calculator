document.addEventListener("DOMContentLoaded", ()=>{
    let output = document.getElementsByClassName("output")[0]
    let buttons = document.getElementsByTagName("td")
    let firstNum = ""
    let operator = ""
    let secondNum = ""

    let addToOutput = value => {
        if(firstNum.length > 10){
            alert("A number can't exceed 10 symbols")
            return
        }else if(secondNum.length > 10){
            alert("A number can't exceed 10 symbols")
            return
        }else{
            if(!isNaN(value) && operator.length == 0){
                firstNum += value
                output.innerHTML = firstNum
            }
            else if(isNaN(value))
            {
                if(firstNum.length == 0 && value == "-"){
                    firstNum = value
                    output.innerHTML = firstNum
                }else if(!firstNum.includes("-") && firstNum.length > 0 && isNaN(value) || firstNum.includes("-") && firstNum.length > 1 && isNaN(value)){
                    operator = value
                    output.innerHTML = firstNum + " " + operator
                }else{
                    alert("Please enter the first number")
                }
            }
            else if(firstNum.length > 0 && operator.length == 1){
                secondNum += value
                output.innerHTML = firstNum + " " + operator + " " + secondNum
            }
            console.log(firstNum)
            console.log(operator)
            console.log(secondNum)
        }
    }

    let del = value => {
        output.innerHTML = output.innerHTML.slice(0, -1)
        firstNum = firstNum.slice(0, -1)
    }

    let clear = value => {
        output.innerHTML = ""
        firstNum = ""
        operator = ""
        secondNum = ""
    }

    let addition = (a, b) => {
        output.innerHTML = Number(a) + Number(b)
        firstNum = (Number(a) + Number(b)).toString()
        operator = ""
        secondNum = ""
    }

    let subtraction = (a, b) => {
        output.innerHTML = Number(a) - Number(b)
        firstNum = (Number(a) - Number(b)).toString()
        operator = ""
        secondNum = ""
    }

    let multiply = (a, b) => {
        if(Number(a) == 0 || Number(b) == 0){
            output.innerHTML = 0
            firstNum = "0"
            operator = ""
            secondNum = ""
        }else{
            output.innerHTML = Number(a) * Number(b)
            firstNum = (Number(a) * Number(b)).toString()
            operator = ""
            secondNum = ""
        }
    }

    let division = (a, b) => {
        if(Number(b) == 0)
        {
            output.innerHTML = "Division by zero"
            firstNum = ""
            operator = ""
            secondNum = ""
        }
        else(Number(a) == 0)
        {
            output.innerHTML = 0
            firstNum = "0"
            operator = ""
            secondNum = ""
        }
            output.innerHTML = Number(a) / Number(b)
            firstNum = (Number(a) / Number(b)).toString()
            operator = ""
            secondNum = ""
    }

    let equals = value => {
        if(operator == "+")
            {
               addition(firstNum,secondNum)
            }
            else if(operator == "-")
            {   
                subtraction(firstNum, secondNum)
            }
            else if(operator == "/")
            {   
                division(firstNum, secondNum)
            }
            else if(operator == "*")
            {   
                multiply(firstNum, secondNum)
            }
            else
            {
                alert("Your Equals func has an error or you are trying to equal nothing")
            }
    }

    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].classList.value == "extraButtons"){
            if(buttons[i].id == "delete"){
                buttons[i].addEventListener("click", ()=>{
                    del()
                })
            }else if(buttons[i].id == "clear"){
                buttons[i].addEventListener("click", ()=>{
                    clear()
                })
            }else if(buttons[i].id == "equals"){
                buttons[i].addEventListener("click", ()=>{
                    equals()
                })
            }else{
                console.log("couldnt find id of extra button or something")
            }
        }
        else if(buttons[i].classList.value == "operator"){
            if(buttons[i].id == "add"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        output.innerHTML = (Number(firstNum) + Number(secondNum)).toString()
                        firstNum = output.innerHTML
                        operator = "+"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else if(buttons[i].id == "subtract"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        output.innerHTML = (Number(firstNum) - Number(secondNum)).toString()
                        firstNum = output.innerHTML
                        operator = "-"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else if(buttons[i].id == "divide"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        output.innerHTML = (Number(firstNum) / Number(secondNum)).toString()
                        firstNum = output.innerHTML
                        operator = "/"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else{
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        output.innerHTML = (Number(firstNum) * Number(secondNum)).toString()
                        firstNum = output.innerHTML
                        operator = "*"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }
        }
        else
        {
            buttons[i].addEventListener("click", e=>{
                addToOutput(e.target.innerHTML)
            })
        }
    }
})