var forHim = JSON.parse(localStorage.getItem("forHim"))
document.getElementsByClassName(".sMImages")
showallProducts(); 

function showallProducts(){
    let maindiv = document.getElementById("sMImages")
 maindiv.innerHTML = null 
    forHim.forEach(function(ele){
        let div = document.createElement('div');
        let div1 = document.createElement('div');
            div1.setAttribute("class", "im");
        let image = document.createElement('img');
        let name = document.createElement('p');
            name.setAttribute("class","sMIName")
        let pPrice = document.createElement('p');
            pPrice.setAttribute("class","sMIPrice")
        image.src = ele.image_fr;
        name.innerText = ele.name;
        pPrice.innerText = "M.R.P ₹ " + ele.price;
        div.addEventListener("click",function(){
            singleProduct(ele)
        } )
        div1.append(image);
        div.append(div1, name, pPrice);
        maindiv.append(div);
    });
}

function sort(){
    let selected = document.querySelector("#select").value;
    if (selected === "p"){
        forHim = JSON.parse(localStorage.getItem("forHim"));
        showallProducts(forHim);
    }
    else if(selected === "LtH"){
        forHim.sort(function(a, b){
            return a.price - b.price;
        })
        console.log(Number(forHim[0].price));
        console.log(forHim);
         showallProducts();
    }
    else if(selected === "HtL"){
        forHim.sort(function(a, b){
            return b.price - a.price;
        })
        console.log(forHim);
         showallProducts();
    }
}
function singleProduct(ele){
    console.log(ele);
  let  singleProductElement = [];
    singleProductElement.push(ele);
    localStorage.removeItem("SingleProduct");
    localStorage.setItem("SingleProduct", JSON.stringify(singleProductElement));
    window.location.href = "demopro.html";
}

