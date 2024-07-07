import { EmailIcon, GithubIcon, HeartIcon } from './components/icon';
import { loadProject } from './components/Project';
import { loadFooter } from './components/Footer';
import { loadNavbar } from './components/Navbar';
import { loadBloglink } from './components/Bloglink';
import './main.css'

loadProject();
loadFooter();
loadNavbar();
loadBloglink();

customElements.define('heart-icon', HeartIcon);
customElements.define('email-icon', EmailIcon);
customElements.define('github-icon', GithubIcon);
