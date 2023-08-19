


function analyzeArray(arr) {
    if(arr.length == 0)
        return "Empty array passed";
    let obj = {};
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length ; i++)
    {
        if(typeof arr[i] !== 'number')
            return "Bad array";
        if(arr[i] < min)
            min = arr[i];
        if(arr[i] > max)
            max = arr[i];
        sum += arr[i];

    }
    obj.average = sum / arr.length;
    obj.min = min;
    obj.max = max;
    obj["length"] = arr.length;
    return obj;
}

export default analyzeArray;