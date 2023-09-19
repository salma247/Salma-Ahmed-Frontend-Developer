import { useContext } from "react";
import { Context } from "../services/Context";

export function useContextProvider() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error("useContextProvider must be used within a ContextProvider");
    }
    return context;
  }