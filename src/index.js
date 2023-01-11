module.exports = function reverse (n) {
  n = Math.abs(n);
  n = String(n);
  let mirroredN = "";
  for (let i = n.length - 1; i >= 0; i--) {
    mirroredN += n[i];
  }
return Number(mirroredN);
}
