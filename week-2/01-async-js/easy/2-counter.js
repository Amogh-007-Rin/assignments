// solution for the assignment exercise 2-counter.md (solution involves recurssion approach to make a time that mimics setInteervel function )
h1 = document.querySelector(".heading")
count = 0;

function counter(){
    h1.innerHTML = count
    count++;

    if(count<Number.POSITIVE_INFINITY){
        setTimeout(counter,1000)
    }
}
counter()