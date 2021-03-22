import { UserDto } from 'src/component/user/dto/user.dto';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_test')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'seq' })
  private _seq: number;

  @Column({ name: 'userId', length: 40, unique: true })
  private _userId: string;

  @Column({ name: 'name', length: 20 })
  private _name: string;
  @Column({ name: 'age' })
  private _age: number;

  get seq(): number {
    return this._seq;
  }

  get userId(): string {
    return this._userId;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  insert(userDto: UserDto) {
    this._userId = userDto.userId;
    this._name = userDto.name;
    this._age = userDto.age;
  }

  update(userDto: UserDto) {
    this._name = userDto.name;
    this._age = userDto.age;
  }
}
