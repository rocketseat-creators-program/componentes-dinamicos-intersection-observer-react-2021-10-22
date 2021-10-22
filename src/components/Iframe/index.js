import { forwardRef } from "react";

const Iframe = forwardRef(({ src, ...props }, ref) => {
    const newProps = {
      ...props,
      src: null,
    }

    return <div ref={ref} data-iframe={src}>
        <iframe {...newProps} />
    </div>
  })

export default Iframe;