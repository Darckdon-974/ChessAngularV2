import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
export declare class MoveService {
    create(createMoveDto: CreateMoveDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMoveDto: UpdateMoveDto): string;
    remove(id: number): string;
}
