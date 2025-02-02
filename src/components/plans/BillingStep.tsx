import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { StepProps, BillingPeriod, StepValidators, calculatePrice, formatPrice } from './types'
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react'

interface BillingOptions {
  periods: readonly BillingPeriod[]
}

const DEFAULT_OPTIONS: BillingOptions = {
  periods: ['monthly', 'quarterly'] as const
}

export function BillingStep({ state, onUpdate, onNext, onBack, isValid = false, availableOptions }: StepProps) {
  const options = (availableOptions as BillingOptions) || DEFAULT_OPTIONS

  const handleUpdateBillingPeriod = React.useCallback((value: string) => {
    const billingPeriod = value as BillingPeriod
    if (StepValidators.billing.validateUpdate(state, { billingPeriod })) {
      onUpdate({ billingPeriod })
    }
  }, [state, onUpdate])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Choose Billing Period</h2>
      
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label>Billing Period</Label>
          <Select 
            value={state.billingPeriod} 
            onValueChange={handleUpdateBillingPeriod}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select billing period" />
            </SelectTrigger>
            <SelectContent>
              {options.periods.map(period => (
                <SelectItem key={period} value={period}>
                  {period === 'monthly' ? 'Monthly' : 'Quarterly (10% off)'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!isValid && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Please select a billing period to continue.
            </AlertDescription>
          </Alert>
        )}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-start w-full">
              <div className="space-y-1">
                <div className="font-medium">
                  {state.planType.charAt(0).toUpperCase() + state.planType.slice(1)} Plan - {state.region.replace('-', ' ')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {state.ram}GB RAM
                </div>
                <div className="text-sm text-muted-foreground">
                  {state.billingPeriod === 'monthly' ? 'Monthly billing' : 'Quarterly billing (10% off)'}
                </div>
              </div>
              <div className="text-xl font-semibold">
                {formatPrice(calculatePrice(state), 'month')}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between gap-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button 
          onClick={onNext}
          disabled={!isValid}
        >
          Continue to Checkout <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}