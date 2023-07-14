function printPattern(num){
    for (let i = 1; i <= num; i++) {
       let row = "";
        for (let j = 1; j <= i; j++) {
            
            //for (let k = 1; k <= j; k++){
                row = row + i;
            //}
            //console.log(row);
        }
        console.log(row);
        
    }


}
printPattern(5);

