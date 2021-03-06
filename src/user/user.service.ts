import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dtos/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find({ relations: ['accounts'] });
  }

  async findOne(email: string): Promise<User> {
    const user = this.userRepo.findOneBy({ email });
    return user;
  }

  async create(userDto: UserCreateDto): Promise<User> {
    const user = this.userRepo.create(userDto);
    return this.userRepo.save(user);
  }
}
