import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/component/user/dto/user.dto';
import { User } from 'src/component/user/entity/user.entity';
import { UserRepository } from 'src/component/user/repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async getUserList(): Promise<User[]> {
    // return await this.userRepository.find();
    return await User.find();
  }

  async getUser(seq: number): Promise<User> {
    // return await this.userRepository.findOne(seq);
    return await User.findOne(seq);
  }

  async createUser(userDto: UserDto): Promise<void> {
    const user = new User();
    user.insert(userDto);
    // await this.userRepository.save(user);
    await user.save();
  }

  async modifyUser(seq: number, userDto: UserDto): Promise<void> {
    // const user = await this.userRepository.findOne(seq);
    const user = await User.findOne(seq);
    user.update(userDto);
    // await this.userRepository.save(user);
    await user.save();
  }

  async removeUser(seq: number): Promise<void> {
    // const user = await this.userRepository.findOne(seq);
    const user = await User.findOne(seq);
    // await this.userRepository.remove(user);
    await user.remove();
  }
}
