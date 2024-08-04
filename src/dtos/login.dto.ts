import { IsString, MinLength } from 'class-validator';
import i18next from 'i18next';

export class LoginDTO {
  @IsString({ message: i18next.t('login.errors.username_required') })
  @MinLength(3, { message: i18next.t('login.errors.username_length') })
  username: string;

  @IsString({ message: i18next.t('login.errors.password_required') })
  @MinLength(3, { message: i18next.t('login.errors.password_length') })
  password: string;
}
