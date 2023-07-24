export default function Checkbox({
  title,
  checked = false,
  selected,
}: {
  title?: string;
  checked?: boolean;
  selected?: boolean;
}) {
  return (
    <div
      className={`mx-2 relative flex items-start border-solid rounded-xl border-gray-300 w-52 px-4 py-3 transition ease-in-out delay-150 bg-white ${selected ? 'triangle border-blue-highlight border-2' : 'hover:bg-gray-200 border'}`}
    >
      <div className="flex h-6 items-center">
        <input
          aria-describedby="comments-description"
          type="checkbox"
          defaultChecked={checked}
          className="h-4 w-4 rounded border-gray-300 text-blue-highlight cursor-pointer hover:bg-blue-light transition ease-in-out focus:outline-none focus:ring-0 focus:ring-offset-0"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label className="font-medium text-gray-800 text-sm">
          {title}
        </label>
      </div>
    </div>
  );
}
