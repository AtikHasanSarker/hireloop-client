"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-5 inline-flex cursor-pointer p-4 items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-purple-600"
    >
      <ArrowLeft className="size-4" />
      <span>Back to jobs</span>
    </button>
  );
};

export default BackButton;
