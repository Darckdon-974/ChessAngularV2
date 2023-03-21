import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoveService } from './move.service';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { AuthGuard } from '../auth/auth.guard';

@Controller('move')
@UseGuards(AuthGuard)
export class MoveController {
  constructor(private readonly moveService: MoveService) {}

  @Post()
  create(@Body() createMoveDto: CreateMoveDto) {
    return this.moveService.create(createMoveDto);
  }

  @Get()
  findAll() {
    return this.moveService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.moveService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateMoveDto: UpdateMoveDto) {
    return this.moveService.update(+id, updateMoveDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moveService.remove(+id);
  }
}
