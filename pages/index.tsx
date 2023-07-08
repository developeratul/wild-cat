import AppBar from "@/Components/AppBar";
import ContentPanel from "@/Components/ContentPanel";
import Sidebar from "@/Components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex">
        <AppBar />
        <Sidebar />
        <ContentPanel />
      </div>
    </>
  );
}
