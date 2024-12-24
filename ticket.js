function updatePrice() {
    const categoryElement = document.getElementById('ticketCategory');
    const countElement = document.getElementById('ticketCount');
    const priceIcon = document.getElementById('priceIcon');
    const totalPriceElement = document.getElementById('totalPrice');

    const selectedOption = categoryElement.options[categoryElement.selectedIndex];
    const ticketPrice = parseFloat(selectedOption.getAttribute('data-price')) || 0;
    const ticketCount = parseInt(countElement.value) || 0;

    if (ticketPrice > 0 && ticketCount > 0) {
        const totalPrice = ticketPrice * ticketCount;
        totalPriceElement.textContent = totalPrice;
    } else {
        totalPriceElement.textContent = 0;
    }
}