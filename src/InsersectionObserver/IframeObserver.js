const IframeObserver = (element) => {
    debugger
    element.firstChild.src = element.dataset.iframe
}

export default IframeObserver;