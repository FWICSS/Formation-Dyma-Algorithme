function isPalindrome(mot) {
    let start = 0, end = mot.length - 1
    let isPalindrome;
    function check(mot, start, end)
    {
        if (start >= end) {
            isPalindrome=true
            return isPalindrome;
        } else {
            if (mot[start] === mot[end]) {
                return check(mot, start + 1, end - 1);
            }
            isPalindrome=false;
            return isPalindrome;
        }
    }
    return check(mot,start,end);
}

console.log(isPalindrome("test"));
console.log(isPalindrome("kayak"));