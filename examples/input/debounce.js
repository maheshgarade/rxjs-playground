// Debounce input example

const { fromEvent } = rxjs;
const { debounceTime, map } = rxjs.operators;

const input = document.getElementById("search");

fromEvent(input, "input")
  .pipe(
    debounceTime(300),
    map((e) => e.target.value),
  )
  .subscribe((value) => console.log("Debounced:", value));
