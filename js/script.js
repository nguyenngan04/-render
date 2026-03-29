const products = [
    {name: "Adidas Samba", price: 2700000, img: "https://assets.adidas.com/images/w_940,f_auto,q_auto/a8797125db77484b9cb0ac3701606099_9366/GZ8346_09_standard.jpg"},
    {name: "Adidas Slide", price: 950000, img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c8f884613c9e4477bfc781c4658bdef9_9366/IG9285_05_standard.jpg"},
    {name: "Adidas Stand Smith", price: 2500000, img: "https://tse2.mm.bing.net/th/id/OIP.AKCcdasGdbfTnJthTS-5TQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
    {name: "Adidas Kids", price: 2400000, img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/7bdc037a36304600afe59edf5854c578_9366/JI4335_04_standard.jpg"}
];

function renderProducts() {
    const list = document.getElementById("productList");

    products.forEach(p => {
        list.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <p class="price">${p.price.toLocaleString()}đ</p>
                <p>${p.name}</p>
            </div>
        `;
    });
}

renderProducts();
// MỞ FORM
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function openRegister() {
    document.getElementById("registerModal").style.display = "block";
}

// ĐÓNG
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("registerModal").style.display = "none";
}

// ĐĂNG KÝ
function register() {
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Đăng ký thành công!");
    closeModal();
}

// ĐĂNG NHẬP
function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const savedUser = localStorage.getItem("user");
    const savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {
        alert("Đăng nhập thành công!");
        closeModal();
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}