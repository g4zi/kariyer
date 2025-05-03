import { CareerCardProps } from '@/components/CareerCard';

export const careers: CareerCardProps[] = [
  {
    title: 'Bilgisayar Mühendisliği',
    icon: 'fas fa-laptop-code',
    description: 'Yazılım geliştirme, donanım tasarımı ve bilgisayar sistemleri konusunda eğitim veren mühendislik dalı.',
    educationYears: '4 Yıl',
    jobFields: 'Yazılım Şirketleri, Finans, Eğitim',
    jobRate: 'Yüksek',
    details: {
      description: 'Bilgisayar Mühendisliği, bilgisayar sistemlerinin tasarımı, geliştirilmesi ve bakımıyla ilgilenen bir mühendislik dalıdır. Yazılım geliştirme, donanım tasarımı, ağ sistemleri, yapay zeka ve daha pek çok alanda uzmanlaşma imkanı sunar.',
      skills: [
        'Analitik düşünme',
        'Problem çözme',
        'Matematik ve algoritma bilgisi',
        'Programlama dilleri bilgisi',
        'Sistemli çalışma',
        'Sürekli öğrenme isteği'
      ],
      courses: [
        'Algoritma ve Programlama',
        'Veri Yapıları',
        'İşletim Sistemleri',
        'Veritabanı Yönetimi',
        'Bilgisayar Ağları',
        'Yapay Zeka'
      ],
      universities: [
        'ODTÜ',
        'Boğaziçi Üniversitesi',
        'İTÜ',
        'Bilkent Üniversitesi',
        'Koç Üniversitesi',
        'Sabancı Üniversitesi'
      ],
      salary: '10.000₺ - 50.000₺ (Deneyime bağlı)',
      future: 'Sektör büyümeye devam ediyor, gelecek 10 yıl içinde iş imkanları artacak'
    }
  },
  {
    title: 'Tıp',
    icon: 'fas fa-stethoscope',
    description: 'İnsan sağlığını korumak ve hastalıkları tedavi etmek üzerine eğitim veren sağlık bilimleri dalı.',
    educationYears: '6 Yıl',
    jobFields: 'Hastaneler, Klinikler, Akademi',
    jobRate: 'Çok Yüksek',
    details: {
      description: 'Tıp fakültesi, insan sağlığını korumak, hastalıkları teşhis etmek ve tedavi etmek için gereken bilgi ve becerileri kazandıran bir eğitim programıdır. 6 yıllık eğitimin ardından uzmanlık yapılabilir veya pratisyen hekim olarak çalışılabilir.',
      skills: [
        'Akademik başarı',
        'Analitik düşünme',
        'Empati ve iletişim becerileri',
        'Stres yönetimi',
        'El becerisi',
        'Uzun süre odaklanabilme'
      ],
      courses: [
        'Anatomi',
        'Fizyoloji',
        'Biyokimya',
        'Farmakoloji',
        'İç Hastalıkları',
        'Cerrahi'
      ],
      universities: [
        'Hacettepe Üniversitesi',
        'İstanbul Üniversitesi',
        'Ankara Üniversitesi',
        'Cerrahpaşa Tıp Fakültesi',
        'Gazi Üniversitesi',
        'Ege Üniversitesi'
      ],
      salary: '15.000₺ - 100.000₺+ (Uzmanlık ve deneyime bağlı)',
      future: 'Sağlık hizmetleri her zaman ihtiyaç duyulan bir alan, iş garantisi çok yüksek'
    }
  },
  {
    title: 'Hukuk',
    icon: 'fas fa-landmark',
    description: 'Hukuk sistemi, yasalar ve adalet üzerine eğitim veren sosyal bilimler dalı.',
    educationYears: '4 Yıl',
    jobFields: 'Avukatlık, Hakimlik, Kurumsal Hukuk',
    jobRate: 'Orta',
    details: {
      description: 'Hukuk fakültesi, adalet sisteminin işleyişi, yasalar ve hukuki süreçler hakkında eğitim veren bir programdır. Mezunlar avukat, hakim, savcı olabilir veya özel şirketlerde çalışabilirler.',
      skills: [
        'Sözlü ve yazılı iletişim',
        'Analitik düşünme',
        'Araştırma becerileri',
        'Güçlü hafıza',
        'İkna kabiliyeti',
        'Dürüstlük ve etik değerler'
      ],
      courses: [
        'Anayasa Hukuku',
        'Medeni Hukuk',
        'Ceza Hukuku',
        'Borçlar Hukuku',
        'Ticaret Hukuku',
        'İdare Hukuku'
      ],
      universities: [
        'Ankara Üniversitesi',
        'İstanbul Üniversitesi',
        'Galatasaray Üniversitesi',
        'TOBB ETÜ',
        'Koç Üniversitesi',
        'Bilkent Üniversitesi'
      ],
      salary: '8.000₺ - 50.000₺+ (Deneyime ve çalışılan alana bağlı)',
      future: 'Rekabet yüksek ancak nitelikli mezunlar için iş imkanları her zaman mevcut'
    }
  },
  {
    title: 'Psikoloji',
    icon: 'fas fa-brain',
    description: 'İnsan davranışları ve zihinsel süreçleri inceleyen sosyal bilimler dalı.',
    educationYears: '4 Yıl',
    jobFields: 'Klinikler, Eğitim Kurumları, Şirketler',
    jobRate: 'Orta',
    details: {
      description: 'Psikoloji bölümü, insan davranışlarını, zihinsel süreçleri ve duygusal gelişimi inceleyen bir alandır. Klinik psikoloji, endüstri psikolojisi, eğitim psikolojisi gibi farklı uzmanlık alanları vardır.',
      skills: [
        'Empati',
        'Analitik düşünme',
        'İyi bir dinleyici olma',
        'Sabır',
        'İletişim becerileri',
        'Etik değerler'
      ],
      courses: [
        'Genel Psikoloji',
        'Gelişim Psikolojisi',
        'Sosyal Psikoloji',
        'Anormal Psikoloji',
        'Klinik Psikoloji',
        'Psikolojik Testler'
      ],
      universities: [
        'Boğaziçi Üniversitesi',
        'ODTÜ',
        'Hacettepe Üniversitesi',
        'Koç Üniversitesi',
        'Bilkent Üniversitesi',
        'İstanbul Üniversitesi'
      ],
      salary: '7.000₺ - 30.000₺ (Uzmanlık ve deneyime bağlı)',
      future: 'Mental sağlığa artan önem nedeniyle büyüyen bir alan'
    }
  },
  {
    title: 'Öğretmenlik',
    icon: 'fas fa-chalkboard-teacher',
    description: 'Eğitim ve öğretim alanında uzmanlaşmayı sağlayan bir meslek.',
    educationYears: '4 Yıl',
    jobFields: 'Devlet Okulları, Özel Okullar, Dershaneler',
    jobRate: 'Orta',
    details: {
      description: 'Eğitim fakülteleri, öğretim yöntemleri, pedagoji ve belirli alanlarda uzmanlaşma imkanı sunan programlardır. Mezunlar, ilkokul, ortaokul ve lise düzeyinde öğretmenlik yapabilirler.',
      skills: [
        'Sabır',
        'İletişim becerileri',
        'Empati',
        'Organizasyon yeteneği',
        'Yaratıcılık',
        'Uyum sağlayabilme'
      ],
      courses: [
        'Eğitim Psikolojisi',
        'Öğretim İlke ve Yöntemleri',
        'Eğitim Sosyolojisi',
        'Sınıf Yönetimi',
        'Ölçme ve Değerlendirme',
        'Alan Eğitimi'
      ],
      universities: [
        'Boğaziçi Üniversitesi',
        'ODTÜ',
        'Hacettepe Üniversitesi',
        'Gazi Üniversitesi',
        'Marmara Üniversitesi',
        'Anadolu Üniversitesi'
      ],
      salary: '7.500₺ - 25.000₺ (Kuruma ve deneyime bağlı)',
      future: 'Atama koşulları zor olsa da eğitimcilere her zaman ihtiyaç var'
    }
  },
  {
    title: 'Mühendislik',
    icon: 'fas fa-cogs',
    description: 'Matematik ve fen bilimlerini kullanarak pratik çözümler geliştiren meslekler grubu.',
    educationYears: '4 Yıl',
    jobFields: 'Üretim, İnşaat, Enerji, Teknoloji',
    jobRate: 'Yüksek',
    details: {
      description: 'Mühendislik fakülteleri, matematik ve fen bilimlerini kullanarak problemlere çözüm üretmeyi öğreten programlardır. Makine, inşaat, elektrik-elektronik, endüstri gibi çeşitli dalları vardır.',
      skills: [
        'Matematik ve fizik bilgisi',
        'Analitik düşünme',
        'Problem çözme',
        'Teknik çizim',
        'Takım çalışması',
        'Pratik zeka'
      ],
      courses: [
        'Matematik',
        'Fizik',
        'Statik ve Dinamik',
        'Malzeme Bilimi',
        'Termodinamik',
        'Tasarım ve Proje Yönetimi'
      ],
      universities: [
        'İTÜ',
        'ODTÜ',
        'Boğaziçi Üniversitesi',
        'Yıldız Teknik Üniversitesi',
        'Bilkent Üniversitesi',
        'Koç Üniversitesi'
      ],
      salary: '9.000₺ - 50.000₺ (Alana ve deneyime bağlı)',
      future: 'Teknolojik gelişmelerle birlikte büyüyen bir alan'
    }
  }
];
