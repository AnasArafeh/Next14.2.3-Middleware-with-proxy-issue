export const getData = async (path) => {
    let res: any = undefined;
    
    await fetch(`https://localhost:7254/home`, {
        cache: 'no-cache',
       
    })
        .then((response) => {
            console.log("inside content api then")
            res = response;
        })
        .catch((error) => {
            console.log(error)
        })

    return res;
}