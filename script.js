let display = document.getElementById("display");
let addbtn = document.getElementById("addbtn");
let savebtn = document.getElementById("save");
let saved = document.getElementById("saved");

let count = 0;
let savedValues = [];

addbtn.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

savebtn.addEventListener("click", () => {
    if (count === 0) {
        alert("Count is zero, nothing to save");
        return;
    }

    savedValues.push(count);
    saved.textContent = savedValues.join(",");

    count = 0;
    display.textContent = count;
});