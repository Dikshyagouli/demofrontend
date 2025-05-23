//what is callbacks function?
//to pass function as a parameter to another function 

function fetchData(c) {
    console.log("fetching data...");

    setTimeout(() => {
        c("api sucessfully Fetched")
    }, 2000);   
}

fetchData((data) => {
    console.log(data);   
});

const mutateArray = (arr , action) => {
    for (let i = 0; i < array.length; i++) {
     arr[i] = action(arr[i]);   
    }
};

let array = [1,2,3,4,5];
mutateArray(array , (x) => {
    return x * 3;
});
console.log("This is  mutateArray", array);

// promise (resolve , reject , pennding)
const promise = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject("Internal server error");
        resolve({
            data: "data from promise",
        });
    }, 5000)
})
promise
.then((data) => {
    console.log(data);
    
})
.catch((erroe) => {
    console.log(error);
    
});