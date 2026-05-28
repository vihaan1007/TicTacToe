alert("Hello");
alert("To Tic\nTac\nToe");

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

let box = document.querySelectorAll(".box");
let O = [];
let X = [];
let P = "O";
let s = document.querySelector("#status");
let board = document.querySelector("table");
s.innerHTML = "O's chance";

box.forEach((cell) => {
    cell.addEventListener("click", (e) => {
        let pB = e.target.dataset.index;
        let b = e.target
        if(O.includes(pB) || X.includes(pB)) {
            s.innerHTML = "Box alredy filled play another move";            
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
        for(let patt of WIN) {
            for(let val of patt) {
                if(P == "O") {
                    var xWin = true;
                    var xFWin = true;
                    if(!(X.includes(val))) {
                        xFWin = false;
                        xWin = false;
                    } else{
                        xFWin = true; 
                    };
                } else if(P == "X") {
                    var oWin = true;
                    var oFWin = true;
                    if(!(O.includes(val))) {
                        oFWin = false;
                        oWin = false;
                    } else {
                        oFWin = true;
                    }; 
                };
                oFWin = oWin;
                xFWin = xWin;
            };
            if(xFWin) {
                board.innerHTML = "X Wins!";
                board.style.color = "gold";
                board.style.fontSize = "56px";
                break
            } else if(!(xFWin)) {
                continue
            };
            if(oFWin) {
                board.innerHTML = "O Wins!";
                board.style.color = "gold";
                board.style.fontSize = "56px";
                break
            } else if(!(oFWin)) {
                continue
            };
        };
    });
});

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