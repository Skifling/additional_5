module.exports = function check(str, bracketsConfig) {
  // your solution
    var fLenBC = bracketsConfig.length;
    var fLenStr = str.length;
    var count = 0;
    for (i = 0; i < fLenBC; i++) {
        for (j = 0; j < fLenStr; j++) {
            if (str[j] == bracketsConfig[i][0]) {
                count++;
            } 
            if (str[j] == bracketsConfig[i][1]) {
                count--;
            }
            if (count < 0) { return false;}
        }
        if (count != 0) { return false;}
    }
    return true;
}
