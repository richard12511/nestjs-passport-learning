import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}

  async create(createAccountInput: CreateAccountInput) {
    const account = this.accountRepo.create(createAccountInput);
    return this.accountRepo.save(account);
  }

  async findAll(): Promise<Account[]> {
    return this.accountRepo.find();
  }

  // findOne(id: number): Promise<Account> {
  //   return this.accountRepo.findOne()
  // }

  // update(id: number, updateAccountInput: UpdateAccountInput) {
  //   return `This action updates a #${id} account`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} account`;
  // }
}
