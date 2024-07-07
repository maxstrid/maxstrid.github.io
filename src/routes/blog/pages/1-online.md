07/08/24

# Hello, World? 

If you're seeing this it means I have forced webpack into thinking its a static site generator. It also means the javascript gods look down upon me *unfavorably*.

## But why?

I wanted to get a good mix between raw static sites and a more dynamic react site. I honestly could have picked literally any other framework to do this for me, but I just wanted to get the experience using webpack.

\
This site is also a nice place to test out using more vanilla javascript, in a svelte and react world its hard to be connected to new core browser features.

### A Sidebar on Web Components

This website also let me try out the most intriguing "new" javascript feature to me, web components. Web components enable my navbar and footer. Which are just `<mh-navbar></mh-navbar>` and `<mh-footer></mh-footer>`. I didn't want to use libraries like [lit](https://lit.dev/), because honestly the ergonomics of default web components are pretty nice. The way I have it formatted is:
```
components/
    Footer/
        index.js
        footer.html
        footer.js
    Navbar/
        index.js
    ... and so on
```

Inside of the html file lives the template. In the js I load that file and then create the class with the `innerHTML` being the content of that file. Meaning once assigned I can just run `querySelector` on it like any other document.

```javascript
export const loadFooter = () => {
    fetch("/templates/footer.html")
    .then(stream => stream.text())
    .then(text => {
        const element = define(text);
        console.log(`Loaded element mh-footer: ${element}`);
        customElements.define('mh-footer', element);
    });
}
```

Here it loads the html file (placed in templates via webpack). It then calls `define` on the text, which initializes a class extending `HTMLElement` which sets its `innerHTML` to the content of the file. In this case there's no need to run `querySelector` on anything but I do end up using that for the project component I use on my [projects](https://maxwellh.dev/projects) page.

\
The other nice part about this is that it's pretty transparent on the html side, which is not something you're as easily afforded in frameworks like react. With web components its defined as `mh-footer` in the raw html and will be `mh-footer` in the page source.

### Back to the point ...

Generally building this site has been a pretty cool experience, getting stuff like tailwindcss working in webpack has given me a better view on how a lot of the tools of the web are put together. And why I will stick to using vite in production.

## What Have We Learned?

Mainly how much I find web components enjoyable, and how much I still hate webpack.
