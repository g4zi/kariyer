interface UsefulLink {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const mainLinks: UsefulLink[] = [
  {
    title: 'MEB Rehberlik',
    description: 'Milli Eğitim Bakanlığı\'nın rehberlik ve psikolojik danışmanlık hizmetleri sayfası.',
    url: 'https://orgm.meb.gov.tr/',
    icon: 'fas fa-school'
  },
  {
    title: 'ÖSYM',
    description: 'Ölçme, Seçme ve Yerleştirme Merkezi\'nin sınav takvimi ve sonuçlarının yer aldığı resmi site.',
    url: 'https://www.osym.gov.tr/',
    icon: 'fas fa-chart-line'
  },
  {
    title: 'YÖK Atlas',
    description: 'Üniversite ve bölümler hakkında detaylı bilgilere ulaşabileceğiniz yükseköğretim rehberi.',
    url: 'https://yokatlas.yok.gov.tr/',
    icon: 'fas fa-graduation-cap'
  },
  {
    title: 'Mevzuat',
    description: 'Eğitim ile ilgili güncel yönetmelik ve mevzuat bilgilerinin yer aldığı resmi site.',
    url: 'https://www.mevzuat.gov.tr/',
    icon: 'fas fa-file-alt'
  }
];

export const additionalLinks: {
  title: string;
  icon: string;
  description: string;
}[] = [
  {
    title: 'Sınav Hazırlık Kaynakları',
    icon: 'fas fa-book',
    description: 'Ücretsiz çalışma materyalleri'
  },
  {
    title: 'Öğrenme Stilleri Testi',
    icon: 'fas fa-brain',
    description: 'Verimli çalışma teknikleri'
  },
  {
    title: 'Eğitim Videoları',
    icon: 'fas fa-video',
    description: 'Motivasyon ve kişisel gelişim'
  },
  {
    title: 'Sınav Takvimi',
    icon: 'fas fa-calendar-check',
    description: 'Güncel sınav tarihleri'
  },
  {
    title: 'Üniversite Broşürleri',
    icon: 'fas fa-university',
    description: 'Bölüm ve fakülte tanıtımları'
  },
  {
    title: 'Meslek Tanıtımları',
    icon: 'fas fa-briefcase',
    description: 'Detaylı meslek bilgileri'
  }
];
