"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient()
  //const [queryClient] = useState(() => new QueryClient());
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);


  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
