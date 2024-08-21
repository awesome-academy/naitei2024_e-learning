import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../entity/user.entity'; // Hoặc đường dẫn đến User entity của bạn
import * as UserService from '../services/user.service'; // Hoặc đường dẫn đến User service của bạn

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {
      try {
        console.log(accessToken);
        // Tìm hoặc tạo người dùng
        let user = await UserService.findUserByGoogleId(profile.id);

        if (!user) {
          user = await UserService.createUser({
            authType: 'google',
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
          });
        }

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Serialize user vào session
passport.serializeUser((user: Express.User, done) => {
  done(null, (user as User).id);
});

// Deserialize user từ session
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await UserService.findUserById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
