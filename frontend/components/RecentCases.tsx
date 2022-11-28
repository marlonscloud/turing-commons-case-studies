import React from 'react'

const RecentCases = () => {
    const cases = [
        { name: "Case Heading", description: "This is an example description" },
        { name: "Case Heading", description: "This is an example description" },
        { name: "Case Heading", description: "This is an example description" },
        { name: "Case Heading", description: "This is an example description" },
        { name: "Case Heading", description: "This is an example description" },
        { name: "Case Heading", description: "This is an example description" }
    ]
  return (
    <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Case Studies</h5>
            {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
            </a> */}
            <a href="#" className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500">
                Add New
            </a>
    </div>
    <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {cases.map((item) => (
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <span className="block w-8 h-8 rounded-full bg-slate-200"></span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                            {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div> */}
                        </div>
                    </li>
                ))}
            </ul>
    </div>
    </div>
  )
}

export default RecentCases
