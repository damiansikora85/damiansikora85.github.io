!function(g){var I={};function C(c){if(I[c])return I[c].exports;var A=I[c]={i:c,l:!1,exports:{}};return g[c].call(A.exports,A,A.exports,C),A.l=!0,A.exports}C.m=g,C.c=I,C.d=function(g,I,c){C.o(g,I)||Object.defineProperty(g,I,{enumerable:!0,get:c})},C.r=function(g){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},C.t=function(g,I){if(1&I&&(g=C(g)),8&I)return g;if(4&I&&"object"==typeof g&&g&&g.__esModule)return g;var c=Object.create(null);if(C.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:g}),2&I&&"string"!=typeof g)for(var A in g)C.d(c,A,function(I){return g[I]}.bind(null,A));return c},C.n=function(g){var I=g&&g.__esModule?function(){return g.default}:function(){return g};return C.d(I,"a",I),I},C.o=function(g,I){return Object.prototype.hasOwnProperty.call(g,I)},C.p="",C(C.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n// place your code below\r\n\r\n\r\nconsole.log(`Harry. I\'m gonna let you in on a little secret. Every day, once a day, give yourself a present. Don\'t plan it, don\'t wait for it, just.. let it happen.`);\r\n\r\nconst projectsList = document.querySelector(\'.projects__list-js\');\r\n\r\nif (projectsList) {\r\n    fetch(\'https://api.github.com/users/damiansikora85/repos\')\r\n        .then(response => response.json())\r\n        .then(response => {\r\n                for (const repo of response) {\r\n                    const { name, homepage, html_url, description } = repo;\r\n                    projectsList.innerHTML +=\r\n                        `<li class="project">\r\n                        <div class="project__container">\r\n                            <img src="../assets/img/githubIcon.svg" alt="github" class="project__icon " />\r\n                            <h2 class="project__title ">${name}</h2>\r\n                            ${\r\n                                description ? `<h3 class="project__desc ">${description}</h3>` : \'\'\r\n                              }    \r\n                        </div>\r\n                        <section class="project__links">\r\n                        ${\r\n                            homepage ? `<a href="${homepage}" class="project__link project__link--demo" target="_blank" rel="nofollow noreferrer">Demo</a>` : \'\'\r\n                        }\r\n                            \r\n                            <a href="${html_url}" class="project__link" target="_blank" rel="nofollow noreferrer">Code</a>\r\n                        </section>\r\n                </li>`\r\n            }\r\n        })\r\n        .catch(error => {\r\n            console.log(error);\r\n        });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdDQUF3QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0EsNEVBQTRFLFlBQVk7QUFDeEYsK0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RDs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcclxuXHJcblxyXG5jb25zb2xlLmxvZyhgSGFycnkuIEknbSBnb25uYSBsZXQgeW91IGluIG9uIGEgbGl0dGxlIHNlY3JldC4gRXZlcnkgZGF5LCBvbmNlIGEgZGF5LCBnaXZlIHlvdXJzZWxmIGEgcHJlc2VudC4gRG9uJ3QgcGxhbiBpdCwgZG9uJ3Qgd2FpdCBmb3IgaXQsIGp1c3QuLiBsZXQgaXQgaGFwcGVuLmApO1xyXG5cclxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0LWpzJyk7XHJcblxyXG5pZiAocHJvamVjdHNMaXN0KSB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9kYW1pYW5zaWtvcmE4NS9yZXBvcycpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVwbyBvZiByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgaG9tZXBhZ2UsIGh0bWxfdXJsLCBkZXNjcmlwdGlvbiB9ID0gcmVwbztcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9naXRodWJJY29uLnN2Z1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzPVwicHJvamVjdF9faWNvbiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdF9fdGl0bGUgXCI+JHtuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID8gYDxoMyBjbGFzcz1cInByb2plY3RfX2Rlc2MgXCI+JHtkZXNjcmlwdGlvbn08L2gzPmAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcm9qZWN0X19saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXBhZ2UgPyBgPGEgaHJlZj1cIiR7aG9tZXBhZ2V9XCIgY2xhc3M9XCJwcm9qZWN0X19saW5rIHByb2plY3RfX2xpbmstLWRlbW9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyXCI+RGVtbzwvYT5gIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtodG1sX3VybH1cIiBjbGFzcz1cInByb2plY3RfX2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyXCI+Q29kZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);