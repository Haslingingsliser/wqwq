document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const audioSource = document.getElementById("audioSource");
    const audioPlayer = document.getElementById("audioPlayer");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Hindari reload form

        // Ambil data dari input
        let nickname = document.getElementById("nickname").value.trim();
        let server = document.getElementById("server").value.trim();
        let reason = document.getElementById("reason").value.trim();

        if (nickname && server && reason) {
            popup.style.display = "flex"; // Munculkan pop-up
            
            // Atur sumber audio (tapi tidak otomatis memutar)
            audioSource.src = "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
            audioPlayer.load(); // Muat ulang sumber agar bisa diputar
        } else {
            alert("Harap isi semua field sebelum menekan Done.");
        }
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
