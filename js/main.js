!function(I){var g={};function C(A){if(g[A])return g[A].exports;var c=g[A]={i:A,l:!1,exports:{}};return I[A].call(c.exports,c,c.exports,C),c.l=!0,c.exports}C.m=I,C.c=g,C.d=function(I,g,A){C.o(I,g)||Object.defineProperty(I,g,{enumerable:!0,get:A})},C.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},C.t=function(I,g){if(1&g&&(I=C(I)),8&g)return I;if(4&g&&"object"==typeof I&&I&&I.__esModule)return I;var A=Object.create(null);if(C.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:I}),2&g&&"string"!=typeof I)for(var c in I)C.d(A,c,function(g){return I[g]}.bind(null,c));return A},C.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return C.d(g,"a",g),g},C.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},C.p="",C(C.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n// place your code below\r\n\r\n\r\nconsole.log(`Harry. I\'m gonna let you in on a little secret. Every day, once a day, give yourself a present. Don\'t plan it, don\'t wait for it, just.. let it happen.`);\r\n\r\nconst projectsList = document.querySelector(\'.projects__list-js\');\r\n\r\nif (projectsList) {\r\n    /*fetch(\'https://api.bitbucket.org/2.0/repositories/dsikora85\')\r\n        .then(response => response.json())\r\n        .then(response => {\r\n                let values = response.values;\r\n                for (const repo of values) {\r\n                    const { name, website, links, description } = repo;\r\n                    projectsList.innerHTML +=\r\n                        `<li class="project">\r\n                        <div class="project__container">\r\n                            <img src="../assets/img/bitbucket-brands.svg" alt="bitbucket" class="project__icon " />\r\n                            <h2 class="project__title ">${name}</h2>\r\n                            ${\r\n                                description ? `<h3 class="project__desc ">${description}</h3>` : \'\'\r\n                              }    \r\n                        </div>\r\n                        <section class="project__links">\r\n   ${\r\nwebsite ? `<a href="${website}" class="project__link project__link--demo" target="_blank" rel="nofollow noreferrer">Demo</a>` : \'\'\r\n   }\r\n                            <a href="${links.html.href}" class="project__link" target="_blank" rel="nofollow noreferrer">Code</a>\r\n                        </section>\r\n                </li>`\r\n            }\r\n        })\r\n        .catch(error => {\r\n            console.log(error);\r\n        });*/\r\n\r\n    fetch(\'https://api.github.com/users/damiansikora85/repos\')\r\n        .then(response => response.json())\r\n        .then(response => {\r\n                for (const repo of response) {\r\n                    if (repo.fork == false) {\r\n                        const { name, description, html_url, homepage } = repo;\r\n                        projectsList.innerHTML +=\r\n                            `<li class="project">\r\n                            <div class="project__container">\r\n                                <img src="../assets/img/githubIcon.svg" alt="github" class="project__icon " />\r\n                                <h2 class="project__title ">${name}</h2>\r\n                                ${\r\n                                    description ? `<h3 class="project__desc ">${description}</h3>` : \'\'\r\n                                }    \r\n                            </div>\r\n                            <section class="project__links">\r\n                            ${\r\n                                homepage ? `<a href="${homepage}" class="project__link project__link--demo" target="_blank" rel="nofollow noreferrer">Demo</a>` : \'\'\r\n                            }\r\n                                <a href="${html_url}" class="project__link" target="_blank" rel="nofollow noreferrer">Code</a>\r\n                            </section>\r\n                    </li>`\r\n                }\r\n            }\r\n        })\r\n        .catch(error => {\r\n            console.log(error);\r\n        });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQSw0RUFBNEUsWUFBWTtBQUN4RiwrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdDQUF3QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxLQUFLO0FBQ25FO0FBQ0EsZ0ZBQWdGLFlBQVk7QUFDNUYsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5cclxuY29uc29sZS5sb2coYEhhcnJ5LiBJJ20gZ29ubmEgbGV0IHlvdSBpbiBvbiBhIGxpdHRsZSBzZWNyZXQuIEV2ZXJ5IGRheSwgb25jZSBhIGRheSwgZ2l2ZSB5b3Vyc2VsZiBhIHByZXNlbnQuIERvbid0IHBsYW4gaXQsIGRvbid0IHdhaXQgZm9yIGl0LCBqdXN0Li4gbGV0IGl0IGhhcHBlbi5gKTtcclxuXHJcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbGlzdC1qcycpO1xyXG5cclxuaWYgKHByb2plY3RzTGlzdCkge1xyXG4gICAgLypmZXRjaCgnaHR0cHM6Ly9hcGkuYml0YnVja2V0Lm9yZy8yLjAvcmVwb3NpdG9yaWVzL2RzaWtvcmE4NScpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSByZXNwb25zZS52YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlcG8gb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB3ZWJzaXRlLCBsaW5rcywgZGVzY3JpcHRpb24gfSA9IHJlcG87XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPGxpIGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvYml0YnVja2V0LWJyYW5kcy5zdmdcIiBhbHQ9XCJiaXRidWNrZXRcIiBjbGFzcz1cInByb2plY3RfX2ljb24gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3RfX3RpdGxlIFwiPiR7bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA/IGA8aDMgY2xhc3M9XCJwcm9qZWN0X19kZXNjIFwiPiR7ZGVzY3JpcHRpb259PC9oMz5gIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJvamVjdF9fbGlua3NcIj5cclxuICAgJHtcclxud2Vic2l0ZSA/IGA8YSBocmVmPVwiJHt3ZWJzaXRlfVwiIGNsYXNzPVwicHJvamVjdF9fbGluayBwcm9qZWN0X19saW5rLS1kZW1vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9yZWZlcnJlclwiPkRlbW88L2E+YCA6ICcnXHJcbiAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2xpbmtzLmh0bWwuaHJlZn1cIiBjbGFzcz1cInByb2plY3RfX2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyXCI+Q29kZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2RhbWlhbnNpa29yYTg1L3JlcG9zJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXBvIG9mIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcG8uZm9yayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBodG1sX3VybCwgaG9tZXBhZ2UgfSA9IHJlcG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgKz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2dpdGh1Ykljb24uc3ZnXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3M9XCJwcm9qZWN0X19pY29uIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdF9fdGl0bGUgXCI+JHtuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPyBgPGgzIGNsYXNzPVwicHJvamVjdF9fZGVzYyBcIj4ke2Rlc2NyaXB0aW9ufTwvaDM+YCA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcm9qZWN0X19saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lcGFnZSA/IGA8YSBocmVmPVwiJHtob21lcGFnZX1cIiBjbGFzcz1cInByb2plY3RfX2xpbmsgcHJvamVjdF9fbGluay0tZGVtb1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIj5EZW1vPC9hPmAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2h0bWxfdXJsfVwiIGNsYXNzPVwicHJvamVjdF9fbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIj5Db2RlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);