let str = 1;
let idx = 0;
loop:
for (idx; idx<10; idx++){
if (idx===1){
continue loop;
}
str = str + idx;
console.log(str);
}