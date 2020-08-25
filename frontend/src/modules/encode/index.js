import React, { useState } from 'react';
import './encode.scss';

import encodingService from '../../services/encoding-service';

function Encode() {
  const [encoding, setEncoding] = useState({
    original: '',
    encoded: 'Nothing to encode'
  });

  const encodeAndSet = async (value) => {
    const result = await encodingService.encode(value);
    setEncoding(result);
  };
  return (
    <div className="encode">
        <p> {encoding.original} </p>
        <p> {encoding.encoded} </p>
        <input type="text" onChange={(event) => encodeAndSet(event.target.value)} />
    </div>
  );
}
export default Encode;
