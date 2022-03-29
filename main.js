let btn = document.querySelector(".navbar-toggler");
let icon = btn.querySelector(".navbar-toggler-icon");
let container = document.querySelector(".first");
let nav = document.querySelectorAll('.nav-link3');
let nav2 = document.querySelector('.nav-link2');
let contact = document.querySelector('.contact');
let img = document.getElementById('img');
let img2 = document.getElementById('img1');
let img3 = document.getElementById('img2');

btn.onclick = function (){
    if(icon.classList.contains("navbar-toggler-icon")){
        icon.classList.remove("navbar-toggler-icon");
        icon.classList.add("fa", "fa-times");
        container.classList.add('open');
        img.classList.add('open-logo');
        img2.classList.add('open-logo');
        img3.classList.add('open2');
        contact.classList.add('menu-contact')
        nav.forEach((e) => {
            e.classList.add('open-link')
        })
        nav2.classList.add('login');
        nav2.classList.remove('to-remove');
    }
    else{
        contact.classList.remove('menu-contact')
        img.classList.remove('open-logo');
        img2.classList.remove('open-logo');
        img3.classList.remove('open2');
        container.classList.remove('open');
        nav.forEach((e) => {
            e.classList.remove('open-link')
        })
        icon.classList.remove("fa", "fa-times");
        icon.classList.add("navbar-toggler-icon");
        nav2.classList.remove('login');
        nav2.classList.add('to-remove');
    }
}

// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
// // const accordionItems = document.querySelectorAll(".accordion-item");

// accordionItemHeaders.forEach(accordionItemHeader => {
//   accordionItemHeader.addEventListener("click", event => {
//     const accordionItem = accordionItemHeader.parentElement;
//     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//     //   currentlyActiveAccordionItemHeader.classList.toggle("active");
//     //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//     // }
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     // const accordionItemBody = parentNode.thirdChild
// if (!accordionItem.classList.contains('active')){
//   accordionItem.className = "accordion-item active";
//     accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
// }
//     else {
//       accordionItem.className = "accordion-item";
//       accordionItemBody.style.maxHeight = 0;
//     } 
    
    

//     // const accordionItemBody = accordionItemHeader.nextElementSibling;
//     // if(accordionItemHeader.classList.contains("active")) {
//     //   accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     // }
//     // else {
//     //   accordionItemBody.style.maxHeight = 0;
//     // }
    
//   });
// });

const accordionItemImgs = document.querySelectorAll(".accordion-item-img");
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemImgs.forEach(accordionItemImg => {
  accordionItemImg.addEventListener("click", event => {
    const accordionItemHeader = accordionItemImg.nextElementSibling;
    const accordionItem = accordionItemHeader.parentElement;
    const accordionItemBody = accordionItemHeader.nextElementSibling;
if (!accordionItem.classList.contains('active')){
  accordionItem.className = "accordion-item active";
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
}
    else {
      accordionItem.className = "accordion-item";
      accordionItemBody.style.maxHeight = 0;
    } 
    
  });
});

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const accordionItem = accordionItemHeader.parentElement;
    const accordionItemBody = accordionItemHeader.nextElementSibling;
if (!accordionItem.classList.contains('active')){
  accordionItem.className = "accordion-item active";
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
}
    else {
      accordionItem.className = "accordion-item";
      accordionItemBody.style.maxHeight = 0;
    } 
    
  });
});

const counter = document.querySelector('.counter');
const speed = 1000; // The lower the slower

	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
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
//   window.addEventListener("load", function(){
//     setTimeout(
//         function open(event){
//             document.querySelector(".popup").style.display = "block";
//         },
//         20000
//     )
// });
// document.querySelector(".popup").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });


// form

const form = document.querySelector("form");
const email = document.getElementById("emaill");

form.addEventListener("submit", event => {
    event.preventDefault();
    checkInput();


  })
function checkInput() {
const emailValue = document.querySelector("[id='emaill']").value.trim();



  if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Whoops, make shure it's an email");
	} else {
		return
	}
}


  function setErrorFor(input, message) {
    document.querySelector('small').classList.add('error');
    document.querySelector('small').innerText = message;
    const formControl = input.parentElement;
	formControl.className = 'email error';
  const submit = formControl.parentElement;
  submit.className = 'submit-error'
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

