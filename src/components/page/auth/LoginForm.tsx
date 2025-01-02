import SignButton from "@/components/common/button/SignButton";
import BasicInput from "@/components/common/input/BasicInput";
import PasswordInput from "@/components/common/input/PasswordInput";
import { preventEnter } from "@/utils/preventEnter";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  return (
    <form
      noValidate
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      })}
      onKeyDown={(e) => preventEnter(e)}
    >
      <BasicInput
        label="이메일"
        type="email"
        placeholder="crossfit@email.com"
        isError={!!errors?.email}
        errorMsg={"" + errors.email?.message}
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      <PasswordInput
        isError={!!errors?.password}
        errorMsg={"" + errors.password?.message}
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          pattern: {
            value: /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            message:
              "비밀번호는 영문, 숫자, 특수문자를 포함 8자리 이상이어야 합니다.",
          },
        })}
      />

      <SignButton sign="in" isDisabled={isSubmitting} />
    </form>
  );
};
export default LoginForm;
