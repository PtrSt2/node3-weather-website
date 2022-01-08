console.log("This is client-side Javascript.");

const form = document.querySelector(".submitLoc");
const search = document.querySelector("input");
const par1 = document.querySelector("#paragraph1");
const par2 = document.querySelector("#paragraph2");

par1.textContent = "";
par2.textContent = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data);
        par1.textContent = data.error;
      } else {
        console.log(data.location);
        par1.textContent = data.location;
        console.log(data.forecast);
        par2.textContent = data.forecast;
      }
    });
  }); //fetch_then
});
