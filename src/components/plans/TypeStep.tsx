'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceType, StepProps } from './types'

const SERVICE_OPTIONS: { value: ServiceType; label: string; description: string }[] = [
  {
    value: 'minecraft',
    label: 'Minecraft Server',
    description: 'Host your Minecraft server with various mod loaders and plugins'
  },
  {
    value: 'discord-bot',
    label: 'Discord Bot',
    description: 'Host your Discord bot with Node.js or Python runtime'
  }
]

export default function TypeStep({ state, onUpdate, onNext, onBack, isValid }: StepProps) {
  const handleServiceTypeSelect = (serviceType: ServiceType) => {
    if (serviceType === 'discord-bot') {
      // Set default values for Discord Bot to skip intermediate steps
      onUpdate({ 
        serviceType,
        region: 'us-east',
        planType: 'budget',
        ram: '0.5',
        cpuThreads: '0.5',
        storage: '3',
        billingPeriod: 'monthly',
        // Reset dependent fields when changing service type
        serverType: undefined,
        discordRuntime: undefined
      })
    } else {
      onUpdate({ 
        serviceType,
        // Reset dependent fields when changing service type
        serverType: undefined,
        discordRuntime: undefined
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Choose Your Service Type</h2>
        <p className="text-muted-foreground">
          Select what type of service you want to host
        </p>
      </div>

      <div className="grid gap-4">
        {SERVICE_OPTIONS.map((option) => (
          <Card
            key={option.value}
            className={`cursor-pointer transition-all ${
              state.serviceType === option.value
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:shadow-md'
            }`}
            onClick={() => handleServiceTypeSelect(option.value)}
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
                  state.serviceType === option.value
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