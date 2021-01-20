
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const rootDir = path.join(process.cwd(), 'books/collection');

export function getSortedBooks() {

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

    return booksList.sort((a, b) => (
        a.date < b.date ? 1 : -1
    ));
}