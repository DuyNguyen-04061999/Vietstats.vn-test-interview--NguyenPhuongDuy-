"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Field from "@/app/components/Field";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
const LoginForm = () => {
  const [typePassword, setTypePassword] = useState<string>("password");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const LoginSchema = z.object({
    id: z.string({
      message: "Please fill in",
    }),
    password: z
      .string({
        message: "Please fill in",
      })
      .min(6, {
        message: "Invalid password. Password must have at least 6 characters",
      }),
  });

  type LoginSchemaType = z.infer<typeof LoginSchema>;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
    defaultValues: {
      id: "123",
      password: "123456",
    },
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    if (data) {
      try {
        setLoading(true);
        const res = await fetch("/api/auth", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          method: "POST",
        });
        const dataRes = await res.json();
        if (dataRes) {
          router.replace("/dashboard/home");
        }
      } catch (error) {
        console.log("error :>> ", error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-full px-10 py-16 flex-1">
      <h2 className="text-center text-[#3d3d3d] font-bold capitalize text-[30px]">
        Sign In
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col gap-4"
      >
        <Field
          control={control}
          name="id"
          type="text"
          label="User ID"
          placeholder="Enter your ID"
          error={errors.id?.message}
        />

        <div className="relative">
          <Field
            control={control}
            name="password"
            type={typePassword}
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            className="pr-10"
          />

          <div
            className="absolute right-3 top-1/2 translate-y-[10%] cursor-pointer"
            onClick={() =>
              setTypePassword((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1 11.3L13.65 9.85005C13.8 9.06672 13.575 8.33338 12.975 7.65005C12.375 6.96671 11.6 6.70005 10.65 6.85005L9.2 5.40005C9.48333 5.26672 9.77067 5.16672 10.062 5.10005C10.354 5.03338 10.6667 5.00005 11 5.00005C12.25 5.00005 13.3127 5.43738 14.188 6.31205C15.0627 7.18738 15.5 8.25005 15.5 9.50005C15.5 9.83338 15.4667 10.146 15.4 10.438C15.3333 10.7294 15.2333 11.0167 15.1 11.3ZM18.3 14.45L16.85 13.05C17.4833 12.5667 18.046 12.0374 18.538 11.462C19.0293 10.8874 19.45 10.2334 19.8 9.50005C18.9667 7.81672 17.7707 6.47905 16.212 5.48705C14.654 4.49572 12.9167 4.00005 11 4.00005C10.5167 4.00005 10.0417 4.03338 9.575 4.10005C9.10833 4.16672 8.65 4.26672 8.2 4.40005L6.65 2.85005C7.33333 2.56672 8.03333 2.35405 8.75 2.21205C9.46667 2.07072 10.2167 2.00005 11 2.00005C13.5167 2.00005 15.7583 2.69572 17.725 4.08705C19.6917 5.47905 21.1167 7.28338 22 9.50005C21.6167 10.4834 21.1127 11.396 20.488 12.238C19.8627 13.0794 19.1333 13.8167 18.3 14.45ZM18.8 20.6L14.6 16.45C14.0167 16.6334 13.4293 16.7711 12.838 16.8631C12.246 16.9544 11.6333 17 11 17C8.48333 17 6.24167 16.3044 4.275 14.913C2.30833 13.521 0.883333 11.7167 0 9.50005C0.35 8.61672 0.791667 7.79571 1.325 7.03705C1.85833 6.27905 2.46667 5.60005 3.15 5.00005L0.4 2.20005L1.8 0.800049L20.2 19.2001L18.8 20.6ZM4.55 6.40005C4.06667 6.83338 3.625 7.30838 3.225 7.82505C2.825 8.34171 2.48333 8.90005 2.2 9.50005C3.03333 11.1834 4.229 12.5207 5.787 13.512C7.34567 14.504 9.08333 15 11 15C11.3333 15 11.6583 14.9794 11.975 14.938C12.2917 14.896 12.6167 14.85 12.95 14.8L12.05 13.85C11.8667 13.9 11.6917 13.9374 11.525 13.962C11.3583 13.9874 11.1833 14 11 14C9.75 14 8.68733 13.5627 7.812 12.688C6.93733 11.8127 6.5 10.75 6.5 9.50005C6.5 9.31672 6.51233 9.14172 6.537 8.97505C6.56233 8.80838 6.6 8.63338 6.65 8.45005L4.55 6.40005Z"
                fill="#808080"
              />
            </svg>
          </div>
        </div>
        <button
          className="outline-none flex items-center justify-center select-none rounded-[20px] mt-5 bg-[#dfa128] text-white uppercase leading-[24px] font-bold text-base p-2"
          style={{
            boxShadow: "inset 0 4px 4px 0 rgba(0,0,0,0.25)",
          }}
        >
          {loading ? <CircularProgress size="20px" /> : "sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
