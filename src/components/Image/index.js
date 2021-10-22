import { forwardRef } from "react";

const Image = forwardRef(({ src, ...props }, ref) => {
  const newProps = {
    ...props,
    src: null,
  }
  return <img ref={ref} data-image={src} {...newProps} />
})

export default Image;