
let apikey = "33d01b96f43740feb6fa26038bd3195e";
let mainPart = document.querySelector(".mainContainer");
let inputvalue = document.querySelector("#inputbar");
let searchbutton = document.querySelector("#searchbutton");
let obj = [];

window.addEventListener("load", async () => {
  let newsObj = await fetchNews("india");

   console.log(newsObj)

  screenUpadate(newsObj.articles);
})

async function fetchNews(query) {
  let newsObject = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-09-24&sortBy=publishedAt&apiKey=33d01b96f43740feb6fa26038bd3195e`);

  let obj = await newsObject.json();

  return obj;
}
async function callapi(query){
  let newsObj = await fetchNews(query);

 // console.log(newsObj)

 screenUpadate(newsObj.articles);
}

searchbutton.addEventListener("click" , () =>{
  console.log(inputbar.value);
  callapi(inputbar.value)

  inputbar.value="";
})



function screenUpadate(obj) {

  mainPart.innerHTML="";
  console.log(obj);

  for (let i = 0; i < obj.length; i++) {

    let currObj = obj[i];

    let title = currObj.title;
    let des = currObj.description;
    let imageLink = currObj.urlToImage;
    let newsurl = currObj.url;

    let childEle = document.createElement('div');
    childEle.innerHTML = `<div class="card height" style="width: 18rem;">
        <img class="card-img-top" src="${imageLink}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${des}</p>
          <a target="_blank" href="${newsurl}" class="btn btn-primary">Read Here </a>
        </div>
      </div>`;

    mainPart.appendChild(childEle);
  }
}