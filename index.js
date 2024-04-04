const uimaker = (data) => {


    let temp = `
    <div>
        <h3>${data.name}</h3>
        <p>${data.main.temp}</p>
        <h2> ${data.main.temp_mix},${data.main.temp_min}</h2>
    </div>`;
    document.getElementById("box").innerHTML = temp;
}

const getweather = async(city) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=453adc5584917111316ef7378c6ad440&q=${city}&units=metric`)
    let data = await res.json()
    console.log(data);
    uimaker(data)




}

const hendalweather = (e) => {

    e.preventDefault();
    let city = document.getElementById("city").value;
    getweather(city);
}


document.getElementById("form").addEventListener("submit", hendalweather);