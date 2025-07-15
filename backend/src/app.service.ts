import { Injectable } from '@nestjs/common';
import { PublicBookResponse } from './dtos/responses/public.book.response';
import { PublicBooksResponse } from './dtos/responses/public.books.response';
import { BookData } from './repository/book.data.static';

@Injectable()
export class AppService {
  getBooks(): PublicBookResponse[] {
    return BookData.map((book) => ({
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      publishedYear: book.publishedYear,
    }));
  }

  getBooksResponse(): PublicBooksResponse {
    const books = this.getBooks();
    return {
      message: 'Welcome to The Book Nest! Here are some featured books:',
      books: books,
      note: `For complete catalog and pricing, please get an API key`,
    };
  }

  getBookById(id: string): PublicBookResponse | null {
    const book = BookData.find((book) => book.id === parseInt(id));
    if (!book) {
      return null;
    }
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      publishedYear: book.publishedYear,
    };
  }
}
