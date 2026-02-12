import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): string;
    findOne(): string;
    insert(): string;
    delete(): string;
    update(): string;
}
