<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = strip_tags(trim($_POST["nama"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $pesan = strip_tags(trim($_POST["pesan"]));

    // Ganti dengan alamat email tujuan Anda
    $tujuan = "aliefiayuliana5@gmail.com";

    // Judul email
    $judul = "Pesan Baru dari Portofolio Anda dari $nama";

    // Konten email
    $konten_email = "Nama: $nama\n";
    $konten_email .= "Email: $email\n\n";
    $konten_email .= "Pesan:\n$pesan\n";

    // Header email
    $headers = "From: $nama <$email>";

    // Kirim email
    if (mail($tujuan, $judul, $konten_email, $headers)) {
        // Jika berhasil
        echo "<script>
                alert('Pesan Anda berhasil terkirim. Terima kasih!');
                window.location.href = 'kontak.html';
              </script>";
    } else {
        // Jika gagal
        echo "<script>
                alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
                window.history.back();
              </script>";
    }

} else {
    // Jika bukan metode POST
    echo "Metode tidak diizinkan.";
}
?>
