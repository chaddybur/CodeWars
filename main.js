function repeatStr(n, s) {
  let ans = ""
  for(i = 1; i <= n; i++){
    ans += s
  }
  console.log(ans);
}

repeatStr(5, "s")