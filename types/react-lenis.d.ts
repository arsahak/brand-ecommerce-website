declare module "@studio-freight/react-lenis" {
  import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

  interface ReactLenisProps {
    root?: boolean;
    options?: Record<string, any>;
    children?: ReactNode;
  }

  export const ReactLenis: ForwardRefExoticComponent<
    ReactLenisProps & RefAttributes<any>
  >;
}
