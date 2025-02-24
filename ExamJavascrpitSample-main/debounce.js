//example on how debounce function works
//debounce function is used to delay the execution of a function until 
//after a certain amount of time has passed since the last time it was invoked.
// reference https://www.youtube.com/watch?v=yBFHwJgqLD4
const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', debounce(clickLog,2000));

    //here is the another example that doesnt need a debounce in button click
    //button.addEventListener('click', () => {
    //  clickLog();
    //  button.disabled = true;
    //  setTimeout(() => button.disabled = false, 2000);
    //});
}
const clickLog = () => console.log('clicked');

document.addEventListener('DOMContentLoaded', initApp);

const debounce = (fn, delay) => {
    let id;
    console.log(`Id at immediate call ${id}`);
    return (...args)  => {
        console.log(`previous ${id}`);
        if(id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

//this is the best example using a debounce function
document.getElementById('filtertext').addEventListener('input', debounce(e => filterPost(e.target.value), 300));
