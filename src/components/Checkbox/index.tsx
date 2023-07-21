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
      className={`mx-2 relative flex items-start border-solid border-2 rounded-2xl border-gray-300 w-52 p-4 hover:bg-blue-light bg-white ease-in duration-200 cursor-pointer `}
    >
      {selected && (
        <div className="absolute bottom-[-7px] right-[45%] ml-2 -mb-[1px] inline-block overflow-hidden border-gray-300 hover:bg-blue-light bg-white ease-in duration-200 cursor-pointer">
          <div className="border-solid border-t-black border-t-0 border-x-transparent border-x-8 border-b-0"></div>
          <div className="border-solid border-t-gray-300 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
        </div>
      )}
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
