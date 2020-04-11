n = 5;

for (let i = 1; i <= n; i += 2) {
  let space = " ".repeat((n - i) / 2);
  let star = "*".repeat(i);
  console.log(space + star + space); 
}