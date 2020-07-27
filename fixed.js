function fixedBody() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    document.body.style.cssText += `position:fixed;top:-${scrollTop}px;`;
}

function looseBody() {
    const {
        body
    } = document;
    body.style.position = '';
    const {
        top
    } = body.style;
    document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
    body.style.top = '';
}

export {
    fixedBody,
    looseBody
};