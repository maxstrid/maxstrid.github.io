/**
    * Defines the bloglink class
    * @param {string} content
    */
function define(content) {
    return class Bloglink extends HTMLElement {
        /**
            * Represents an individual blog link
            * @constructor
            */
        constructor() {
            super();

            this.link = '';

            this.name = '';
            this.date = '';
        }

        static get observedAttributes() {
            return ['link'];
        }

        /**
            * @param {string} property
            * @param {any} _
            * @param {any} newValue
            */
        attributeChangedCallback(property, _, newValue) {
            this[property] = newValue;

            if (property == 'link') {
                this.extractContent(this.link);
            }
        }

        /**
            * @param {string} link
            */
        extractContent(link) {
            fetch(link)
                .then(stream => stream.text())
                .then(text => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, "text/html");

                    this.name = doc.querySelector('#article h1').textContent;
                    this.date = doc.querySelector('#article p').textContent;

                    this.connectedCallback();
                })
        }

        connectedCallback() {
            this.innerHTML = content;

            this.querySelector('a').href = this.link;
            this.querySelector('slot.name').outerHTML = this.name;
            this.querySelector('slot.date').outerHTML = this.date;
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
