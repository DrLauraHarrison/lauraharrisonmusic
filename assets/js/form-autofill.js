document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookVote = urlParams.get('vote'); 
    const subjectField = document.getElementById('form-subject');
    
    if (bookVote && subjectField) {
        if (bookVote === 'improvisation') {
            subjectField.value = "Voting for: Enjoying Music Improvisation! 🎨";
        } else if (bookVote === 'vocal-technique') {
            subjectField.value = "Voting for: Enjoying Vocal Technique! 🎬";
        }
    }
});