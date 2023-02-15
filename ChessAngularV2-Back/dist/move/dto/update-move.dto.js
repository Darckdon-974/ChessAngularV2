"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMoveDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_move_dto_1 = require("./create-move.dto");
class UpdateMoveDto extends (0, mapped_types_1.PartialType)(create_move_dto_1.CreateMoveDto) {
}
exports.UpdateMoveDto = UpdateMoveDto;
//# sourceMappingURL=update-move.dto.js.map