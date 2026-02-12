import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  @Get(':id')
  findOne() {
    return this.studentService.findOne();
  }
  @Post()
  insert() {
    return this.studentService.insert();
  }
  @Delete(':id')
  delete() {
    return this.studentService.delete();
  }
  @Put(':id')
  update() {
    return this.studentService.update();
  }
}
