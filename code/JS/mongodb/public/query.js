document.getElementById('getData').addEventListener('click', getData);

function getData() {
    var api_path = "http://localhost:3000/sanctions?search="
    var naam = document.getElementById("searchString").value
    var url = api_path + naam
    console.log(naam)
    console.log(url)

    fetch(url)
      .then((res) => { return res.json() })
      .then((data) => {
          let result = `<h2>Zoekresultaten</h2>`;
            data.forEach((ind) => {
              console.log(ind)
            const { nameAlias: {firstName, middleName, lastName, wholeName} } = ind
            result +=
              `<div>
                   <ul class="w3-ul">
                       <li> First : ${firstName[0]}</li>
                       <li> Middle : ${middleName[0]}</li>
                       <li> Last : ${lastName[0]}</li>
                       <li> Whole : ${wholeName[0]}</li>
                       <hr />
                   </ul>
                </div>`;
                  document.getElementById('result').innerHTML = result;
              });
    })
}
