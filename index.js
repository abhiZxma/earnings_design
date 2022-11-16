
// problem 1
 function stringGenerator(str){
    let main_arr=str.match(/.{1,2}/g)
    let large_str=``
    let index=0
    for (let main_index = 0; index < main_arr.length; index+1) {
        const ele=main_arr[main_index]
        index=main_arr.indexOf(ele)
        if(index!=main_arr.length-1){
            let nex_ele=main_arr[index+1]
            let nex_arr=nex_ele.split('')
            if(nex_arr.length==1){
                let arr=ele.split('')
                let char=arr[0]
                console.log("save")
                let count=Number(`${arr[1]}${arr[0]}`)
                for (let i = 0; i < count; i++) {
                    large_str+=`${char}`
                }
            }else{
                let arr=ele.split('')
                let char=arr[0]
                let count=Number(arr[1])
                for (let i = 0; i < count; i++) {
                    large_str+=`${char}`
                }
            }    
        }
    }
    console.log("large_str",large_str)

 }
 stringGenerator('C1e7h3P4k11')

 // problem 2
 function getDiscount(val){
     let str=``
     if(val>=1 && val <= 400){
         let discount_val = (val*5)/100
         let remainig_amt = val-discount_val
        str=`Your commission rate is 5% you will get ${discount_val} and remaining amount is $${remainig_amt}`
     }
     if(val>401 && val <= 800){
        let discount_val = (val*4)/100
        let remainig_amt = val-discount_val
        str=`Your commission rate is 4% you will get ${discount_val} and remaining amount is $${remainig_amt}`
     }
     if(val>801 && val <= 1200){
        let discount_val = (val*3)/100
        let remainig_amt = val-discount_val
        str=`Your commission rate is 3% you will get ${discount_val} and remaining amount is $${remainig_amt}`
    }
    if(val>1201 && val <= 9000){
        let discount_val = (val*2)/100
        let remainig_amt = val-discount_val
        str=`Your commission rate is 2% you will get ${discount_val} and remaining amount is $${remainig_amt}`
    }
    if(val>9001 && val <= 15000){
        let discount_val = (val*1)/100
        let remainig_amt = val-discount_val
        str=`Your commission rate is 1% you will get ${discount_val} and remaining amount is $${remainig_amt}`
    }
  
   console.log("str",str) 
}
getDiscount(489)

// problem 3
function getStringCount(str){
    let arr=str.split(' ')
    let map_obj={}
    arr.map((ele)=>{
        if(map_obj[ele]){
            map_obj[ele]=map_obj[ele]+1
        }else{
            map_obj[ele]=1
        }
    })
    Object.keys(map_obj).map(key=>{
        console.log(`${key} : ${map_obj[key]}`)
    })
}
getStringCount("virat sachin dhoni virat rahul virat rahul sachin")