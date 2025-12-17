// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Success");
//     },2000)
//         //reject('something went wrong');
//     })
//     promise.then((msg)=>console.log(msg))
//     .catch((err)=>console.log(err));

    // const getData = ()=>{
    //     return fetch('https://jsonplaceholder.typicode.com/posts')
    // }
    // getData().then((res)=>res.json())
    // .then((data)=>console.log(data))
    // .catch((err)=>console.log(err));
    const getData = async (req,res)=>{
        try{
            var res=await fetch('https://jsonplaceholder.typicode.com/posts');
            var data= res.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
        
    }
    getData();