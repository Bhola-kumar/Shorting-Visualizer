const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time));
}
// Red - '#FF0000'
// green - '#00FF00' -> '#48c486'
// grey - '#AA9870' -> 'grey'
// violet - '#BB0123' -> 'yellow'

async function quickSort(arr, start, end,speed) {
    if (start < end) {
        let pivot = arr[start];
        let e1=document.getElementById('elem'+start);
        e1.style.backgroundColor='#FF0000';
        await sleep(speed);
        let first = start+1;
        let last = end;
        let e2=document.getElementById('elem'+first);
        e2.style.backgroundColor='yellow';
        let e3=document.getElementById('elem'+last);
        e3.style.backgroundColor='yellow';
        while (first < last) {
            while (arr[first] <= pivot){
                if(first+1!=last)await sleep(speed);
                e2=document.getElementById('elem'+first);
                e2.style.backgroundColor='#48c486';
                first++;
                e2=document.getElementById('elem'+first);
                e2.style.backgroundColor='yellow';
                if(first==last)break;
            }
            while (first<=last && arr[last] > pivot){
                await sleep(speed);
                e3=document.getElementById('elem'+last);
                e3.style.backgroundColor='#48c486';
                last--;
                e3=document.getElementById('elem'+last);
                e3.style.backgroundColor='yellow';
                if(start+1==last)break;
            }
            if (first < last) {
                [arr[first], arr[last]] = [arr[last], arr[first]];
                await sleep(speed);
                swapHeight(first,last);

            }
        }
        await sleep(speed);
        [arr[start], arr[last]] = [arr[last], arr[start]];
        swapHeight(start,last);
        swapColor(start,last);
        
        await sleep(speed);
        e1.style.backgroundColor='#48c486';
        if(first!=last){
            e2=document.getElementById('elem'+first);
            e2.style.backgroundColor='#48c486';
        }
        // let part = partition(arr, start, end);
        await sleep(speed);
        e3=document.getElementById('elem'+last);
        e3.style.backgroundColor='grey'; 
        await sleep(speed);
        await quickSort(arr, start, last-1,speed);
        await quickSort(arr, last + 1, end,speed);
        await sleep(speed);
    }
    else{
        let e=document.getElementById('elem'+start);
        e.style.backgroundColor='#FF0000'; 
        await sleep(speed);
        e.style.backgroundColor='grey'; 
    }
}

async function swapHeight(first,last) {
    
    let e1 = document.getElementById('elem' +first);
    let e2 = document.getElementById('elem' +last);
    
    let h1=e1.clientHeight;
    let h2=e2.clientHeight;
    e1.style.height = h2+"px";
    e2.style.height = h1+"px";

}

function swapColor(first,last){
    let e1 = document.getElementById('elem' +first);
    let e2 = document.getElementById('elem' +last);

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor=tempcolor;
}

export { quickSort };
// export { partition };