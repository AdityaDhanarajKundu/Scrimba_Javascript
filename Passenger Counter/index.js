let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(saveEl)
function increment() {
  count += 1;
  console.log(count);
  countEl.innerText = count;
}
function save(){
  let countStr = count+" - ";
  saveEl.textContent = saveEl.textContent+countStr;
  count=0;
  countEl.innerText=count;
}
