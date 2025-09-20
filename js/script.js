//ganti gambar
var slideIndex = 1;
showDivs(slideIndex);

function selanjutnya(n) {
    showDivs((slideIndex+=n));
}
function sebelumnya(n){
    showDivs((slideIndex-=n));
}

function showDivs(n) {
    var i = 0;
    var x = document.getElementsByClassName('gambarcalon');

    if (n > x.length) 
        slideIndex=1;
    else if (n < 1)  
        slideIndex = x.length; //kalau n<1 maka slide index menjadi banyak slide dari var x 
    for (i = 0; i <x.length; i++) {
        x[i].style.display = 'none';
    }
    if (slideIndex == 1){
        document.getElementById("calonkpu").innerHTML = "Aretha Putri Umardani";
        document.getElementById("orasi-teks").innerHTML = "Dari yangs saya tangkap, saudari Aretha memberi orasi ketua KPU yang inspiratif. Dia memberi pidato terkait visi misinya. Selain itu, saudari Aretha juga menjelaskan apa itu pemimpin yang baik."
    }
    else if (slideIndex == 2){
        document.getElementById("calonkpu").innerHTML = "Mawla Humayan Ahsan";
        document.getElementById("orasi-teks").innerHTML = "Saudara Ahsan, sekaligus yang terpilih menjadi ketua KPU, memiliki aura dan wibawa yang unik. Dia membawakan pidato seperti seorang pejabat yang professional. Visi-misi saudara Ahsan adalah untuk memberikan fasilitas-fasilitas memadai kepada calon-calon ketua KMTETI."
    }
    else if (slideIndex == 3){
        document.getElementById("calonkpu").innerHTML = "Ja'far Shodiq Hibatullah";
        document.getElementById("orasi-teks").innerHTML = "Saya sangat tertarik dengan orasi dari saudara Ibat. Dia mengusulkan untuk melakukan pemilihan ketua KMTETI dengan menggunakan sebuah website real-time sehingga para pemilih bisa tahu secara langsung berapa angka pemilih."
    }
    else if (slideIndex == 4){
        document.getElementById("calonkpu").innerHTML = "Faiz Izzudin";
        document.getElementById("orasi-teks").innerHTML = "Saudara Faiz membuka orasi dengan sedikit humor. Kemudian, dia membawakan orasi ketua KPUnya yang memiliki visi-misi untuk menciptakan demokrasi transparan selama pemilihan ketua KMTETI."
    }
    x[slideIndex - 1].style.display = 'block'; //memunculkan slide ke index-1, jadi misal foto pertama indexnya 0, jadi slideindex yang nilainya 1 - 1 =0
}

//jeda tiap slide

setInterval(() => {
    plusDivs(1);
}, 2000); //setiap 2000 milisecond(atau 2 detik) mengganti gambar


//muncul popup divisi
function divisi(n){
    popup.classList.add("popup-visible");
    if(n == 'FindIT-PengurusInti') { //jujur, saya baru nyadar bisa makai json setelah 90% copas if else T___T. tolong jangan bully kak, maklumi saya yang masih maba ini
        document.getElementById("pesan").innerHTML = "Pengurus Inti"
        document.getElementById("keterangan-pesan").innerHTML = "Pengurus Inti merupakan struktur utama yang berperan sebagai pusat koordinasi seluruh kegiatan. Divisi ini biasanya terdiri dari ketua dan wakil ketua sebagai pemimpin jalannya acara, sekretaris yang bertugas mengurus administrasi, surat-menyurat, serta pencatatan rapat, dan bendahara yang mengelola seluruh arus keuangan acara. Peran pengurus inti tidak hanya terbatas pada fungsi administratif, tetapi juga mencakup pengambilan keputusan strategis, memastikan komunikasi antar-divisi berjalan lancar, serta menjaga agar seluruh rangkaian acara sesuai dengan visi dan tujuan yang telah ditetapkan."
    }
    else if(n == 'FindIT-Humas') {
        document.getElementById("pesan").innerHTML = "Humas, Publikasi, LO"
        document.getElementById("keterangan-pesan").innerHTML = "Humas, Publikasi, dan LO memiliki peran penting dalam menjalin komunikasi dengan pihak luar sekaligus mengelola citra acara. Divisi Humas (Hubungan Masyarakat) bertugas membangun relasi dan menjaga komunikasi dengan stakeholder, peserta, serta media agar informasi mengenai acara tersampaikan dengan baik. Publikasi berfokus pada penyebaran informasi dan promosi acara, baik melalui media sosial, poster, video, maupun platform lain sehingga kegiatan FIND IT dapat dikenal secara luas. Sementara itu, LO (Liaison Officer) bertanggung jawab menjadi penghubung langsung antara panitia dan tamu undangan, pembicara, atau peserta tertentu, sehingga segala kebutuhan teknis maupun komunikasi dapat berjalan lancar."
    }
    else if(n == 'FindIT-Sponsorship') {
        document.getElementById("pesan").innerHTML = "Sponsorship"
        document.getElementById("keterangan-pesan").innerHTML = "Sponsorship berperan sebagai pihak yang menjalin kerja sama dengan perusahaan, instansi, maupun organisasi eksternal untuk mendukung jalannya acara, terutama dalam hal pendanaan dan fasilitas. Divisi ini bertugas menyusun proposal sponsorship yang menarik, melakukan pendekatan dan komunikasi dengan calon sponsor, serta menjaga hubungan baik agar kerja sama berjalan profesional dan saling menguntungkan. Selain mencari dana, sponsorship juga sering mengurus bentuk dukungan lain seperti media partner, hadiah lomba, atau fasilitas teknis yang dibutuhkan acara."
    }
    else if(n == 'FindIT-Acara') {
        document.getElementById("pesan").innerHTML = "Acara"
        document.getElementById("keterangan-pesan").innerHTML = "Acara menjadi motor utama yang menyusun dan menjalankan seluruh rangkaian kegiatan. Divisi ini bertanggung jawab atas perencanaan konsep, penyusunan rundown, serta memastikan jalannya acara sesuai dengan visi dan tujuan yang sudah ditetapkan. Mulai dari menentukan tema sub-acara, mengatur alur kegiatan, hingga menyiapkan kebutuhan teknis di lapangan, semua menjadi bagian dari tugas divisi acara. Selain itu, divisi ini juga berkoordinasi dengan divisi-divisi lain, seperti Humas, LO, dan Teknis Event, agar setiap detail berjalan selaras, baik itu terkait peserta, pembicara, maupun jalannya kompetisi."
    }
    else if(n == 'FindIT-DMD') {
        document.getElementById("pesan").innerHTML = "DMD"
        document.getElementById("keterangan-pesan").innerHTML = "DMD bertugas mengelola segala aspek visual dan dokumentasi acara. Mereka membuat desain publikasi, poster, banner, hingga konten digital yang mendukung branding FIND IT UGM. Selain itu, divisi ini juga menjadi tim dokumentasi resmi yang mengabadikan setiap momen kegiatan melalui foto dan video."
    }
    else if(n == 'FIndIT-WEBDEV') {
        document.getElementById("pesan").innerHTML = "FIndIT-WEBDEV"
        document.getElementById("keterangan-pesan").innerHTML = "Web Developer berperan mengembangkan dan memelihara website resmi FIND IT UGM. Website ini biasanya digunakan sebagai pusat informasi bagi peserta, mulai dari pendaftaran, pengumuman lomba, hingga publikasi hasil. Tim WEBDEV memastikan tampilan dan fungsionalitas website berjalan optimal sehingga pengalaman pengguna mudah dan informatif."
    }
    else if(n == 'FindIT-KSK') {
        document.getElementById("pesan").innerHTML = "KSK"
        document.getElementById("keterangan-pesan").innerHTML = "KSK berfokus pada kenyamanan dan keselamatan seluruh peserta maupun panitia selama acara berlangsung. Mereka bertugas mengatur sistem keamanan, menjaga ketertiban, serta memastikan standar kesehatan terpenuhi, misalnya dengan menyediakan tim medis atau P3K saat kegiatan berlangsung. Selain itu, divisi ini juga mengurus konsumsi, baik untuk peserta maupun panitia, sehingga kebutuhan dasar semua pihak tetap terjamin."
    }
    else if(n == 'FindIT-Teknis') {
        document.getElementById("pesan").innerHTML = "Teknis Event"
        document.getElementById("keterangan-pesan").innerHTML = "Teknis Lomba/Event memiliki tanggung jawab utama dalam mempersiapkan dan mengelola kebutuhan teknis dari setiap kompetisi maupun acara inti. Mereka mengatur sistem perlombaan, aturan main, perangkat yang digunakan, serta memastikan jalannya lomba sesuai standar. Divisi ini juga mendukung tim acara dengan kebutuhan teknis lain seperti peralatan presentasi, audio-visual, dan sistem penjurian."
    }
    else if(n == 'FindIT-Perkap') {
        document.getElementById("pesan").innerHTML = "Perlengkapan Logistik, Konsumsi"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini menangani kebutuhan fisik dan perlengkapan selama FIND IT berlangsung. Tugas mereka meliputi penyediaan logistik berupa meja, kursi, sound system, hingga kebutuhan teknis lain yang menunjang acara. Selain itu, mereka juga memastikan ketersediaan perlengkapan untuk setiap divisi berjalan lancar."
    }
    else if(n == 'Nesco-Sekretaris') {
        document.getElementById("pesan").innerHTML = "Secretary"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang tugasnya kebanyakan membuat suraaaaaaaaaaaaaaaat, proposal, dan LPJ. Intinya kalau ada perizinan, ngambil surat di sini."
    }
    else if(n == 'Nesco-Financial') {
        document.getElementById("pesan").innerHTML = "Financial Director"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang bertugas mengelola uang, membuat rancangan anggaran, dan mencatat pengeluaran dan pemasukan NESCO. Anggap saja BPKnya NESCO."
    }
    else if(n == 'Nesco-Management') {
        document.getElementById("pesan").innerHTML = "Event Management"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi termudah karena tugasnya nongkrong aja mulu. Mikirnya dikit (berdasarkan penjelasan perwakilan)."
    }
    else if(n == 'Nesco-DDV') {
        document.getElementById("pesan").innerHTML = "Desain Dokumentasi Video"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang mengurus desain-desain di NESCO. Mereka juga yang punya kamera untuk mendokumentasikan kegiatan. Di akhir, biasanya mereka membuat aftermovie."
    }
    else if(n == 'Nesco-Operasional') {
        document.getElementById("pesan").innerHTML = "Operational"
        document.getElementById("keterangan-pesan").innerHTML = "Nama lain dari perkap. Tugasnya nguli, makan, dan nganggur (berdasarkan penjelasan perwakilan)."
    }
    else if(n == 'Nesco-Humas') {
        document.getElementById("pesan").innerHTML = "Humas, LO, Creative Content"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ynag berhubungan dengan pihak asing. Mereka mempromosikan event NESCO ke sekolah atau universitas lain. Mereka biasanya mendampingi peserta selama keagiatan. Dan yang paling terkenal, buat kontek joget-joget Cuy."
    }
    else if(n == 'Nesco-WEBDEV') {
        document.getElementById("pesan").innerHTML = "Web Developer"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi terbaik yang pernah ada. Harusnya digaji di atas 5 juta dalam pembuatan website. Divisi yang bertugas mengembangkan dan merancang website resmi event NESCO."
    }
    else if(n == 'Nesco-Administrasi') {
        document.getElementById("pesan").innerHTML = "Administratives"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang bertugas ngurus presesni, mendata peserta dan panitia, serta mengelola pendaftaran."
    }
    else if(n == 'Nesco-Danus') {
        document.getElementById("pesan").innerHTML = "Fundraise"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang bertugas melakukan promosi dan negosiasi ke calon-calon sponsor. Mereka juga mengelola open Pre-Order Merch. Intinya sponsor + Danus."
    }
    else if(n == 'TC-Acaras') {
        document.getElementById("pesan").innerHTML = "Acara"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Acara adalah otak dari TechnoCorner. Mereka menyusun konsep, menentukan alur lomba, menyusun rundown, serta memastikan semua kegiatan berjalan sesuai tujuan. Mulai dari pembukaan, jalannya perlombaan, hingga penutupan, semuanya diatur oleh divisi ini. Acara juga berkoordinasi dengan divisi teknis agar lomba berjalan lancar dan tetap menarik bagi peserta maupun penonton."
    }
    else if(n == 'TC-KSK') {
        document.getElementById("pesan").innerHTML = "KSK"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi KSK bertanggung jawab atas kenyamanan peserta, panitia, dan tamu. Mereka mengurus sistem keamanan lokasi, memastikan standar kesehatan, serta menyiapkan konsumsi selama kegiatan berlangsung. Keberadaan divisi ini sangat penting untuk menjaga agar perlombaan berjalan tertib, aman, dan seluruh pihak terjamin kebutuhannya."
    }
    else if(n == 'TC-Humpub') {
        document.getElementById("pesan").innerHTML = "Humpub"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Humpub berperan sebagai penghubung antara panitia dengan publik. Mereka mengelola promosi acara melalui media sosial, poster, hingga press release, serta menjaga komunikasi dengan media partner dan stakeholder. Divisi ini memastikan TechnoCorner dikenal luas dan mampu menarik minat peserta dari berbagai daerah."
    }
    else if(n == 'TC-DDV') {
        document.getElementById("pesan").innerHTML = "DDV"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi DDV berfokus pada produksi konten visual untuk kebutuhan publikasi dan arsip acara. Mereka membuat desain grafis, video promosi, serta mendokumentasikan seluruh rangkaian kegiatan lomba. Hasil kerja DDV menjadi representasi visual dari TechnoCorner, baik untuk promosi saat ini maupun arsip acara di masa depan."
    }
    else if(n == 'TC-LO') {
        document.getElementById("pesan").innerHTML = "LO"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi LO berfungsi sebagai pendamping resmi untuk peserta, juri, dan tamu undangan. Mereka memastikan komunikasi berjalan lancar, kebutuhan teknis maupun non-teknis terpenuhi, serta menjadi penghubung langsung antara pihak luar dengan panitia. LO berperan besar dalam menjaga kenyamanan pihak eksternal selama mengikuti TechnoCorner."
    }
    else if(n == 'TC-WEBDEV') {
        document.getElementById("pesan").innerHTML = "WEBDEV"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi WEBDEV mengelola website resmi TechnoCorner. Website ini berfungsi sebagai pusat informasi dan layanan digital, misalnya pendaftaran peserta, jadwal lomba, dan pengumuman hasil. Tim WEBDEV memastikan sistem online dapat diakses dengan mudah dan berjalan tanpa kendala."
    }
    else if(n == 'TC-Multimedia') {
        document.getElementById("pesan").innerHTML = "Multimedia"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Multimedia menangani aspek audiovisual selama acara berlangsung. Mereka mengatur sound system, musik, presentasi, hingga live streaming jika diperlukan. Selain itu, multimedia juga mendukung divisi acara dan teknis dengan perangkat audiovisual agar perlombaan lebih interaktif dan menarik."
    }
    else if(n == 'TC-Perlogkon') {
        document.getElementById("pesan").innerHTML = "Perlogkon"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Perlogkon berfokus pada penyediaan kebutuhan fisik dan teknis acara, seperti kursi, meja, backdrop, serta peralatan penunjang lomba. Mereka juga mengurus logistik umum agar semua kebutuhan perlengkapan tiap divisi terpenuhi. Di beberapa momen, Perlogkon juga membantu KSK dalam urusan konsumsi."
    }
    else if(n == 'TC-IOT') {
        document.getElementById("pesan").innerHTML = "Teknis IOT"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Teknis IoT secara khusus mengatur perlombaan Internet of Things (IoT). Mereka menyusun aturan lomba, menyiapkan perangkat, serta memastikan jalannya kompetisi berlangsung adil dan sesuai standar. Keahlian mereka menjadi kunci dalam menjaga kualitas kompetisi IoT."
    }
    else if(n == 'TC-EEC') {
        document.getElementById("pesan").innerHTML = "Teknis EEC"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini bertanggung jawab atas jalannya Electrical Engineering Competition. Mereka menyiapkan soal, peralatan, sistem penjurian, serta memastikan lomba berjalan sesuai regulasi. Divisi Teknis EEC juga bekerja sama dengan juri untuk menjaga objektivitas hasil lomba."
    }
    else if(n == 'TC-SNF') {
        document.getElementById("pesan").innerHTML = "SNF"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi SNF mengurus kegiatan Seminar Nasional dan pameran yang biasanya menjadi bagian dari TechnoCorner. Mereka mengatur pembicara, materi seminar, serta tata cara pelaksanaan pameran teknologi. Divisi ini menjadi jembatan antara kompetisi dan kegiatan edukatif yang ditujukan untuk masyarakat umum."
    }
    else if(n == 'TC-Robotik') {
        document.getElementById("pesan").innerHTML = "Teknis Robotik"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Teknis Robotik khusus menangani perlombaan robotik, seperti Line Follower, Soccerbot, Transporter, hingga Sumobot. Mereka menyiapkan arena, perangkat robotik, serta mengawasi jalannya lomba. Ketelitian divisi ini sangat penting karena kompetisi robotik memiliki standar teknis yang kompleks."
    }
    else if(n == 'TC-Keamanan') {
        document.getElementById("pesan").innerHTML = "Keamanan"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi Keamanan berfokus menjaga ketertiban dan keamanan selama TechnoCorner berlangsung. Mereka mengatur sistem pengamanan lokasi, mengawasi keluar-masuk peserta maupun penonton, serta siap menangani potensi gangguan. Dengan adanya divisi ini, acara dapat berjalan kondusif dan terkendali."
    }
    else if(n == 'Panwis-Sekbenz') {
        document.getElementById("pesan").innerHTML = "Sekbenz"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang memiliki tugas untuk menyusun serta mengajukan proposal, surat, dan laporan. Mereka juga yang membuat notula dan mengurus presensi kehadiran wisuda. Selain itu, divisi ini mengatur keuangan wisuda. Jadi mereka merekap seluruh pemasukan dan pengeluaran kegiatan wisuda. Mereka bertugas di awal dan di akhir acara, yaitu membuat RAB dan LPJ."
    }
    else if(n == 'Panwis-Acara') {
        document.getElementById("pesan").innerHTML = "Acara & Musisi"
        document.getElementById("keterangan-pesan").innerHTML = "Acara bertugas menyusun rundown, menentukjan MC, menghubungi pihak terkait serta mahasigma, dan lain-lain. Kemudian, musisi menyeiapkan beberapa lagu yang akan dibawakan saat sesi hiburan. Mereka melakkan latihan dan persiapan untuk tampil."
    }
    else if(n == 'Panwis-Humas') {
        document.getElementById("pesan").innerHTML = "Humas"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi yang bertugas menjadi cp terkait acara wisuda. Mereka mengajak mahasigma DTETI untuk suporteran di Tugu Teknik. Selain itu, mereka menyambut serta mengarahkan tamu undangan pada hari H."
    }
    else if(n == 'Panwis-Sovkon') {
        document.getElementById("pesan").innerHTML = "Sovkon"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini mengurus pemesanan serta pengiriman souvenir, penghargaan wisudawan terbaik (semoga aku aaamiin), dan doorprize. Mereka juga memastika souvenir diterima oleh seluruh wisudawan. Intinya mereka bertanggung jawab atas semua souvenir di luar acara dan pada saat acara berlangsung."
    }
    else if(n == 'Panwis-DDV') {
        document.getElementById("pesan").innerHTML = "DDV"
        document.getElementById("keterangan-pesan").innerHTML = "Satu kata...... revisi. Mereka mendesain segala kebutuhan pelaksanaan wisuda, mendokumentasikan pelaksanaan wisuda, dan membuat video wawancara wisudawan terbaik(lagi, semoga aku aamiin)."
    }
    else if(n == 'Panwis-Perkap') {
        document.getElementById("pesan").innerHTML = "Perlengkapan"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini mempersiapkan kebutuhan perlengkapan dan logistik acara wisuda, room meet daring jika ada cara yang secara online, dan membuat spin wheel untuk doorprize."
    }
    else if(n == 'OPH-Acara') {
        document.getElementById("pesan").innerHTML = "Acara"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini bertugas menyusun rundown acara, mengatur merangkai, mematangkan, dan menjalankan acara OPH 2025, dan menjadi timekeeper selama acara. Intinya mandor dari divisi lain."
    }
    else if(n == 'OPH-Humas') {
        document.getElementById("pesan").innerHTML = "Humas"
        document.getElementById("keterangan-pesan").innerHTML = "Divisai ini bertugas menjadi fasilitator interkasi peserta pada hari H. mereka mengirim surat cinta(uhuy) serta jalan-jalan ke sekolah. Mereka menjadi LO di hari H Capstone."
    }
    else if(n == 'OPH-KSK') {
        document.getElementById("pesan").innerHTML = "KSK"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini bertugas membuat gform registrasi peserta. Kemudian mendata peserta yang ikut OPH-CP DTETI."
    }
    else if(n == 'OPH-Sosmed') {
        document.getElementById("pesan").innerHTML = "Sosmed"
        document.getElementById("keterangan-pesan").innerHTML = "Divisi ini bertugas mencari ide untuk membuat konten mdseos OPH-CP bersama mahasigma-mahasigma ganteng di UGM. Enaknya, mereka bisa ikut jalan-jalan dengan divisi lain karena harus dikontenin."
    }
    else if(n == 'OPH-Desain') {
        document.getElementById("pesan").innerHTML = "Desain Visual"
        document.getElementById("keterangan-pesan").innerHTML = "DIvisi ini menentukan grand design kegiatan. Mereka juga menangani seghala keperluan desain dari divisi lain. Selain itu, tentu saja mereka mendokumentasi segala kegiatan."
    }
    else if(n == 'OPH-Perkap') {
        document.getElementById("pesan").innerHTML = "Perkap"
        document.getElementById("keterangan-pesan").innerHTML = "Kuli dan ngabisin konsum (berdasarkan penjelasn perwakilan)."
    }
    
}

//tutup popup divisi
function closepopup(){
    popup.classList.remove("popup-visible");
}

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => {
  observer.observe(reveal);
});


