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
      className={`mx-2 relative flex items-start border-solid border-2 rounded-2xl border-gray-300 w-52 p-4 hover:bg-blue-light bg-white cursor-pointer ${selected && 'triangle'}`}
    >
      <div className="flex h-6 items-center">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          defaultChecked={checked}
          className="h-4 w-4 rounded border-gray-300 "
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-800 text-sm">
          {title}
        </label>
      </div>
    </div>
  );
}
