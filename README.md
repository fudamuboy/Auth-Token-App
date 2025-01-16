# Auth-Token-App

Proje Adı: React Native Authentication App
Proje Açıklaması

Bu proje, React Native kullanılarak geliştirilmiş bir mobil uygulamadır. Kullanıcıların kayıt olmasını, giriş yapmasını ve oturumlarının yönetilmesini sağlar. Uygulama, kullanıcı oturumlarını context API, Firebase Authentication ve AsyncStorage ile yönetir, bu sayede kullanıcı deneyimi geliştirilir.
<p>Özellikler 📋</p>

    Kayıt ve Giriş İşlemleri: Kullanıcılar Firebase Authentication kullanılarak kayıt olabilir ve giriş yapabilir.
    Token Tabanlı Oturum Yönetimi: Kullanıcı oturumu bir token ile yönetilir ve bu token AsyncStorage'da saklanır.
    Firebase Entegrasyonu: Kullanıcıların verileri Firebase Authentication'da güvenle saklanır.
    Dinamik Yönlendirme: Oturum durumuna göre kullanıcılar giriş sayfasına ya da ana sayfaya yönlendirilir.
    Basit ve Şık Arayüz: React Navigation kullanılarak kolayca gezilebilen bir arayüz tasarlandı.
    Oturum Kapatma: Kullanıcılar, token'ı kaldırarak oturumlarını kapatabilir.

Kullanılan Teknolojiler

    React Native: Mobil uygulama geliştirme.
    React Navigation: Yönlendirme ve sayfa geçişleri.
    Context API: Global durum yönetimi.
    AsyncStorage: Kullanıcı verilerinin (token) kalıcı olarak saklanması.
    Firebase Authentication: Kullanıcı doğrulama ve yönetim sistemi.

Firebase Özellikleri

Firebase Authentication, kullanıcıların kayıt ve giriş işlemleri sırasında güvenli bir şekilde doğrulanmasını sağlamak için kullanıldı. Kullanıcı e-postaları, UID'leri ve diğer oturum detayları Firebase konsolunda görüntülenebilir.
Kurulum ve Çalıştırma

Gerekli bağımlılıkları yükleyin:

npm install

Firebase projesini oluşturun ve Firebase Configuration bilgilerini ekleyin.
Projeyi çalıştırın:

    npm start

Ekran Görselleri

   

Geliştirici Notu

Bu proje, oturum yönetimi, Firebase entegrasyonu ve temel kullanıcı doğrulama işlemlerini öğrenmek isteyenler için faydalı bir başlangıç noktasıdır. İleride daha fazla özellik eklenebilir!
