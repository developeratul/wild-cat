import { inter } from "@/fonts";
import { cn } from "@/lib/utils";
import { store } from "@/redux/store";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={cn(inter.className)}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
