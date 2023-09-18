let iLineCounter = 0
const arrLines = [
    {"text": "0osxiag4xkli", "colour": "#9C9245", isVisible: true}
]
let isValid = true
let displayElement = document.getElementById("display-el")
/**
 * @returns fully randomised line of text with randomised colour and adds it to the HTML display element and
 * keeps track if the max number of entries have been added, max number being 9, disables the button if max number is
 * reach
 */
function addLineHandler () {
    iLineCounter ++
      if (iLineCounter < 10) {
        isValid = true
        if (isValid = true) {            
        }
        const para = document.createElement("p")
        const display = document.getElementById("display-el")
        para.style.color = generateRandomColour()
        const textNode =  document.createTextNode(generateRandomText()) 
        para.appendChild(textNode)
        display.append(para)    
  } 
     
 if (iLineCounter > 9) {
    alert("Max Number of Lines Reached")
    document.getElementById("AddLine").style.visibility = "hidden"
 }

arrLines.push(
    {text: completeLine, colour: completeColour, isVisible: true}
)
    }


/**
 * @returns randomly generated colour using hex codes
 */
    function generateRandomColour (){
        const colourHexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
       
        function getRandomColourCharacter (iColour) {
            return colourHexCharacters[iColour]
        }
    let colourRep = "#"
    for (let iColour = 0; iColour < 6; iColour ++) {
        const randomColour = Math.floor(Math.random() * colourHexCharacters.length)
        colourRep += getRandomColourCharacter(randomColour)
    }
    return colourRep
    }

    /**
     * @returns randomly generated text 
     */
    function generateRandomText () {
        let randomText = (Math.random()).toString(36).replace(".","")
        return randomText
    }

/**
 *  Removes the lastChild added to the HTML display element
 */
function removeLineHandler() {
  let display =document.getElementById("display-el")
  display.removeChild(display.lastElementChild)
  iLineCounter -- 
  document.getElementById("AddLine").style.visibility = "visible"
  //console.log(arrLines)
}

function ResetPage () {
 let resetPage =  document.getElementById("display-el")
 resetPage.innerHTML = ""
 iLineCounter = 0
 document.getElementById("AddLine").style.visibility = "visible"
}

function restorePage() {
    i = 0
    let arrLastContent = ""
  
for (arrLastContent in arrLines) {
   arrLastContent = arrLines[arrLastContent]["text"]
}
   displayElement.textContent = arrLastContent
    document.getElementById("restore").style.visibility = "hidden"
    }     


function printArray() {
  for (arrCounter = 0; arrCounter < arrLines.length; arrCounter++) {
        loadArray()
  }  

}
 let arrCounter = 0
function loadArray () {

    let arrDisplay = document.getElementById("display-array")  
    const para = document.createElement("div")
    const textnode = document.createTextNode(arrLines[arrCounter]["text"])
    para.appendChild(textnode)
    arrDisplay.append(para)
}