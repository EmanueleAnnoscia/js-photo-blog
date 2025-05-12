// prelevo il contenitore delle card

const rowElem = document.querySelector(".row")

// inizializzo una variabile con l'url dell'API
const urlAPI = "https://lanciweb.github.io/demo/api/pictures/"

// prelevo con axios 
axios.get(urlAPI).then((resp)=>{
    console.log(resp);
     const posts = resp.data;
     let template = ``;
     posts.forEach((resp)=>{
         const {title, date, url} = resp;
         template += `<div class="col">
                <div class="card">
                    <div class="img-container">
                        <img src="${url}" alt="">
                    </div>
                    <P>${date}</P>
                    <h3>${title}</h3>
                    <img src="img/pin.svg" alt="pin" id="pin-img">
                </div>
            </div>`

     })

     rowElem.innerHTML = template;
})