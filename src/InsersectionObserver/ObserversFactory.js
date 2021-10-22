import IframeObserver from "./IframeObserver";
import ImageObserver from "./ImageObserver";

const IntersectionFactory = (entry) => {
    const { dataset } = entry || {};
    if(dataset.image) {
        ImageObserver(entry)
        return;
    }
    if(dataset.iframe) {
        IframeObserver(entry)
        return;
    }
}

export default IntersectionFactory;