import BoardColumn from "@/components/BoardColumn";
import Checkbox from "@/components/Checkbox";

export default function Onboarding({}) {
  const checkboxList = [
    {
      title: "Basic",
      checked: true,
      selected: true,
    },
    {
      title: "Advanced",
    },
    {
      title: "Expert",
    },
    {
      title: "Custom",
    },
  ];

  const columns = [
    { title: "lead" },
    { title: "RFP In Progress " },
    { title: "Submitted" },
    { title: "won" },
    { title: "lost" },
    { title: "closed" },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold text-gray-800">
        Please select the type of sales pipeline that best fits to you company
      </h1>
      <div className="flex flex-row items-center justify-center py-10">
        {checkboxList.map((item) => (
          <Checkbox
            key={item.title}
            title={item.title}
            checked={item.checked}
            selected={item.selected}
          />
        ))}
      </div>
      <div className="flex flex-row items-center py-10 overflow-x-auto max-w-[100%]">
        {columns.map((col, index) => (
          <BoardColumn key={col.title} title={col.title} index={index + 1} />
        ))}
      </div>
    </div>
  );
}
