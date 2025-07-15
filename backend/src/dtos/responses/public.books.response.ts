import { ApiProperty } from '@nestjs/swagger';
import { PublicBookResponse } from './public.book.response';

export class PublicBooksResponse {
  @ApiProperty({ description: 'The message of the response' })
  message: string;

  @ApiProperty({ description: 'The books of the response' })
  books: PublicBookResponse[];

  @ApiProperty({ description: 'The note of the response' })
  note: string;
}
