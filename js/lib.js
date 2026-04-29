const productList = [
    { id:"001",name:"Gấu Bông Kitty",price:210.000,img:"../assets/images/.jpg", info:"Hàng Nhập"},
    { id:"002",name:"Gấu Bông Cá",price:170.000,img:"../assets/images/.jpg", info:"Việt Nam"},
    { id:"003",name:"Gấu Bông Doremon",price:250.000,img:"../assets/images/.jpg", info:"Hàng Loại 1"}
];
function addProduct(item)
{
     const myImage = document.createElement ("div");
     myImage.setAttribute("class", "product-image");
     const productImg = document.createElement ("img");
     productImg.setAttribute("src"," ../assets/images/2.jpg");
     productImg.setAttribute("alt", "Gấu Bông Kitty");
     myImage.appendChild(productImg); 
     myDiv.appendChild(myImage);

     const myInfo = document.createElement("div");
     myInfo.setAttribute ("class","product-info");
     const name = document.createElement ("h3");
     const nameText = document.createTextNode("Tên sản phẩm");
     name=appendChild (nameText); 

     const price = document.createElement("p");
     const pricetext = document. createTextNode("Giá: 100.000đ");
     price.appendChild(pricetext);

     const link = document.createElement("a");
     link.setAttribute("href", "#");
     const linkText = document.createTextNode("Xem chi tiết");
     link.appendChild(linkText);

     myInfo.appendchild (name);
     myInfo.appendChild(price);
     myInfo.appendchild(link);

     myDiv.appendChild (myInfo);
     const container = document.getElementById ("product-list");
     container.appendChild (myDiv);
}