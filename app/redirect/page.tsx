"use client";
import PageContainer from "@/components/PageContainer/PageContainer";
import { GlobalContext } from "@/contexts/global-context";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Page() {
  const { redirect }: any = useContext(GlobalContext);
  const _useRouter = useRouter();
  const message = "Wait a moment...";
  useEffect(() => {
    if (!redirect) {
      _useRouter.push("/");
      return;
    }
    const _setTimeout = setTimeout(() => {
      window.location.href = redirect;
      clearTimeout(_setTimeout);
    }, 3000);
  }, []);
  return <PageContainer>{redirect && message}</PageContainer>;
}
