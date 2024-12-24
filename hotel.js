document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.region-checkbox');
    const hotelCards = document.querySelectorAll('.hotel-card');
    hotelCards.forEach(card => {
        card.style.display = 'block';
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedRegions = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            if (selectedRegions.length === 0) {
                hotelCards.forEach(card => {
                    card.style.display = 'block';
                });
            } else {
                hotelCards.forEach(card => {
                    const cardRegion = card.dataset.region;
                    card.style.display = selectedRegions.includes(cardRegion) ? 'block' : 'none';
                });
            }
        });
    });
});