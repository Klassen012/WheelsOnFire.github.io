function validateForm()
{
    let firstname = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;

    if (firstname === '' || email === '')
    {
        alert('Name and Email are required');
    }

    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(email))
    {
        alert('Please Enter A Valid Email Address');
    }


    return true;
}