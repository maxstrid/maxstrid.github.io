/**
    * Defines the project class
    * @param {string} content
    */
function define(content) {
    return class Project extends HTMLElement {
        /**
            * Represents an individual project showcase
            * @constructor
            */
        constructor() {
            super();

            this.name = '';
            this.link = '';
        }

        static get observedAttributes() {
            return ['name', 'link'];
        }

        /**
            * @param {string} property
            * @param {any} _
            * @param {any} newValue
            */
        attributeChangedCallback(property, _, newValue) {
            this[property] = newValue;
        }

        connectedCallback() {
            this.innerHTML = content;

            this.querySelector('a').href = this.link;
            this.querySelector('slot.name').outerHTML = this.name;
        }
    }
}

export const loadBloglink = () => {
    fetch("/templates/bloglink.html")
        .then(stream => stream.text())
        .then(text => {
            const element = define(text);
            console.log(`Loaded elemenet blog-link: ${element}`);
            customElements.define('blog-link', element);
        });
}
