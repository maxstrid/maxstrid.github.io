/**
    * Defines the navbar class
    * @param {string} content
    */
function define(content) {
    return class Navbar extends HTMLElement {
        /**
            * Represents an individual footer
            * @constructor
            */
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = content;
        }
    }
}

export const loadNavbar = () => {
    fetch("templates/navbar.html")
        .then(stream => stream.text())
        .then(text => {
            const element = define(text);
            console.log(`Loaded element mh-navbar: ${element}`);
            customElements.define('mh-navbar', element);
        });
}
