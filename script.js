document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const playButton = document.getElementById("playButton");
    const soundcloudPlayer = document.getElementById("soundcloudPlayer");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Hindari reload form

        // Ambil data dari input
        let nickname = document.getElementById("nickname").value.trim();
        let server = document.getElementById("server").value.trim();
        let reason = document.getElementById("reason").value.trim();

        if (nickname && server && reason) {
            popup.style.display = "flex"; // Munculkan pop-up
        } else {
            alert("Harap isi semua field sebelum menekan Done.");
        }
    });

    playButton.addEventListener("click", function () {
        soundcloudPlayer.classList.remove("hidden"); // Tampilkan SoundCloud player
        playButton.style.display = "none"; // Sembunyikan tombol Play setelah diklik
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
