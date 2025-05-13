// prelevo il contenitore delle card

const rowElem = document.querySelector(".row")

// prelevo il bottone
const btnElem = document.querySelector("#close-btn")

// prelevo gli elementi dell'overlay
const overlayContainer = document.querySelector(".overlay-container");
const overlayImg = document.querySelector("#overlay-img");

// inizializzo una variabile con l'url dell'API
const urlAPI = "https://lanciweb.github.io/demo/api/pictures/"

// prelevo con axios 
axios.get(urlAPI).then((resp)=>{
    console.log(resp);
     const posts = resp.data;
     generazionePosts(posts)
     clickEvent(posts)
})



// applicazione dei post ai template
function generazionePosts(array){
    let template = ``;
     array.forEach((postSingle)=>{
        // console.log(resp)
         template += templateGen(postSingle); 
        // imgOver(postSingle)
     })

     rowElem.innerHTML = template;
}


// // creazione template
 function templateGen(postSingle){
     const {title, date, url} = postSingle;
     return `<div class="col">
                <div class="card">
                    <div class="img-container">
                        <img src="${url}" alt="">
                    </div>
                    <P>${date}</P>
                    <h3>${title}</h3>
                    <img src="img/pin.svg" alt="pin" id="pin-img">
                </div>
            </div>`
 }

// aggiungo l'evento la bottone di chiusura
btnElem.addEventListener("click", () => {
    overlayContainer.classList.add("d-none");
});

// funzione al click sulle card dell'overlay con data driven?
function clickEvent(posts){
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => { //card è la singola card che prendo dal DOM^
    // mentre index è la posizione della card nella lista posts siccome array 
        card.addEventListener("click", function() {
            const post = posts[index]; // Prendi il post corrispondente alla card cliccata
            overlayImg.src = post.url; 
            overlayContainer.classList.remove("d-none");
        });
    });
}


