export default function TabItem({
  title,
  description,
  action,
  active,
}: {
  title: string;
  description: string;
  action: () => void;
  active?: boolean
}) {
  return (
    <button className="flex flex-col items-center mx-2" onClick={action}>
      <div className={`w-14 h-14 flex justify-center items-center rounded-2xl text-base ${active ? 'bg-gray-800 text-white' : 'bg-white border-solid	border border-blue-light '}`}>{title}</div>
      <span className="text-gray-800 font-bold text-xs mt-1">{description}</span>
    </button>
  );
}
