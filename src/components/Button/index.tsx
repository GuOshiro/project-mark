export default function Button({
  text,
  action,
  type = 'button'
}: {
  text: string;
  action?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}) {
  return (
    <button
      type={type}
      onClick={action}
      className="rounded-full bg-blue-highlight px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}
