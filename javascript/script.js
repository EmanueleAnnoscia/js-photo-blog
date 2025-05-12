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
         const {title, url} = resp;
         template += `<div class="col">
                <div class="card">
                    <div class="img-container">
                        <img src="${url}" alt="">
                    </div>
                    <h3>${title}</h3>
                    <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda, ipsum doloremque, provident illo natus praesentium doloribus quas, iusto quae deleniti officiis inventore ipsa libero! Itaque laboriosam eligendi dicta modi.</P>
                </div>
            </div>`

     })

     rowElem.innerHTML = template;
})