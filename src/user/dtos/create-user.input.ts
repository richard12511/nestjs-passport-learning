import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateDto {
  // @Field()
  // id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
