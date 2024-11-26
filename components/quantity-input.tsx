import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface QuantityInputProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function QuantityInput({ value, onChange, min = 1, max = 100 }: QuantityInputProps) {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const increment = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Button 
        type="button"
        variant="outline" 
        size="icon" 
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        -
      </Button>
      <Input
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value, 10)
          if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            onChange(newValue)
          }
        }}
        className="w-16 text-center"
        min={min}
        max={max}
      />
      <Button 
        type="button"
        variant="outline" 
        size="icon" 
        onClick={increment}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        +
      </Button>
    </div>
  )
}
