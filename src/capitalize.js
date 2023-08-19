
function capitalize(string) {
    string = string.charAt(0).toString().toUpperCase() + string.slice(1);
    return string;
}

export default capitalize;