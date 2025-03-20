import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export const Fingerprint = () => {
  const [fingerprint, setFingerprint] = useState<string | null>(null);

  useEffect(() => {
    getFingerprint().then((fingerprint) => setFingerprint(fingerprint));
  }, []);

  return <>{fingerprint}</>;
};

export default Fingerprint;
