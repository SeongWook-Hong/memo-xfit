import { GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";

export const checkSignin = async (context: GetServerSidePropsContext) => {
  const token = await getCookie("loginToken", {
    req: context.req,
    res: context.res,
  });
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
    return {
      props: {
        nickname: decode.nickname,
      },
    };
  }
  return { props: {} };
};
