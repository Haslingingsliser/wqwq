document.getElementById("doneButton").addEventListener("click", function() {
    let nickname = document.getElementById("nickname").value;
    let server = document.getElementById("server").value;
    let reason = document.getElementById("reason").value;

    if (nickname && server && reason) {
        document.getElementById("popup").style.display = "flex";
        document.getElementById("audioPlayer").play();
    } else {
        alert("Harap isi semua field sebelum menekan Done.");
    }
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("audioPlayer").pause();
});
