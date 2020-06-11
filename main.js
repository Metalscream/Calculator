document.addEventListener("DOMContentLoaded",()=>{
    let elements = document.getElementsByTagName("td")
    let result = ""
    let output = document.getElementsByClassName("output")[0]
    let integer_one = ""
    let operator = ""
    let integer_two = ""

    let addToResult = value => {
        if(integer_one == "" && value == '-'){
            integer_one += value
            result += integer_one
        }
        else if(integer_one == "-" && !isNaN(value)){
            integer_one += value
            result += integer_one
        }else if(integer_one !== "" && isNaN(value)){
            operator = value
            result += operator
        }else if(operator !== '' && value == '-' && integer_two == ""){
            integer_two += value
            result += integer_two
        }else if(integer_two == '-' && !isNaN(value)){
            integer_two += value
            result += integer_two
        }
        // if(result)
        // if((result.length == 0 && (value == "/" || value == "*")) || result.length > 15)return
        // if(isNaN(value) && checkOperatorsInResult()){
        //     equals()
        // }
        // {
        //     integer_two += value
        // }
        // else(operator.length == 0 && isNaN(value))
        // {
        //     operator += value
        // }
     
    }

    let updateOutput = () => {
        console.log(result)
        console.log(integer_one)
        console.log(operator)
        console.log(integer_two)
        output.innerHTML = result
    }

    let cancel = () => {
        result = ""
    }

    let deleteASymbol = () => {
        if(result.length!=0){
            let result_array = result.split("")
            result_array.pop()
            result = result_array.join("")
        }else{
            return
        }
    }

    let equals = () => {
        if(result.includes("+"))
            {
                result = result.split("+")
                result = addition(result[0], result[1])
            }
            else if(result.includes("-"))
            {   
                result = result.split("-")
                result = substraction(result[0], result[1])
            }
            else if(result.includes("*"))
            {
                result = result.split("*")
                result = multiply(result[0], result[1])
            }
            else if(result.includes("/"))
            {
                result = result.split("/")
                result = division(result[0], result[1])
            }
            else
            {
                alert("sorry, output doesnt include any of the four operators")
            }
    }

    let addition = (a, b) => {
        return Number(a) + Number(b)
    }

    let substraction = (a, b) => {
        return Number(a) - Number(b)
    }

    let multiply = (a, b) => {
        if(Number(a) == 0 || Number(b) == 0) return 0
        return Number(a) * Number(b)
    }

    let division = (a, b) => {
        if(Number(b) == 0)
        {
            alert("Division by zero is not an option")
            return ""
        }
        else(Number(a) == 0)
        {
            return 0
        }
        return Number(a) / Number(b)
    }

    let checkOperatorsInResult = () => {
        if(result.includes("+") || result.includes("-") || result.includes("*") || result.includes("/")){
            return true
        }
        return false
    }

    for(let i = 0; i < elements.length; i++){
        let elem = elements[i]
        if(elem.classList.value == "extraButtons" && elem.id == "delete")
        {
            elem.addEventListener("click", function(event){
                deleteASymbol()
                updateOutput()
            })
            
        }
        else if(elem.classList.value == "extraButtons" && elem.id == "cancel")
        {
            elem.addEventListener("click", function(event){
                cancel()
                updateOutput()
            })
            
        }
        else if(elem.classList.value == "extraButtons" && elem.id == "equals")
        {
            elem.addEventListener("click", function(event){
                equals()
                updateOutput()
            })
            
        }
        else
        {
            elem.addEventListener("click", function(event){
                addToResult(event.target.textContent)
                updateOutput()
            })
        }
        
    }
})