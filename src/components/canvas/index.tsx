import React, { useRef, useState, useEffect } from 'react'
import { drawCircle, drawLine, drawRectangle } from '@/utils/shapes/shapes'
import { Download } from 'lucide-react'

type CanvasProps = {
  tool: 'pen' | 'eraser'
  lineWidth: number
  erasersize: number
  shape: 'rectangle' | 'circle' | 'line'
  clearCanvas: boolean
  onClearCanvasHandled: () => void
  selectedColor: string
} 

const Canvas: React.FC<CanvasProps> = ({
  tool,
  lineWidth,
  erasersize,
  shape,
  clearCanvas,
  onClearCanvasHandled,
  selectedColor,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [isDrawing, setIsDrawing] = useState(false)
  const [startCoords, setStartCoords] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.lineCap = 'round'
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = selectedColor
      }
    }
  }, [lineWidth ,selectedColor])

  useEffect(() => {
    if (clearCanvas) {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
      }
      onClearCanvasHandled()
    }
  }, [clearCanvas, onClearCanvasHandled])

  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        if (tool === 'pen') {
          ctx.beginPath()
          ctx.moveTo(x, y)
        } else if (tool === 'eraser') {
          // Eraser does not need to track start coordinates
        } else if (shape) {
          setStartCoords({ x, y })
        }
      }
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    if (shape && startCoords) {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          const rect = canvas.getBoundingClientRect()
          const endX = rect.width / 2
          const endY = rect.height / 2
          switch (shape) {
            case 'rectangle':
              drawRectangle(ctx, startCoords.x, startCoords.y, endX, endY)
              break
            case 'circle':
              drawCircle(ctx, startCoords.x, startCoords.y, endX, endY)
              break
            case 'line':
              drawLine(ctx, startCoords.x, startCoords.y, endX, endY)
              break
          }
          setStartCoords(null)
        }
      }
    }
  }

  const drawOrErase = (e: React.MouseEvent) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        if (tool === 'pen') {
          ctx.lineTo(x, y)
          ctx.stroke()
        } else if (tool === 'eraser') {
          ctx.clearRect(
            x - erasersize / 2,
            y - erasersize / 2,
            erasersize,
            erasersize,
          )
        }
      }
    }
  }

  const getCursor = () => {
    if (tool === 'pen') {
      return 'url(src/assets/images/pen.svg), auto' // Replace with the actual path to your pencil icon
    } else if (tool === 'eraser') {
      return 'url(src/assets/images/eraser.svg), auto' // Replace with the actual path to your eraser icon
    } else {
      return 'default'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing && shape && startCoords) {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          const rect = canvas.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          // Clear the canvas before redrawing the shape
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          switch (shape) {
            case 'rectangle':
              drawRectangle(ctx, startCoords.x, startCoords.y, x, y)
              break
            case 'circle':
              drawCircle(ctx, startCoords.x, startCoords.y, x, y)
              break
            case 'line':
              drawLine(ctx, startCoords.x, startCoords.y, x, y)
              break
          }
        }
      }
    } else {
      drawOrErase(e)
    }
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
    <>
      <div className="flex justify-end mt-2">
        <button
          onClick={saveCanvasAsImage}
          className="flex items-center mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
        >
          <Download className="mr-2" />{' '}
          {/* Add margin-right to space the icon from text */}
          Save as PNG
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={handleMouseMove}
        style={{ cursor: getCursor() }}
      />
    </>
  )
}

export default Canvas
