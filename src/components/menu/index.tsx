import React from 'react'
import {
  Circle,
  EraserIcon,
  PencilIcon,
  RectangleHorizontal,
} from 'lucide-react'
import { BsDash } from 'react-icons/bs'
type MenuProps = {
  currentTool: 'pen' | 'eraser'
  onToolChange: (tool: 'pen' | 'eraser') => void
  lineWidth: number
  onLineWidthChange: (width: number) => void
  erasersize: number
  onErasersizeChange: (size: number) => void
  currentShape: 'rectangle' | 'circle' | 'line'
  onShapeChange: (shape: 'rectangle' | 'circle' | 'line') => void
}

const Menu: React.FC<MenuProps> = ({
  currentTool,
  onToolChange,
  lineWidth,
  onLineWidthChange,
  erasersize,
  onErasersizeChange,
  currentShape,
  onShapeChange,
}) => {
  return (
    <div>
      {/* Tool Selection */}
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl text-center font-bold mb-4">
          Tools
          <span className="block h-1 bg-gray-500 mt-1"></span>
        </h1>
        <div className="flex flex-row items-center justify-center gap-2">
          <button
            className={`flex items-center justify-center border-2 border-black text-black m-2 p-3 rounded-full hover:bg-[#9d83e0] transition-all duration-300 ${
              currentTool === 'pen' ? 'bg-black text-white' : ''
            }`}
            onClick={() => onToolChange('pen')}
          >
            <PencilIcon className="h-6 w-6" />
          </button>
          <button
            className={`flex items-center justify-center border-2 border-black text-black m-2 p-3 rounded-full hover:bg-[#9d83e0] transition-all duration-300 ${
              currentTool === 'eraser' ? 'bg-black text-white' : ''
            }`}
            onClick={() => onToolChange('eraser')}
          >
            <EraserIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Line Width Slider */}
      {currentTool === 'pen' && (
        <div className="flex flex-col items-center mt-4">
          <label htmlFor="lineWidth" className="text-white mb-2">
            Line Width: {lineWidth}
          </label>
          <input
            id="lineWidth"
            type="range"
            min="1"
            max="50"
            value={lineWidth}
            onChange={(e) => onLineWidthChange(Number(e.target.value))}
            className="w-full accent-black"
          />
        </div>
      )}

      {/* Eraser Size Slider */}
      {currentTool === 'eraser' && (
        <div className="flex flex-col items-center mt-4">
          <label htmlFor="erasersize" className="text-white mb-2">
            Eraser Size: {erasersize}
          </label>
          <input
            id="erasersize"
            type="range"
            min="20"
            max="100"
            value={erasersize}
            onChange={(e) => onErasersizeChange(Number(e.target.value))}
            className="w-full accent-black"
          />
        </div>
      )}

      {/* Shape Selection */}
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-2xl text-center font-bold mb-4">
          Shapes
          <span className="block h-1 bg-gray-500 mt-1"></span>
        </h1>
        <div className="flex flex-row items-center flex-wrap justify-center gap-2">
          <button
            className={`flex items-center justify-center border-2 border-black text-black m-2 p-3 rounded-full hover:bg-[#9d83e0] transition-all duration-300 ${
              currentShape === 'rectangle' ? 'bg-black text-white' : ''
            }`}
            onClick={() => onShapeChange('rectangle')}
          >
            <RectangleHorizontal className="h-6 w-6" />
          </button>
          <button
            className={`flex items-center justify-center border-2 border-black text-black m-2 p-3 rounded-full hover:bg-[#9d83e0] transition-all duration-300 ${
              currentShape === 'circle' ? 'bg-black text-white' : ''
            }`}
            onClick={() => onShapeChange('circle')}
          >
            <Circle className="h-6 w-6" />
          </button>
          <button
            className={`flex items-center justify-center border-2 border-black text-black m-2 p-3 rounded-full hover:bg-[#9d83e0] transition-all duration-300 ${
              currentShape === 'line' ? 'bg-black text-white' : ''
            }`}
            onClick={() => onShapeChange('line')}
          >
            <BsDash className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
