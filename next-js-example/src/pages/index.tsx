import { Inter } from "next/font/google";
import UtilExamples from "@/components/UtilExamples";

const inter = Inter({ subsets: ["latin"] });

const exampleURL = "https://www.npmjs.com/package/@phntms/react-share";

export default function Home() {
  return (
    <>
      <main className={inter.className}>
        <h1>React Share Demo</h1>
        <UtilExamples url={exampleURL} />
      </main>
    </>
  );
}
