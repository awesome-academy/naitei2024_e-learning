import { User } from '../entity/user.entity';

declare module 'passport' {
  interface Authenticator {
    serializeUser<TID>(fn: (user: User, done: (err: any, id?: TID) => void) => void): void;
    deserializeUser<TID>(fn: (id: TID, done: (err: any, user?: any) => void) => void): void;
  }
}