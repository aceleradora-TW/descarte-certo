const adapterZone = (region) => {
  console.log({region})
  return region
}
const adapterType = (residueMeasure) => {
  console.log({residueMeasure})
  return residueMeasure
}
const adapterMaterial = (residueType) => {
  console.log({residueType})
  return residueType
}
const adapterAccess = (accessType) => {
  console.log({accessType})
  return accessType
}

export const getPayload = (state) => {
  const {
    accessType,
    localDescription,
    name,
    email,
    phone,
    region,
    residueType,
    residueMeasure,
    residueAmount,
  } = state

  return {
    requester: {
      name,
      email,
      phone,
    },
    residueAddress: {
      region,
      locationInfo: `${accessType} ${localDescription} ${floor}`,
    },
    residueRequest: {
      residueType,
      residueMeasure: `${residueAmount} ${residueMeasure}`,
    },
    calculate: {
      amount: parseInt(residueAmount),
      zones: adapterZone(region),
      type: adapterType(residueMeasure),
      materials: adapterMaterial(residueType),
      access: adapterAccess(accessType)
    }
  };
}