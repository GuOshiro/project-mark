import { ReactElement } from "react";
import Header from "../Header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="bg-gray-200">
      <Header />
      <main>{children}</main>
    </div>
  );
}
