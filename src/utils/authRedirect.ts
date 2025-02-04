import { GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";

export const authRedirect = (context: GetServerSidePropsContext) => {
  const token = getCookie("loginToken", { req: context.req, res: context.res });

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
