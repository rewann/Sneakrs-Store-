const wrapper = document.querySelector(".sliderWrapper");
const menuitems = document.querySelectorAll(".menuitem");

 document.querySelector(".git initmenuitem").innerHTML = "I have changed!"; 

const products = [
  {
    id: 1,
    title: "Roro",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./assets/air.png",
      },
      {
        code: "darkblue",
        img: "./assets/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./assets/jordan.png",
      },
      {
        code: "green",
        img: "./assets/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./assets/blazer.png",
      },
      {
        code: "green",
        img: "./assets/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./assets/crater.png",
      },
      {
        code: "lightgray",
        img: "./assets/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./assets/hippie.png",
      },
      {
        code: "black",
        img: "./assets/hippie2.png",
      },
    ],
  },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuitems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // change the choosen product
    choosenProduct = products[index];
    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});



currentProductColors.forEach((color, index) => {
  color.addEventListener("click" , ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
})




const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
  payment.style.display = "flex";
})
close.addEventListener("click", ()=>{
  payment.style.display = "none";
})
