import { Redirect ,Get, All, Controller, HttpCode, Header, Param } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @All('all')
    any(): string {
        return 'Any Method called';
    }

    @Get('status')
    @HttpCode(200)
    statusCode(): string {
        return 'Success';
    }

    @Get('google')
    @Redirect('https://www.google.com',302)
    redirect(){ 
        return; 
    }

    @Get('header')
    @Header('Custom-Header','Darshan University')
    header(): string {
        return 'Header Sent Successfully'
    }

    @Get('profile/*')
    wildcardRoute(): string {
        return 'WildCard route Matched'
    }
    @Get('id/:id')
    getId(@Param('id') id:string):string{
        return `ID = ${id}`;
    }
    @Get('prime/:start/:end')
    getPrime(
    @Param('start') start: string,
    @Param('end') end: string,
    ): number[] {

    const s = parseInt(start);
    const e = parseInt(end);
    const primes: number[] = [];

    for (let i = s; i <= e; i++) {

        if (i < 2) continue;

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
}
