import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const client = new QueryClient();
  
export default function App({ Component, pageProps }: AppProps) {

  const {session} = pageProps

  return (
    <RecoilRoot>
      <QueryClientProvider client = {client}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
