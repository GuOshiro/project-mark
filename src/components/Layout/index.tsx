import { ReactElement } from "react";
import Header from "../Header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <main className="m-2 bg-white rounded-2xl">{children}</main>
    </div>
  );
}
