import { ReactElement } from "react";
import Header from "../Header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="bg-gray-200">
      <Header />
      <main className="mx-2 bg-white h-screen rounded-2xl">{children}</main>
    </div>
  );
}
