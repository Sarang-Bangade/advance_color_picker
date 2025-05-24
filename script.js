const colorInput = document.getElementById('colorInput')
const colorCode = document.getElementById('colorCode')
const complememtryContainer = document.getElementById('complememtryContainer')
const copyButton = document.getElementById('copyButton')
const saveColorButton = document.getElementById('saveColorButton')
const favouritesContainers = document.getElementById('favouritesContainers')


colorInput.addEventListener('input', ()=>{

    const selectedValue = colorInput.value
    console.log(selectedValue);
    
    updateColorDisplay(selectedValue);
    showComplementryColor(selectedValue);

})

function updateColorDisplay(color){

    colorCode.textContent = color;
    colorCode.style.color = color;

}

function showComplementryColor(color){

    const ComplementryColor = getComplementryColor(color)
    complememtryContainer.innerHTML = ""; //clear the previous color

    ComplementryColor.forEach((compcolor)=>{

        const colorPreviewBox = document.createElement('div')
        colorPreviewBox.classList.add('color-preview-box')
        colorPreviewBox.style.backgroundColor = compcolor
        complememtryContainer.appendChild(colorPreviewBox)
    })

}

function getComplementryColor (color){
    const base = parseInt(color.slice(1), 16)
    const complement = (0xFFFFFF ^ base).toString(16).padStart(6,'0')
    return [`#${complement}`]
}


copyButton.addEventListener('click', ()=> {

    navigator.clipboard
    .writeText(colorCode.textContent)
    .then(()=>{
        alert("Color Code Copied Successfully")
     })
    .catch((err)=>{
        console.err("Failed to Copy",err)
    }) 

})

saveColorButton.addEventListener('click',()=>{

    const color = colorCode.textContent
    addFavourirteColor(color)

})

function addFavourirteColor(color){
    
    const colorPreviewBox = document.createElement('div')
        colorPreviewBox.classList.add('color-preview-box')
        colorPreviewBox.style.backgroundColor = color
        favouritesContainers.appendChild(colorPreviewBox)
}