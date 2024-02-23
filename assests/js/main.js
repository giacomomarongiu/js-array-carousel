console.log("Hello World");

//Creare un array con le nostre immagini (i nomi)
const slides =[
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]


// Aggiungere le immagini al nostro DOM
// Dichiaro una variabile e le assegno il valore dell'immagine da cui voglio parta la selezione
let imgShowedIndex = 0; //01.webp index

// Verifico di aver selezionato l'immagine correttamente
console.log(slides[imgShowedIndex]); // 01.webp

// Seleziono elemento della DOM a cui voglio aggiungere le immagini
const slidesElement = document.querySelector('.slides')

// Verifico di aver selezionato l'elemento correttamente
console.log(slidesElement); // slides on DOM

// Avvio un ciclio che mi permette di scorrere le immagini
for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    // Vedo cosa mi mostra
    console.log(slide); // Vedo selezionati i vari elementi del mio array
    
}