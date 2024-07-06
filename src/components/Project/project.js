import { html } from "../core";

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

            this.links = [];
            this.tags = [];
            this.name = '';
            this.description = '';
        }

        static get observedAttributes() {
            return ['name', 'description', 'links', 'tags'];
        }

        /**
            * @param {string} property
            * @param {any} _
            * @param {any} newValue
            */
        attributeChangedCallback(property, _, newValue) {
            let val = newValue;

            if (property == 'links' || property == 'tags') {
                val = newValue.split(',');
            }

            this[property] = val;
        }

        connectedCallback() {
            this.innerHTML = content;

            this.querySelector('slot.name').outerHTML = this.name;
            this.querySelector('slot.description').outerHTML = this.description;

            let linksHtml = '';
            for (const link of this.links) {
                linksHtml += html(`
                    <a class='pl-1 pr-1' href='${link}'>${link.replace('https://', '')}</a>
                `);
            }
            this.querySelector('slot.links').outerHTML = linksHtml;

            let tagsHtml = '';
            for (const tag of this.tags) {
                tagsHtml += html(`
                    <li class="bg-gray-700/50 p-0.5">
                        ${tag} 
                    </li>
                `);
            }
            this.querySelector('slot.tags').outerHTML = tagsHtml;
        }
    }
}

export const loadProject = () => {
    fetch("/templates/project.html")
        .then(stream => stream.text())
        .then(text => {
            const element = define(text);
            console.log(`Loaded elemenet project: ${element}`);
            customElements.define('define-project', element);
        });
}
