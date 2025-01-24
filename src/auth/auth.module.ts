import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalAuthStrategy } from './strategy/local-auth.strategy';
import { AccessTokenStrategy } from './strategy/access-token.strategy';

@Module({
  imports: [ConfigModule, UserModule, JwtModule.register({})],
  providers: [AuthService, LocalAuthStrategy, AccessTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
