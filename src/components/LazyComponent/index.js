import { useEffect, useRef } from 'react';
import ObserverSingleton from '../../InsersectionObserver/ObserverSingleton';
import Iframe from '../Iframe';
import Image from '../Image';

export const LAZY_ELEMENTS_TYPES = {
    IMAGE: `IMAGE`,
    IFRAME: `IFRAME`
}

const LAZY_ELEMENTS = {
    [LAZY_ELEMENTS_TYPES.IFRAME]: Iframe,
    [LAZY_ELEMENTS_TYPES.IMAGE]: Image
};

const LazyComponent = ({ type, ...props }) => {
  const lazyRef = useRef(null)
  useEffect(() => {
    if(lazyRef.current) {
      ObserverSingleton.observe(lazyRef.current)
    }
  }, [lazyRef])
  const Component = LAZY_ELEMENTS[type]
  return <Component ref={lazyRef} {...props} />
}

export default LazyComponent;