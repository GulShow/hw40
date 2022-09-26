'use strict';
(function render() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = `${localStorage.getItem('formData')}`;
    if(!localStorage.length) {
        li.innerHTML = 'Please fill the form'
    }
    ul.append(li);
    document.body.append(ul);
})()
