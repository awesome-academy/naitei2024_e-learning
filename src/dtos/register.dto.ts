import {
  IsString,
  IsEmail,
  MinLength,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import i18next from 'i18next';

@ValidatorConstraint({ name: 'matchPassword', async: false })
export class MatchPasswordConstraint implements ValidatorConstraintInterface {
  validate(confirmPassword: string, args: ValidationArguments): boolean {
    const object = args.object as RegisterDTO;
    return object.password === confirmPassword;
  }

  defaultMessage(args: ValidationArguments): string {
    return i18next.t('register.errors.passwords_do_not_match');
  }
}

export class RegisterDTO {
  @IsString({ message: i18next.t('register.errors.name_required') })
  @MinLength(3, { message: i18next.t('register.errors.name_length') })
  name: string;

  @IsString({ message: i18next.t('register.errors.username_required') })
  @MinLength(3, { message: i18next.t('register.errors.username_length') })
  username: string;

  @IsEmail({}, { message: i18next.t('register.errors.email_invalid') })
  email: string;

  @IsString({ message: i18next.t('register.errors.password_required') })
  @MinLength(3, { message: i18next.t('register.errors.password_length') })
  password: string;

  @IsString({ message: i18next.t('register.errors.confirm_password_required') })
  @Validate(MatchPasswordConstraint)
  confirmPassword: string;
}
