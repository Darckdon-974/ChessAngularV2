import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { MoveService } from './move.service';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { AuthenticationGuard } from '../auth/guard/auth.guard';

@Controller('move')
export class MoveController {
  constructor(private readonly moveService: MoveService) {}

  @Post('/')
  @UseGuards(AuthenticationGuard)
  async create(@Body() createMoveDto: CreateMoveDto) {
    return this.moveService.create(createMoveDto);
  }

  @Get()
  async findAll() {
    return this.moveService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.moveService.findOne(+id);
  }

  @Patch('/:id')
  @UseGuards(AuthenticationGuard)
  async update(@Param('id') id: number, @Body() updateMoveDto: UpdateMoveDto) {
    return this.moveService.update(+id, updateMoveDto);
  }

  @Delete('/:id')
  @UseGuards(AuthenticationGuard)
  async remove(@Param('id') id: number) {
    return this.moveService.remove(+id);
  }
}
