function totalAge(a){
    let arr = a.map(item=>item.age)
    return arr.reduce((a,b)=>a+b,0)
 }
 console.log(totalAge([{name:"ayo",age:34},{name:"bj",age:29},{name:"lp",age:33}]))
 console.log(totalAge([{name:"lekan",age:23},{name:"bj",age:40}]))
