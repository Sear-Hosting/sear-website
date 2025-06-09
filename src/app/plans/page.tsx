'use client'

import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { FormProgress } from '@/components/plans/FormProgress'
import { RegionStep } from '@/components/plans/RegionStep'
import { PlanStep } from '@/components/plans/PlanStep'
import TypeStep from '@/components/plans/TypeStep'
import ServerTypeStep from '@/components/plans/ServerTypeStep'
import DiscordRuntimeStep from '@/components/plans/DiscordRuntimeStep'
import CPURamStep from '@/components/plans/CPURamStep'
import StorageStep from '@/components/plans/StorageStep'
import { CheckoutStep } from '@/components/plans/CheckoutStep'
import {
  FormStep,
  FormState,
  StepValidators,
  StepProps,
  Region,
  PlanType,
  ServiceType,
  RAM,
  CPUThreads,
  Storage,
  ServerType,
  DiscordRuntime
} from '@/components/plans/types'
import { useIsMobile } from '@/hooks/use-mobile'

const STEPS = {
  region: RegionStep,
  plan: PlanStep,
  type: TypeStep,
  server: ServerTypeStep,
  runtime: DiscordRuntimeStep,
  cpuram: CPURamStep,
  storage: StorageStep,
  checkout: CheckoutStep
} satisfies Record<FormStep, React.ComponentType<StepProps>>

// Load initial state from URL parameters
function getInitialState(): FormState {
  if (typeof window === 'undefined') {
    return {
      region: 'india',
      planType: 'budget',
      serviceType: undefined,
      serverType: undefined,
      cpuThreads: '2',
      ram: '4',
      storage: '50',
      billingPeriod: 'monthly'
    }
  }

  const params = new URLSearchParams(window.location.search)
  
  return {
    region: (params.get('region') as Region) || 'india',
    planType: (params.get('plan') as PlanType) || 'budget',
    serviceType: (params.get('service') as ServiceType) || undefined,
    serverType: (params.get('server') as ServerType) || undefined,
    discordRuntime: (params.get('runtime') as DiscordRuntime) || undefined,
    cpuThreads: (params.get('cpu') as CPUThreads) || '2',
    ram: (params.get('ram') as RAM) || '4',
    storage: (params.get('storage') as Storage) || '50',
    billingPeriod: (params.get('billing') as 'monthly' | 'quarterly') || 'monthly'
  }
}

// Get initial step from URL or start at type
function getInitialStep(): FormStep {
  if (typeof window === 'undefined') return 'type'
  const params = new URLSearchParams(window.location.search)
  const step = params.get('step') as FormStep | null
  return step && Object.keys(STEPS).includes(step) ? step : 'type'
}

// Define step order for navigation - will be dynamically determined based on service type

export default function PlansPage() {
  const isMobile = useIsMobile()
  const [step, setStep] = React.useState<FormStep>(getInitialStep)
  const [state, setState] = React.useState<FormState>(getInitialState)

  // Sync URL with form state
  React.useEffect(() => {
    const params = new URLSearchParams()
    params.set('step', step)
    if (state.region) params.set('region', state.region)
    if (state.planType) params.set('plan', state.planType)
    if (state.serviceType) params.set('service', state.serviceType)
    if (state.serverType) params.set('server', state.serverType)
    if (state.discordRuntime) params.set('runtime', state.discordRuntime)
    if (state.cpuThreads) params.set('cpu', state.cpuThreads)
    if (state.ram) params.set('ram', state.ram)
    if (state.storage) params.set('storage', state.storage)
    if (state.billingPeriod) params.set('billing', state.billingPeriod)

    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    )
  }, [state, step])

  const handleUpdateState = (updates: Partial<FormState>) => {
    setState(prev => {
      // Validate updates before applying
      if (!StepValidators[step].validateUpdate(prev, updates)) {
        return prev
      }

      const newState = { ...prev, ...updates }

      // Reset to budget plan if switching to US East
      if (updates.region === 'us-east' && prev.region !== 'us-east') {
        newState.planType = 'budget'
      }

      return newState
    })
  }

  const getStepOrder = (): FormStep[] => {
    const baseSteps: FormStep[] = ['type', 'region', 'plan']
    
    if (state.serviceType === 'minecraft') {
      return [...baseSteps, 'server', 'cpuram', 'storage', 'checkout']
    } else if (state.serviceType === 'discord-bot') {
      return ['type', 'runtime', 'checkout']
    }
    
    return baseSteps
  }

  const handleNext = () => {
    const stepOrder = getStepOrder()
    const currentIndex = stepOrder.indexOf(step)
    
    if (currentIndex === -1 || !StepValidators[step].canProceed(state)) {
      return
    }

    let nextStep = stepOrder[currentIndex + 1]
    
    // Skip storage step for US East in minecraft flow
    if (state.region === 'us-east' && state.serviceType === 'minecraft' && nextStep === 'storage') {
      nextStep = 'checkout'
    }

    if (nextStep) {
      setStep(nextStep)
      // Scroll to top on mobile when changing steps
      if (isMobile) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const handleBack = () => {
    const stepOrder = getStepOrder()
    const currentIndex = stepOrder.indexOf(step)
    
    if (currentIndex > 0) {
      let prevStep = stepOrder[currentIndex - 1]
      
      // Skip storage step for US East in minecraft flow when going back
      if (state.region === 'us-east' && state.serviceType === 'minecraft' && prevStep === 'storage') {
        prevStep = stepOrder[currentIndex - 2] || stepOrder[0]
      }
      
      setStep(prevStep)
      
      // Scroll to top on mobile when changing steps
      if (isMobile) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  // Get current step component and validation state
  const StepComponent = STEPS[step]
  const isValid = StepValidators[step].canProceed(state)
  const availableOptions = StepValidators[step].getAvailableOptions(state)

  return (
    <main className="min-h-screen flex items-start md:items-center justify-center py-4 md:py-8 bg-background">
      <div className="container px-0 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 px-4 text-foreground">
            Choose Your Hosting Plan
          </h1>
          <Card className="w-full md:max-w-[800px] rounded-none md:rounded-lg shadow-sm md:shadow bg-card">
            <CardContent className="p-4 md:p-8">
              <FormProgress currentStep={step} state={state} />
              <StepComponent
                state={state}
                onUpdate={handleUpdateState}
                onNext={handleNext}
                onBack={step !== 'type' ? handleBack : undefined}
                isValid={isValid}
                availableOptions={availableOptions}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
