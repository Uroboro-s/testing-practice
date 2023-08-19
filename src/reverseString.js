
function reverseString(string) {
    let length = string.length;
    let revString = "";
    length--;
   while (length >= 0) {
        revString = revString + string.charAt(length);
        length--;
   }
    return revString;
}

export default reverseString;

