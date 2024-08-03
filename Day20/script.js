async function getWeather() {
    try {
      let country = document.getElementById("country").value;
      let temp_c, temp_f;
      const url = `http://api.weatherapi.com/v1/current.json?key=75f11d524d2749e4beb110806231909&q=${country}&aqi=no`;
  
      let response = await fetch(url, {
        headers: {
          "Access-Control-Allow-Origin": "http://api.weatherapi.com",
        },
      });
  
      // console.log(response.json())
      let data = await response.json();
  
      // console.log(data)
  
      temp_c = data.current.temp_c;
      temp_f = data.current.temp_f;
  
      console.log(temp_c, temp_f);
    } catch (err) {
      alert("Data not found");
    }
  }
  