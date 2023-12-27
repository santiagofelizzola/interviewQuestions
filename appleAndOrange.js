const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    // console.log('start point:', s);
    // console.log('end point:', t);
    // console.log('apple tree:', a);
    // console.log('orange tree:', b);
    // console.log('apples:', apples);
    // console.log('oranges:', oranges);
    let manzanas = 0;
    let naranjas = 0;
    
    for(let i = 0; i < apples.length; i++){
        if(apples[i] + a >= s && apples[i] + a <= t){
            // console.log(apples[i] + a);
            manzanas += 1;
            // console.log(manzanas);
        }
    }
    for(let j = 0; j < oranges.length; j++){
        if(oranges[j] + b >= s && oranges[j] + b <= t){
            // console.log(oranges[j] + b);
            naranjas += 1;
            // console.log(naranjas);
        }
    }
    console.log(manzanas)
    console.log(naranjas)
}