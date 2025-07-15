import { ApiProperty } from '@nestjs/swagger';

export class PublicBookResponse {
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
}
