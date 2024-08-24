type Props = {}

const Files = (props: Props) => {
  return (
    <div className="flex flex-col h-full ">
      <h1 className="text-2xl text-center font-bold mb-4">
        Files
        <span className="block h-1 bg-gray-500 mt-1"></span>
      </h1>
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-2xl border border-gray-600 shadow-md cursor-pointer hover:bg-gray-700">
          <span className="text-xl">1</span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-2xl border border-gray-600 shadow-md cursor-pointer hover:bg-gray-700">
          <span className="text-xl">2</span>
        </div>
        {/* Add more file items as needed */}
        <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-2xl border border-gray-600 shadow-md cursor-pointer hover:bg-gray-700">
          <span className="text-xl">+</span>
        </div>
      </div>
    </div>
  )
}

export default Files
