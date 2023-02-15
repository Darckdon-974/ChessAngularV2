import { MoveService } from './move.service';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
export declare class MoveController {
    private readonly moveService;
    constructor(moveService: MoveService);
    create(createMoveDto: CreateMoveDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMoveDto: UpdateMoveDto): string;
    remove(id: string): string;
}
