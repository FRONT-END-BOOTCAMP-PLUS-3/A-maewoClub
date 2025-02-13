"use client";

import CreatePage from "@/components/board/create/createPage/createPage";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = useState<number>(0);
  const [files, setFiles] = useState<File[]>([]);
  const { user } = useAuthStore();
  const router = useRouter();

  const handleTitleUpdate = (updatedTitle: string) => {
    setTitle(updatedTitle);
  };

  const handleContentUpdate = (updatedContent: string) => {
    setDescription(updatedContent);
  };

  const handleFileUpdate = (updatedFiles: File[]) => {
    setFiles(updatedFiles);
  };

  const handleTagUpdate = (selectedTagId: number) => {
    setTag(selectedTagId);
  };

  const handleSubmit = async () => {
    if (!user) {
      alert("로그인이 필요합니다. 메인 페이지로 이동합니다.");
      router.push("/");
      return;
    }

    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tagId", tag.toString());

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("/api/boards", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("게시글 등록에 성공했습니다!");
        router.push("/boards");
      } else {
        alert("게시글 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <CreatePage
      onTitleUpdate={handleTitleUpdate}
      onContentUpdate={handleContentUpdate}
      onFileUpdate={handleFileUpdate}
      onTagUpdate={handleTagUpdate}
      onSubmit={handleSubmit}
    />
  );
};

export default Page;
