import { useRef, useState } from 'react'
import Header from '../components/header'
import Canvas from '../components/canvas'
import Menu from '../components/menu'
import Footer from '@/components/footer/Footer'
import ColorPalettePicker from '@/components/colorpicker'
import Options from '@/components/options'

const PaintHome: React.FC = () => {
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen')
  const canvasRef = useRef<HTMLCanvasElement>(null) // Move canvasRef to the parent
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

  const saveCanvasAsImage = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'canvas.png' // The file name
      link.click()
    }
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
        <div className="w-1/6 bg-gradient-to-tr from-[#52438d] to-[#705f97] text-white p-4 rounded-xl">
          <Options handleClearCanvas={handleClearCanvas} saveCanvasAsImage={saveCanvasAsImage} /> {/* Pass saveCanvasAsImage */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PaintHome
