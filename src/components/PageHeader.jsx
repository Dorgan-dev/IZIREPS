export default function PageHeader() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-t-1">

      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          Dashboard
        </span>
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
          <span id="breadcrumb-separator" className="text-gray-500">/</span>
          <span id="breadcrumb-current" className="text-gray-500">Order List</span>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add Button
      </button>

    </div>
  );
}