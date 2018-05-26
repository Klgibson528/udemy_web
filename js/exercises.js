function echo(message, number) {
  for (var i = 0; i <= number; i++) {
    console.log(message);
  }
}

echo("hello", 10);

// prints hello 10 times to console
// to run file type node filename

function average(arr) {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  console.log(Math.round(count / arr.length));
}

average([90, 98, 89, 100, 100, 86, 94]);

