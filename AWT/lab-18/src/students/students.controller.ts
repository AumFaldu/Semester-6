import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentsController {

  @Get('HelloWorld')
  helloWorld():string{
    return "hello world"
  }

  @Get()
  findAll():string {
    return "Get All Students";
  }

  @Get(':id')
  findOne(@Param('id') id: string):string {
    return "This returns student with id=" + id;
  }

  @Post()
  insert() {
    return "Insert method called";
  }

  @Delete(':id')
  delete(@Param('id') id: string):string {
    return "Delete method called for id=" + id;
  }

  @Put(':id')
  update(@Param('id') id: string):string {
    return "Update method called for id=" + id;
  }
}
