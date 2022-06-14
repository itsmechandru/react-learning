import React from 'react'

function Link({ className, href, children }) {
    const onLinkClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return
        }
        event.preventDefault();
        window.history.pushState({}, "", href)

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onLinkClick} className={className} href={href}>
            {children}
        </a>
    )
}

export default Link