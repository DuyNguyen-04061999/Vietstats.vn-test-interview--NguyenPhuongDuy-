import { JwtPayload, SignOptions } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

export interface ISignToken {
  payload: JwtPayload;
  privateKey: string;
  options?: SignOptions;
}
export const signToken = ({
  payload,
  privateKey,
  options = {
    algorithm: "HS256",
  },
}: ISignToken) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (err, token) => {
      if (err) {
        reject(err);
      }

      resolve(token as string);
    });
  });
};
