"use client";
import { GlobalContext } from "@/contexts/global-context";
import State from "@/enums/state.enum";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BsTrash2Fill } from "react-icons/bs";

const DeleteUrl = ({ id }: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [state, setstate] = useState(State.COMPLETE);
  const { seturls }: any = useContext(GlobalContext);
  return (
    <>
      {state === State.COMPLETE ? (
        <BsTrash2Fill
          className="cursor-pointer mx-2 text-danger text-lg"
          onClick={async () => {
            setstate(() => State.LOADING);
            const { data } = await axios.delete(`${apiUrl}/urls?id=${id}`);
            if (data?.id)
              seturls((list: Url[]) =>
                list.filter(({ id }: Url) => id !== data?.id)
              );
            setstate(() => State.COMPLETE);
          }}
        />
      ) : (
        <Spinner size="sm" color="warning" />
      )}
    </>
  );
};

export default DeleteUrl;
