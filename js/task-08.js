const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // console.log('submit');
    const {email, password} = event.currentTarget.elements;

    if (email.value==='' || password.value ==='') {
        alert('Please fill out all fields');
            return;
    }
    // console.dir(event.currentTarget.elements);

    const formData = new FormData(event.currentTarget);
    // console.log(formData)
    formData.forEach((value, name)=>{
        console.log('onFormSubmit value', value);
        console.log('onFormSubmit name', name);
        
    })
        event.currentTarget.reset();
}

