import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={inter.className}>
        <h1>Subroute Example</h1>
      </main>
    </>
  );
}
