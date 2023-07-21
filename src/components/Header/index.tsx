import Image from "next/image";
import Button from "../Button";
import Tabs from "../Tabs";

export default function Header() {
  const tabs = [
    {
      title: "1",
      description: "Sales Pipeline Settings",
      action: () => {},
      active: true,
    },
    {
      title: "2",
      description: "Opportunity Details Settings",
      action: () => {},
    },
  ];
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <Image src="../../logo.svg" alt="Vercel Logo" width={37} height={37} />
      <Tabs tabs={tabs} />
      <Button text="Next" action={() => {}} />
    </header>
  );
}
