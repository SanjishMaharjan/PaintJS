import { Download, Trash } from "lucide-react"

type OptionsProps = {
  handleClearCanvas: () => void
  saveCanvasAsImage: () => void
}

const Options = (props: OptionsProps) => {
  const { handleClearCanvas, saveCanvasAsImage } = props
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl text-center font-bold mb-4">
        Options
        <span className="block h-1 bg-gray-500 mt-1"></span>
      </h1>
      <div className="flex flex-col items-center gap-4 mt-4">
        <button
          className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
          onClick={handleClearCanvas}
        >
          <Trash className="mr-2" />
          Clear
        </button>
      </div>
    </div>
  )
}

export default Options
