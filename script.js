//Alerts

alert("Hello");
alert("To Tic\nTac\nToe");

//fixed vars

const WIN = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

const dEmoji = ["🎭", "🌀", "🎲", "♾️"];

const wEmoji = ["🏆", "🚀", "⚡", "💥"];

//DOM

let box = document.querySelectorAll(".box");

let s = document.querySelector("#status");

let board = document.querySelector("table");

//state

let O = [];

let X = [];

let P = "O";

//starting status

s.innerHTML = "O's chance";

//loop for all buttons

box.forEach((cell) => {
    //main event listener

    cell.addEventListener("click", (e) => {
        //tracking

        let pB = e.target.dataset.index;
        let b = e.target

        //validation

        if(O.includes(pB) || X.includes(pB)) {
            s.innerHTML = "Box alredy filled play another move";

            //visualisation and internal state changing

        } else if(P == "O") {
            b.innerHTML = P;
            O.push(pB);
            b.style.color = "#00ff66";
            P = "X";
            s.innerHTML = "X's chance"
        } else if(P == "X") {
            b.innerHTML = P
            X.push(pB);
            b.style.color = "#dc2626";
            P = "O";
            s.innerHTML = "o's chance"
        }

        //pattern of WIN

        for(let patt of WIN) {
            var dEI = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            var wEI = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            //value of pattern

            for(let val of patt) {

                //for X

                if(P == "O") {
                    var xWin = true;
                    if(!(X.includes(val))) {
                        xWin = false;
                    };

                    //for O

                } else if(P == "X") {
                    var oWin = true;
                    if(!(O.includes(val))) {
                        oWin = false;
                    }; 
                };
            };
            
            //Win visualising

            if(xWin) {
                board.innerHTML = `X Wins! ${wEmoji[wEI - 1]}`;
                board.style.color = "gold";
                board.style.fontSize = "56px";
                break
            } else if(!(xFWin)) {
                continue
            };
            if(oWin) {
                board.innerHTML = `O Wins! ${wEmoji[wEI - 1]}`;
                board.style.color = "gold";
                board.style.fontSize = "56px";
                break
            } else if(!(oFWin)) {
                continue
            };

            //Draw

            if(O.concat(X).length = 9) {
                board.innerHTML = `It's a Draw! ${dEmoji[dEI - 1]}`
                board.style.color = "#9333ea;";
            }
        };
    });
});

//reset

let rG = document.querySelector("#rG");
rG.addEventListener("click", () => {
    box.forEach((em) => {
        em.innerHTML = "";
    });
    s.innerHTML = "O's chance"
    P = "O";
    O = [];
    X = [];
});