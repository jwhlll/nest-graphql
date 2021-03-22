import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from 'src/component/user/dto/user.dto';
import { User } from 'src/component/user/entity/user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getUserList(): Promise<User[]> {
    return this.userService.getUserList();
  }

  @Get(':seq')
  getUser(@Param('seq') seq: number): Promise<User> {
    return this.userService.getUser(seq);
  }

  @Post()
  createUser(@Body() userDto: UserDto): Promise<void> {
    return this.userService.createUser(userDto);
  }

  @Put(':seq')
  updateUser(
    @Param('seq') seq: number,
    @Body() userDto: UserDto,
  ): Promise<void> {
    return this.userService.modifyUser(seq, userDto);
  }

  @Delete(':seq')
  deleteUser(@Param('seq') seq: number): Promise<void> {
    return this.userService.removeUser(seq);
  }
}
