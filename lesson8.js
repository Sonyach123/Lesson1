function drawTriangle(height, symbol){
    for (let i = 1; i <= height; i++) 
    {
        let spaces = " ".repeat(height - i);
        let symbols = symbol.repeat(2*i-1);
        console.log(spaces + symbols);
    }
}
drawTriangle(9, "*");