export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 flex items-center justify-between">
      
      <div>
        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold text-white mt-2">
          {value}
        </h2>
      </div>

      <div className={`${color} p-4 rounded-2xl text-white text-2xl`}>
        {icon}
      </div>
    </div>
  );
}