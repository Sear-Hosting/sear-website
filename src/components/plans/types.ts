// Basic types
export type Region = 'india' | 'singapore' | 'us-east'
export type PlanType = 'budget'
export type ServiceType = 'minecraft' | 'discord-bot'
export type ServerType = 'PaperMC' | 'Fabric' | 'PocketmineMP' | 'Forge' | 'GeyserMC'
export type DiscordRuntime = 'nodejs' | 'python'
export type CPUThreads = '0.5' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export type RAM = '0.5' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '10' | '12' | '16' | '20'
export type Storage = '3' | '50' | '75' | '100' | '150' | '200'
export type Currency = 'USD' | 'PHP' | 'INR'
export type BillingPeriod = 'monthly' | 'quarterly'
export type FormStep = 'type' | 'region' | 'plan' | 'server' | 'runtime' | 'cpuram' | 'storage' | 'checkout'

// Interfaces
export interface FormState {
  region: Region
  planType: PlanType
  serviceType?: ServiceType
  serverType?: ServerType
  discordRuntime?: DiscordRuntime
  cpuThreads?: CPUThreads
  ram: RAM
  storage?: Storage
  billingPeriod: BillingPeriod
}

export interface StepProps {
  state: FormState
  onUpdate: (updates: Partial<FormState>) => void
  onNext: () => void
  onBack?: () => void
  isValid?: boolean
  availableOptions?: unknown
}

export interface StepValidation {
  canProceed: (state: FormState) => boolean
  getAvailableOptions: (state: FormState) => unknown
  validateUpdate: (state: FormState, update: Partial<FormState>) => boolean
}

// Constants and Configuration
export const STORAGE_OPTIONS: Storage[] = ['50', '100', '150', '200']

export const SERVER_TYPES: ServerType[] = [
  'PaperMC',
  'Fabric',
  'PocketmineMP',
  'Forge',
  'GeyserMC'
]

// Pricing
export const getCPUThreadPrice = (region: Region, threads: CPUThreads, serviceType?: ServiceType): number => {
  // Discord bot special pricing
  if (serviceType === 'discord-bot') {
    return 0; // CPU is free for Discord bots
  }

  const basePrice = 3.75; // Base price per thread for Budget Asia
  const threadCount = Number(threads);

  if (region === 'us-east') {
      return threadCount <= 2 ? 0 : (threadCount - 2) * 1.25; // US East 2 free threads
  }

  // Budget Asia regions use base pricing
  return threadCount * basePrice;
}

// Base CPU thread pricing for reference
export const CPU_THREAD_PRICING: Record<CPUThreads, number> = {
  '0.5': 0, // Discord bot special pricing
  '1': 3.75,
  '2': 7.50,
  '3': 11.25,
  '4': 15.00,
  '5': 18.75,
  '6': 22.50,
  '7': 26.25,
  '8': 30.00
}

export const US_EAST_FIXED = {
  storage: '50' as const,
  ramPricePerGB: 0.75
}

export const RAM_PRICING = (region: Region, ram: RAM, serviceType?: ServiceType): number => {
  // Discord bot special pricing
  if (serviceType === 'discord-bot') {
    return 0; // RAM is free for Discord bots
  }

  const ramAmount = Number(ram);
  
  if (region === 'us-east') {
    return ramAmount * US_EAST_FIXED.ramPricePerGB;
  }

  // Asia regions (India/Singapore) use standard pricing
  const pricePerGB = 1;
  return ramAmount * pricePerGB;
}

export const STORAGE_PRICING: Record<Storage, number> = {
  '3': 0, // Discord bot special pricing
  '50': 2.50,
  '75': 3.75,
  '100': 5.00,
  '150': 7.50,
  '200': 10.00
}

// Discord Bot fixed pricing
export const DISCORD_BOT_PRICE = 1.5; // $1.5/month flat rate

// Plan specifications
export type PlanSpecs = {
  cpu: string
}

export const PLAN_SPECS: Record<Region, Record<PlanType, PlanSpecs>> = {
  'india': {
    budget: {
      cpu: 'Ampere® Altra® @ 3.0 GHz'
    }
  },
  'singapore': {
    budget: {
      cpu: 'Ampere® Altra® @ 3.0 GHz'
    }
  },
  'us-east': {
    budget: {
      cpu: 'Ryzen 9 5900x'
    }
  }
}

// Region plan configuration
export const REGION_PLAN_CONFIG = {
  india: {
    availablePlans: ['budget'] as const,
    ramOptions: {
      budget: ['0.5', '2', '3', '4', '5', '6', '7', '8', '10', '12', '16', '20'] as const
    }
  },
  singapore: {
    availablePlans: ['budget'] as const,
    ramOptions: {
      budget: ['0.5', '2', '3', '4', '5', '6', '7', '8', '10', '12', '16', '20'] as const
    }
  },
  'us-east': {
    availablePlans: ['budget'] as const,
    ramOptions: {
      budget: ['0.5', '4', '6', '8', '10', '12', '16', '20'] as const
    }
  }
} as const

// Validation helpers
export const isValidPlanForRegion = (region: Region, plan: PlanType): boolean => {
  const availablePlans = [...REGION_PLAN_CONFIG[region].availablePlans]
  return availablePlans.includes(plan)
}

export const isValidRAMForPlan = (region: Region, plan: PlanType, ram: RAM): boolean => {
  const ramOptions = [...REGION_PLAN_CONFIG[region].ramOptions[plan]]
  return ramOptions.includes(ram)
}

// Step validators
export const StepValidators: Record<FormStep | 'billing' | 'ram', StepValidation> = {
  region: {
    canProceed: (state) => Boolean(state.region),
    getAvailableOptions: () => Object.keys(REGION_PLAN_CONFIG),
    validateUpdate: (_, update) => !update.region || (update.region in REGION_PLAN_CONFIG)
  },
  plan: {
    canProceed: (state) => Boolean(
      state.region &&
      state.planType &&
      isValidPlanForRegion(state.region, state.planType)
    ),
    getAvailableOptions: (state) =>
      state.region ? REGION_PLAN_CONFIG[state.region].availablePlans : [],
    validateUpdate: (state, update) =>
      !update.planType || (
        state.region &&
        isValidPlanForRegion(state.region, update.planType)
      )
  },
  type: {
    canProceed: (state) => Boolean(state.serviceType),
    getAvailableOptions: () => ['minecraft', 'discord-bot'],
    validateUpdate: (_, update) => !update.serviceType || ['minecraft', 'discord-bot'].includes(update.serviceType)
  },
  server: {
    canProceed: (state) => {
      if (state.serviceType === 'discord-bot') return true
      return Boolean(state.serverType)
    },
    getAvailableOptions: (state) => state.serviceType === 'minecraft' ? SERVER_TYPES : [],
    validateUpdate: (state, update) => {
      if (state.serviceType === 'discord-bot') return !update.serverType
      return !update.serverType || SERVER_TYPES.includes(update.serverType as ServerType)
    }
  },
  runtime: {
    canProceed: (state) => {
      if (state.serviceType === 'minecraft') return true
      return Boolean(state.discordRuntime)
    },
    getAvailableOptions: (state) => state.serviceType === 'discord-bot' ? ['nodejs', 'python'] : [],
    validateUpdate: (state, update) => {
      if (state.serviceType === 'minecraft') return !update.discordRuntime
      return !update.discordRuntime || ['nodejs', 'python'].includes(update.discordRuntime)
    }
  },
  cpuram: {
    canProceed: (state) => {
      /*if (state.region === '') {
        return Boolean(
          state.region &&
          state.planType &&
          state.ram &&
          isValidRAMForPlan(state.region, state.planType, state.ram)
        )
      }*/
      return Boolean(
        state.region &&
        state.planType &&
        state.cpuThreads &&
        state.ram &&
        isValidRAMForPlan(state.region, state.planType, state.ram)
      )
    },
    getAvailableOptions: (state) => ({
      cpuThreads: /*state.region !== '' ?*/ Object.keys(CPU_THREAD_PRICING),
      ram: (state.region && state.planType)
        ? REGION_PLAN_CONFIG[state.region].ramOptions[state.planType]
        : []
    }),
    validateUpdate: (state, update) => {
      if (update.ram && !(
        state.region &&
        state.planType &&
        isValidRAMForPlan(state.region, state.planType, update.ram)
      )) {
        return false
      }

      if (update.cpuThreads) {
      //if (state.region === '') return false
        if (!(update.cpuThreads in CPU_THREAD_PRICING)) return false
      }

      return true
    }
  },
  storage: {
    canProceed: (state) => {
      if (state.region === 'us-east') return true
      return Boolean(state.storage)
    },
    getAvailableOptions: (state) => 
      state.region === 'us-east' ? [] : STORAGE_OPTIONS,
    validateUpdate: (state, update) => {
      if (state.region === 'us-east') return !update.storage
      return !update.storage || update.storage in STORAGE_PRICING
    }
  },
  checkout: {
    canProceed: (state) => {
      const baseRequirements = Boolean(
        state.region &&
        state.planType &&
        state.serviceType &&
        state.ram &&
        state.billingPeriod &&
        isValidPlanForRegion(state.region, state.planType) &&
        isValidRAMForPlan(state.region, state.planType, state.ram)
      )

      if (state.serviceType === 'minecraft') {
        return baseRequirements && Boolean(state.serverType)
      }
      
      if (state.serviceType === 'discord-bot') {
        return baseRequirements && Boolean(state.discordRuntime)
      }

      return baseRequirements
    },
    getAvailableOptions: () => ({}),
    validateUpdate: () => false
  },
  billing: {
    canProceed: (state) => Boolean(state.billingPeriod),
    getAvailableOptions: () => ({ periods: ['monthly', 'quarterly'] as const }),
    validateUpdate: (_, update) => !update.billingPeriod || ['monthly', 'quarterly'].includes(update.billingPeriod)
  },
  ram: {
    canProceed: (state) => Boolean(
      state.region &&
      state.planType &&
      state.ram &&
      isValidRAMForPlan(state.region, state.planType, state.ram)
    ),
    getAvailableOptions: (state) =>
      state.region && state.planType
        ? REGION_PLAN_CONFIG[state.region].ramOptions[state.planType]
        : [],
    validateUpdate: (state, update) =>
      !update.ram || (
        state.region &&
        state.planType &&
        isValidRAMForPlan(state.region, state.planType, update.ram)
      )
  }
}

// Step navigation
export const getNextStep = (currentStep: FormStep, state: FormState): FormStep | null => {
  const baseStepOrder: FormStep[] = ['type', 'region', 'plan']
  const minecraftFlow: FormStep[] = ['server', 'cpuram', 'storage', 'checkout']
  const discordFlow: FormStep[] = ['runtime', 'checkout']
  
  let stepOrder: FormStep[]
  if (state.serviceType === 'minecraft') {
    stepOrder = [...baseStepOrder, ...minecraftFlow]
  } else if (state.serviceType === 'discord-bot') {
    stepOrder = ['type', ...discordFlow]
  } else {
    stepOrder = baseStepOrder
  }
  
  const currentIndex = stepOrder.indexOf(currentStep)
  
  if (currentIndex === -1 || !StepValidators[currentStep].canProceed(state)) {
    return currentStep
  }

  const nextStep = stepOrder[currentIndex + 1]
  
  // Skip storage step for US East in minecraft flow
  if (state.region === 'us-east' && state.serviceType === 'minecraft' && nextStep === 'storage') {
    return 'checkout'
  }
  
  return nextStep || null
}

// Price calculation helpers
export const calculateComponentPrice = (basePrice: number, billingPeriod: BillingPeriod): number => {
  if (billingPeriod === 'quarterly') {
    return basePrice * 0.9
  }
  return basePrice
}

// Formatting
export const formatPrice = (price: number, period?: 'month' | 'gb'): string => {
  return `$${price.toFixed(2)}${period ? `/${period}` : ''}`
}

// URL generation
export const generateCheckoutUrl = (config: FormState): string => {
  // Discord Bot special checkout URLs
  if (config.serviceType === 'discord-bot') {
    if (config.discordRuntime === 'python') {
      return 'https://billing.sear.host/checkout/config/17'
    } else if (config.discordRuntime === 'nodejs') {
      return 'https://billing.sear.host/checkout/config/16'
    }
    // Fallback to nodejs if runtime not specified
    return 'https://billing.sear.host/checkout/config/16'
  }

  // Minecraft server checkout logic (existing)
  const params = new URLSearchParams()
  
  let configSet = CHECKOUT_CONFIGS.BUDGET_ASIA
  if (config.region === 'us-east') {
    configSet = CHECKOUT_CONFIGS.BUDGET_NA
  }

  // Required parameters
  const ramValue = config.ram && configSet.values.ram[config.ram]
  if (ramValue) {
    params.set(`config[${configSet.params.RAM}]`, ramValue)
  }

  if (config.serverType && config.serverType in configSet.values.serverType) {
    params.set(`config[${configSet.params.SERVER_TYPE}]`,
      configSet.values.serverType[config.serverType])
  }
  if (config.cpuThreads && configSet.params.CPU && configSet.values.cpu?.[config.cpuThreads]) {
    params.set(`config[${configSet.params.CPU}]`,
      configSet.values.cpu[config.cpuThreads])
  }

  // Optional parameters for non-US regions
  if (config.region !== 'us-east') {
    if (configSet.params.LOCATION && configSet.values.location?.[config.region]) {
      params.set(`config[${configSet.params.LOCATION}]`,
        configSet.values.location[config.region])
    }
    
    if (config.storage && configSet.params.DISK && configSet.values.storage?.[config.storage]) {
      params.set(`config[${configSet.params.DISK}]`,
        configSet.values.storage[config.storage])
    }
  }

  params.set('billing_cycle', config.billingPeriod)
  return `${configSet.baseUrl}?${params.toString()}`
}

// Checkout configuration
type CheckoutConfig = {
  readonly baseUrl: string;
  readonly params: {
    readonly RAM: string;
    readonly SERVER_TYPE: string;
    readonly LOCATION?: string;
    readonly DISK?: string;
    readonly CPU?: string;
  };
  readonly values: {
    readonly ram: Partial<Record<RAM, string>>;
    readonly serverType: Record<ServerType, string>;
    readonly location?: Record<Exclude<Region, 'us-east'>, string>;
    readonly storage?: Record<Storage, string>;
    readonly cpu?: Record<CPUThreads, string>;
  };
};

export const CHECKOUT_CONFIGS: Record<'BUDGET_ASIA' | 'BUDGET_NA', CheckoutConfig> = {
  BUDGET_ASIA: {
    baseUrl: 'https://billing.sear.host/checkout/config/13',
    params: {
      RAM: '10',
      SERVER_TYPE: '18',
      LOCATION: '39',
      DISK: '41',
      CPU: '47'
    },
    values: {
      ram: {
        '2': '10',
        '4': '12',
        '6': '14',
        '8': '16',
        '10': '18',
        '12': '38',
        '16': '39',
        '20': '40'
      },
      serverType: {
        'PaperMC': '55',
        'Fabric': '56',
        'PocketmineMP': '57',
        'Forge': '93',
        'GeyserMC': '142'
      },
      location: {
        'india': '138',
        'singapore': '140'
      },
      storage: {
        '3': '999', // Discord bot storage (placeholder value)
        '50': '147',
        '75': '148',
        '100': '149',
        '150': '150',
        '200': '151'
      },
      cpu: {
        '0.5': '999', // Discord bot CPU (placeholder value)
        '1': '175',
        '2': '176',
        '3': '177',
        '4': '178',
        '5': '179',
        '6': '180',
        '7': '181',
        '8': '182'
      }
    }
  },
  BUDGET_NA: {
    baseUrl: 'https://billing.sear.host/checkout/config/15',
    params: {
      RAM: '44',
      SERVER_TYPE: '45',
      CPU: '50'
    },
    values: {
      ram: {
        '0.5': '999', // Discord bot RAM (placeholder value)
        '4': '160',
        '6': '161',
        '8': '162',
        '10': '163',
        '12': '164',
        '16': '165',
        '20': '166'
      },
      serverType: {
        'PaperMC': '168',
        'Fabric': '174',
        'PocketmineMP': '171',
        'Forge': '170',
        'GeyserMC': '172'
      },
      cpu: {
            '0.5': '999', // Discord bot CPU (placeholder value)
            '1': '194',
            '2': '195',
            '3': '196',
            '4': '197',
            '5': '198',
            '6': '199',
            '7': '200',
            '8': '201'
        }
    }
  }
} as const