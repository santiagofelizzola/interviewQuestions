const lonelyinteger = (a) => {
    console.log(a)
    for(let i = 0; i < a.length; i++){
        let count = 0
        let lonelyIndex
        for(let j = 0; j < a.length; j++){
            if(a[i] == a[j]){
                count += 1
                lonelyIndex = a[j]
            }
            console.log('outside if',a[i], a[j], 'lonely:', lonelyIndex, 'count', count)
        }
        console.log('outside for' , 'lonely:', lonelyIndex, 'count', count)
        if(count == 1){
            return lonelyIndex
        }
    }

}