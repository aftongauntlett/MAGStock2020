lakeStart = 0;
lakeEnd = 1;

hoursStart = 0;
hoursEnd = 72;

villagersStart = 0;
villagersEnd = 500;

kbpsStart = 0;
kbpsEnd = 101;

const iterateNum = function(start, end, id){
    start += Math.ceil((end - start) / 50);
    document.getElementById(id).innerHTML = start;
    if (start < end){
        setTimeout(() => iterateNum(start,end,id), 20)
    }
}

iterateNum(hoursStart, hoursEnd, 'hoursnum');
iterateNum(lakeStart, lakeEnd, 'lakenum');
iterateNum(villagersStart, villagersEnd, 'villagersnum', 5)	
iterateNum(kbpsStart, kbpsEnd, 'kbpsnum')