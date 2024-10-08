"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const LoginSchema = z.object({
    id: z.string({
      message: "Vui lòng nhập id",
    }),
    password: z
      .string({
        message: "Vui lòng nhập mật khẩu",
      })
      .min(6, {
        message: "Vui lòng nhập ít nhất 6 ký tự",
      }),
  });

  type LoginSchemaType = z.infer<typeof LoginSchema>;

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    if (data) {
      console.log("data", data);
    }
  };
  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        
      </form>
    </div>
  );
};

export default LoginForm;
