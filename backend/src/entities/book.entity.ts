import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({ description: 'Unique identifier for the book' })
  id: number;

  @ApiProperty({ description: 'Title of the book' })
  title: string;

  @ApiProperty({ description: 'Author of the book' })
  author: string;

  @ApiProperty({ description: 'Genre of the book' })
  genre: string;

  @ApiProperty({ description: 'Year the book was published' })
  publishedYear: number;

  @ApiProperty({ description: 'Description of the book' })
  description: string;

  @ApiProperty({ description: 'Price of the book' })
  price: number;

  @ApiProperty({ description: 'Whether the book is available for purchase' })
  isAvailable: boolean;

  @ApiProperty({ description: 'When the book was created' })
  createdAt: Date;

  @ApiProperty({ description: 'When the book was last updated' })
  updatedAt: Date;

  constructor(partial: Partial<Book>) {
    Object.assign(this, partial);
  }
}
