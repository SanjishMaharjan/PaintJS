import { useState } from 'react'
import Header from '../components/header'
import Canvas from '../components/canvas'
import Files from '../components/files'
import Menu from '../components/menu'
import Footer from '@/components/footer/Footer'
import { Trash } from 'lucide-react'
import ColorPalettePicker from '@/components/colorpicker'

const PaintHome: React.FC = () => {
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen')
  const [selectedColor, setSelectedColor] = useState<string>('#000000')
  const [lineWidth, setLineWidth] = useState(5)
  const [erasersize, setErasersize] = useState(20)
  const [shape, setShape] = useState<'rectangle' | 'circle' | 'line'>(
    'rectangle',
  )
  const [clearCanvas, setClearCanvas] = useState(false) // Track clear state

  const handleClearCanvas = () => {
    setClearCanvas(true)
  }

  const handleClearCanvasHandled = () => {
    setClearCanvas(false) // Reset clear state after it's handled
  }

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 mt-4">
        <div className="w-1/5 bg-gradient-to-tr from-[#52438d] to-[#705f97] text-white p-4 rounded-xl">
          <Menu
            currentTool={tool}
            onToolChange={setTool}
            lineWidth={lineWidth}
            onLineWidthChange={setLineWidth}
            erasersize={erasersize}
            onErasersizeChange={setErasersize}
            currentShape={shape}
            onShapeChange={setShape}
          />
          <div className="flex-col flex-wrap items-center justify-center mt-4">
            <h1 className="text-2xl text-center font-bold mb-4">
              Colors
              <span className="block h-1 bg-gray-500 mt-1"></span>
            </h1>
            <ColorPalettePicker
              colors={[
                '#FF0000',
                '#00FF00',
                '#0000FF',
                '#FFFF00',
                '#FF00FF',
                '#00FFFF',
              ]}
              onColorSelect={handleColorSelect}
            />
          </div>
        </div>
        <div className="w-3/4 border-2 border-gray-200 rounded-xl h-full bg-white">
          <div className="flex justify-end mt-2">
            <button
              className="flex items-center mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
              onClick={handleClearCanvas}
            >
              <Trash className="mr-2" />{' '}
              {/* Add margin to space the icon from text */}
              Clear
            </button>
          </div>
          <Canvas
            tool={tool}
            lineWidth={lineWidth}
            erasersize={erasersize}
            shape={shape}
            clearCanvas={clearCanvas}
            onClearCanvasHandled={handleClearCanvasHandled} // Pass the callback
            selectedColor={selectedColor}
          />
        </div>
        <div className="w-1/5 bg-gradient-to-tr from-[#52438d] to-[#705f97] text-white p-4 rounded-xl">
          <Files />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PaintHome
