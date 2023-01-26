const btn = document.querySelector("#sbmt");
const input = document.querySelector("input");
const form = document.querySelector("form");
const body = document.querySelector("body");
const fetchData = async function (e) {
    try {
        e.preventDefault();
        const location = input.value;
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=28a23a737c624bce9f3143820232601&q=${location}&aqi=no`);
        const data = await response.json();
        console.log(data);
        const box = `<div class="p-3 my-3 mx-4 shadow-lg bg-success-subtle rounded w-50 text-success">
        <p>Location: ${data.location.name}</p>
        <p>The temperature is ${data.current["temp_c"]} celcius and it feels like ${data.current["feelslike_c"]}</p>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="" />
    </div>`;
        body.innerHTML += box;
        // body.appendChild(box)
    }
    catch (error) {
        console.log('Error', error);
    }
}
form.addEventListener('submit', fetchData)
// console.log(btn);
// btn.addEventListener('click', (e) => {

// });