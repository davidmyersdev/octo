interface GlobalConfig {
  supportsFirebase: boolean,
}

export const globalConfig: GlobalConfig = {
  supportsFirebase: false,
}

export const updateGlobalConfig = (updates: Partial<GlobalConfig>) => {
  Object.assign(globalConfig, updates)
}
