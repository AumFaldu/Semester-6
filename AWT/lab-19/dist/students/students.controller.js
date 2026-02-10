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
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
let StudentsController = class StudentsController {
    any() {
        return 'Any Method called';
    }
    statusCode() {
        return 'Success';
    }
    redirect() {
        return;
    }
    header() {
        return 'Header Sent Successfully';
    }
    wildcardRoute() {
        return 'WildCard route Matched';
    }
    getId(id) {
        return `ID = ${id}`;
    }
    getPrime(start, end) {
        const s = parseInt(start);
        const e = parseInt(end);
        const primes = [];
        for (let i = s; i <= e; i++) {
            if (i < 2)
                continue;
            let flag = false;
            for (let j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                primes.push(i);
            }
        }
        return primes;
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.All)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentsController.prototype, "any", null);
__decorate([
    (0, common_1.Get)('status'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentsController.prototype, "statusCode", null);
__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.Redirect)('https://www.google.com', 302),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "redirect", null);
__decorate([
    (0, common_1.Get)('header'),
    (0, common_1.Header)('Custom-Header', 'Darshan University'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentsController.prototype, "header", null);
__decorate([
    (0, common_1.Get)('profile/*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentsController.prototype, "wildcardRoute", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], StudentsController.prototype, "getId", null);
__decorate([
    (0, common_1.Get)('prime/:start/:end'),
    __param(0, (0, common_1.Param)('start')),
    __param(1, (0, common_1.Param)('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Array)
], StudentsController.prototype, "getPrime", null);
exports.StudentsController = StudentsController = __decorate([
    (0, common_1.Controller)('students')
], StudentsController);
//# sourceMappingURL=students.controller.js.map