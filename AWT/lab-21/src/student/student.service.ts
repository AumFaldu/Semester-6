import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

  private students = [
    { id: 1, name: 'Aum', age: 20, course: 'CS' },
    { id: 2, name: 'Rahul', age: 21, course: 'IT' },
  ];

  create(createStudentDto: CreateStudentDto) {
    this.students.push(createStudentDto);
    return createStudentDto;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find(s => s.id === id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = this.findOne(id);
    Object.assign(student, updateStudentDto);
    return student;
  }

  remove(id: number) {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students.splice(index, 1);
    return { message: 'Student deleted successfully' };
  }
}
