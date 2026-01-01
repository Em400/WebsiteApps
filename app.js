const toolContainer = document.getElementById("tool-container");
const buttons = document.querySelectorAll(".tool-menu button");

buttons.forEach(button =>{
    button.addEventListener("click",() =>{
        loadDataSet(button.dataset.tool);
    });
});

loadDataSet("calculator");

function loadDataSet(tool){
    switch(tool){
        case "calculator":
            loadCalculatorTool();
            break;
        case "converter":
            loadUnitConverterTool();
            break;
        case "tip":
            loadTipCalculatorTool();
            break;
        case "age":
            loadAgeCalculatorTool();
            break;
    }
}

function loadCalculatorTool(){
      toolContainer.innerHTML = `
        <h2>Basic Calculator</h2>
        <input id="num1" type="number" placeholder="Number 1" />
        <input id="num2" type="number" placeholder="Number 2" />
        <button class="action" onclick="calculate()">Calculate</button>
        <p id="calcResult"></p>
    `;
}

function calculate(){
    const numA = Number(document.getElementById("num1").value);
    const numB = Number(document.getElementById("num2").value);

    document.getElementById("calcResult").textContent = 
        "Result = "+ (numA+numB);
}

function loadUnitConverterTool(){
     toolContainer.innerHTML = `
        <h2>KM to Miles</h2>
        <input id="km" type="number" placeholder="Kilometers" />
        <button class="action" onclick="convert()">Convert</button>
        <p id="convertResult"></p>
    `;
}
function convert(){
    const km = Number(document.getElementById("km").value);
    const miles = km * 0.621371;

     document.getElementById("convertResult").textContent =
        miles.toFixed(2) + " miles";
}

function loadTipCalculatorTool(){
    toolContainer.innerHTML = `
        <h2>Tip Calculator</h2>
        <input id="bill" type="number" placeholder="Bill Amount" />
        <input id="tip" type="number" placeholder="Tip %" />
        <button class="action" onclick="calcTip()">Calculate Tip</button>
        <p id="tipResult"></p>
    `;
}

function calcTip(){
    const bill = Number(document.getElementById("bill").value);
    const tip = Number(document.getElementById("tip").value);
    const total = bill +(bill*tip)/100;

    document.getElementById("tipResult").textContent=
        "Total : $"+ total.toFixed(2);
}

function loadAgeCalculatorTool(){
    toolContainer.innerHTML = `
        <h2>Age Calculator</h2>
        <input id="birthYear" type="number" placeholder="Birth Year" />
        <button class="action" onclick="calcAge()">Calculate Age</button>
        <p id="ageResult"></p>
    `;
}

function calcAge(){
    const year = Number(document.getElementById("birthYear").value);
    const age = new Date().getFullYear()-year;

    document.getElementById("ageResult").textContent = 
        "Age : " + age;
}
