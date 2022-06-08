import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  @Field()
  plaidId: string;

  @Field()
  type: string;

  @Field()
  userId: string;
}
