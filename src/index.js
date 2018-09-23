module.exports = function getZerosCount(number, base) {
  // your implementation
  var j = 1, i = 2, arr = [], pos = 0, col = 0, now = 0, min = 10000000000, nuls = 0, del = 0;
  do {
    if (base % i == 0)
    {
      arr[j] = i;
      j++;
      base = Math.floor(base / i);
    } else i++;
  } while (i <= base);
  arr.reverse();
  do {
    now = arr[pos];
    col++;
    while ((pos = arr.indexOf(now, pos + 1)) != -1)
      col++;
    pos = arr.lastIndexOf(now) + 1;
    del = now;
    while (number > del)
    {
      nuls += Math.floor(number / del);
      del *= now;
    }
    nuls = Math.floor(nuls / col);
    if(min > nuls)
      min = nuls;
    col = 0;
    nuls = 0;
  } while (pos <= (arr.length - 2));
  return min;
}