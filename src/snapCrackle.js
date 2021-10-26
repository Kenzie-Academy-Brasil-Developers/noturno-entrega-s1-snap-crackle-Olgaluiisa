

function snapCrackle(maxValue){
    let texto = '';
    for(let contador = 1; contador < maxValue; contador++){
           if(contador % 2 !== 0 && contador % 5 === 0){
            texto+= ' SnapCrackle, ';
         }else if(contador % 2 !== 0){
            texto+= ' Snap, ';
         }else if(contador % 5 === 0){
             texto+= ' Crackle, ';
         }else{
             texto+= contador;
         }

        
          
    }
        return texto;
}

console.log(snapCrackle(15))

// numeros primos

function  snapCracklePrime(maxValeu){
    let texto = '';
    for(let contador = 1; contador < maxValeu; contador++){
           if(contador % 2 !== 0 && contador % 5 === 0){
            texto+= ' SnapCrackle, ';
         }else if(contador % 2 !== 0){
            texto+= ' Snap, ';
         }else if(contador % 5 === 0){
             texto+= ' Crackle,';
         }else if(contador % 1 === 0 && contador % contador === 0){
            texto+= 'Prime, ';
         }else{
             texto+= contador;
         }       
          
    }
        return texto;
}

console.log( snapCracklePrime(15))