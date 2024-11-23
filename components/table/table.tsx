"use client";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Table as UITable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { GlobalContext } from "@/contexts/global-context";
import State from "@/enums/state.enum";
import Link from "next/link";
import { BsArrowUpCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import DeleteUrl from "../DeleteUrl/DeleteUrl";

const Table = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { urls, seturls, setredirect }: any = useContext(GlobalContext);
  const _useRouter = useRouter();
  const [state, setstate] = useState(State.LOADING);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${apiUrl}/urls`);
      seturls(() => data);
      setstate(() => (data?.length > 0 ? State.COMPLETE : State.EMPTY));
    })();
  }, []);
  useEffect(() => {
    if (state !== State.LOADING)
      setstate(() => (urls?.length > 0 ? State.COMPLETE : State.EMPTY));
  }, [urls]);
  return (
    <>
      {state === State.COMPLETE && (
        <UITable
          aria-label="Example static collection table"
          className="text-black"
        >
          <TableHeader>
            <TableColumn>Id</TableColumn>
            <TableColumn>Short url</TableColumn>
            <TableColumn>Url</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {urls?.map(({ id, short_url, url }: Url, index: number) => (
              <TableRow key={index}>
                <TableCell>{id}</TableCell>
                <TableCell>
                  <Link
                    href={url}
                    target="_blank"
                    className="hover:text-primary hover:underline"
                  >
                    {short_url}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href={url}
                    target="_blank"
                    className="hover:text-primary hover:underline"
                  >
                    {url}
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="flex justify-start items-center">
                    <BsArrowUpCircle
                      style={{ transform: "rotate(45deg)" }}
                      className="cursor-pointer mx-2 text-blue-600 text-lg"
                      onClick={() => {
                        setredirect(() => url);
                        _useRouter.push("/redirect");
                      }}
                    />
                    <DeleteUrl id={id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </UITable>
      )}
      {state === State.EMPTY && (
        <div className="flex justify-center items-center text-3xl min-h-[300px] font-bold">
          No urls found
        </div>
      )}
      {state === State.LOADING && (
        <div className="flex justify-center items-center min-h-[300px]">
          <Spinner label="" color="warning" />
        </div>
      )}
    </>
  );
};

export default Table;
