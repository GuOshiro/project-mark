import TabItem from "../TabItem";

export default function Tabs({
  tabs,
}: {
  tabs: Array<{
    title: string;
    description: string;
    action: () => void;
    active?: boolean;
  }>;
}) {
  return (
    <div className="flex justify-around items-center">
      {tabs.map((tab) => (
        <TabItem
          key={tab.title}
          title={tab.title}
          description={tab.description}
          action={tab.action}
          active={tab?.active}
        />
      ))}
    </div>
  );
}
