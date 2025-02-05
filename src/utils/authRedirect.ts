import { GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";

export const authRedirect = async (context: GetServerSidePropsContext) => {
  const token = await getCookie("loginToken", {
    req: context.req,
    res: context.res,
  });

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
