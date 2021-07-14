export const adapterZone = (region) => {
    const locale = region.toUpperCase()
    if (locale.includes('SUL')) return 'SOUTH_ZONE'
    if (locale.includes('CENTRO')) return 'DOWNTOWN'
    return 'OTHER_ZONES'
  }
  export const adapterType = (residueMeasure) => {
    if (residueMeasure.toUpperCase().includes('CAÇAMBA')) return 'BUCKET'
    return 'BAG'
  }
  
  export const adapterMaterial = (material) => {
    const residueType = material.toUpperCase()
    if (residueType.includes('CALIÇA')) return 'RUBBLE'
    if (residueType.includes('MADEIRA')) return 'WOOD'
    if (residueType.includes('MIX')) return 'MIXED'
    return 'PLASTER'
  }
  export const adapterAccess = (accessType) => {
    const residueType = accessType.toUpperCase()
    if (residueType.toUpperCase().includes('ELEVADOR') || residueType.toUpperCase().includes('TERREO')) return 'EASY_ACCESS'
    return 'HARD_ACCESS'
  }