export default function (input) {
  const { fromEvent } = rxjs;
  const { debounceTime, map } = rxjs.operators;

  fromEvent(input, "input")
    .pipe(
      debounceTime(300),
      map((e) => e.target.value),
    )
    .subscribe((value) => {
      console.log("Debounced:", value);
    });
}
