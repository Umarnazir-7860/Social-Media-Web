import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router"; // ✅ import useNavigate
import toast from "react-hot-toast";

export const useSignup = (signupData) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // ✅ initialize navigate
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/auth/signup", signupData);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Signup successful!");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
        navigate("/onboarding"); // ✅ redirect on signup success
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Signup failed");
    },
  });
};
export const getAuthUser=async()=>{
  const response = await axiosInstance.get("/auth/me")

  return response.data
 }