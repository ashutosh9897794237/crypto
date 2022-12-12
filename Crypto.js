// fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data)=>{
//    // console.log(data);
//     return data.json();
// }).then((objectData)=>{
//  console.log(objectData);
//  let tableData="";
//  objectData.map((elements)=>{
//     tableData+= <tr>
//     <td>{elements.title}</td>
//     <><td>{values.description}</td><td>{values.price}</td><td><img src={values.image}/></td></>
//   </tr>;
//  });
//  document.getElementById("table_body").
//  innerHTML=tableData;
// }).catch((err)=>{
//     console.log(err);
// })
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
async function getData(url) {
    console.log("functionCalled")
    const response = await fetch(url);
    data = await response.json();
    console.log(data);

    const tableBody = document.getElementById('table_body');
    data.forEach(element => {
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);
        tr.innerHTML = `<td style="height:70px" ><img src=${element.image} style="width:25px">  ${element.name}</td> <td>${element.symbol}</td> <td>$${element.current_price}</td> <td>$${element.total_volume}</td> <td style=${element.price_change_24h > 0 ? "color:#00FF00" : "color: #fff"}>${element.price_change_24h}%</td> <td>MKT Cap : $${element.market_cap}</td>`;


    });
}

getData(url);