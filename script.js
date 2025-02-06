const alternatives = [
    {text:"", images:"img/cat-01.gif"},
    {text:"No digas eso por favor :(", images:"img/cat-02.gif"},
    {text:"Piénsalo de nuevo", images:"img/cat-03.gif"},
    {text:"Vamos, atrévete a un sí", images:"img/cat-04.gif"},
    {text:"Que el miedo no te detenga!!", images:"img/cat-05.gif"},
  ]
  const ohyes = {text:"Gracias por aceptar, Te amo muchisimo!! 💕Que sea el primero de muchos💕", images:"img/cat-yes.gif"}
  const cat = document.querySelector('.cat')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  
  let count = 0;
  
  function updateDisplay(item){
    cat.src = item.images
    text.innerHTML = item.text
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "Si"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'No'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })