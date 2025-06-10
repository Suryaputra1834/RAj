function viv (){ 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("done");
        }, 6000);
    });
}
async function wiw(){
    console.log("waiting...");
    const result =  await viv();
    console.log(result);
}
wiw();