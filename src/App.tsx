import { HomeIcon, InboxIcon } from '@heroicons/react/16/solid'
import githubLogo from './assets/github-mark.svg';

function Project({ name, description, tags, gh_link, link }: { name: string, description: string, tags: string[], gh_link: string, link?: string }) {
    return (
        <a
            href={gh_link}
            className='group flex flex-col space-y-2 bg-gray-200 w-fit p-4 rounded-xl no-underline hover:bg-blue-200'
        >
            <h2 className='font-xl flex space-x-2'>
                {name}
            </h2>
            <p><span className='font-bold'>Description:</span> {description}</p>

            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-row space-x-2'>
                    {tags.map((name: string) => {
                        return <p className='group-hover:bg-blue-300 bg-gray-300 w-fit p-2 rounded-md' key={name}>{name}</p>
                    })}
                </div>
                {link != undefined ?
                    <p>
                        <a href={link}>App Link</a>
                    </p> : null}
            </div>
        </a>
    )
}

function App() {
    return (
        <>
            <header className='w-full justify-center flex'>
                <nav>
                    <ul className="inline-flex space-x-8">
                        <li>
                            <a
                                href='/'
                                className='flex flex-row'
                            >
                                <HomeIcon className='w-5' />Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='mailto:mxwhenderson@gmail.com'
                                className='flex flex-row'
                            >
                                <InboxIcon className='w-5' />
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/maxstrid'
                                className='flex flex-row items-center'
                            >
                                <img src={githubLogo} className='w-4 h-4' />
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </header >
            <div className="m-auto items-center w-full flex flex-col mt-10">
                <h1 className="text-3xl font-bold">Maxwell Henderson</h1>
                <p>Student & Developer</p>
            </div>

            <div className='m-auto mt-4 w-full md:w-2/3'>
                <h3 className='text-l font-bold' id="languages">
                    <a href='/#languages'>
                        Languages
                    </a>
                </h3>
                <p>Rust, C++, Java, Python, Javascript, Nix</p>
                <h3 className='text-l font-bold mt-4' id='tools'>
                    <a href="/#tools">
                        Tools
                    </a>
                </h3>
                <p>React, Svelte, PostgreSQL, Git, Github, Gerrit, Bazel, Cmake, NixOS, AWS Bedrock, Google Cloud Run, Cloudflare</p>
                <h3 className='text-l font-bold mt-4' id='tools'>
                    <a href='/#projects'>
                        Projects
                    </a>
                </h3>
                <ul className='mt-1 mb-5 flex flex-col space-y-2'>
                    <li>
                        <Project
                            name="mvhs-master-schedule"
                            description='Me and a partner created a web application to manage and automatically generate optimized school wide schedules, and deployed onto google cloud run using docker.'
                            tags={['React', 'Python', 'GCloud', 'Docker', 'Firebase']}
                            gh_link='https://github/maxstrid/mvhs-master-schedule'
                            link='https://mvhs-master-schedule.web.app/'
                        />
                    </li>
                    <li>
                        <Project
                            name="chatfrc"
                            description='Using OpenAI and Langchain I created a chat app to help other robotics students with general questions. I was then able to deploy it to a remote server using docker compose.'
                            tags={['Svelte', 'Sveltekit', 'OpenAI', 'Langchain', 'Docker']}
                            gh_link='https://github.com/frc971/chatfrc'
                            link='https://chatfrc.app'
                        />
                    </li>
                    <li>
                        <Project
                            name="nixconfig"
                            description='Using the Nix programming language along with NixOS I programatically describe the configurations for 4 machines, setting up a home server cluster and a vpn with wireguard.'
                            tags={['Nix', 'NixOS', 'Docker', 'Wireguard']}
                            gh_link='https://github.com/maxstrid/nixconfig'
                        />
                    </li>
                    <li>
                        <Project
                            name="worktree"
                            description='Using Rust I built a tool to help manage my git worktrees, along with making the transition process easy. I also integrated it with gerrit commands in order to translate gerrit commits into a new worktree.'
                            tags={['Rust', 'Git', 'Gerrit']}
                            gh_link='https://github.com/maxstrid/worktree'
                        />

                    </li>
                </ul>
            </div>
        </>
    )
}

export default App
