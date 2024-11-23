"use client";
import React, { useContext, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { GlobalContext } from "@/contexts/global-context";
import State from "@/enums/state.enum";

const CreateUrl = () => {
  const {
    handleSubmit,
    register,
    formState: {},
    reset,
  } = useForm();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [state, setstate] = useState(State.COMPLETE);
  const { seturls }: any = useContext(GlobalContext);
  const onSubmit = async ({ url }: any) => {
    setstate(() => State.LOADING);
    const { data } = await axios.post(`${apiUrl}/urls`, { url });
    seturls((list: Url[]) => [data, ...list]);
    reset();
    setstate(() => State.COMPLETE);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center"
    >
      <Input
        {...register("url", {
          required: true,
          disabled: state === State.LOADING,
        })}
        className="text-black pe-4"
        type="text"
        label="https://spot2.mx"
        labelPlacement={"outside"}
        description={"Type a url"}
      />
      <Button type="submit">
        {state === State.COMPLETE ? (
          "Create"
        ) : (
          <Spinner label="" color="warning" />
        )}
      </Button>
    </form>
  );
};

export default CreateUrl;
