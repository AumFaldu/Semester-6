import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentsService;
    constructor(studentsService: StudentService);
    findAll(): {
        id: number;
        name: string;
        age: number;
        course: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        age: number;
        course: string;
    };
    create(createStudentDto: CreateStudentDto): CreateStudentDto;
    update(id: string, updateStudentDto: UpdateStudentDto): {
        id: number;
        name: string;
        age: number;
        course: string;
    };
    remove(id: string): {
        message: string;
    };
}
