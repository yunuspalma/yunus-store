// Fungsi Kategori — Filter Aplikasi
const kategoriTombol = document.querySelectorAll('.category-btn');
const daftarAplikasi = document.querySelectorAll('.app-card');

kategoriTombol.forEach(tombol => {
    tombol.addEventListener('click', () => {
        // Hapus kelas aktif dari semua tombol
        kategoriTombol.forEach(btn => btn.classList.remove('active'));
        // Tambahkan ke tombol yang diklik
        tombol.classList.add('active');

        const pilihKategori = tombol.getAttribute('data-category');

        // Tampilkan/sembunyikan aplikasi sesuai kategori
        daftarAplikasi.forEach(kartu => {
            const kartuKategori = kartu.getAttribute('data-category');
            
            if (pilihKategori === 'semua' || kartuKategori === pilihKategori || kartu.classList.contains('empty-card')) {
                kartu.style.display = 'flex';
            } else {
                kartu.style.display = 'none';
            }
        });
    });
});

// Fungsi Pencarian
const kolomCari = document.querySelector('.search-input');

kolomCari.addEventListener('input', (e) => {
    const kataKunci = e.target.value.toLowerCase();

    daftarAplikasi.forEach(kartu => {
        const namaAplikasi = kartu.querySelector('.app-name');
        
        if (kartu.classList.contains('empty-card')) {
            kartu.style.display = 'flex';
            return;
        }

        if (namaAplikasi) {
            const teksNama = namaAplikasi.textContent.toLowerCase();
            kartu.style.display = teksNama.includes(kataKunci) ? 'flex' : 'none';
        }
    });
});

// Efek Klik Tombol Pasang
const tombolPasang = document.querySelectorAll('.install-button');

tombolPasang.forEach(tombol => {
    tombol.addEventListener('click', function(e) {
        e.preventDefault();
        this.textContent = 'Memasang...';
        this.style.backgroundColor = '#ffc107';
        
        setTimeout(() => {
            this.textContent = '? Terpasang';
            this.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                this.textContent = 'Pasang';
                this.style.backgroundColor = '#00e5ff';
            }, 2000);
        }, 1500);
    });
});
