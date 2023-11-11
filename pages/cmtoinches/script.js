document.getElementById('convertButton').addEventListener('click', 
function () {
    const cmval = parseFloat(document.getElementById('cmval').value);
    if (!isNaN(cmval)) {
        const inches = cmval / 2.54;
        document.getElementById('res').textContent = inches.toFixed(2)+ "   " + "  inches";
    } else {
        alert('Please enter a valid number for centimeters.');
    }
});