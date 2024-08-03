async function getCountries() {
    let countries = [],
      op = "";
    const url = "https://restcountries.com/v3.1/all";
  
    let resopnse = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "https://restcountries.com",
      },
    });
  
    let data = await resopnse.json();
  
    // console.log(data)
    data.map((d) => {
      // console.log(d.name.common)
      countries = [...countries, d.name.common];
    });
  
    // console.log(countries)
    countries = countries.sort()
    countries.map((c) => {
      op += `<option value="${c}">${c}</option>`;
    });
  
    // console.log(op)
  
    document.getElementById("country").innerHTML = op;
  }
  