// Replace YOUR_API_KEY with your actual API key
const items = [
  {
    "Name":"Java Chip Frappuccino",
    'img':"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100501.webp",
    "veg":"https://www.starbucks.in/assets/icon/veg.svg",
    "Price": 351.75,
    "size":"TALL(354 ML), 392 kcal",
    }, 
    {
      "Name":"Cold coffee",
      'img':'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/105468.webp',
      "veg":"https://www.starbucks.in/assets/icon/veg.svg",
      "Price": 351.75,
      "size":"TALL(354 ML), 354 kcal",
    },
    {
        "Name":"Vanilla Sweet Cream Cold Brew",
        'img':'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/105000.webp',
        "veg":"https://www.starbucks.in/assets/icon/veg.svg",
        "Price": 383.25,
        "size":"TALL(354 ML), 63 kcal",
    }, 
    {
          "Name":"Signature Hot Chocolate",
          'img':'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100447.webp',
          "veg":"https://www.starbucks.in/assets/icon/veg.svg",
          "Price": 278.25,
          "size":"SHORT(237 ML), 285 kcal",
    },
    {
      "Name":"Caffe Latte",
      'img':'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100377.webp',
      "veg":"https://www.starbucks.in/assets/icon/veg.svg",
      "Price": 273.00,
      "size":"SHORT(237 ML), 104 kcal",
    }, 
]

let menu = document.getElementById('menu-card')

  for(var i=0; i<items.length;i++){
     menuitems = items[i]
    //  console.log(menuitems)
  menu.innerHTML += `  <div class="full-card">
  <div id="card">
    <div>
      <img class="coldc" src='${menuitems.img}' alt="" />
    </div>
    <div>
      <img class="veg" src=${menuitems.veg} alt="" />
      <h4>${menuitems.Name}</h4>
      <span>${menuitems.size}</span>
    </div>
  </div>
  <div class="buttonprice">
    <p>${menuitems.Price}</p>
    <button>Add Item</button>
  </div>
</div>`
}

let card =document.getElementsByClassName('full-card');
let leftbtn = document.getElementById('slideLeft')
let rightbtn = document.getElementById('slideright')

let cardItem = Math.ceil(card.length/3)
let l =0;
let movePer = 32;
let maxMove = 64;

rightbtn.style.opacity=5;
let right_mover = () =>{
  l = l+ movePer;
  console.log(l)
  // if(card ==1){
  //   l=0;
  // }
  if(l==maxMove || l>maxMove){
    rightbtn.style.opacity=0.35;
  }
  
  for(let i of card){
    if(l > maxMove) {
      l =l -movePer
    }
     i.style.left = '-' + l + '%'; 
     leftbtn.style.opacity = 5;
    }
  }

let left_mover = ()=>{
  l=l - movePer;
  if(l<=0){
    l =0;
    leftbtn.style.opacity= 0.35;
  }
  for(let i of card){
    if(cardItem > 1){
      i.style.left = '-' + l + '%'
    }
    rightbtn.style.opacity =5;
  }
}

leftbtn.onclick= ()=>{left_mover()}
rightbtn.onclick= ()=>{right_mover()}