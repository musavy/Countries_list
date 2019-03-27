const randomColor = () => {
  // Declaring random genretar funtion
  let r = Math.floor(Math.random() * 0xff).toString(16);
  let g = Math.floor(Math.random() * 0xff).toString(16);
  let b = Math.floor(Math.random() * 0xff).toString(16);
  return `#${r}${g}${b}`;
};

//Declaring variables             //selecting variables by mehtod of DOM
const searchBtn1 = document.querySelector("#btn1"); //search button selected by id
const searchword = document.querySelector("#btn2"); //searchword button selected by id
const sort1 = document.querySelector("#sort1"); //sort button selected by id
const result2 = document.querySelector(".result_box");
const input = document.querySelector("input"); //input selected by tag
const box1 = document.querySelector(".countries"); //empty div  selected by is class to show all of our array

// declaring empty array

// when we click the button the button going to be true
let searchBtn = false; //
let searchWith = false;
let sort = false;
showWorld(country_list); // calling function

function showWorld(countries) {
  // creating function
  box1.innerHTML = "";

  // creating for loop
  for (let i = 0; i < countries.length; i++) {
    let box = document.querySelector(".countries");

    /*  box.textContent = country_list[i]; */
    let spa1 = document.createElement("span"); // creating element and giving name
    spa1.textContent = countries[i]; // puting countries in sapn

    spa1.style.background = randomColor(); //creating style for span background by function of randomColor
    box.appendChild(spa1);
  }
}

//declaring  eventlistner to  click the button and do the task
searchBtn1.addEventListener("click", (e) => {
  searchBtn = true;
  searchBtn1.style.color = "yellow";
  searchBtn1.style.background = "lightgreen";
  searchword.style.background = "tomato";
});

//declaring 2 event listner
searchword.addEventListener("click", (e) => {
  searchWith = true;
  searchword.style.color = "white";
  searchword.style.background = "tomato";
  searchBtn1.style.background = "tomato";
});

sort1.addEventListener("click", (e) => {
  sort = true;
  //sort1.style.color = "tomato";
  searchword.style.background = "tomato";
  if (e.target.className === "fas fa-sort-alpha-down") {
    e.target.className = "fas fa-sort-alpha-up";
  } else e.target.className = "fas fa-sort-alpha-down";
  showWorld(filterCountry().reverse());
});

input.addEventListener("input", () => {
  showWorld(filterCountry());
});

function filterCountry() {
  if (searchBtn) {
    let result = [];

    result = country_list.filter((country) => {
      return country.toUpperCase().startsWith(input.value.toUpperCase());
    });
    //console.log(result);
    
    result2.innerHTML = "";
    let msg = document.createElement("span");
    msg.setAttribute("class", "msg_box"); //creating class for span by using setAttribute
    msg.textContent = `Countries start with ${input.value} = ${result.length}`;
    result2.appendChild(msg);
    return result;
  }

  if (searchWith) {
    let result1 = [];
    result1 = country_list.filter((country) => {
      return country.toUpperCase().includes(input.value.toUpperCase());
    });
    
    result2.innerHTML='';
    let lanS=document.createElement('span');
    lanS.setAttribute('class','lanS1');
    lanS.textContent=`Countries start with ${input.value}=${result1.length}`;
    result2.appendChild(lanS);
    return result1;
}
}
