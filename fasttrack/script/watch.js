
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  var deal10 = document.getElementById("deal10");
  console.log(deal10);

 
let arr = JSON.parse(localStorage.getItem("SingleProduct"));
console.log(arr)
  document.getElementById("img1").src = arr[0].img1;
  document.getElementById("nameT").innerText = arr[0].name;
  document.getElementById("nameTl").innerText = arr[0].name;
  document.getElementById("priceT").innerText = "OFFER PRICE"+"     "+  "   "+"₹           "+ arr[0].price;
  document.getElementById("buy").innerText = "₹"+arr[0].price;
 
  

    function addtocart(){
      
      cartItems.push(arr[0]);
      localStorage.setItem("cart", JSON.stringify(cartItems))
      window.location.href = "./cart.html";
    }





  

