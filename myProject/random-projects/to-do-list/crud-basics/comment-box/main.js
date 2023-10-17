let form = document.getElementById('form');
let input = document.getElementById('input')
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = 'Post cannot be blank';
        console.log('failure');
    }
    else {
        console.log('success');
        msg.innerHTML = '';
        acceptData();
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Button Clicked')
    formValidation();

});

let data = {};
let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML +=
    `
    <div>
        <p>${data.text}</p>
            <span class="options">
            <ion-icon onClick="editPost(this)" name="create-sharp"></ion-icon>
            <ion-icon onClick="deletePost(this)" name="trash-outline"></ion-icon>
        </span>
    </div>
    `;
    input.value = '';
}

let deletePost = (d) => {
d.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}