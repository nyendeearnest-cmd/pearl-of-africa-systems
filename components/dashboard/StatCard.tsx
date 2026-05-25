type Props = {
  title: string;
  value: string | number;
};

export default function StatCard({
  title,
  value,
}: Props) {

  return (
    <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className="text-5xl font-bold mt-4 text-green-500">
        {value}
      </p>

    </div>
  );
}