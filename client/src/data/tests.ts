export const hollandTest = {
  title: 'Holland Meslek Tercihi Testi',
  description: 'Bu test, kişilik özelliklerinize göre en uygun meslek gruplarını belirlemenize yardımcı olur. 6 farklı kişilik tipini ölçerek size en uygun meslekleri önerir.',
  duration: 'Yaklaşık 15 dakika',
  questionCount: 30,
  infoText: `
    <h4 class="text-xl font-semibold mb-4 text-gray-800">Holland Meslek Tercihi Testi Hakkında</h4>
    <p class="text-gray-600 mb-4">John Holland tarafından geliştirilen bu test, kişilik özellikleri ile mesleki tercihler arasındaki ilişkiyi ortaya koymak için tasarlanmıştır. Test, aşağıdaki kişilik tiplerini ölçer:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Realistik (R)</h5>
        <p class="text-gray-600 text-sm">Makine, alet ve nesnelerle çalışmayı seven, pratik ve elle yapılan işlerde başarılı kişiler.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">İnvestigatif (I)</h5>
        <p class="text-gray-600 text-sm">Araştırma yapmayı, problem çözmeyi ve analitik düşünmeyi seven kişiler.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Artistik (A)</h5>
        <p class="text-gray-600 text-sm">Yaratıcı, sıra dışı ve sanatsal faaliyetlerden hoşlanan kişiler.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Sosyal (S)</h5>
        <p class="text-gray-600 text-sm">İnsanlarla iletişim kurmayı, yardım etmeyi ve eğitmeyi seven kişiler.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Girişimci (E)</h5>
        <p class="text-gray-600 text-sm">Liderlik yapmayı, ikna etmeyi ve organize etmeyi seven kişiler.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Konvansiyonel (C)</h5>
        <p class="text-gray-600 text-sm">Düzenli, sistematik ve detaylara dikkat eden kişiler.</p>
      </div>
    </div>
    
    <p class="text-gray-600 mb-6">Test sonucunda, kişilik tipinize uygun meslek önerileri sunulacaktır. Cevaplarınızı dürüstçe vermeniz, doğru sonuçlar alabilmeniz için önemlidir.</p>
  `,
  personalityTypes: {
    'R': {
      name: 'Realistik (Gerçekçi)',
      description: 'Realistik tipler makine, alet ve nesnelerle çalışmayı seven, pratik düşünen ve elle yapılan işlerde başarılı kişilerdir. Genellikle daha az sosyal etkileşim gerektiren, açık hava veya teknik ortamlarda çalışmayı tercih ederler.',
      careers: ['Mühendis', 'Teknisyen', 'Marangoz', 'Elektrikçi', 'İnşaat Ustası', 'Makine Operatörü', 'Çiftçi', 'Asker']
    },
    'I': {
      name: 'İnvestigatif (Araştırmacı)',
      description: 'İnvestigatif tipler araştırma yapmayı, problem çözmeyi ve analitik düşünmeyi seven kişilerdir. Bilimsel çalışmalar yapmak, veri analiz etmek ve karmaşık problemleri çözmekten keyif alırlar.',
      careers: ['Bilim İnsanı', 'Araştırmacı', 'Doktor', 'Ekonomist', 'Matematikçi', 'Yazılım Geliştirici', 'Mühendis', 'Akademisyen']
    },
    'A': {
      name: 'Artistik (Sanatçı)',
      description: 'Artistik tipler yaratıcı, sıra dışı ve sanatsal faaliyetlerden hoşlanan kişilerdir. Özgür düşünce, kendini ifade etme ve yaratıcılık onlar için önemlidir. Estetik değerlere önem verirler.',
      careers: ['Grafik Tasarımcı', 'Müzisyen', 'Yazar', 'Fotoğrafçı', 'Mimar', 'Aktör', 'Ressam', 'Moda Tasarımcısı']
    },
    'S': {
      name: 'Sosyal (Toplumsal)',
      description: 'Sosyal tipler insanlarla iletişim kurmayı, yardım etmeyi ve eğitmeyi seven kişilerdir. İletişim becerileri güçlüdür ve empati yetenekleri yüksektir. İnsanların gelişimine katkıda bulunmaktan keyif alırlar.',
      careers: ['Öğretmen', 'Psikolog', 'Sosyal Hizmet Uzmanı', 'Danışman', 'Hemşire', 'İnsan Kaynakları Uzmanı', 'Rehber Öğretmen', 'Terapist']
    },
    'E': {
      name: 'Girişimci (Enterprising)',
      description: 'Girişimci tipler liderlik yapmayı, ikna etmeyi ve organize etmeyi seven kişilerdir. Risk almaktan çekinmezler, hedef odaklıdırlar ve başkalarını yönlendirmekte başarılıdırlar.',
      careers: ['Pazarlamacı', 'Yönetici', 'Avukat', 'Siyasetçi', 'Girişimci', 'Satış Temsilcisi', 'Borsacı', 'İş Geliştirme Uzmanı']
    },
    'C': {
      name: 'Konvansiyonel (Geleneksel)',
      description: 'Konvansiyonel tipler düzenli, sistematik ve detaylara dikkat eden kişilerdir. Veri işleme, düzenli çalışma ortamı ve net talimatlar onlar için önemlidir. Planlı ve organize çalışırlar.',
      careers: ['Muhasebeci', 'Bankacı', 'Sekreter', 'Veri Analisti', 'İstatistikçi', 'Vergi Uzmanı', 'Editör', 'Kalite Kontrol Uzmanı']
    }
  },
  questions: [
    {
      id: 'R1',
      question: '1. Araçlar ve makinelerle çalışmaktan keyif alırım.',
      options: [
        'Kesinlikle Katılıyorum',
        'Katılıyorum',
        'Kararsızım',
        'Katılmıyorum',
        'Kesinlikle Katılmıyorum'
      ],
      type: 'R'
    },
    {
      id: 'I1',
      question: '2. Karmaşık problemleri çözmekten keyif alırım.',
      options: [
        'Kesinlikle Katılıyorum',
        'Katılıyorum',
        'Kararsızım',
        'Katılmıyorum',
        'Kesinlikle Katılmıyorum'
      ],
      type: 'I'
    },
    {
      id: 'A1',
      question: '3. Sanatsal ve yaratıcı aktivitelerle uğraşmayı severim.',
      options: [
        'Kesinlikle Katılıyorum',
        'Katılıyorum',
        'Kararsızım',
        'Katılmıyorum',
        'Kesinlikle Katılmıyorum'
      ],
      type: 'A'
    },
    {
      id: 'S1',
      question: '4. İnsanlara yardım etmek ve onları desteklemek bana keyif verir.',
      options: [
        'Kesinlikle Katılıyorum',
        'Katılıyorum',
        'Kararsızım',
        'Katılmıyorum',
        'Kesinlikle Katılmıyorum'
      ],
      type: 'S'
    },
    {
      id: 'E1',
      question: '5. İnsanları ikna etmekte ve yönlendirmekte başarılıyım.',
      options: [
        'Kesinlikle Katılıyorum',
        'Katılıyorum',
        'Kararsızım',
        'Katılmıyorum',
        'Kesinlikle Katılmıyorum'
      ],
      type: 'E'
    },
    {
      id: 'C1',
      question: '6. Düzenli ve planlı çalışmayı severim.',
      options: [
        'Kesinlikle Katılıyorum',
        'Katılıyorum',
        'Kararsızım',
        'Katılmıyorum',
        'Kesinlikle Katılmıyorum'
      ],
      type: 'C'
    }
  ]
};

export const parentingStyleTest = {
  title: 'Ebeveyn Tutumları Testi',
  description: 'Bu test, çocuk yetiştirme sürecindeki yaklaşımınızı değerlendirerek hangi ebeveyn tutumunu sergilediğinizi belirlemenize yardımcı olur.',
  duration: 'Yaklaşık 10 dakika',
  questionCount: 20,
  infoText: `
    <h4 class="text-xl font-semibold mb-4 text-gray-800">Ebeveyn Tutumları Testi Hakkında</h4>
    <p class="text-gray-600 mb-4">Bu test, çocuğunuzla ilişkinizde benimsediğiniz ebeveynlik stilini belirlemenize yardımcı olacaktır. Dört temel ebeveynlik stili vardır:</p>
    
    <div class="space-y-4 mb-6">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Demokratik Tutum</h5>
        <p class="text-gray-600 text-sm">Çocuğa sevgi ve ilgi gösterirken aynı zamanda makul sınırlar ve kurallar koyan, çocuğun fikirlerini dikkate alan yaklaşım.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">Otoriter Tutum</h5>
        <p class="text-gray-600 text-sm">Katı kurallar ve yüksek beklentiler içeren, itaat ve disipline önem veren ebeveynlik tarzı.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">İzin Verici Tutum</h5>
        <p class="text-gray-600 text-sm">Az sayıda kural ve beklenti içeren, çocuğa geniş özgürlük tanıyan yaklaşım.</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h5 class="font-semibold text-gray-800 mb-2">İhmalkar Tutum</h5>
        <p class="text-gray-600 text-sm">Çocuğun ihtiyaçlarına ve davranışlarına yeterince ilgi göstermeyen, sınır ve beklenti düzeyi düşük olan yaklaşım.</p>
      </div>
    </div>
    
    <p class="text-gray-600 mb-6">Test sonucunda, hangi ebeveynlik stilini daha çok benimsediğinizi görecek ve çocuğunuzla ilişkinizi geliştirmek için öneriler alacaksınız.</p>
  `,
  personalityTypes: {
    'DEM': {
      name: 'Demokratik',
      description: 'Demokratik ebeveynler, çocuklarına karşı hem sevgi dolu hem de sınır koyabilen kişilerdir. Çocuğunuzun fikirlerini dinliyor, görüşlerine saygı duyuyor ve onun kararlarına katılımını destekliyorsunuz. Aynı zamanda makul sınırlar ve beklentiler oluşturarak disiplin sağlıyorsunuz. Bu yaklaşım, çocukların özgüven, öz disiplin ve sosyal beceriler geliştirmesinde en etkili yöntemdir.',
      careers: []
    },
    'OTO': {
      name: 'Otoriter',
      description: 'Otoriter ebeveynler, çocuklarından itaat ve kurallara kesin uyum beklerler. Çocuğunuzun davranışlarını sıkı bir şekilde kontrol ediyor ve kurallara uymadığında ceza verme eğilimindesiniz. "Çünkü ben öyle diyorum" yaklaşımı sık kullanılır. Bu tutum, çocukların otoriteye saygı duymalarını sağlasa da, özgüven eksikliği ve düşük sosyal beceriler geliştirmelerine neden olabilir.',
      careers: []
    },
    'IZV': {
      name: 'İzin Verici',
      description: 'İzin verici ebeveynler, çocuklarına karşı sevgi dolu ancak az sayıda kural ve beklenti içeren bir yaklaşım benimserler. Çocuğunuza karşı sıcak ve sevecen davranıyor, ancak davranışlarına yeterince sınır koymuyorsunuz. Bu tutum, çocukların kendini özel hissetmesini sağlasa da, öz-kontrol eksikliği ve kurallara uyma konusunda zorluk yaşamalarına neden olabilir.',
      careers: []
    },
    'IHM': {
      name: 'İhmalkar',
      description: 'İhmalkar ebeveynler, çocuklarının ihtiyaçlarına ve davranışlarına yeterince ilgi göstermezler. Çocuğunuzun günlük yaşamına az dahil oluyor, onunla sınırlı iletişim kuruyorsunuz. Bu yaklaşım, çocukların duygusal ve davranışsal problemler geliştirme riskini artırabilir. Çocuğunuzla daha fazla ilgilenme ve ona rehberlik etme konusunda adımlar atmanız faydalı olacaktır.',
      careers: []
    }
  },
  questions: [
    {
      id: 'q1',
      question: '1. Çocuğumla önemli konularda konuşur ve onun fikirlerini dikkate alırım.',
      options: [
        'Her Zaman',
        'Çoğunlukla',
        'Bazen',
        'Nadiren',
        'Hiçbir Zaman'
      ],
      type: 'DEM'
    },
    {
      id: 'q2',
      question: '2. Çocuğumun kurallara koşulsuz uymasını beklerim.',
      options: [
        'Her Zaman',
        'Çoğunlukla',
        'Bazen',
        'Nadiren',
        'Hiçbir Zaman'
      ],
      type: 'OTO'
    },
    {
      id: 'q3',
      question: '3. Çocuğumun isteklerini genellikle yerine getiririm.',
      options: [
        'Her Zaman',
        'Çoğunlukla',
        'Bazen',
        'Nadiren',
        'Hiçbir Zaman'
      ],
      type: 'IZV'
    },
    {
      id: 'q4',
      question: '4. Çocuğumun günlük yaşamına çok fazla dahil olmam.',
      options: [
        'Her Zaman',
        'Çoğunlukla',
        'Bazen',
        'Nadiren',
        'Hiçbir Zaman'
      ],
      type: 'IHM'
    },
    {
      id: 'q5',
      question: '5. Çocuğuma hem sevgi gösterir hem de ondan belirli davranış standartları beklerim.',
      options: [
        'Her Zaman',
        'Çoğunlukla',
        'Bazen',
        'Nadiren',
        'Hiçbir Zaman'
      ],
      type: 'DEM'
    },
    {
      id: 'q6',
      question: '6. Çocuğum hata yaptığında genellikle ceza veririm.',
      options: [
        'Her Zaman',
        'Çoğunlukla',
        'Bazen',
        'Nadiren',
        'Hiçbir Zaman'
      ],
      type: 'OTO'
    }
  ]
};

export const tests = [
  hollandTest,
  parentingStyleTest
];
