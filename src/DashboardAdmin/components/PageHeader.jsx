export default function PageHeader() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-t-1">
      
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="text-sm text-gray-400">
          Dashboard / <span className="text-gray-600">Order List</span>
        </div>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add Button
      </button>

    </div>
  );
}