export const scrollToTopAnd = (eventHandler = () => '') => {
    return (...args) => {
        eventHandler(...args);
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    };
};