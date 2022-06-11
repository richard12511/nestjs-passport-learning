import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginResponse } from './dto/login-response';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(inputUser: User): Promise<LoginResponse> {
    const user = await this.userService.findOne(inputUser.email);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
      user: user,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);

    if (user) {
      return user;
    }
    return null;
  }

  async verifyToken(token: string) {
    const decoded = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });

    const user = await this.userService.findOne(decoded.email);
    return user;
  }
}
