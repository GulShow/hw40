'use strict';

(function() {
    document.querySelector('#form')
        .addEventListener('submit', (e) => {
        e.preventDefault();
        const {target: form} = e;

        const inputs = form.querySelectorAll('input, select, textarea');

        const formData = {};

        for (const input of inputs) {
            const {name, value} = input
            formData[name] = value
        }
            console.log(formData);
            localStorage.setItem('formData', JSON.stringify(formData))
    })

})()
