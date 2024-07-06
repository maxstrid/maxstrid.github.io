/**
    * Defines the footer class
    * @param {string} content
    */
function define(content) {
    return class Footer extends HTMLElement {
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

export const loadFooter = () => {
    fetch("templates/footer.html")
        .then(stream => stream.text())
        .then(text => {
            const element = define(text);
            console.log(`Loaded element mh-footer: ${element}`);
            customElements.define('mh-footer', element);
        });
}
