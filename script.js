document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const popup = document.getElementById("popup");
    const playButton = document.getElementById("playButton");
    const soundcloudOverlay = document.querySelector(".soundcloud-overlay");

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
        // Hapus overlay agar SoundCloud bisa dimainkan
        soundcloudOverlay.style.display = "none";

        // Ambil iframe player
        let iframe = document.getElementById("scPlayer");
        let player = new SC.Widget(iframe);

        // Mainkan lagu setelah tombol Play ditekan
        player.play();
    });
});
