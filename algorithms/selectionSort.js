const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time));
}


// Red - '#FF0000'
// green - '#00FF00' -> '#48c486'
// grey - '#AA9870' -> 'grey'
// violet - '#BB0123' -> 'yellow'
let delay=50;
async function selectionSort(arr){
    for(let i=0;i<(arr.length);i++){
        let minindx=i;
        let e=document.getElementById('elem'+minindx);
        e.style.background='#FF0000';
        for(let j=i+1;j<arr.length;j++){
            await sleep(delay);
            let e1=document.getElementById('elem'+j);
            e1.style.background='yellow';
            await sleep(delay);
            if(arr[j]<arr[minindx]){
                let e2=document.getElementById('elem'+minindx);
                e2.style.background='#48c486';
                minindx=j;
                let e3=document.getElementById('elem'+minindx);
                e3.style.background='#FF0000';
            }
            else{
                e1.style.background='#48c486';
            }
        }
        swapNumber(arr,i,minindx);
        await sleep(delay);
        swapColor(i,minindx);
        swapHeight(i,minindx);
    }
}

function swapNumber(arr,i,minindx) {
    let temp =arr[i];
    arr[i]=arr[minindx];
    arr[minindx]=temp;
}

function swapHeight(j,minindx) {
    
    let e1 = document.getElementById('elem' +j);
    let e2 = document.getElementById('elem' +(minindx));
    
    let h1=e1.clientHeight;
    let h2=e2.clientHeight;
    e1.style.height = h2+"px";
    e2.style.height = h1+"px";

}

function swapColor(j,minindx){
    let e1 = document.getElementById('elem' +j);
    let e2 = document.getElementById('elem' +(minindx));
    e2.style.backgroundColor='#48c486';
    e1.style.backgroundColor = 'grey';
    
}

export { selectionSort };