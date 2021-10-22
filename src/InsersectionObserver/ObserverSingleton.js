import IntersectionFactory from "./ObserversFactory"

const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}

const onObserve = (entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            IntersectionFactory(target)
            observer.unobserve(target)
        }
    })
}

export default new IntersectionObserver(onObserve, defaultOptions);