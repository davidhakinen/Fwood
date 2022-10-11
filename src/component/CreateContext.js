import { createContext } from "react";

// pemberian usecontext dapat memberi duplikasi pada sebagian data. seperti untuk membuat search, lebih baik langsung menggunakan usestate dibandingkan dengan usecontext

export const Productkey = createContext({});
export const Countnumber = createContext({});
export const Mpynumber = createContext({});
export const Addtocart = createContext({});
export const Arraynumber = createContext({});
export const Productarray = createContext({});
