
document.addEventListener("DOMContentLoaded", ()=>{
    let output = document.getElementsByClassName("output")[0]
    let buttons = document.getElementsByTagName("td")
    let firstNum = ""
    let operator = ""
    let secondNum = ""

    let addToOutput = value => {
        if(firstNum.length > 14){
            alert("A number can't exceed 14 symbols")
            return
        }else if(secondNum.length > 14){
            alert("A number can't exceed 14 symbols")
            return
        }else{
            if(!isNaN(value) && operator.length == 0){
                firstNum += value
                output.innerHTML = firstNum
            }
            else if(isNaN(value))
            {
                if(!firstNum.includes(".") && value == "." && operator.length == 0 || firstNum.length == 0 && value == "-"){
                    firstNum += value
                    output.innerHTML = firstNum
                }else if(!firstNum.includes("-") && firstNum.length > 0 && isNaN(value) && !value == "." || firstNum.includes("-") && firstNum.length > 1 && isNaN(value) && !value == "." || firstNum.length > 0 && "+-/*".includes(value)){
                    operator = value
                    output.innerHTML = firstNum + " " + operator
                }else if(!secondNum.includes(value) && value == "." && operator.length == 1 || secondNum.length == 0 && value == "-"){
                    secondNum += value
                    output.innerHTML = firstNum + " " + operator + " " + secondNum
                }else{
                    console.log("Woopsy, what you are trying to do is illegal, pleace proceede according to common sense")
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

    let del = () => {
        if(operator.length == 0 && firstNum.length > 0){
            firstNum = firstNum.slice(0, -1)
        }else if(operator.length == 1 && secondNum.length == 0){
            operator = ""
        }else if(true){
            secondNum = secondNum.slice(0, -1)
        }else{
            console.log("Sorry, something went wrong with deleting last character");
            
        }
        output.innerHTML = firstNum + " " + operator + " " + secondNum
    }

    let clear = value => {
        output.innerHTML = ""
        firstNum = ""
        operator = ""
        secondNum = ""
    }

    let addition = (a, b) => {
        output.innerHTML = Number(parseFloat(Number(a)+Number(b)).toPrecision(14).toString()).toString()
        firstNum = output.innerHTML
        operator = ""
        secondNum = ""
    }

    let subtraction = (a, b) => {
        output.innerHTML = Number(parseFloat(Number(a)-Number(b)).toPrecision(14).toString()).toString()
        firstNum = output.innerHTML
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
            output.innerHTML = Number(parseFloat(Number(a)*Number(b)).toPrecision(14).toString()).toString()
            firstNum = output.innerHTML
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
        else if(Number(a) == 0)
        {
            output.innerHTML = 0
            firstNum = "0"
            operator = ""
            secondNum = ""
        }
        else
        {
            output.innerHTML = Number(parseFloat(Number(a)/Number(b)).toPrecision(14).toString()).toString()
            firstNum = output.innerHTML
            operator = ""
            secondNum = ""
        }
    }

    let oneX = (a) => {
        if(firstNum){
            output.innerHTML = Number(parseFloat(1/Number(a)).toPrecision(14).toString()).toString()
            firstNum = output.innerHTML
            operator = ""
            secondNum = ""
        }
    }
    
    let percent = (a, b) => {
        output.innerHTML = Number(parseFloat(Number(a)/100*Number(secondNum)).toPrecision(14).toString()).toString()
        firstNum = output.innerHTML
        operator = ""
        secondNum = ""
    }
    
    let root = (a, b) => {
        if(firstNum){
            output.innerHTML = Number(parseFloat(Math.sqrt(Number(firstNum))).toPrecision(14).toString()).toString()
            firstNum = output.innerHTML
            operator = ""
            secondNum = ""
        }
    }
    
    let power = (a) => {
        if(firstNum){
            output.innerHTML = Number(parseFloat(Math.pow(Number(firstNum), 2)).toPrecision(14).toString()).toString()
            firstNum = output.innerHTML
            operator = ""
            secondNum = ""
        }
    }
    
    let equals = () => {
        if(operator == "+" && secondNum.length > 0)
            {
               addition(firstNum,secondNum)
            }else if(operator == "-" && secondNum.length > 0){   
                subtraction(firstNum, secondNum)
            }else if(operator == "/" && secondNum.length > 0){   
                division(firstNum, secondNum)
            }else if(operator == "*" && secondNum.length > 0){   
                multiply(firstNum, secondNum)
            }else if(operator == "%" && secondNum.length > 0){   
                percent(firstNum, secondNum)
            }else{
                alert("Your Equals func has an error or you are trying to equal nothing")
            }
    }

    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].classList.value == "output"){
            continue
        }else if(buttons[i].classList.value == "extraButtons"){
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
        }else if(buttons[i].classList.value == "operator"){
            if(buttons[i].id == "add"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)+Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "+"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else if(buttons[i].id == "subtract"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)-Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "-"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else if(buttons[i].id == "divide"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)/Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "/"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else if(buttons[i].id == "oneX"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(1/Number(firstNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = ""
                        secondNum = ""
                    }else{
                        oneX(firstNum)
                    }
                })
            }else if(buttons[i].id == "percent"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)/100*Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "%"
                        secondNum = ""
                    }else{
                        addToOutput(e.target.innerHTML)
                    }
                })
            }else if(buttons[i].id == "root"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Math.sqrt(Number(firstNum))).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = ""
                        secondNum = ""
                    }else{
                        root(firstNum)
                    }
                })
            }else if(buttons[i].id == "power"){
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Math.pow(Number(firstNum), Number(secondNum))).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = ""
                        secondNum = ""
                    }else{
                        power(firstNum)
                    }
                })
            }else{
                buttons[i].addEventListener("click", e=>{
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)*Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
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
    document.addEventListener("keypress", e => {
        console.log(e.key)
        if("0123456789".includes(e.key)){
            addToOutput(e.key)
        }else{
            switch (e.key){
                case "+":
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)+Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "+"
                        secondNum = ""
                    }else{
                        addToOutput(e.key)
                    }
                case "-":
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)-Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "-"
                        secondNum = ""
                    }else{
                        addToOutput(e.key)
                    }
                case "/":
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)/Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "/"
                        secondNum = ""
                    }else{
                        addToOutput(e.key)
                    }
                case "*":
                    if(secondNum.length != 0){
                        firstNum  = Number(parseFloat(Number(firstNum)*Number(secondNum)).toPrecision(14).toString()).toString()
                        output.innerHTML = firstNum + " " + operator
                        operator = "*"
                        secondNum = ""
                    }else{
                        addToOutput(e.key)
                    }
            }
        }
    })
    document.addEventListener("keyup", e => {
        if(e.keyCode === 46){
            clear()
        }else if(e.keyCode === 8){
            del()
        }else if (e.keyCode === 13){
            equals()
        }
    })
})