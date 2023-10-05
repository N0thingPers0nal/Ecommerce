let productsarray = [
  { id: 1, productname: "Watch", price: 12, photo: "/image/watch1.jpg" },
  { id: 2, productname: "Watch1", price: 120, photo: "/image/watch1.jpg" },
];
let cart = [];
let users = [
  { id: 1, name: "abc", email: "admin@1.com", password: "abc12345" },
  { id: 2, name: "abc", email: "user@1.com", password: "asdfghjk" },
];

//window actions
window.addEventListener("load", () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(productsarray));
  }
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (location.pathname == "/Ecommerce/login.html") {
    const emailref = document.getElementById("emailinput");
    const passwordref = document.getElementById("passwordinput");
    emailref.addEventListener("keyup", () => {
      if (emailref.value !== "") {
        emailref.classList.replace("is-invalid", "border-info");
      } else {
        emailref.classList.replace("border-info", "is-invalid");
      }
    });
    passwordref.addEventListener("keyup", () => {
      if (passwordref.value !== "") {
        passwordref.classList.replace("is-invalid", "border-info");
      } else {
        passwordref.classList.replace("border-info", "is-invalid");
      }
    });
  }
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  if (location.pathname == "/Ecommerce/index.html") {
    const nameref = document.getElementById("nameinput");
    const emailref = document.getElementById("emailinput");
    const passwordref = document.getElementById("passwordinput");
    const cpasswordref = document.getElementById("cpasswordinput");
    nameref.addEventListener("keyup", () => {
      if (nameref.value !== "") {
        nameref.classList.replace("is-invalid", "border-info");
      } else {
        nameref.classList.replace("border-info", "is-invalid");
      }
    });

    emailref.addEventListener("keyup", () => {
      if (emailref.value !== "") {
        emailref.classList.replace("is-invalid", "border-info");
      } else {
        emailref.classList.replace("border-info", "is-invalid");
      }
    });
    passwordref.addEventListener("keyup", () => {
      if (passwordref.value !== "") {
        passwordref.classList.replace("is-invalid", "border-info");
      } else {
        passwordref.classList.replace("border-info", "is-invalid");
      }
    });

    cpasswordref.addEventListener("keyup", () => {
      if (cpasswordref.value !== "") {
        cpasswordref.classList.replace("is-invalid", "border-info");
      } else {
        cpasswordref.classList.replace("border-info", "is-invalid");
      }
    });
  }
  if(sessionStorage.getItem("userid")){
  if (location.pathname === "/Ecommerce/admin/home.html") {
    adminhome();
  }
  if (location.pathname === "/Ecommerce/home.html") {
    home();
  }
  if (location.pathname === "/Ecommerce/cart.html") {
    cartpage();
  }
  if (location.pathname === "/Ecommerce/admin/edit.html") {
    edit();
  }
  if (location.pathname === "/Ecommerce/orders.html") {
    orderpage();
  }
  if (location.pathname === "/Ecommerce/admin/orders.html") {
    adminOrder();
  }} 
  else{
    location.replace("/Ecommerce/index.html")
  }
});

// random number for products
let pid = [];
const prandomid = () => {
  let a = Math.floor(Math.random() * 100);
  if (pid.includes(a) || a === 0) {
    prandomid();
    console.log(pid);
  } else {
    if (pid.length < 100) {
      pid.push(a);
      return a;
    }
  }
};

// random number for products
let uid = [];
const urandomid = () => {
  let a = Math.floor(Math.random() * 100);
  if (uid.includes(a) || a === 0) {
    urandomid();
  } else {
    if (uid.length < 100) {
      uid.push(a);
      return a;
    }
  }
};

// signup
const signup = () => {
  const nameref = document.getElementById("nameinput");
  const emailref = document.getElementById("emailinput");
  const passwordref = document.getElementById("passwordinput");
  const cpasswordref = document.getElementById("cpasswordinput");
  const errorRef = document.getElementById("error");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nameref.value == "") {
    errorRef.innerText = "Please enter name";
  } else if (emailref == "") {
    errorRef.innerText = "Please enter user email";
  } else if (!emailref.value.match(mailformat)) {
    errorRef.innerText = "Invalid email";
  } else if (passwordref == "") {
    errorRef.innerText = "Please enter Password";
  } else if (passwordref.value.length < 6) {
    errorRef.innerText = "Password minimum length is 6";
  } else if (passwordref.value.length > 12) {
    errorRef.innerText = "Password max length is 12";
  } else if (cpasswordref == "") {
    errorRef.innerText = "Enter Confirm Password";
  } else if (passwordref.value !== cpasswordref.value) {
    errorRef.innerText = "Password not Matched";
  } else if (passwordref.value == cpasswordref.value) {
    let user = JSON.parse(localStorage.getItem("users"));
    user.push({
      id: urandomid(),
      name: nameref.value,
      email: emailref.value,
      password: passwordref.value,
    });
    // console.log(users);
    localStorage.setItem("users", JSON.stringify(user));
    location.replace("Ecommerce/login.html");
  }
};

// Login
const login = () => {
  const emailref = document.getElementById("emailinput");
  const passwordref = document.getElementById("passwordinput");
  const errorRef = document.getElementById("error");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailref.value == "" || !emailref.value.match(mailformat)) {
    errorRef.innerText = "Please enter Email";
  } else if (passwordref == "") {
    errorRef.innerText = "Please enter Password";
  } else if (passwordref.value.length < 8 || passwordref.value.length > 12) {
    errorRef.innerText = "Password min and max length is 6.";
  } else {
    const checkemail = JSON.parse(localStorage.getItem("users")).find(
      (currentuser) =>
        currentuser.email === emailref.value &&
        currentuser.password === passwordref.value
    );
    if (!checkemail) {
      errorRef.innerText = "Please SignUp";
    } else {
      sessionStorage.setItem("userid", checkemail.id);
      if (checkemail.email.includes("admin")) {
        location.replace("/Ecommerce/admin/home.html");
      } else {
        location.replace("/Ecommerce/home.html");
      }
    }
  }
};

// Logout
const logout = () => {
  sessionStorage.removeItem("userid");
  location.replace("/Ecommerce/login.html");
};

// admin home page
const adminhome = () => {
  const homeProductRef = document.getElementById("addproducts");
  const products = JSON.parse(localStorage.getItem("products"));
  let display = "";
  for (let product of products) {
    display += `<div
    class="card rounded-4 mx-3 my-3 col-2 bg-primary-subtle p-0"
    style="width: 250px; height: 350px"
  >
      <img
        src="${product.photo}"
        class="img rounded-4"
        style="max-width: 350px; max-height: 250px"
      />
      <div class="card-body p-2">
       
        <div class="d-flex justify-content-around m-1">
        <h5 class="">${product.productname}</h5>
        <h5 class="">₹ ${product.price}</h5>
        </div>
        
        <div class="d-flex justify-content-around">
          <a href="/admin/edit.html"
            class="btn btn-primary mx-1"
            style="width: 120px"
            onclick="updateproduct(${product.id})"
            >Edit</a
          >
          <button
            class="btn btn-danger mx-1"
            style="width: 120px"
            onclick="deleteitems(${product.id})" 
            >Delete</button
          >
        </div>
      </div>
    </div>

  <!-- product end -->
  </div>
  </div>`;
  }
  homeProductRef.innerHTML = display;
};

// delete items in admin page
const deleteitems = (idno) => {
  const delproduct = JSON.parse(localStorage.getItem("products"));
  const a = delproduct.filter((item) => item.id !== idno);
  localStorage.setItem("products", JSON.stringify(a));
  adminhome();
};

// add to cart
const add = () => {
  const productnameref = document.getElementById("productname");
  const priceref = document.getElementById("price");
  const imageref = document.getElementById("image");
  const addsuccessRef = document.getElementById("addsuccess");
  let addproduct = JSON.parse(localStorage.getItem("products"));
  if (sessionStorage.getItem("userid")) {
    if (
      productnameref.value == "" ||
      priceref.value == "" ||
      imageref.value == ""
    ) {
      errorRef.innerText = "Some fields are empty";
    } else {
      addproduct.push({
        id: prandomid(),
        productname: productnameref.value,
        price: priceref.value,
        photo: imageref.value,
      });
    }
    localStorage.setItem("products", JSON.stringify(addproduct));
    addsuccessRef.innerText = "Products added successfully";
    setTimeout(() => {
      location.href = "/Ecommerce/admin/home.html";
    }, 1000);
    adminhome();
  } else {
    location.replace("/Ecommerce/login.html");
  }
};

const updateproduct = (id) => {
  let edit = [];
  edit.push(id);
  sessionStorage.setItem("editproduct", edit);
};

// edit items
edit = () => {
  const id = sessionStorage.getItem("editproduct");
  const products = JSON.parse(localStorage.getItem("products"));
  const editproduct = products.find((product) => product.id === parseInt(id));
  const productnameRef = document.getElementById("productname");
  const priceRef = document.getElementById("price");
  const imageRef = document.getElementById("image");
  priceRef.value = editproduct.price;
  productnameRef.value = editproduct.productname;
  imageRef.value = editproduct.photo;
};

const edititem = () => {
  const id = sessionStorage.getItem("editproduct");
  const editsuccessRef = document.getElementById("editssuccess");
  const productnameref = document.getElementById("productname");
  const priceref = document.getElementById("price");
  const imageref = document.getElementById("image");
  const errorRef = document.getElementById("error");
  let addproduct = JSON.parse(localStorage.getItem("products"));
  if (sessionStorage.getItem("userid")) {
    if (
      productnameref.value == "" ||
      priceref.value == "" ||
      imageref.value == ""
    ) {
      errorRef.innerText = "Some fields are empty";
    } else {
      addproduct = addproduct.map((item) => {
        if (item.id == id)
          return {
            ...item,
            productname: productnameref.value,
            price: priceref.value,
            photo: imageref.value,
          };
        else return item;
      });
    }
    localStorage.setItem("products", JSON.stringify(addproduct));
    editsuccessRef.innerText = "Product edited successfully";
    setTimeout(() => {
      location.href = "/Ecommerce/admin/home.html";
    }, 1000);

    adminhome();
  } else {
    location.replace("/Ecommerce/login.html");
  }
};

// user home page

const home = () => {
  const homeproductref = document.getElementById("homeproducts");
  const products = JSON.parse(localStorage.getItem("products"));
  let display = "";
  for (i of products) {
    display += `<div
    class="card rounded-4 mx-3 my-3 col-2 bg-primary-subtle p-0"
    style="width: 250px; height: 350px"
  >
      <img
        src="${i.photo}"
        class="img rounded-4"
        style="max-width: 350px; max-height: 250px"
      />
      <div class="card-body p-2">
       
        <div class="d-flex justify-content-around m-1">
        <h5 class="">${i.productname}</h5>
        <h5 class="">₹ ${i.price}</h5>
        </div>
        
        <div class="d-flex justify-content-around">
            <button
              class="btn btn-primary mx-1"
              style="width: 120px" 
              onclick="updatecart(${i.id})"
              >Add to cart</button
            >
            <button
              class="btn btn-warning text-white  mx-1"
              style="width: 120px"
              onclick="buyfromhome(${i.id})"
              >Buy</button
            >
          </div>
      </div>
    </div>

  <!-- product end -->
  </div>
  </div>`;
  }
  homeproductref.innerHTML = display;
};

// update cart in local storage

const updatecart = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const selectedproduct = products.find((item) => item.id === parseInt(id));
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (sessionStorage.getItem("userid")) {
    let user = sessionStorage.getItem("userid");
    const userCart = cart.find(
      (item) => item.userid == parseInt(user) && item.id == parseInt(id)
    );
    if (!userCart) {
      cart.push({ userid: parseInt(user), count: 1, ...selectedproduct });
    } else {
      cart = cart.map((item) => {
        if (item.userid === parseInt(user) && item.id === parseInt(id)) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    location.replace("/Ecommerce/login.html");
  }
};

// delete items in admin page
const deleteitem = (idno) => {
  const delproduct = JSON.parse(localStorage.getItem("cart"));
  const a = delproduct.filter((item) => item.id !== idno);
  localStorage.setItem("cart", JSON.stringify(a));
  cartpage();
};

// cart page
const cartpage = () => {
  const cartProductRef = document.getElementById("cartproducts");
  const products = JSON.parse(localStorage.getItem("cart"));
  const itemsRef = document.getElementById("items");
  const user = sessionStorage.getItem("userid");
  let cartItemscount = 0;
  let cartDisplay = "";
  if (sessionStorage.getItem("userid")) {
    if (products.length != 0) {
      for (let product of products) {
        if (product.userid == user) {
          console.log(products.length, user, products);
          cartItemscount += parseInt(product.count);
          cartDisplay += `<div class="col-2">
                      <img src="${
                        product.photo
                      }" class="img-fluid rounded-3" style="height: 100px;" max-width="100px">
                    </div>
                    <div class="col-2">
                      <h6 class="text-black m-0">${product.productname}</h6>
                    </div>
                    <div class="col-1">
                      <input type="number" class=" form-control rounded-3 text-center" style="width:50" value="${
                        product.count
                      }" onclick="update()" placeholder="1">
                    </div>
                    <div class="col-1">
                      <h6 class="m-0">₹ ${product.price * product.count}</h6>
                    </div>
                    <div class="col-1 d-flex">
                      <button class="btn btn-warning me-2" onclick="buyFromCart(${
                        product.id
                      })">Buy</button>
                    <button class="btn btn-danger" onclick="deleteitem(${
                      product.id
                    })">Delete</button></div>
                    <hr class="mt-3">`;
        }
        cartProductRef.innerHTML = cartDisplay;
      }
    } else {
      show = `<div class="d-flex flex-column text-center "><div class="m-3 fs-2">Your cart is Empty</div>
  <div><a href="/home.html" class="btn btn-warning me-2">Continue Shopping</button></div></div>`;
      cartProductRef.innerHTML = show;
    }
    itemsRef.innerHTML = `${cartItemscount} items`;
  }
};

const buyFromCart = (productid) => {
  buy(productid);
  deleteitem(productid);
};
// user order page
const buy = (productid) => {
  let order = [];
  const products = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(sessionStorage.getItem("userid"));
  const ordereditem = products.find((product) => product.id == productid);
  console.log(ordereditem);
  if (localStorage.getItem("orders")) {
    order = JSON.parse(localStorage.getItem("orders"));
  }
  if (sessionStorage.getItem("userid")) {
    const date = new Date();
    const d = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    order.push({
      orderid: Date.parse(date),
      date: d,
      timestamp: date,
      userid: user,
      status: "Shipping",
      ...ordereditem,
    });
    localStorage.setItem("orders", JSON.stringify(order));
  } else {
    location.replace("/Ecommerce/login.html");
  }
};
const buyfromhome = (productid) => {
  let order = [];
  const products = JSON.parse(localStorage.getItem("products"));
  const user = JSON.parse(sessionStorage.getItem("userid"));
  const ordereditem = products.find((product) => product.id == productid);
  if (localStorage.getItem("orders")) {
    order = JSON.parse(localStorage.getItem("orders"));
  }
  if (sessionStorage.getItem("userid")) {
    const date = new Date();
    const d = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    order.push({
      orderid: Date.parse(date),
      date: d,
      timestamp: date,
      userid: user,
      status: "Shipping",
      ...ordereditem,
      count: 1,
    });
    localStorage.setItem("orders", JSON.stringify(order));
  } else {
    location.replace("/Ecommerce/login.html");
  }
};

// user order page
const orderpage = () => {
  if (sessionStorage.getItem("userid")) {
    const orderemptyRef = document.getElementById("orderempty");
    const orderedProductsRef = document.getElementById("orderedproducts");
    const ordereditemsRef = document.getElementById("ordereditems");
    let orders = "";
    let c = 0;
    const user = sessionStorage.getItem("userid");
    const products = JSON.parse(localStorage.getItem("orders"));
    if (!(products == null)) {
      for (let product of products) {
        if (product.userid === parseInt(user)) {
          c += 1;
          orders += `<div class="row d-flex justify-content-around align-items-center" >
      <div class="col-1">
        <img src="${
          product.photo
        }" class="img-fluid rounded-3" style="height: 100px; max-width:100px">
      </div>
      <div class="col-2 text-center">
        <h6 class="text-black m-0">${product.productname}</h6>
      </div>
      <div class="col-2 text-center"><h6 class="text-black m-0">${
        product.orderid
      }</h6></div>
       <div class="col-1 text-center"><h6 class="text-black m-0">${
         product.date
       }</h6></div>
      
      <div class="col-1 text-center"><h6 class="m-0"> ${product.count}</h6>
      </div>
      <div class="col-1 text-center">
        <h6 class="m-0">₹ ${product.price * product.count}</h6>
      </div>
      <div class="col-1 text-center"><h6 class="text-black m-0">${
        product.status
      }</h6></div>
    </div>
    <hr>`;
        }
        orderedProductsRef.innerHTML = orders;
      }
    } else {
      show = `<div class="d-flex flex-column text-center "><div class="m-3 fs-2">No orders placed yet.</div>
  <div><a href="/home.html" class="btn btn-warning me-2">Explore Products</button></div></div>`;
      orderemptyRef.innerHTML = show;
    }
    ordereditemsRef.innerHTML = `${c} items`;
  } else {
    location.replace("/Ecommerce/login.html");
  }
};
// admin order page
const adminOrder = () => {
  if (sessionStorage.getItem("userid")) {
    const adminorderpageRef = document.getElementById("adminorderpage");
    const totalordersRef = document.getElementById("totalorders");
    const orderedproducts = JSON.parse(localStorage.getItem("orders"));
    const orderadminemptyRef=document.getElementById("adminorderempty");
    let adminpage = "";
    let productcount = 0;
    if (!(orderedproducts == null)) {
      for (let product of orderedproducts) {
        productcount += 1;
        adminpage += `<div class="row d-flex justify-content-around align-items-center">
      <div class="col-1 text-center"><h6 class="text-black m-0">${
        product.userid
      }</h6></div>
      <div class="col-2 text-center">
        <h6 class="text-black m-0">${product.productname}</h6>
      </div>
      <div class="col-2 text-center"><h6 class="text-black m-0">${
        product.orderid
      }</h6></div>
       <div class="col-1 text-center"><h6 class="text-black m-0">${
         product.date
       }</h6></div>
      
      <div class="col-1 text-center">
        ${product.count}
      </div>
      <div class="col-1 text-center">
        <h6 class="m-0">₹ ${product.price * product.count}</h6>
      </div>
      <div class="col-1 text-center"><h6 class="text-black m-0">
      <div class="my-2">
        <select id="orderStatus-${
          product.orderid
        }" class="form-control border border-primary-subtle " style="width:100px">
          <option value="Pending">Pending</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Cancelled">Cancelled</option>
        </select></div>
        
        <button class="btn btn-primary" style="width:100px" id="update" onclick="status(${
          product.orderid
        },${product.userid})">Update</button>
      </h6></div>
    </div>
    
    <hr>`;
      }
      adminorderpageRef.innerHTML = adminpage;
      totalordersRef.innerHTML = `${productcount} items`;
    } else {
      show = `<div class="d-flex flex-column text-center "><div class="m-3 fs-2">No orders placed yet.</div>
  <div>`;
      orderadminemptyRef.innerHTML = show;
    }
  } else {
    location.replace("/Ecommerce/login.html");
  }
};

const status = (orderid, userid) => {
  console.log(orderid, userid);
  let messageRef = document.getElementById("message");
  let order = JSON.parse(localStorage.getItem("orders"));
  let statusRef = document.getElementById("orderStatus-" + orderid);
  let updateRef = document.getElementById("update");
  order = order.map((product) => {
    if (
      product.userid === parseInt(userid) &&
      product.orderid === parseInt(orderid)
    ) {
      return { ...product, status: statusRef.value };
    } else {
      return product;
    }
  });

  console.log(statusRef.value);
  console.log(order);
  localStorage.setItem("orders", JSON.stringify(order));
  // let msg = "Status updated successfully";
  // messageRef.innerText = msg;
  // setTimeout(() => {
  //   location.href = "/admin/orders.html";
  // }, 1000);
};

