import { Request, Response } from 'express';
import i18next from 'i18next';

export const loginGet = (req: Request, res: Response) => {
  res.render('auth/login', {
    title: i18next.t('login_title')
  });
};

export const loginPost = (req: Request, res: Response) => {
  res.redirect('/');
};

export const registerGet = (req: Request, res: Response) => {
  res.render('auth/register', {
    title: i18next.t('register_title')
  });
};

export const registerPost = (req: Request, res: Response) => {
  res.redirect('/auth/login');
};
