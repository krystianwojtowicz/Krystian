const burgerIcon = document.querySelector(".bookmark__img");
const nav = document.querySelector(".bookmark");

burgerIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const accordionItemImgs = document.querySelectorAll(".accordion__item-img");
const accordionItemHeaders = document.querySelectorAll(
  ".accordion__item-header"
);

accordionItemImgs.forEach((accordionItemImg) => {
  accordionItemImg.addEventListener("click", (event) => {
    const accordionItemHeader = accordionItemImg.nextElementSibling;
    const accordionItem = accordionItemHeader.parentElement;
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (!accordionItem.classList.contains("active")) {
      accordionItem.className = "accordion__item active";
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItem.className = "accordion__item";
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const accordionItem = accordionItemHeader.parentElement;
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (!accordionItem.classList.contains("active")) {
      accordionItem.className = "accordion__item active";
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItem.className = "accordion__item";
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

const counter = document.querySelector(".already__counter");
const speed = 1000; // The lower the slower

const updateCount = () => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;

  // Lower inc to slow and higher to slow
  const inc = 35000 / speed;

  // console.log(inc);
  // console.log(count);

  // Check if target is reached
  if (count > target) {
    // Add inc to count and output in counter
    counter.innerText = count - inc;
    // Call function every ms
    setTimeout(updateCount, 20);
  } else {
    counter.innerText = target;
  }
};

updateCount();

// popup
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".simple__img").style.display = "block";
  }, 20000);
});
document.querySelector(".simple__img").addEventListener("click", function () {
  document.querySelector(".simple__img").style.display = "none";
});

// form

const form = document.querySelector("form");
const email = document.getElementById("emaill");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput();
});

form.addEventListener("input", checkInput);

function checkInput() {
  const emailValue = document.querySelector("[id='emaill']").value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Whoops, make shure it's an email");
  } else {
    setSuccess(email);
  }
}

function setSuccess(input) {
  document.querySelector("small").classList.remove("error");
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  const submit = formControl.parentElement;
  submit.classList.remove("submit-error");
}
function setErrorFor(input, message) {
  document.querySelector("small").classList.add("error");
  document.querySelector("small").innerText = message;
  const formControl = input.parentElement;
  formControl.className = "already__email error";
  const submit = formControl.parentElement;
  submit.className = "submit-error";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
