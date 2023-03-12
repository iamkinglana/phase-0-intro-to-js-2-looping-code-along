// Code your solutions in this file


function writeCards(name, party){
    const array = [];
    for (let i = 0; i < name.length; i++){
        let msg = `Thank you, ${name[i]}, for the wonderful ${party} gift!`;
        array.push(msg);
    }
    return array;
}
function countDown(i) {   

    while (i>=0){    
        console.log(i);
    --i;
    }
}