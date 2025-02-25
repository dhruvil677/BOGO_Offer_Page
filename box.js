function toggleOption(selectedId) {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('expanded');
    });
    document.querySelectorAll('.option')[selectedId - 1].classList.add('expanded');
}


