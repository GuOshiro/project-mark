export default function BoardColumn({
  title,
  index,
}: {
  title: string;
  index: number;
}) {
  if (!index) return;
  return (
    <div className={`bg-s-${index}-lighter w-60 min-w-[222px] mx-2 p-2 h-[580px] rounded-xl`}>
      <h6 className={`text-s-${index}-darker m-2 uppercase font-bold`}>{title}</h6>
      <div className={`bg-s-${index}-light relative mx-2 rounded-xl w-28 h-6 mt-3 mb-2`}>
        <span className={`bg-s-${index}-regular absolute rounded-xl w-11 h-6`} />
      </div>
      <div
        className={`border-solid border-2 rounded-2xl w-full border-s-${index}-light w-60 h-40`}
      ></div>
    </div>
  );
}
