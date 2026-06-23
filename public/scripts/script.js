const dropHeaders = document.querySelectorAll(".clickable-header");

const workspace = Blockly.inject('screen', {
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
    zoom: {
        controls: true,
        wheel: true
    }
});

dropHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const dropdownContent = header.nextElementSibling;

        // Toggle display
        if (dropdownContent.style.display === "flex") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "flex";
        }
    });
});

// ---- Live code panel ----
// Every time a block is added, removed, moved or edited, regenerate the
// JavaScript code and show it on the left panel ("Código").
const codeElement = document.getElementById('code');
const copyBtn = document.getElementById('copy-btn');

function updateCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    codeElement.textContent = code || '// Monte os blocos para gerar o código aqui...';

    // Re-apply syntax highlighting (highlight.js) whenever the code changes
    if (window.hljs) {
        delete codeElement.dataset.highlighted;
        hljs.highlightElement(codeElement);
    }
}

workspace.addChangeListener((event) => {
    // Ignore UI-only events (clicks, selections, viewport changes) so we
    // don't regenerate code on every mouse move.
    if (event.isUiEvent) return;
    updateCode();
});

// Generate the initial (empty) code block on page load
updateCode();

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => { copyBtn.textContent = original; }, 1200);
    });
});
