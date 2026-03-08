let chart;

function calculate(){

let age = Number(document.getElementById("age").value);
let asset = Number(document.getElementById("asset").value);
let invest = Number(document.getElementById("invest").value);
let returnRate = Number(document.getElementById("returnRate").value) / 100;
let expense = Number(document.getElementById("expense").value);

let fireNumber = expense / 0.04;

let ages = [];
let assets = [];

let currentAsset = asset;
let currentAge = age;

while(currentAsset < fireNumber && currentAge < 100){

    ages.push(currentAge);
    assets.push(currentAsset);

    currentAsset = currentAsset * (1 + returnRate) + invest;
    currentAge += 1;

}

document.getElementById("result").innerText =
"FIRE達成年齢: " + currentAge + "歳 (必要資産 " + Math.round(fireNumber) + "万円)";

drawChart(ages, assets, fireNumber);

}

function drawChart(ages, assets, fireNumber){

const ctx = document.getElementById("chart");

if(chart){
    chart.destroy();
}

chart = new Chart(ctx, {
type: 'line',
data: {
labels: ages,
datasets: [
{
label: '資産推移（万円）',
data: assets,
},
{
label: 'FIREライン',
data: new Array(ages.length).fill(fireNumber),
}
]
}
});

}