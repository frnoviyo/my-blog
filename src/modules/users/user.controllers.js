import HTTPStatus from 'http-status';
import User from './user.model';
export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    //return res.status(201).json(user);
    res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (e) {
    //return res.status(500).json(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export function login(req, res, next) {
  //res.status(200).json(req.user);
  res.status(HTTPStatus.OK).json(req.user.toAuthJSON());
  return next();
}
