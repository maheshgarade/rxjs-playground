const { interval } = require("rxjs");
const { take, map } = require("rxjs/operators");

interval(1000)
  .pipe(
    take(5),
    map((x) => x * 10),
  )
  .subscribe(console.log);
