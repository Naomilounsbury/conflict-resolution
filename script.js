// here I am getting the input from the handlebars page
const zipCodeInputEl = document.querySelector("#zipcode").value;
//then I am getting the city and state that the user is in
function getLocation() {
  zipCodeInputEl.innerHTML = "";
  const requestUrl =
    "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/00603?key=VT8TBTLQR7KRW7GXANPJ";

  fetch(requestUrl)
    .then((response) => response.json)
    .then((zipCodeData) => getCityFromZip(zipCodeData));
}

// then I want to get the city and state in this function but it keeps coming back as undefined and I don't know what to do
function getCityFromZip(zipCodeData) {
  console.log(zipCodeData);
  const cityEl = document.querySelector("#city-name");
  cityEl.innerHTML =
    "Getting activities for:" + `${zipCodeData.City} ${zipCodeData.State}`;
}

const zipCodeSearch = document.querySelector("#zipCodeBtn");
zipCodeSearch.addEventListener("submit", getLocation());
