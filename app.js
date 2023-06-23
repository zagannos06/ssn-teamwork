// ?  selectors
const button = document.querySelector('.validate')
const textInput = document.querySelector('.text')
const outcome = document.querySelector('.check')

const message = document.querySelector('#validation')



// ? eventlistener

button.addEventListener('click',() => {
    let ssn = textInput.value.trim()

    let arraySsn = [...ssn]

    if(ssn.length === 11) {
    
        let withoutLetters = arraySsn.filter( s => !isNaN(s))
        console.log(withoutLetters);

        if(withoutLetters.length === 9) {
            ssn.charAt(3) === '-' && ssn.charAt(6) === '-' ? gecerli(ssn) : gecersiz()
        }
        else{
            gecersiz()
        }
        
    }
    else {
        gecersiz();
    }
    textInput.value = ''
})






// const numberKontrol = (i) =>{

//     return !isNaN(i)
// }


const gecerli = (ssn) => {
    console.log('gecerli');
    message.innerHTML = `Entered SSN (${ssn}) is valid.`
}

const gecersiz = (ssn)=> {
    console.log('gecersiz');
    message.innerHTML = 'ssn must be 11 character long (9 numbers and 2 hypens)'
}
