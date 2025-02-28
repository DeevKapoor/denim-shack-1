import { useEffect } from "react";
import { toast, Toaster as HotToaster } from "react-hot-toast";

export const useToast = () => ({
  add: (message: string) => toast(message),
});

export const Toaster = () => {
  useEffect(() => {
    toast("Welcome to Denim Shack!");
  }, []);

  return <HotToaster />;
};