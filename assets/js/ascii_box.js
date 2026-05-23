

const ASCII_ROW = '|                                                                                                                   |\n';
const MOBILE_BREAKPOINT = 700;

function resizeAsciiBox() {

    if (window.innerWidth <= MOBILE_BREAKPOINT) return;

    const content = document.querySelector('.content-container');
    const rowsContainer = document.getElementById('ascii-rows');
    const pre = document.getElementById('ascii-box');

    if (!content || !rowsContainer || !pre) return;

    const lineHeight = parseFloat(getComputedStyle(pre).lineHeight) || 18;

    const contentHeight = content.offsetHeight;

    const fixedLines = 8;
    const fixedHeight = fixedLines * lineHeight;

    const neededRows = Math.ceil((contentHeight - fixedHeight) / lineHeight) + 2;
    const rowCount = Math.max(neededRows, 0);

    rowsContainer.textContent = ASCII_ROW.repeat(rowCount);
}

// wait until everything loads
window.addEventListener('load', () => {
    resizeAsciiBox();

    const content = document.querySelector('.content-container');
    if (!content) return;

    // recalculate whenever content size changes
    const observer = new ResizeObserver(() => {
        resizeAsciiBox();
    });

    observer.observe(content);
});

document.addEventListener('toggle', function (e) {
    if (e.target.tagName === 'DETAILS') {
        resizeAsciiBox();
    }
}, true);

window.addEventListener('resize', resizeAsciiBox);