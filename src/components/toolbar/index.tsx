import React from 'react'
import { PencilIcon, EraserIcon, PenIcon } from 'lucide-react'
import { GiFoundryBucket } from 'react-icons/gi'
import { IoText } from 'react-icons/io5'

type ToolbarProps = {
  onToolChange: (tool: string) => void
}

const Toolbar: React.FC<ToolbarProps> = ({ onToolChange }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
      <button onClick={() => onToolChange('pencil')}>
        <PencilIcon className="h-6 w-6" />
      </button>
      <button onClick={() => onToolChange('pen')}>
        <PenIcon className="h-6 w-6" />
      </button>
      <button onClick={() => onToolChange('eraser')}>
        <EraserIcon className="h-6 w-6" />
      </button>
      <button onClick={() => onToolChange('bucket')}>
        <GiFoundryBucket className="h-6 w-6" />
      </button>
      <button onClick={() => onToolChange('text')}>
        <IoText className="h-6 w-6" />
      </button>
    </div>
  )
}

export default Toolbar
