//import axios from 'axios';

const form = document.querySelector('#form');
const formEvent = form.addEventListener('submit', function() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const contact = document.querySelector('#phone').value;

    const person = {
        name,
        email,
        contact
    };

    try {
        axios.post('https://hooks.zapier.com/hooks/catch/9484398/opr5hu8/', person, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    }
    catch(e) {
        console.error('e')
    }
})