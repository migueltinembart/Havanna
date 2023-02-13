interface dashboardItemOption {
  amount: number;
  title: string;
  URL?: string;
}

export default function DashboardItem(item: dashboardItemOption): JSX.Element {
  const { title, amount } = item;
  return (
    <div className="shadow-md p-2 rounded-md h-full flex gap-2 items-center">
      <div className="flex-1 text-2xl text-green-500">{amount}</div>
      <div className="flex-[3] text-2xl">{title}</div>
    </div>
  );
}
