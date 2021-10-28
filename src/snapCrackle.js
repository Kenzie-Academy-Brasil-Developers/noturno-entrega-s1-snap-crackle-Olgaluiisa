
function snapCrackle(maxValue){
    let texto = '';
    for(let contador = 1; contador <= maxValue; contador++){
           if(contador % 2 !== 0 && contador % 5 === 0){
            texto+='SnapCrackle,' + ' ';
         }else if(contador % 2 !== 0){
            texto+='Snap,' + ' ';
         }else if(contador % 5 === 0){
             texto+='Crackle,'+ ' ';
         }else{
             texto+= contador + ', ';
         }


        
          
    }
        return texto;
}

console.log(snapCrackle(15));



