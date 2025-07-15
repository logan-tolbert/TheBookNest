export class Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  description: string;
  price: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Book>) {
    Object.assign(this, partial);
  }
}
