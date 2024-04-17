function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var now = new Date();

    var years = now.getFullYear() - birthdate.getFullYear();
    var months = now.getMonth() - birthdate.getMonth();
    var days = now.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        var lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days = lastMonth.getDate() + days;
        months--;
    }

    document.getElementById("result").innerText = "العمر: " + years + " سنة و " + months + " شهر و " + days + " يوم";
}

function reset() {
    document.getElementById("birthdate").value = "";
    document.getElementById("result").innerText = "";
}