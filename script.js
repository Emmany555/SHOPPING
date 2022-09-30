
const products = [

{  
  name:'Spaghetti', 
  image:'https://images.app.goo.gl/Dpr4cYQqaHnP5ig6A',  
  price:'300',
  id:'1',
  stock:'60',
  contact:'08124494667',  
},

{  
  name:'Rice', 
  image:'https://images.app.goo.gl/4V8dvD7rNjDZKec59',  
  price:'34500',
  id:'1',
  stock:'8',
  contact:'08124494667',  
},

{  
  name:'Rice', 
  image:'https://images.app.goo.gl/ix7JJM2UNt5HpApv5',  
  price:'33000',
  id:'1',
  stock:'8',
  contact:'08124494667',  
},


{  
  name:'Rice', 
  image:'https://images.app.goo.gl/KtYihR93n5m1ngiCA',  
  price:'35000',
  id:'1',
  stock:'8',
  contact:'08124494667',  
},

  {  
  name:'Rice', 
  image:'Static/specials-1.png',  
  price:'450000000000',
  id:'1',
  stock:'4748',
  contact:'08124494667',  
},
{  
  image:'Static/specials-1.png',  
  price:'45',
  id:'1',
  stock:'23',
  contact:'08124494667',  
},
{  
  image:'Static/specials-1.png',  
  price:'45',
  id:'1',
  stock:'23',
  contact:'08124494667',  
},
{  
  image:'Static/specials-1.png',  
  price:'45',
  id:'1',
  stock:'23',
  contact:'08124494667',  
},
{  
  image:'Static/specials-1.png',  
  price:'45',
  id:'1',
  stock:'23',
  contact:'08124494667',  
},
{  
  image:'Static/specials-1.png',  
  price:'45',
  id:'1',
  stock:'23',
  contact:'08124494667',  
},
{  
  image:'Static/specials-1.png',  
  price:'45',
  id:'1',
  stock:'2836',
  contact:'08124494667',  
},
]

let htmlstring ='';


// console.log(products[0].image)
 
function display(){
  productHtml = document.querySelector('.row')
for (let i=0; i < products.length; i++) {
htmlstring += ` 
<div class="col">

    <div class="card" id="card">
      <img  src="${products[i].image}" class="product-img"
        src="">
      
      <div class="card-body">
        <h3 class="card-name">
            ${products[i].name}
        </h3>
        <h4 class="card-price">
        Price:N${products[i].price}
        </h4>
        <h4 class="stock">
          Stock: ${products[i].stock}
        </h4>
        <p class="contact" href="">
         📲@ ${products[i].contact}
        </>
        <br>
      </div>
    </div>
  
</div> `
  // console.log(products[i])
}
productHtml.innerHTML = htmlstring;
}

function search(){
let inputTextPlaceholder = document.querySelector('input')
let inputtext = document.querySelector('input').value
let input = inputtext.split(' ')
  console.log(inputtext)
for (let i=0; i<products.length; i++){

  // console.log(products[i].name)
  if (input[0] ==products[i].name){
    console.log(input[i])
  } 
  inputtext.replace
}




// console.log(inputtext)

}



// function contact() {
//   // e.preventdefault
  
//   // HOME SCREEN ITEMS
//   const contactbtn = document.querySelector('.contact')
//   let productname = document.querySelector('.card-name').textContent
//   let image = document.querySelector('.product-img').src
//   let price = document.querySelector('.card-price').textContent
//   let stock = document.querySelector('.stock').textContent


//   let space = document.querySelector('.space')
//   // CONTACT SCREEN ITEMS 
//   // let name = document.querySelector('#name').textContent
//   // let contPrice =document.querySelector('price1').textContent
//   // let contStock = document.querySelector('stock1').textContent
//   // let contImage =document.querySelector('.contimg').src
//   // let container = document.querySelector('.product')
  
//   // name = productname
//   // contImage = image
//   // contStock = stock
//   // contPrice = '7732798'
//   let string = `<div class="box" id="box">
//   <div class="top-box">
//     <div class="box-img">
//       <img class="contimg" src="" alt="Product Image">
//     </div>
//     <div class="name" >
//       <h2 id="name"></h2>
//     </div>
//     <div class="price" id="price">
//       <h3 id="price1">Price: NGN</h3>
//       <h3 id="stock1">Stock:</h3>
//     </div>
//       <br>  
//       <hr>
//     <div class="description">
//       <p></p>
//     </div>
//     <div class="seller-contact">
//       <p>Call or Whatsapp Seller: 08124494667 <h4></h4></p>
//     </div>
//     <br>
//   </div>`
//   space = string


//   document.write(price)
// }


