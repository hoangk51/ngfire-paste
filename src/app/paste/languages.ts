export interface Language {
    short: string;
    title: string;
    default?: boolean;
}
export const LANGS: Language[] = [
    { title: 'C++', short: 'cpp' },
    { title: 'C Sharp', short: 'cs' },
    { title: 'Java', short: 'java' },
    { title: 'Javascript', short: 'javascript' },
    { title: 'Typescript', short: 'typescript' },
    { title: 'JSON', short: 'json' },
    { title: 'Markdown', short: 'markdown' },
    { title: 'PHP', short: 'php' },
    { title: 'Python', short: 'python' },
    { title: 'Ruby', short: 'ruby' },
    { title: 'Swift', short: 'swift' },
    { title: 'HTML', short: 'htmlbars', },
    { title: 'CSS', short: 'css' },
    { title: 'Plain text', short: 'plain', default: true },
];

export function getLang(short: string): Language {
    return LANGS.find(lang => lang.short === short);
}
