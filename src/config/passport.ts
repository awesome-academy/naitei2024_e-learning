import passport from 'passport';
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from 'passport-google-oauth20';
import * as UserService from '../services/user.service';
import { UserRole } from '../enums/UserRole';
import { User } from '../entity/user.entity';

// Cấu hình Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: '/auth/google/callback',
      passReqToCallback: false, // Thêm thuộc tính này nếu bạn không cần `req` trong callback
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        // Lấy email từ profile
        const email = profile.emails?.[0]?.value;

        // Tìm người dùng theo googleId
        const existingUser = await UserService.findUserByGoogleId(profile.id);
        if (existingUser) {
          return done(null, existingUser);
        }

        // Nếu người dùng chưa tồn tại, tạo người dùng mới
        const newUser = await UserService.createUser({
          googleId: profile.id,
          username: profile.displayName,
          email,
          role: UserRole.STUDENT,
        });

        done(null, newUser);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user: User, done) => {
  done(null, user.id as unknown); // chuyển đổi kiểu nếu cần
});

passport.deserializeUser(async (id: unknown, done) => {
  const user = await UserService.findUserById(id as string); // chuyển đổi kiểu nếu cần
  done(null, user);
});
