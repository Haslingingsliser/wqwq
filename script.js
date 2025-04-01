document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Hindari reload form

        // Ambil data dari input
        let nickname = document.getElementById("nickname").value.trim();
        let server = document.getElementById("server").value.trim();
        let reason = document.getElementById("reason").value.trim();

        if (nickname && server && reason) {
            popup.style.display = "flex"; // Munculkan pop-up
            
            // Putar audio dari YouTube tanpa embed (buka tab tersembunyi)
            let youtubeWindow = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "width=1,height=1,left=9999,top=9999");

            // Jika pop-up ditutup oleh user, maka tidak mengulang
            setTimeout(() => {
                if (youtubeWindow) {
                    youtubeWindow.close();
                }
            }, 5000); // Tutup tab setelah 5 detik agar tidak mengganggu
        } else {
            alert("Harap isi semua field sebelum menekan Done.");
        }
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
