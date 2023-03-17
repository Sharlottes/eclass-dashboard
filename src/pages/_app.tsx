import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";
import TodoListContextProvider from "@/contexts/TodoListContextProvider";

import "../../public/global.css";
import LoginContextProvider from "@/contexts/LoginContextProvider";
import { SnackbarProvider } from "notistack";

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LoginContextProvider>
        <TodoListContextProvider>
          <CssBaseline />
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </TodoListContextProvider>
      </LoginContextProvider>
    </SessionProvider>
  );
};

export default App;
