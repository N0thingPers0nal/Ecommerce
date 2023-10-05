let productsarray = [
  { id: 1, productname: "Pillow", price: 120, photo: "data:image/jpeg;base64,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" },
  { id: 2, productname: "Watch1", price: 120, photo: "data:image/jpeg;base64,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" },
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
    })
    localStorage.setItem("users", JSON.stringify(user));
    location.replace("/Ecommerce/login.html");
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
          <a href="/Ecommerce/admin/edit.html"
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
  <div><a href="/Ecommerce/home.html" class="btn btn-warning me-2">Continue Shopping</button></div></div>`;
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
      status: "Pending",
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
      status: "Pending",
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
  <div><a href="/Ecommerce/home.html" class="btn btn-warning me-2">Explore Products</button></div></div>`;
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

