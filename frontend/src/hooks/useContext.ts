import { useContext } from "react";
import { Context } from "../services/Context";

export function useContextProvider() {
    return useContext(Context);
}
