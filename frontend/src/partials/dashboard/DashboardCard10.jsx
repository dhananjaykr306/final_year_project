import React from "react";

function DashboardCard10({ data }) {
  return (
    <div className="col-span-full mt-4 xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Reviews
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Stars</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Description</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {data.map((dt) => {
                return (
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium text-green-500">
                        {dt.review.substring(0, 3)}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-slate-800 dark:text-slate-100">
                          {dt.title.substring(19)}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-wrap">
                      <div className="text-left">{dt.rating}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
