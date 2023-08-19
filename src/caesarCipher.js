
const lower_case = []

function caesarCipher(string, shift_f) {
    let cipher_string = "";
    for(let i =0;i<string.length;i++)
    {
        let character_code = string.charCodeAt(i);
   
        if(character_code >= 65 && character_code <= 90)
        {
            if(character_code + shift_f > 90){
                cipher_string = cipher_string.concat(String.fromCharCode((character_code + shift_f) - 90));
                continue;
            }
            else if(character_code + shift_f < 65){
                cipher_string = cipher_string.concat(String.fromCharCode(91 - (65 -(character_code + shift_f))));
                continue;
            }
            else {
                cipher_string = cipher_string.concat(String.fromCharCode(character_code + shift_f));
                continue;
            }

        }
        else if(character_code >= 97 && character_code <=122)
        {
            console.log(character_code);
            if(character_code + shift_f > 122) {
                cipher_string = cipher_string.concat(String.fromCharCode((character_code + shift_f) - 122));
                continue;
            }
            else if(character_code + shift_f < 97) {
                cipher_string = cipher_string.concat(String.fromCharCode(123 - (97 -(character_code + shift_f))));
                continue;
            }
            else {
                cipher_string = cipher_string.concat(String.fromCharCode(character_code + shift_f));
                continue;
            }
        }
        else {
            cipher_string = cipher_string.concat(String.fromCharCode(character_code));
            continue;
        }
    }
    
    return cipher_string;
}

export default caesarCipher;
