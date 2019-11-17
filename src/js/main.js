"use strict";

// place your code below


console.log(`Harry. I'm gonna let you in on a little secret. Every day, once a day, give yourself a present. Don't plan it, don't wait for it, just.. let it happen.`);

const projectsList = document.querySelector('.projects__list-js');

if (projectsList) {
    /*fetch('https://api.bitbucket.org/2.0/repositories/dsikora85')
        .then(response => response.json())
        .then(response => {
                let values = response.values;
                for (const repo of values) {
                    const { name, website, links, description } = repo;
                    projectsList.innerHTML +=
                        `<li class="project">
                        <div class="project__container">
                            <img src="../assets/img/bitbucket-brands.svg" alt="bitbucket" class="project__icon " />
                            <h2 class="project__title ">${name}</h2>
                            ${
                                description ? `<h3 class="project__desc ">${description}</h3>` : ''
                              }    
                        </div>
                        <section class="project__links">
   ${
website ? `<a href="${website}" class="project__link project__link--demo" target="_blank" rel="nofollow noreferrer">Demo</a>` : ''
   }
                            <a href="${links.html.href}" class="project__link" target="_blank" rel="nofollow noreferrer">Code</a>
                        </section>
                </li>`
            }
        })
        .catch(error => {
            console.log(error);
        });*/

    fetch('https://api.github.com/users/damiansikora85/repos')
        .then(response => response.json())
        .then(response => {
                for (const repo of response) {
                    if (repo.fork == false) {
                        const { name, description, html_url, homepage } = repo;
                        projectsList.innerHTML +=
                            `<li class="project">
                            <div class="project__container">
                                <img src="../assets/img/githubIcon.svg" alt="github" class="project__icon " />
                                <h2 class="project__title ">${name}</h2>
                                ${
                                    description ? `<h3 class="project__desc ">${description}</h3>` : ''
                                }    
                            </div>
                            <section class="project__links">
                            ${
                                homepage ? `<a href="${homepage}" class="project__link project__link--demo" target="_blank" rel="nofollow noreferrer">Demo</a>` : ''
                            }
                                <a href="${html_url}" class="project__link" target="_blank" rel="nofollow noreferrer">Code</a>
                            </section>
                    </li>`
                }
            }
        })
        .catch(error => {
            console.log(error);
        });
}