import { buildBasicComponent, html } from "./core";

export const Navbar = buildBasicComponent(html(`
<header class="m-auto bg-gray-700/50 p-4  lg:w-1/2 md:w-2/3 sm:w-full mt-5">
    <nav class="flex flex-row flex-1 items-center justify-center font-work-sans w-full">
        <div class="flex items-end justify-start w-full">
            <a href="/">
                <h1 class="font-bold text-xl text-accent">maxwellh.dev</h1>
            </a>
            <div class="animate-blink w-3 h-0.5 bg-white mb-1"></div>
        </div>
        <ul class="font-bold flex space-x-2">
            <li>
                <a href="/projects" class="hover:bg-accent/50 p-1">
                    Projects
                </a>
            </li>
            <li>
                <a href="/blog" class="hover:bg-accent/50 p-1">
                    Blog
                </a>
            </li>
        </ul>
        <ul class="flex justify-end space-x-2 w-full">
            <li>
                <a href="https://github.com/maxstrid/">
                    <github-icon></github-icon>
                </a>
            </li>
            <li>
                <a href="mailto:mxwhenderson@gmail.com">
                    <email-icon class="size-5"></email-icon>
                </a>
            </li>
        </ul>
    </nav>
</header>
`));
