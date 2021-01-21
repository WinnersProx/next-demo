
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const rootDir = path.join(process.cwd(), 'books/collection');

interface Book {
    id: string,
    title: string,
    description?: string
    date: string,
};

export const getSortedBooks = () => {

    const fileNames = fs.readdirSync(rootDir);

    const booksList = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(rootDir, fileName);
        const contents = fs.readFileSync(fullPath, 'utf8');

        const result = matter(contents);

        return {
            id, ...result.data
        };
    });

    return booksList.sort((a:Book, b:Book) => (
        a.date < b.date ? 1 : -1
    ));
}

export function getBookIds() {

    const fileNames = fs.readdirSync(rootDir);

    return fileNames.map(fileName => ({
        params: {
            id: fileName.replace(/\.md$/, '')
        }
    }));
}

export async function getBookDetails(id) {
    const filePath = path.join(rootDir, `${id}.md`);
    const bookFile = fs.readFileSync(filePath, 'utf8');

    const details = matter(bookFile);

    const description = await remark()
        .use(html)
        .process(details.content);

    return {
        id, 
        ...details.data, 
        description: description.toString()
    };
}

