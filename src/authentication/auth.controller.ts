import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Res,
  Req,
  UnauthorizedException,
  UseGuards
} from '@nestjs/common';
import { AuthServices } from './auth.services';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response,Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(
    private readonly AuthService: AuthServices,
    private jwtServvice: JwtService,
  ) {}

  cors: {
    origin: '*';
  };
  @Get('/hello')
  getHello(): string {
    return 'Hello there';
  }

  @Post('/register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('role') role: string,
  ) {
    const userExisted = await this.AuthService.findOne({username});
    console.log(userExisted);
    if(!userExisted)
    {
      const saltOrRounds = 12;
      const hashPassword = await bcrypt.hash(password, saltOrRounds);
      return this.AuthService.create({
        username,
        password: hashPassword,
        role,
      });

    }
    else{
      throw new BadRequestException('User Already Existed');
    }

  }

  @Post('/login')
  async Login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.AuthService.findOne({ username });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    const jwt = await this.jwtServvice.signAsync({ id: user.password });
    response.cookie('jwt', jwt, {httpOnly:true  });
    return user.username;
  }

  @Post('/admin-login')
  async AdminLogin(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.AuthService.findOne({ username });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if(user.role != 'admin')
    {
      throw new BadRequestException("You Are Not an Admin");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }

    return user.username;
  }





@Get("/karan")
async getServe(@Req() request:Request){
  const karn = request.headers['authorization'];
  console.log(karn,request.cookies);
  const data = "shriniwash";
    return data;
}

@Post("logout")
async logout(@Res({passthrough:true}) response:Response)
{
  response.clearCookie('jwt');
  return "success";
}
}
