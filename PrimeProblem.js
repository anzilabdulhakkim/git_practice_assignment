function check_prime(num) {
  let count = 0;
  for (let i = 2; num < i; i++) {
    if (num % i === 1) {
      count++;
      break;
    }
  }
  if (count === 1 && num > 1) {
    console.log(num, "is a prime number");
  } else {
    console.log(num, "is not a prime number");
  }
}
check_prime(2);

