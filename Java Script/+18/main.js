function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("ano").value);
    var yearChecked = currentYear - birthYear;

    if (yearChecked > 18) {
        alert('Passou chefia, ai calicaa 🐊🥋')
        window.location.href = "https://www.youtube.com/watch?v=C7xyoPqYkYM";
    }
    else {
        alert('Vacilou meu pit, -18 não passa 🙅‍♂️');
    }
    
}