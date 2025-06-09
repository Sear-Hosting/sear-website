'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DiscordRuntime, StepProps } from './types'

const RUNTIME_OPTIONS: { value: DiscordRuntime; label: string; description: string }[] = [
  {
    value: 'nodejs',
    label: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine'
  },
  {
    value: 'python',
    label: 'Python',
    description: 'High-level programming language for bot development'
  }
]

export default function DiscordRuntimeStep({ state, onUpdate, onNext, onBack, isValid }: StepProps) {
  const handleRuntimeSelect = (discordRuntime: DiscordRuntime) => {
    onUpdate({ discordRuntime })
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Choose Your Runtime</h2>
        <p className="text-muted-foreground">
          Select the programming language runtime for your Discord bot
        </p>
      </div>

      <div className="grid gap-4">
        {RUNTIME_OPTIONS.map((option) => (
          <Card
            key={option.value}
            className={`cursor-pointer transition-all ${
              state.discordRuntime === option.value
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:shadow-md'
            }`}
            onClick={() => handleRuntimeSelect(option.value)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="font-medium">{option.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {option.description}
                  </p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  state.discordRuntime === option.value
                    ? 'bg-primary border-primary'
                    : 'border-muted-foreground'
                }`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button 
          onClick={onNext} 
          disabled={!isValid}
          className={!onBack ? 'ml-auto' : ''}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}