import * as React from 'react'
import { Button } from "@/components/ui/button"
import { StepProps, formatPrice, RAM_PRICING, STORAGE_PRICING, generateCheckoutUrl, calculateComponentPrice, getCPUThreadPrice, DISCORD_BOT_PRICE } from "./types"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface PriceBreakdownItem {
  label: string
  monthlyPrice: number
}

export function CheckoutStep({ state, onUpdate, onBack }: StepProps) {
  const [billingPeriod, setBillingPeriod] = React.useState(state.billingPeriod)
  
  // Destructure state for useMemo dependencies
  const { region, planType, serviceType, serverType, discordRuntime, ram, storage, cpuThreads } = state

  React.useEffect(() => {
    setBillingPeriod(state.billingPeriod)
  }, [state.billingPeriod])

  const isUSEast = region === 'us-east'
  const isDiscordBot = serviceType === 'discord-bot'
  
  const priceBreakdown: PriceBreakdownItem[] = isDiscordBot ? [
    {
      label: 'Discord Bot Hosting',
      monthlyPrice: DISCORD_BOT_PRICE
    }
  ] : [
    ...([
      {
        label: `CPU (${cpuThreads} Thread${cpuThreads === '1' ? '' : 's'})`,
        monthlyPrice: cpuThreads ? getCPUThreadPrice(region, cpuThreads, serviceType) : 0
      }
    ]),
    {
      label: `RAM (${ram}GB)${isUSEast ? ' ($0.75/GB)' : ''}`,
      monthlyPrice: RAM_PRICING(region, ram, serviceType)
    },
    ...(isUSEast ? [] : [
      {
        label: `Storage (${storage}GB NVMe SSD)`,
        monthlyPrice: storage ? STORAGE_PRICING[storage] : 0
      }
    ])
  ].filter(Boolean)

  const monthlySubtotal = priceBreakdown.reduce(
    (sum, item) => sum + item.monthlyPrice,
    0
  )
  const discountedSubtotal = priceBreakdown.reduce(
    (sum, item) => sum + calculateComponentPrice(item.monthlyPrice, billingPeriod),
    0
  )
  const periodTotal = billingPeriod === 'quarterly' ? discountedSubtotal * 3 : discountedSubtotal

  const handleBillingPeriodChange = React.useCallback((value: string) => {
    setBillingPeriod(value as 'monthly' | 'quarterly')
    onUpdate({ billingPeriod: value as 'monthly' | 'quarterly' })
  }, [onUpdate])

  const checkoutLink = React.useMemo(
    () =>
      generateCheckoutUrl({
        region,
        planType,
        serviceType,
        serverType,
        discordRuntime,
        ram,
        storage,
        cpuThreads,
        billingPeriod,
      }),
    [region, planType, serviceType, serverType, discordRuntime, ram, storage, cpuThreads, billingPeriod]
  )

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Review Your Selection</h2>
        <p className="text-gray-600">Confirm your server configuration and proceed to checkout</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Region:</span>
              <span className="font-medium">{region}</span>
              
              <span className="text-gray-600">Plan:</span>
              <span className="font-medium">{planType}</span>
              
              <span className="text-gray-600">Service Type:</span>
              <span className="font-medium">
                {serviceType === 'minecraft' ? 'Minecraft Server' : 'Discord Bot'}
              </span>
              
              {serviceType === 'minecraft' && serverType && (
                <>
                  <span className="text-gray-600">Server Type:</span>
                  <span className="font-medium">{serverType}</span>
                </>
              )}
              
              {serviceType === 'discord-bot' && discordRuntime && (
                <>
                  <span className="text-gray-600">Runtime:</span>
                  <span className="font-medium">{discordRuntime === 'nodejs' ? 'Node.js' : 'Python'}</span>
                  <span className="text-gray-600">Region:</span>
                  <span className="font-medium">America (US East)</span>
                  <span className="text-gray-600">CPU:</span>
                  <span className="font-medium">0.5 Threads</span>
                  <span className="text-gray-600">RAM:</span>
                  <span className="font-medium">512 MB</span>
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">3 GB NVMe SSD</span>
                  <span className="text-gray-600">Hardware:</span>
                  <span className="font-medium">Ampere® Altra®</span>
                </>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              {priceBreakdown.map((item, index) => {
                const discountedPrice = calculateComponentPrice(item.monthlyPrice, billingPeriod)
                return (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <div className="text-right">
                      {billingPeriod === 'quarterly' ? (
                        <>
                          <span className="text-gray-400 line-through mr-2">
                            {formatPrice(item.monthlyPrice, 'month')}
                          </span>
                          <span className="text-green-600">
                            {formatPrice(discountedPrice, 'month')}
                          </span>
                        </>
                      ) : (
                        <span>{formatPrice(item.monthlyPrice, 'month')}</span>
                      )}
                    </div>
                  </div>
                )
              })}

              <Separator className="my-4" />

              {!isDiscordBot && (
                <div className="space-y-4">
                  <h3 className="font-medium">Billing Period</h3>
                  <RadioGroup
                    value={billingPeriod}
                    onValueChange={handleBillingPeriodChange}
                    className="flex flex-col space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly" className="flex flex-col">
                        <span>Monthly</span>
                        <span className="text-sm text-gray-600">
                          {formatPrice(monthlySubtotal)} per month
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="quarterly" id="quarterly" />
                      <Label htmlFor="quarterly" className="flex flex-col">
                        <span>Quarterly (10% off each component)</span>
                        <span className="text-sm text-gray-600">
                          {formatPrice(discountedSubtotal)} per month ({formatPrice(periodTotal)} billed every 3 months)
                        </span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <Separator className="my-4" />

              {isDiscordBot ? (
                <div className="flex justify-between font-medium text-base pt-2">
                  <span>Total (monthly)</span>
                  <span>{formatPrice(DISCORD_BOT_PRICE)}</span>
                </div>
              ) : (
                <>
                  {billingPeriod === 'quarterly' ? (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Monthly Base Price</span>
                        <span className="text-gray-400 line-through">{formatPrice(monthlySubtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discounted Monthly Price (10% off)</span>
                        <span>{formatPrice(discountedSubtotal)}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly Price</span>
                      <span>{formatPrice(monthlySubtotal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between font-medium text-base pt-2">
                    <span>Total {billingPeriod === 'quarterly' ? '(3 months)' : '(monthly)'}</span>
                    <span>{formatPrice(periodTotal)}</span>
                  </div>

                  {billingPeriod === 'quarterly' && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>You save</span>
                      <span>{formatPrice((monthlySubtotal - discountedSubtotal) * 3)} over 3 months</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          onClick={onBack}
          className="w-full sm:w-auto"
        >
          Back
        </Button>
        <Button
          asChild
          className="w-full sm:w-auto"
        >
          <a
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Proceed to Checkout
          </a>
        </Button>
      </div>
    </div>
  )
}