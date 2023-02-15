"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveController = void 0;
const common_1 = require("@nestjs/common");
const move_service_1 = require("./move.service");
const create_move_dto_1 = require("./dto/create-move.dto");
const update_move_dto_1 = require("./dto/update-move.dto");
let MoveController = class MoveController {
    constructor(moveService) {
        this.moveService = moveService;
    }
    create(createMoveDto) {
        return this.moveService.create(createMoveDto);
    }
    findAll() {
        return this.moveService.findAll();
    }
    findOne(id) {
        return this.moveService.findOne(+id);
    }
    update(id, updateMoveDto) {
        return this.moveService.update(+id, updateMoveDto);
    }
    remove(id) {
        return this.moveService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_move_dto_1.CreateMoveDto]),
    __metadata("design:returntype", void 0)
], MoveController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoveController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_move_dto_1.UpdateMoveDto]),
    __metadata("design:returntype", void 0)
], MoveController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoveController.prototype, "remove", null);
MoveController = __decorate([
    (0, common_1.Controller)('move'),
    __metadata("design:paramtypes", [move_service_1.MoveService])
], MoveController);
exports.MoveController = MoveController;
//# sourceMappingURL=move.controller.js.map