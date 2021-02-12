//import axios from 'axios';

const form = document.querySelector('#form');
const formEvent = form.addEventListener('submit', async e => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const contact = document.querySelector('#phone').value;

    const person = {
        name,
        email,
        contact
    };

    console.log(person);

    try {
        const res = await axios.post('https://hooks.zapier.com/hooks/catch/9484398/opr5hu8/', person, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        console.log('Sent info', res.data);
    }
    catch(e) {
        console.error('e')
    }
})