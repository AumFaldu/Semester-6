"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
let StudentService = class StudentService {
    students = [
        { id: 1, name: 'Aum', age: 20, course: 'CS' },
        { id: 2, name: 'Rahul', age: 21, course: 'IT' },
    ];
    create(createStudentDto) {
        this.students.push(createStudentDto);
        return createStudentDto;
    }
    findAll() {
        return this.students;
    }
    findOne(id) {
        const student = this.students.find(s => s.id === id);
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return student;
    }
    update(id, updateStudentDto) {
        const student = this.findOne(id);
        Object.assign(student, updateStudentDto);
        return student;
    }
    remove(id) {
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Student not found');
        }
        this.students.splice(index, 1);
        return { message: 'Student deleted successfully' };
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=student.service.js.map