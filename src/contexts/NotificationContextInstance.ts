import { createContext } from "react";

import { NotificationContextProps } from "@libs/types";

export const NotificationContext = createContext<
    NotificationContextProps | undefined
>(undefined);
