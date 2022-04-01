letters = document.getElementsByClassName('letter')
let text = document.getElementById('text')
let isSmall = true
let singleshifter = false
let permanentshifter = false

lightTheme = document.getElementById('light')
body = document.querySelector('body')
h2 = document.querySelector('h2')
h1 = document.querySelector('h1')
box = document.getElementById('box')
minibox = document.getElementById('minibox')
textarea = document.querySelector('textarea')
radio = document.querySelectorAll('radio')
buttons = document.querySelectorAll('button')
keyboard = document.getElementById('keyboard')
enter_img = document.querySelector('#enter > img')
shift_img = document.querySelector('#shift > img')
backspace_img = document.querySelector('#backspace > img')
footer = document.querySelectorAll('footer > p')

let showNumSpec = false
numbers = document.getElementsByClassName('number')
specials = document.getElementsByClassName('special')

function bghover(index) {
    if(lightTheme.checked) {
        buttons[index].style.backgroundColor = "#78c5f125"
    } else {
        buttons[index].style.backgroundColor = "#ffffff2a"
    }
}

function bgout(index) {
    if(lightTheme.checked) {
        buttons[index].style.backgroundColor = "#F2F2F2"
    } else {
        buttons[index].style.backgroundColor = "#262626"
    }
}

function LightTheme() {
    body.style.backgroundColor = "#D0E5F2"
    h1.style.color = "#0A9EBF"
    h2.style.color = "#96CCD9"
    textarea.style.backgroundColor = "#F2F2F2"
    box.style.backgroundColor = "#0A9EBF"
    keyboard.style.backgroundColor = "#D0E5F2"
    minibox.style.backgroundColor = "#0A9EBF"
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#F2F2F2"
        buttons[i].style.color = "#0A9EBF"
    }
    text.style.color = "#0A9EBF"
    enter_img.src = "imagens/enterLight.png"
    shift_img.src = "imagens/shiftLight.png"
    backspace_img.src = "imagens/backspaceLight.png"
    footer[0].style.color = "#0A9EBF"
    footer[1].style.color = "#0A9EBF"
}

function DarkTheme() {
    body.style.backgroundColor = "#262626"
    h1.style.color = "white"
    h2.style.color = "#A6A6A6"
    textarea.style.backgroundColor = "#262626"
    box.style.backgroundColor = "#0D0D0D"
    keyboard.style.backgroundColor = "#8C2769"
    minibox.style.backgroundColor = "#0D0D0D"
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#262626"
        buttons[i].style.color = "white"
    }
    text.style.color = "white"
    enter_img.src = "imagens/enterDark.png"
    shift_img.src = "imagens/shiftDark.png"
    backspace_img.src = "imagens/backspaceDark.png"
    footer[0].style.color = "white"
    footer[1].style.color = "white"
}

function AlternateTheme() {
    if(lightTheme.checked) {
        LightTheme()
    } else {
        DarkTheme()
    }
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

function writer(char) {
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

        document.getElementById('space').style.gridArea = "4 / 2 / 4 / 9"

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