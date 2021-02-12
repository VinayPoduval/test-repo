//import axios from 'axios';

const form = document.querySelector('#form');
const formEvent = form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const contact = document.querySelector('#phone');

    const person = {
        name: name.value,
        email: email.value,
        contact: contact.value
    };

    try {
        const res = await axios.post('https://hooks.zapier.com/hooks/catch/9484398/opr5hu8/', person, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        if(res.status === 200) {
            name.value = '';
            email.value = '';
            contact.value = '';
        }
    }
    catch(e) {
        console.error('e')
    }
})