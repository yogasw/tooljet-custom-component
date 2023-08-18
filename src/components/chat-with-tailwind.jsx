import * as React from 'https://esm.sh/react';

const Head = () => (
    <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet"/>
    </head>
);
const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]


const ChatWithTailwind = ({data, updateData, runQuery}) => (
    <div>
        <Head/>
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
            <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                </div>

                <div className="bg-gray-300 p-4">
                    <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text"
                           placeholder="Type your message…">
                    </input>
                </div>
            </div>
        </div>
    </div>
);

export default ChatWithTailwind;

//for tooljet
// import {createRoot} from 'https://esm.sh/react-dom@18.2.0';
// const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
// createRoot(document.body).render(<ConnectedComponent/>);
