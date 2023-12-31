const container = document.querySelector('.container-main');

for(let index = 0;index <50;index++){
    const colorContainerEl = document.createElement('div')
    colorContainerEl.classList.add('color-container')

    const colorCodeEl = document.createElement('span')
    colorCodeEl.classList.add('color-code')

    colorContainerEl.appendChild(colorCodeEl)

    const copyButtonEl = document.createElement('button')
    copyButtonEl.innerText = 'Copy'
    copyButtonEl.setAttribute('onClick',`copyColorText(${index})`)
    colorContainerEl.appendChild(copyButtonEl)

    container.appendChild(colorContainerEl)
}

function randomColor(){
    const chars='0123456789abcdef'
    const colorCodeLength = 6;
    let colorCode=''

    for(let i=0;i<colorCodeLength;i++){
        const randomNum = Math.floor(Math.random() * chars.length)
        colorCode = colorCode + chars.substring(randomNum,randomNum+1)
    }
    return colorCode
}

const colorContainerEls = document.querySelectorAll('.color-container')

function generateColors(){
    for(let i=0;i<colorContainerEls.length;i++){
        const colorContainerEl = colorContainerEls[i]

        const newColorCode = randomColor()
        const colorCodeEl = colorContainerEl.querySelector('.color-code')
        colorContainerEl.style.backgroundColor = '#' + newColorCode
        colorCodeEl.innerText= '#' + newColorCode
    }

}

generateColors()


function copyColorText(index){
    let color = colorContainerEls[index].querySelector('.color-code').innerHTML
    navigator.clipboard.writeText(color)
    .then(()=>{
        alert('copied text' + '.')
    })
    .catch(()=>{
        console.log('not copied')
    })
}
