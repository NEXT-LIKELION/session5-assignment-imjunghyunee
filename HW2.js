let j = 4;
let blank = " ";
let asterix = "*";
for (let i = 0; i < 5; i++) {
    blank_tmp = blank.repeat(j);
    cnt = i * 2 + 1;
    asterix_tmp = asterix.repeat(cnt);
    console.log(blank_tmp + asterix_tmp);
    j--;
}