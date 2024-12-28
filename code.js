let wincomb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let reset = document.querySelector("#reset");
reset.addEventListener("click", res);
let boxes = document.querySelectorAll(".box");
let count = 0;
let win = document.querySelector("#winner");
let img = document.querySelector("img");
let turno = true;
let flag = false;
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (flag || box.innerText !== "") return;
        if (turno) {
            box.innerText = 'O';
            turno = false;
        } else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;
        count++;
        for (let pattern of wincomb) {
            if (
                boxes[pattern[0]].innerText !== "" &&
                boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
                boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
            ) {
                win.innerText = "Player " + boxes[pattern[0]].innerText + " wins";
                img.style.display = "block";
                flag = true;
                return;
            }
        }
        if (count === 9 && !flag) {
            win.innerText = "Draw -_-";
            flag = true;
        }
    });
});

function res() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    win.innerText = "";
    img.style.display = "none";
    count = 0;
    flag = false;
    turno = true;
}
