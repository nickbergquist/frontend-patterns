
{
    // add/remove .focus class on label span if input is activated or contains valid contents.

    const formAlternate = document.querySelector('.form-css-js');
    const inputs = formAlternate.querySelectorAll('.input-form');

    formAlternate.classList.add('labels-floated');

    for (var input of inputs) {
        
        const labelSpan = input.previousElementSibling.firstChild;
        
        input.addEventListener('click', function() {
            
            labelSpan.classList.add('focus');
        });

        input.addEventListener('focus', function() {
            
            labelSpan.classList.add('focus');
        });
        
        input.addEventListener('blur', function() {
            
            if(!input.validity.valid) {

                labelSpan.classList.remove('focus');
            }
        });
    }
}
