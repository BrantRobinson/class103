
// for (var i = 0; i <=10; i ++) {
//     document.write(`<p>${i}</p>`);
// }
// for (var i = 2; i <21; i += 2) {
//     document.write(`<p>${i}</p>`);
// }

// const num=2;
// let total;
// for (var i = 1; i < 11; i ++) {
//     total = num * i;
//     document.write(`<p>${num} x ${i} = ${total}</p>`);
// }


// for (var i=0; i < 6; i++){
//     document.write(`<p>console.log(${i})</p>`);
//     console.log(i);
// }
// document.write(`Counting Completed`);
// console.log(`Counting Completed`);

// let i=0;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// let year = 2018
// while (year < 2023) {
//     console.log(year);
//     year++;
// }

// let j=10;
// do {
//     console.log(j);
//     j++;
// } while (j<5);

// let text = "";
// for (let i = 1; i < 11; i++) {
//     switch(i) {
//         case 1: 
//             text = "Gold Medal";
//             break;
//         case 2: 
//             text = "Silver Medal";
//             break;
//         case 3:
//             text = "Bronze Medal";
//             break;
//         default: 
//             text = i;
//         }
//    document.write(`<p>${text}</p>`);
// }


function fillThermo() {
    let thermo = document.getElementById("thermo");

    for (let i=0; i<11; i++) {
        let level = document.createElement('div');
        level.classList.add("level");
        // console.log(`Level: ${i}`);

        switch (true) {
            case (i < 3):
                level.style.backgroundColor = 'blue';
                break;
            case (i < 7):
                level.style.backgroundColor = 'orange';
                break;
            default:
                level.style.backgroundColor = 'red';
                break;
        }
        thermo.appendChild(level);
    }
}

function generateTable () {
    let tbody = document.getElementById("tbody");
    for (let c=-60; c<=100; c+=10) {
        let f = (c * 9 / 5)+32;
        tbody.innerHTML += `
        <tr>
        <td>${c}</td>
        <td>${f}</td>
        </tr>
        `;
    }
}

generateTable();

let train1 = ["apples", "bananas", "kiwi", "salt", "pizza", "ham", "oranges", "steaks"];

for (i = 0; i < train1.length; i++) {
    document.write(`<li>${train1[i]}</li>`);
}



