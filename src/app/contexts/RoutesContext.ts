import { createContext } from "react";
import { NCore } from "../../../../../libs/module-expander";

export const RoutesContext = createContext<NCore.IRoute[] | undefined>([]);
