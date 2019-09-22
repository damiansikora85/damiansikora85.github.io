"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below


console.log(`Hello world!`);

const projectsList = document.querySelector('.projects__list-js');
console.log(projectsList);

if (projectsList) {
    fetch('https://api.github.com/users/damiansikora85/repos')
        .then(response => response.json())
        .then(response => {
            for (const repo of response) {
                const { name, html_url, description } = repo;
                projectsList.innerHTML +=
                    `<li class="project">
                <img src="../assets/img/githubIcon.svg" alt="github" class="project__icon " />
                        <h2 class="project__title ">${name}</h2>
                        <h3 class="project__desc ">${description}</h3>
                        <section class="project__links">
                            <a href=" " class="project__link">
                                <img src=" " alt=" " />
                                <h3>Demo</h3>
                            </a>

                            <a href=" " class="project__link">
                                <img src=" " alt=" " />
                                <h3>Code</h3>
                            </a>
                        </section>
                </li>`
            }
        })
        .catch(error => {
            console.log(error);
        });
}