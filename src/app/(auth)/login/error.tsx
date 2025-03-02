"use client";
import { useEffect } from "react";

export default function ErrorBoundary({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <p className="absolute">{error.message}</p>;
}
