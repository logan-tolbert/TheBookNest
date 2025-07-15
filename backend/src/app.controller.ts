import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { PublicBooksResponse } from './dtos/responses/public.books.response';
import { PublicBookResponse } from './dtos/responses/public.book.response';

@ApiTags('V1/Books')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('v1/books/')
  @ApiOperation({ summary: 'Get public books catalog' })
  @ApiResponse({
    status: 200,
    description:
      'Returns a limited books catalog for public browsing (no authentication required)',
    type: PublicBooksResponse,
  })
  getBooksResponse(): PublicBooksResponse {
    return this.appService.getBooksResponse();
  }

  @Get('v1/books/:id')
  @ApiOperation({ summary: 'Get public book details' })
  @ApiResponse({
    status: 200,
    description:
      'Returns basic book information for public viewing (no authentication required)',
    type: PublicBookResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found',
  })
  getBookById(@Param('id') id: string): PublicBookResponse | null {
    return this.appService.getBookById(id);
  }
}
