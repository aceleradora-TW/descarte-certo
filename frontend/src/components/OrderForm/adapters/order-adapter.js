export const getPayload = (state) => {
    const {
      fullName,
      email,
      cellphone,
      region,
      locationInfo,
      residueType,
      residueMeasure,
    } = state

    return {
      requester: {
        fullName,
        email,
        cellphone,
      },
      residueAddress: {
        region,
        locationInfo,
      },
      residueRequest: {
        residueType,
        residueMeasure,
      },
    };
  }