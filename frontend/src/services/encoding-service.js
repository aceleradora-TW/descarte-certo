/* eslint-disable no-console */
const encodingResult = (original = '', encoded = '') => ({
  original,
  encoded
});

const encode = async (value) => {
  if (!value) {
    return encodingResult('', 'Nothing to encode');
  }

  const uriEncodedValue = encodeURIComponent(value);

  console.log(`Base64Encoding value=${value} uriEncoded=${uriEncodedValue}`);

  try {
    const response = await fetch(`/encode?value=${uriEncodedValue}`);

    const data = await response.json();

    return encodingResult(data.original, data.encoded);
  } catch (error) {
    console.log(error);
    return encodingResult(value, `Encoding error: ${error.message}`);
  }
};

export default { encode };

