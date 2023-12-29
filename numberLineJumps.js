const kangaroo = (x1, v1, x2, v2) => {
    console.log('x1: ', x1);
    console.log('x2: ', x2);
    console.log('v1: ', v1);
    console.log('v2: ', v2);
    
    if ((x1 < x2 && v1 <= v2) || (x2 < x1 && v2 <= v1)) {
        return 'NO';
    }
    for (let i = 0; i < 10000; i++) {
        console.log(x1,x2);
        x1 += v1;
        x2 += v2;
        
        if (x1 === x2) {
            console.log(x1,x2);
            return 'YES';
        }
    }
    return 'NO';
}


const x1 = 0;
const x2 = 4;
const v1 = 3;
const v2 = 2;

const answer = kangaroo(x1,v1,x2,v2);
console.log(answer)