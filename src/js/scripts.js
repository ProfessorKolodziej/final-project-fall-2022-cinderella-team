// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


document.body.addEventListener('change', function (e) {
    let target_id = e.target.id;
    let output = document.getElementById("output");
    let output2 = document.getElementById("output2");
    output.innerHTML = "";
    output2.innerHTML = "";

    const wrongMessage = '<span class="error">Oops! That’s not quite right. Try again!</span>';
    const correctMessage = '<span class="success">Well done! That’s correct!</span>';

    switch (target_id) {
        case "attend-yes":
            output.innerHTML = wrongMessage;
            break;
        case "attend-no":
            output.innerHTML = correctMessage;
            break;
        case "catch-yes":
            output2.innerHTML = wrongMessage;
            break;
        case "catch-no":
            output2.innerHTML = correctMessage;
            break;
    }
});

document.getElementById('submit-items').addEventListener('click', function() {
    let correctItems = ['pumpkin', 'lizards', 'mice'];
    let selectedItems = document.querySelectorAll('input[name="item"]:checked');
    let selectedValues = Array.from(selectedItems).map(item => item.value);
    let correctCount = selectedValues.filter(value => correctItems.includes(value)).length;

    let feedbackElement = document.getElementById("items-feedback");

    if (correctCount === correctItems.length && correctCount === selectedItems.length) {
        feedbackElement.innerHTML = '<span class="success">You got it right! Well done!</span>';
    } else {
        feedbackElement.innerHTML = '<span class="error">Nice try! But some answers are not quite right.</span>';
    }
});

document.querySelector('.link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetElement = document.getElementById(this.getAttribute('href').substring(1));
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});