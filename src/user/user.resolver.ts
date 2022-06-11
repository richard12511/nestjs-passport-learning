import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCreateDto } from './dtos/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'getUser' })
  findOne(email: string) {
    return this.userService.findOne(email);
  }

  @Mutation(() => User, { name: 'createUser' })
  create(@Args('user') user: UserCreateDto) {
    return this.userService.create(user);
  }
}
