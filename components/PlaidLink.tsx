import React from "react";
import { Button } from "./ui/button";

export default function PlaidLink({ user, variant }: PlaidLinkProps) {
  return (
    <>
      {variant === "primary" ? (
        <Button>Connect bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>Connect bank: {user.$id}</Button>
      )}
    </>
  );
}
