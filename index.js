let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");
let BtnButton = document.getElementById("btn");
let rowButton = document.querySelector(".row");
let bestButton = document.querySelector(".container");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;

//   console.log(finalURL);

  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
    //   console.log(data[0].capital[0]);
    //   console.log(data[0].flags.svg);
    //   console.log(data[0].name.common);
    //   console.log(data[0].continents[0]);
    //   console.log(Object.keys(data[0].currencies)[0]);
    //   console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(", ").join(", ")
      );

      result.innerHTML = `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
        <div class="data-wrappper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrappper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrappper">
            <h4>Area:</h4>
            <span>${data[0].area}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrappper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrappper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]} </span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrappper">
            <h4>Common Language:</h4>
            <span>${
                Object.values(data[0].languages)
                .toString()
                .split(", ")
                .join(", ")
            } </span>
        </div>
    </div>

    `;
    }).catch(() => {
        if(countryName.length == 0){
            result.innerHTML = `<h3 id="setUP">Please enter input field connot be empty</h3>`
        }else{
            result.innerHTML = `<h3 id="setUP">Can not found.</h3>`
        }
        
        setTimeout(() => {
            result.innerHTML = '';
        }, 3000);
    })
});




function toggleBtn() {
    BtnButton.classList.toggle('active');
    rowButton.classList.toggle('chat-goes');
    bestButton.classList.toggle('best');
    countryInp.classList.toggle('search-wrappers');
}
