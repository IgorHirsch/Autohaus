<script>
document.addEventListener('DOMContentLoaded', function () {
    // Alle Label-Zeilen holen
    const labelRows = document.querySelectorAll('.vergleichen__card--labels .vergleichen__card-row');
    // Alle Karten holen (außer Label-Karte)
    const cards = Array.from(document.querySelectorAll('.vergleichen__card:not(.vergleichen__card--labels)'));

    labelRows.forEach((labelRow, idx) => {
        labelRow.addEventListener('mouseenter', () => {
            // Entsprechende Zeile in jeder Karte hervorheben
            cards.forEach(card => {
                const valueRows = card.querySelectorAll('.vergleichen__card-row');
                if (valueRows[idx]) {
                    valueRows[idx].classList.add('is-hovered');
                }
            });
            labelRow.classList.add('is-hovered');
        });
        labelRow.addEventListener('mouseleave', () => {
            cards.forEach(card => {
                const valueRows = card.querySelectorAll('.vergleichen__card-row');
                if (valueRows[idx]) {
                    valueRows[idx].classList.remove('is-hovered');
                }
            });
            labelRow.classList.remove('is-hovered');
        });
    });
});
</script>