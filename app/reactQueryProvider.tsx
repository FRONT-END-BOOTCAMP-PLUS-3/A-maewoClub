"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [queryClient] = useState(() => new QueryClient());
  const fetchUser = useAuthStore((state) => state.fetchUser);

  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   setIsAuth(!!token);
  // }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);


  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
