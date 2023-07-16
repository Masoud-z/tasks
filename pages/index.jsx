import Head from "next/head";
import { Inter } from "next/font/google";
import LandingPage from "@/components/landingPage/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Freak Task Management</title>
        <meta name="description" content="Manage your tasks like a freak!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tasks.png" />
      </Head>
      <LandingPage />
    </>
  );
}
