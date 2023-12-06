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
    switch (target_id) {
        case "attend-yes":
            output.innerHTML = '<span class="error">Oops! Try again!</span>';
            break;
        case "attend-no":
            output.innerHTML = '<span class="success">Hooray! That’s right!🌟</span>';
            break;
        case "catch-yes":
            output2.innerHTML = '<span class="success">Hooray! That’s right!🌟</span>';
            break;
        case "catch-no":
            output2.innerHTML = '<span class="error">Oops! Try again!</span>';
            break;
    }
})