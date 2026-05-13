const productList = [
    { name: "Gấu Bông Kitty", price: "210.000 VNĐ", status: "Đang về hàng", img: "../assets/images/2.jpg" },
    { name: "Gấu Bông Cá Mập", price: "120.000 VNĐ", status: "Còn khoảng 300 con", img: "../assets/images/3.jpg" },
    { name: "Thỏ Bông Teddy", price: "370.000 VNĐ", status: "Hết hàng", img: "../assets/images/4.jpg" },
    { name: "Mèo Bông Dinga", price: "260.000 VNĐ", status: "Số lượng ít", img: "../assets/images/5.jpg" },
    { name: "Chó Shiba Bông", price: "310.000 VNĐ", status: "Còn khoảng 20 con", img: "../assets/images/6.jpg" },
    { name: "Gấu bông Cushin", price: "220.000 VNĐ", status: "Hàng mới về", img: "../assets/images/7.jpg" },
    { name: "Gấu bông vịt LaLa", price: "260.000 VNĐ", status: "Số lượng ít", img: "../assets/images/8.jpg" },
    { name: "Khủng Long Xanh", price: "165.000 VNĐ", status: "Hết Hàng", img: "../assets/images/9.jpg" },
    { name: "Gấu bông Hà Mã", price: "199.000 VNĐ", status: "Hàng mới", img: "../assets/images/10.jpg" }
];
// ... (Giữ nguyên mảng productList của bạn)

function addProduct(item) {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");

    // ... (Các phần tạo ảnh giữ nguyên)

    const myInfo = document.createElement("div");
    myInfo.setAttribute("class", "product-info");

    // Tên sản phẩm
    const name = document.createElement("h3");
    name.textContent = item.name;

    // SỬA PHẦN NÀY: Thẻ link chi tiết
    const link = document.createElement("a");
    
    // Chúng ta gửi tên sản phẩm lên thanh địa chỉ: detail.html?name=Gấu Bông Kitty
    link.setAttribute("href", "detail.html?name=" + encodeURIComponent(item.name));
    link.textContent = "Xem chi tiết";
    
    myInfo.appendChild(name);
    // ... (appendChild giá và các thứ khác)
    myInfo.appendChild(link);

    myDiv.appendChild(myInfo);
    document.getElementById("product-list").appendChild(myDiv);
}