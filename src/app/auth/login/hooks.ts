import { useQuery } from "@tanstack/react-query";

export function useSignIn(): {
  data: any;
  isLoading: boolean;
  error: any;
  refetch: () => void;
} {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["signIn"],
    queryFn: () => fetch("/api/sign-in").then((res) => res.json()),
  });

  return { data, isLoading, error, refetch };
}
