import Image from "next/image";
import Button from "../Button";

export default function  Header() {
  return (
    <header className="py-8 px-6 flex justify-between">
      <Image
        src="../../logo.svg"
        alt="Vercel Logo"
        width={37}
        height={37}
      />
      <Button text="Next" action={() => {}} />
    </header>
  );
}
