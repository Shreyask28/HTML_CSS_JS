

    const countDisplay = document.querySelector('#counter');
    const incrementBtn = document.querySelector('#incrementBtn');
    const decrementBtn = document.querySelector('#decrementBtn');
    const resetBtn = document.querySelector('#resetBtn');

    
    let count = 0;

    incrementBtn.addEventListener('click', function () {
        count++
        countDisplay.textContent = count;
    })
    decrementBtn.addEventListener('click', function () {
       if(count > 0) count--
        countDisplay.textContent = count;
    })
    resetBtn.addEventListener('click', function () {
        count = 0;
        countDisplay.textContent = count;
    })






    