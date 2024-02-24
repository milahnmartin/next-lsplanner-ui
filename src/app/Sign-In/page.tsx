"use client";
import Button from "@/components/Button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSignIn } from "./hooks";
export default function SignIn() {
  const { data, error, isLoading, refetch } = useSignIn();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      <Button loading={isLoading} onClick={refetch}>
        DO IT
      </Button>
    </div>
  );
}
