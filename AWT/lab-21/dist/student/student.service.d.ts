import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private students;
    create(createStudentDto: CreateStudentDto): CreateStudentDto;
    findAll(): {
        id: number;
        name: string;
        age: number;
        course: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        age: number;
        course: string;
    };
    update(id: number, updateStudentDto: UpdateStudentDto): {
        id: number;
        name: string;
        age: number;
        course: string;
    };
    remove(id: number): {
        message: string;
    };
}
