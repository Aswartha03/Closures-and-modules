let solving=function (arr1,arr2){
    let filterEvenNumbers=function(arr){
        let ans=arr.filter((element,index)=>{
            return (element%2==0)
        })
        return ans
    }
    console.log(filterEvenNumbers(arr1))
    console.log(filterEvenNumbers(arr2))

    let sumOfArray=function(arr){
        let ans=arr.reduce((present,next)=>{
            return present+next
        },0)
        return "the sum of array is: "+ ans
    }
    console.log(sumOfArray(arr1))
    console.log(sumOfArray(arr2))

    let sortAndConcat=function (A,B){
        let ans1=A.sort((i,j)=>(i-j))
        let ans2=B.sort((a,b)=>(a-b))
        let result=ans1.concat(ans2)
        return result
    }
    console.log(sortAndConcat(arr1,arr2))


}

a=[35,93,39,20,56,90,45,34]
b=[43,52,87,9,24,293,24]
solving(a,b)