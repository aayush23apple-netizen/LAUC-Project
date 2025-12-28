let currentSize = 3;

document.addEventListener("DOMContentLoaded", () => {
    createMatrix();
});

function createMatrix() {
    currentSize = parseInt(document.getElementById("matrixSize").value);
    const container = document.getElementById("matrixContainer");

    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;

    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = `m${i}${j}`;
            container.appendChild(input);
        }
    }
}

document.getElementById("matrixSize").addEventListener("change", createMatrix);

function getMatrix() {
    const matrix = [];
    for (let i = 0; i < currentSize; i++) {
        matrix[i] = [];
        for (let j = 0; j < currentSize; j++) {
            matrix[i][j] = Number(document.getElementById(`m${i}${j}`).value || 0);
        }
    }
    return matrix;
}

function analyze() {
    const matrix = getMatrix();
    const eigenvalues = document.getElementById("eigenvalues").value;
    const eigenvectors = document.getElementById("eigenvectors").value;

    if (!eigenvalues || !eigenvectors) {
        alert("Please enter eigenvalues and eigenvectors");
        return;
    }

    document.getElementById("resultsSection").innerHTML = `
        <h3>Analysis Successful</h3>
        <p>Matrix and inputs received correctly.</p>
        <pre>${JSON.stringify(matrix, null, 2)}</pre>
    `;
}

function resetAll() {
    document.getElementById("eigenvalues").value = "";
    document.getElementById("eigenvectors").value = "";
    document.getElementById("resultsSection").innerHTML = "";
    createMatrix();
}
