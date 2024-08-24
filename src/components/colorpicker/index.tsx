// ColorPalettePicker.tsx
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

type ColorPalettePickerProps = {
  colors: string[];
  onColorSelect: (color: string) => void;
};

const ColorPalettePicker: React.FC<ColorPalettePickerProps> = ({
  colors,
  onColorSelect,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  const handleColorChange = (color: any) => {
    const hexColor = color.hex;
    setSelectedColor(hexColor);
    onColorSelect(hexColor);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Color Palette */}
      <div className="flex gap-2 mb-4">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorClick(color)}
            className={`w-8 h-8 cursor-pointer rounded-full border-2 border-gray-300 ${
              selectedColor === color ? 'border-black' : ''
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Color Picker */}
      <div className="flex justify-center">
        <SketchPicker
          color={selectedColor}
          onChangeComplete={handleColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPalettePicker;
