function reverseString(s){
    let x = s.length - 1;
    for(let i = 0; i < x; i++){
        let temp = "";
        temp = s[i];
        s[i] = s[x];
        s[x] = temp;
        x--;
    }
    return s;
}

let string = ["H", "a", "n", "n", "a", "h"];
reverseString(string);