console.log("Hello World");

//Creare un array con le nostre immagini (i nomi)
const slides = [
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
    // Aggiungo il codice al mio DOM per ogni immagine del mio array
    // Assegno a una variabile la struttura base da inserire nel DOM
    // Utilizzo l'operatore ? per aggiungere la classe active solo alla prima immagine
    let slideMUp = `<img class="${index === imgShowedIndex ? 'active' : ''}" src="./assests/img/${slide}" alt="">`
    // Utilizzo il metodo per aggiungere al DOM questa stringa di codice
    slidesElement.innerHTML += slideMUp;
    //Verifico se sto inserendo correttamente il tutto
    console.log(slideMUp); 
}

