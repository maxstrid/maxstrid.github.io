// Creates a basic component without attributes, just to be reusable.
export const buildBasicComponent = (content) => {
    return class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = content;
        }
    }
}

// This tricks my editor into syntax highlighting the html
export const html = (input) => { return input; }
