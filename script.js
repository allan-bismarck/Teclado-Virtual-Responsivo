letters = document.getElementsByClassName('letter')
let text = document.getElementById('text')
let isSmall = true
let singleshifter = false
let permanentshifter = false

lightTheme = document.getElementById('light')
const body = document.querySelector('body')
const h2 = document.querySelector('h2')
const h1 = document.querySelector('h1')
const box = document.getElementById('box')
const minibox = document.getElementById('minibox')
const textarea = document.querySelector('textarea')
const radio = document.querySelectorAll('radio')
const buttons = document.querySelectorAll('button')
const keyboard = document.getElementById('keyboard')
const enter_img = document.querySelector('#enter > img')
const shift_img = document.querySelector('#shift > img')
const backspace_img = document.querySelector('#backspace > img')
const footer = document.querySelectorAll('footer > p')

let showNumSpec = false
const numbers = document.getElementsByClassName('number')
const specials = document.getElementsByClassName('special')

function bghover(index) {
    buttons[index].style.backgroundColor = "var(--SecondaryColor)"
    buttons[index].style.color = "var(--TerColor)"
    if(lightTheme.checked) {
        switch(index) {
            case 32:
                backspace_img.src = "imagens/backspaceLightHover.png"
            break;
            case 43:
                enter_img.src = "imagens/enterLightHover.png"
            break;
            case 54:
                shift_img.src = "imagens/shiftLightHover.png"
            break;
            default:
            break;
        }
    } else {
        switch(index) {
            case 32:
                backspace_img.src = "imagens/backspaceDarkHover.png"
            break;
            case 43:
                enter_img.src = "imagens/enterDarkHover.png"
            break;
            case 54:
                shift_img.src = "imagens/shiftDarkHover.png"
            break;
            default:
            break;
        }
    }
    if(window.screen.width < 750) {
        
        buttons[index].style.backgroundColor = "var(--TerColor)"
        buttons[index].style.color = "var(--SecondaryColor)"
    }
}

function bgout(index) {
    buttons[index].style.backgroundColor = "var(--TerColor)"
    buttons[index].style.color = "var(--SecondaryColor)"
    if(lightTheme.checked) {
        switch(index) {
            case 32:
                backspace_img.src = "imagens/backspaceLight.png"
            break;
            case 43:
                enter_img.src = "imagens/enterLight.png"
            break;
            case 54:
                shift_img.src = "imagens/shiftLight.png"
            break;
            default:
            break;
        } 
    } else {
        switch(index) {
            case 32:
                backspace_img.src = "imagens/backspaceDark.png"
            break;
            case 43:
                enter_img.src = "imagens/enterDark.png"
            break;
            case 54:
                shift_img.src = "imagens/shiftDark.png"
            break;
            default:
            break;
        }    
    }
}

function bghoverMobile(index) {
    buttons[index].style.transition = 'background-color 0.15s'
    buttons[index].style.backgroundColor = 'blue'
    buttons[index].style.transition = 'background-color 0.15s'
    buttons[index].style.backgroundColor = 'var(--TerColor)'
}

function ChangeTheme() {
    body.style.backgroundColor = "var(--PrimaryColor)"
    h1.style.color = "var(--SecondaryColor)"
    h2.style.color = "var(--FourColor)"
    textarea.style.backgroundColor = "var(--TerColor)"
    box.style.backgroundColor = "var(--SecondaryColor)"
    keyboard.style.backgroundColor = "var(--PrimaryColor)"
    minibox.style.backgroundColor = "var(--SecondaryColor)"
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "var(--TerColor)"
        buttons[i].style.color = "var(--SecondaryColor)"
    }
    text.style.color = "var(--SecondaryColor)"
    footer[0].style.color = "var(--SecondaryColor)"
    footer[1].style.color = "var(--SecondaryColor)"
}

function AlternateTheme() {
    if(lightTheme.checked) {
        document.documentElement.style.setProperty('--buttonHover', 'green')
        document.documentElement.style.setProperty('--PrimaryColor', '#D0E5F2')
        document.documentElement.style.setProperty('--SecondaryColor', '#0A9EBF')
        document.documentElement.style.setProperty('--TerColor', '#F2F2F2')
        document.documentElement.style.setProperty('--FourColor', '#96CCD9')
        enter_img.src = "imagens/enterLight.png"
        shift_img.src = "imagens/shiftLight.png"
        backspace_img.src = "imagens/backspaceLight.png"
    } else {
        document.documentElement.style.setProperty('--buttonHover', 'white')
        document.documentElement.style.setProperty('--PrimaryColor', '#202529')
        document.documentElement.style.setProperty('--SecondaryColor', '#A1B4C4')
        document.documentElement.style.setProperty('--TerColor', '#32383D')
        document.documentElement.style.setProperty('--FourColor', '#4C555C')
        enter_img.src = "imagens/enterDark.png"
        shift_img.src = "imagens/shiftDark.png"
        backspace_img.src = "imagens/backspaceDark.png"
    }
    ChangeTheme()
}

function UpperCaseKeyBoard() {
    for(let i = 0; i < letters.length; i++) {
        letters[i].innerHTML = letters[i].innerHTML.toUpperCase()
    }
}

function LowerCaseKeyBoard() {
    for(let i = 0; i < letters.length; i++) {
        letters[i].innerHTML = letters[i].innerHTML.toLowerCase()
    }
}

function writer(char,) {
    if(isSmall) {
        text.value += char    
    } else {
        text.value += char.toUpperCase()
    }
    if(singleshifter) {
        isSmall = !isSmall
        singleshifter = !singleshifter
        LowerCaseKeyBoard()
    }
}

function PermanentShifter() {
    isSmall = !isSmall;
    permanentshifter = !permanentshifter
    if(singleshifter) {
        singleshifter = false
    }
    if(isSmall == true) {
        LowerCaseKeyBoard()
    } else {
        UpperCaseKeyBoard()
    }
}

function SingleShifter() {
    isSmall = !isSmall
    singleshifter = !singleshifter
    if(permanentshifter) {
        permanentshifter = false
        singleshifter = false
    }
    if(isSmall == true) {
        LowerCaseKeyBoard()
    } else {
        UpperCaseKeyBoard()
    }
}

function Delete() {
    text.value = text.value.substring(0, text.value.length - 1)
}

function showNumbersSpecials(index) {

    showNumSpec = !showNumSpec

    if(showNumSpec) {

        buttons[index].innerHTML = "abc"

        for(let i = 0; i < letters.length; i++) {
            letters[i].style.display = "none" 
        }

        document.getElementById('space').style.gridArea = "4 / 3 / 4 / 7"
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].style.display = "flex" 
        }

        for(let i = 0; i < specials.length; i++) {
            specials[i].style.display = "flex" 
        }

    } else {

        buttons[index].innerHTML = "1?#"

        for(let i = 0; i < numbers.length; i++) {
            numbers[i].style.display = "none" 
        }

        for(let i = 0; i < specials.length; i++) {
            specials[i].style.display = "none" 
        }

        document.getElementById('space').style.gridArea = "4 / 2 / 4 / 10"

        for(let i = 0; i < letters.length; i++) {
            letters[i].style.display = "flex" 
        }
    }
}

function showAll() {
    var screen = window.screen.width
    if(screen > 499 && screen <= 750) {

        size = buttons.length

        for(let i = 0; i < size; i++) {
            buttons[i].style.display = "flex"
        }

        document.getElementById('space').style.gridArea = "7 / 3 / 7 / 9"
        line4 = document.getElementsByClassName('line4')
        line4[0].style.margin = "0px 0px 0px 0px"
        line4[1].style.margin = "0px 0px 0px 0px"
        line4[2].style.margin = "0px 0px 0px 0px"
        buttons[63].style.display = "none"
    } else {
        document.getElementById('space').style.marginLeft = "0px"

        if(screen <= 499) {
            showNumSpec = !showNumSpec
            showNumbersSpecials(63)
            buttons[63].style.display = "flex"
        } else {
            document.getElementById('space').style.gridArea = "6 / 5 / 6 / 8"
        }
    }
}