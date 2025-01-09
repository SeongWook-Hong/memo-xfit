import SignButton from "@/components/common/button/SignButton";
import BasicInput from "@/components/common/input/BasicInput";
import PasswordInput from "@/components/common/input/PasswordInput";
import { preventEnter } from "@/utils/preventEnter";
import { RefObject } from "react";
import { useForm } from "react-hook-form";

interface Props {
  sign: "in" | "up";
  formRef: RefObject<{ email: string; nickname: string; password: string }>;
  onSubmit: () => void;
}
const SignForm = ({ sign, formRef, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  return (
    <form
      noValidate
      className="flex flex-col gap-3"
      onSubmit={handleSubmit((data) => {
        if (formRef.current) {
          Object.assign(formRef.current, {
            email: data.email,
            nickname: data.nickname || "",
            password: data.password,
          });
          onSubmit();
        }
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
      {sign === "up" ? (
        <BasicInput
          label="닉네임"
          type="text"
          placeholder="ex) 홍길동"
          isError={!!errors?.nickname}
          errorMsg={"" + errors.nickname?.message}
          {...register("nickname", {
            required: "닉네임은 필수 입력입니다.",
          })}
        />
      ) : (
        <></>
      )}
      <PasswordInput
        label="비밀번호"
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
      {sign === "up" ? (
        <PasswordInput
          label="비밀번호 확인"
          isError={!!errors?.passwordCheck}
          errorMsg={"" + errors.passwordCheck?.message}
          {...register("passwordCheck", {
            required: "비밀번호 확인은 필수 입력입니다.",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.",
          })}
        />
      ) : (
        <></>
      )}

      <SignButton sign={sign} isDisabled={isSubmitting} />
    </form>
  );
};
export default SignForm;
