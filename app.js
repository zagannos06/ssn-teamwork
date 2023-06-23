// ?  selectors
const button = document.querySelector('.validate')
const textInput = document.querySelector('.text')
const outcome = document.querySelector('.check')

const message = document.querySelector('#validation')



// ? eventlistener

button.addEventListener('click',()=>{
    let ssn = textInput.value.trim()

    let arraySsn = [...ssn]

    if(ssn.length ===11) {
    
        let withoutLetters = arraySsn.filter(s=> !isNaN(s))
        console.log(withoutLetters);

        if(withoutLetters.length ===9){
            ssn.charAt(3)==='-' && ssn.charAt(6)==='-'? gecerli() :gecersiz()
        }
        
    }
    else{
        console.log('smakldjsm');
    }
})






// const numberKontrol = (i) =>{

//     return !isNaN(i)
// }




