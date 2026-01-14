/**
 * UMEZOO Corporate Website - Main JavaScript
 */

// Language translations
const translations = {
  ja: {
    // Navigation
    nav: {
      about: 'About',
      work: 'Work',
      service: 'Service',
      career: 'Career',
      news: 'News',
      contact: 'Contact'
    },
    // Footer
    footer: {
      navigation: 'Navigation',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      security: 'Security',
      copyright: '© 2024 UMEZOO Inc. All rights reserved.',
      desc: '創造的な食体験を事業活動に浸透させる、フードクリエイティブファーム'
    },
    // Hero
    hero: {
      subtitle: 'Food Creative Farm',
      conceptTitle: 'UMEZOOとは',
      conceptText: 'UMEZOO（ウメズー）は、創造的な食体験を事業活動に浸透させる、フードクリエイティブファームです。フードビジネスディレクションとコンテンツデリバリーを軸に、商品、店舗、製造施設、SNS、映像、BGM、Web、空間演出、内装デザインなど、お客様に提供するあらゆる食体験を、クリエイティビティで特別なものに昇華することを生業としております。様々なクリエイティブと体系的なロジックによって、ユニークに目的を叶えることを目指しております。'
    },
    // Features
    features: {
      direction: {
        title: 'フードビジネスディレクション',
        text: 'ブランド戦略から店舗運営まで、食に関するビジネスを包括的にディレクションします。'
      },
      content: {
        title: 'コンテンツデリバリー',
        text: '映像、SNS、Web、空間演出など、多様なメディアで食の魅力を伝えます。'
      },
      creative: {
        title: 'クリエイティブデザイン',
        text: '内装、パッケージ、ビジュアルなど、食体験を彩るデザインを提供します。'
      }
    },
    // CTA
    cta: {
      title: 'お問い合わせ',
      text: 'プロジェクトのご相談、お見積もりなど、お気軽にご連絡ください。',
      button: 'Contact Us'
    },
    // About Page
    about: {
      pageTitle: 'About',
      pageSubtitle: '私たちについて',
      heroTagline: '食の可能性を、創造する。',
      storyTitle: '創造的な食体験を、事業活動に浸透させる',
      storyText1: 'UMEZOOは、食を通じて人々の心を動かすクリエイティブファームです。',
      storyText2: '私たちは、単なるフードビジネスのコンサルティングではなく、食体験そのものをデザインします。商品開発から店舗設計、ブランディングからマーケティングまで、食に関わるあらゆる領域で、クリエイティビティの力を活かしています。',
      storyText3: '商品、店舗、製造施設、SNS、映像、BGM、Web、空間演出、内装デザイン。お客様に提供するあらゆる食体験を、クリエイティビティで特別なものに昇華することを生業としております。',
      founderLabel: 'Founder & CEO',
      founderName: '梅津 信吾',
      awardTitle: 'シルバーエッグ受賞',
      founderBio1: 'フランス留学中に料理人としてのキャリアをスタートし、国内外の名店で研鑽を積む。2021年、国内のシェフコンペティション「RED U-35」にてシルバーエッグを受賞。',
      founderBio2: '料理の技術だけでなく、食を取り巻く体験すべてをクリエイティブの視点で捉え直すことの重要性を感じ、2024年にUMEZOO株式会社を設立。',
      founderBio3: '「食べる」という行為を超えて、記憶に残る食体験をデザインすることをミッションに掲げ、フードビジネスの新しい可能性を追求し続けている。',
      valuesTitle: 'Our Values',
      valuesSubtitle: '私たちの価値観',
      value1Title: 'Creativity',
      value1Text: 'すべての課題に対して、創造的な解決策を追求します。既成概念にとらわれず、新しい価値を生み出すことを常に意識しています。',
      value2Title: 'Seamless',
      value2Text: '企画から制作、運用まで一貫した体制や、業種を横断するシームレスな連携で、スムーズかつ付加価値の高い体験を実現します。',
      value3Title: 'Fairness',
      value3Text: '生産者から消費者まで、食に関わるすべてのサプライチェーンに対してフェアで共創的であることを大切にしています。',
      value4Title: 'Impact',
      value4Text: 'クリエイティブを成果に直結させます。美しさや面白さだけでなく、ビジネスとして成立する食体験を設計します。',
      companyTitle: 'Company',
      companySubtitle: '会社概要',
      companyName: 'UMEZOO株式会社',
      companyNameLabel: '会社名',
      ceoLabel: '代表者',
      ceo: '梅津 信吾　　Shingo Umetsu',
      establishedLabel: '設立',
      established: '2024年3月',
      businessLabel: '事業内容',
      business: 'フードビジネスディレクション、コンテンツ制作、ブランディング、店舗プロデュース',
      addressLabel: '所在地',
      address: '東京都渋谷区東３丁目１８番地８号'
    },
    // Work Page
    work: {
      pageTitle: 'Work',
      pageSubtitle: '実績紹介',
      sectionTitle: 'プロジェクト',
      sectionSubtitle: '私たちが手がけたプロジェクトの一部をご紹介します。',
      project1Category: 'ブランディング',
      project1Title: 'Restaurant Branding Project',
      project1Text: '新規レストランのブランド構築から空間デザインまでを担当。',
      project2Category: 'コンテンツ制作',
      project2Title: 'Food Media Campaign',
      project2Text: 'SNSと映像を活用した食品ブランドのプロモーション施策。',
      project3Category: '店舗プロデュース',
      project3Title: 'Cafe Concept Design',
      project3Text: 'カフェの内装デザインからメニュー開発までトータルプロデュース。',
      project4Category: '商品開発',
      project4Title: 'Product Development',
      project4Text: '食品メーカーとの新商品開発プロジェクト。'
    },
    // Service Page
    service: {
      pageTitle: 'Service',
      pageSubtitle: 'サービス内容',
      sectionTitle: '提供サービス',
      sectionSubtitle: '食体験を特別なものにする、幅広いサービスを提供しています。',
      service1Title: 'フードビジネスディレクション',
      service1Text: 'ブランド戦略の策定から店舗運営のサポートまで、食ビジネスを包括的にディレクションします。市場分析、コンセプト開発、事業計画の策定など、ビジネスの成功に必要なあらゆる要素をサポートします。',
      service1Features: ['ブランド戦略', '市場分析', 'コンセプト開発', '事業計画'],
      service2Title: 'コンテンツデリバリー',
      service2Text: '映像制作、SNS運用、Webサイト制作など、多様なメディアを活用して食の魅力を効果的に伝えます。ターゲットに響くコンテンツ戦略を立案し、制作から運用までワンストップで対応します。',
      service2Features: ['映像制作', 'SNS運用', 'Web制作', 'BGM制作'],
      service3Title: 'クリエイティブデザイン',
      service3Text: '店舗の内装デザイン、パッケージデザイン、ビジュアルデザインなど、食体験を彩るあらゆるデザインを提供します。機能性と美しさを両立したデザインで、ブランドの世界観を表現します。',
      service3Features: ['内装デザイン', 'パッケージ', 'ビジュアル', '空間演出'],
      service4Title: '商品・メニュー開発',
      service4Text: '市場ニーズとブランドコンセプトに基づいた商品開発、メニュー開発を行います。レシピ開発から原価計算、サプライチェーンの構築まで、商品化に必要なプロセスをサポートします。',
      service4Features: ['レシピ開発', 'メニュー構成', '原価計算', '品質管理']
    },
    // Career Page
    career: {
      pageTitle: 'Career',
      pageSubtitle: '採用情報',
      introTitle: '一緒に食の可能性を広げませんか？',
      introText: 'UMEZOOでは、食とクリエイティブに情熱を持つ仲間を募集しています。私たちと一緒に、新しい食体験を創造しましょう。',
      positionsTitle: '募集職種',
      position1Title: 'ビジネスディレクター',
      position1Type: '正社員',
      position1Location: '東京',
      position2Title: 'セールス',
      position2Type: '正社員 / 業務委託',
      position2Location: 'リモート可',
      position3Title: 'フードプランナー',
      position3Type: '正社員 / 業務委託',
      position3Location: 'リモート可',
      applyButton: '応募する'
    },
    // Contact Page
    contact: {
      pageTitle: 'Contact',
      pageSubtitle: 'お問い合わせ',
      infoTitle: 'お問い合わせ先',
      emailLabel: 'Email',
      email: 'info@umezoo.co.jp',
      addressLabel: 'Address',
      address: '東京都',
      formTitle: 'お問い合わせフォーム',
      nameLabel: 'お名前',
      namePlaceholder: '山田 太郎',
      companyLabel: '会社名',
      companyPlaceholder: '株式会社〇〇',
      emailFormLabel: 'メールアドレス',
      emailFormPlaceholder: 'example@company.com',
      subjectLabel: 'お問い合わせ種別',
      subjectOptions: {
        select: '選択してください',
        project: 'プロジェクトのご相談',
        partnership: '業務提携について',
        career: '採用について',
        other: 'その他'
      },
      messageLabel: 'メッセージ',
      messagePlaceholder: 'お問い合わせ内容をご記入ください',
      submitButton: '送信する'
    },
    // Privacy Policy Page
    privacy: {
      pageTitle: 'Privacy Policy',
      pageSubtitle: 'プライバシーポリシー',
      intro: '当社は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、適切な取り扱いに努めます。',
      section1Title: '1. 個人情報の収集',
      section1Text: '当社は、サービスの提供に必要な範囲で、適法かつ公正な手段により個人情報を収集します。',
      section2Title: '2. 個人情報の利用目的',
      section2Text: '収集した個人情報は、以下の目的で利用します。',
      section2Items: ['サービスの提供・運営', 'お問い合わせへの対応', 'サービスの改善・新サービスの開発', 'マーケティング活動'],
      section3Title: '3. 個人情報の第三者提供',
      section3Text: '当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。',
      section4Title: '4. 個人情報の管理',
      section4Text: '当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。',
      section5Title: '5. お問い合わせ',
      section5Text: '個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。',
      contactEmail: 'Email: privacy@umezoo.co.jp'
    },
    // Security Page
    security: {
      pageTitle: 'Security',
      pageSubtitle: '情報セキュリティ',
      intro: '当社は、情報セキュリティの重要性を認識し、お客様および関係者の情報資産を適切に保護するため、以下の方針に基づき情報セキュリティ対策を実施します。',
      section1Title: '1. 情報セキュリティ方針',
      section1Text: '当社は、情報セキュリティに関する法令、規制、契約上の要求事項を遵守し、継続的な改善に努めます。',
      section2Title: '2. 組織的対策',
      section2Text: '情報セキュリティ管理体制を整備し、責任と権限を明確にしています。',
      section2Items: ['情報セキュリティ責任者の設置', '定期的なセキュリティ教育の実施', 'インシデント対応体制の整備'],
      section3Title: '3. 技術的対策',
      section3Text: '情報システムに対する不正アクセス、情報漏洩等を防止するため、技術的なセキュリティ対策を実施しています。',
      section3Items: ['アクセス制御', '暗号化', 'ログ監視', '脆弱性対策'],
      section4Title: '4. 物理的対策',
      section4Text: '情報資産を保護するため、オフィスおよび情報システムの物理的なセキュリティ対策を実施しています。',
      section5Title: '5. お問い合わせ',
      section5Text: '情報セキュリティに関するお問い合わせは、下記までご連絡ください。',
      contactEmail: 'Email: security@umezoo.co.jp'
    },
    // News Page
    news: {
      pageTitle: 'News',
      pageSubtitle: 'お知らせ',
      categoryInfo: 'お知らせ',
      categoryCompany: '会社情報',
      news1Title: 'ウェブサイトをリニューアルしました',
      news1Text: 'UMEZOOの公式ウェブサイトをリニューアルいたしました。今後とも、よろしくお願いいたします。',
      news2Title: '新年のご挨拶',
      news2Text: '明けましておめでとうございます。本年もUMEZOOをよろしくお願いいたします。',
      news3Title: 'UMEZOO株式会社を設立しました',
      news3Text: 'フードクリエイティブファームとして、UMEZOO株式会社を設立いたしました。創造的な食体験を提供してまいります。'
    }
  },
  en: {
    // Navigation
    nav: {
      about: 'About',
      work: 'Work',
      service: 'Service',
      career: 'Career',
      news: 'News',
      contact: 'Contact'
    },
    // Footer
    footer: {
      navigation: 'Navigation',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      security: 'Security',
      copyright: '© 2024 UMEZOO Inc. All rights reserved.',
      desc: 'A food creative farm that integrates creative food experiences into business activities.'
    },
    // Hero
    hero: {
      subtitle: 'Food Creative Farm',
      conceptTitle: 'What is UMEZOO',
      conceptText: 'UMEZOO is a food creative farm that integrates creative food experiences into business activities. With food business direction and content delivery at its core, we specialize in elevating all food experiences provided to customers—including products, stores, manufacturing facilities, SNS, video, BGM, web, spatial design, and interior design—into something special through creativity. We aim to uniquely achieve our goals through various creative approaches and systematic logic.'
    },
    // Features
    features: {
      direction: {
        title: 'Food Business Direction',
        text: 'Comprehensive direction for food-related businesses, from brand strategy to store operations.'
      },
      content: {
        title: 'Content Delivery',
        text: 'Conveying the appeal of food through various media including video, SNS, web, and spatial design.'
      },
      creative: {
        title: 'Creative Design',
        text: 'Providing design that enhances food experiences, including interior, packaging, and visuals.'
      }
    },
    // CTA
    cta: {
      title: 'Contact Us',
      text: 'Feel free to contact us for project consultations and estimates.',
      button: 'Contact Us'
    },
    // About Page
    about: {
      pageTitle: 'About',
      pageSubtitle: 'About Us',
      heroTagline: 'Creating the possibilities of food.',
      storyTitle: 'Integrating creative food experiences into business activities',
      storyText1: 'UMEZOO is a creative farm that moves hearts through food.',
      storyText2: 'We don\'t just consult on food businesses—we design the food experience itself. We leverage the power of creativity in every area related to food, from product development and store design to branding and marketing.',
      storyText3: 'Products, stores, manufacturing facilities, SNS, video, BGM, web, spatial design, interior design. We make it our business to elevate all food experiences provided to customers into something special through creativity.',
      founderLabel: 'Founder & CEO',
      founderName: 'Shingo Umetsu',
      awardTitle: 'Silver Egg Award Winner',
      founderBio1: 'Started his career as a chef while studying in France, honing his skills at renowned restaurants both domestically and internationally. In 2021, won the Silver Egg at RED U-35, a prestigious chef competition in Japan.',
      founderBio2: 'Feeling the importance of reexamining not just culinary techniques but all experiences surrounding food from a creative perspective, he founded UMEZOO Inc. in 2024.',
      founderBio3: 'With a mission to design memorable food experiences that go beyond the act of eating, he continues to pursue new possibilities in food business.',
      valuesTitle: 'Our Values',
      valuesSubtitle: 'What We Believe In',
      value1Title: 'Creativity',
      value1Text: 'We pursue creative solutions to every challenge. We constantly strive to create new value without being bound by conventional ideas.',
      value2Title: 'Seamless',
      value2Text: 'We handle everything from planning to production and operation consistently. Seamless collaboration enables smooth project progress.',
      value3Title: 'Fairness',
      value3Text: 'We value being fair to all supply chain participants in food, from business partners to consumers.',
      value4Title: 'Impact',
      value4Text: 'We directly connect creativity to business results. We design food experiences that are not only beautiful but also succeed as a business.',
      companyTitle: 'Company',
      companySubtitle: 'Company Overview',
      companyName: 'UMEZOO Inc.',
      companyNameLabel: 'Company Name',
      ceoLabel: 'CEO',
      ceo: 'Shingo Umetsu',
      establishedLabel: 'Established',
      established: '2024',
      businessLabel: 'Business',
      business: 'Food Business Direction, Content Production, Branding, Store Production',
      addressLabel: 'Location',
      address: 'Tokyo, Japan'
    },
    // Work Page
    work: {
      pageTitle: 'Work',
      pageSubtitle: 'Our Projects',
      sectionTitle: 'Projects',
      sectionSubtitle: 'Here are some of the projects we have worked on.',
      project1Category: 'Branding',
      project1Title: 'Restaurant Branding Project',
      project1Text: 'Handled brand building and spatial design for a new restaurant.',
      project2Category: 'Content Production',
      project2Title: 'Food Media Campaign',
      project2Text: 'Promotional strategy for a food brand using SNS and video.',
      project3Category: 'Store Production',
      project3Title: 'Cafe Concept Design',
      project3Text: 'Total production from interior design to menu development for a cafe.',
      project4Category: 'Product Development',
      project4Title: 'Product Development',
      project4Text: 'New product development project with a food manufacturer.'
    },
    // Service Page
    service: {
      pageTitle: 'Service',
      pageSubtitle: 'Our Services',
      sectionTitle: 'Services',
      sectionSubtitle: 'We offer a wide range of services to make food experiences special.',
      service1Title: 'Food Business Direction',
      service1Text: 'Comprehensive direction for food businesses, from brand strategy formulation to store operation support. We support all elements necessary for business success, including market analysis, concept development, and business planning.',
      service1Features: ['Brand Strategy', 'Market Analysis', 'Concept Development', 'Business Planning'],
      service2Title: 'Content Delivery',
      service2Text: 'Effectively conveying the appeal of food using various media such as video production, SNS operation, and website creation. We plan content strategies that resonate with the target audience and handle everything from production to operation.',
      service2Features: ['Video Production', 'SNS Operation', 'Web Production', 'BGM Production'],
      service3Title: 'Creative Design',
      service3Text: 'Providing all designs that enhance food experiences, including store interior design, package design, and visual design. We express the brand\'s worldview with design that balances functionality and beauty.',
      service3Features: ['Interior Design', 'Package', 'Visual', 'Spatial Design'],
      service4Title: 'Product & Menu Development',
      service4Text: 'Product and menu development based on market needs and brand concepts. We support the processes necessary for commercialization, from recipe development to cost calculation and supply chain construction.',
      service4Features: ['Recipe Development', 'Menu Composition', 'Cost Calculation', 'Quality Control']
    },
    // Career Page
    career: {
      pageTitle: 'Career',
      pageSubtitle: 'Join Our Team',
      introTitle: 'Want to expand the possibilities of food with us?',
      introText: 'UMEZOO is looking for team members who are passionate about food and creativity. Let\'s create new food experiences together.',
      positionsTitle: 'Open Positions',
      position1Title: 'Business Director',
      position1Type: 'Full-time',
      position1Location: 'Tokyo',
      position2Title: 'Sales',
      position2Type: 'Full-time / Contract',
      position2Location: 'Remote OK',
      position3Title: 'Food Planner',
      position3Type: 'Full-time / Contract',
      position3Location: 'Remote OK',
      applyButton: 'Apply'
    },
    // Contact Page
    contact: {
      pageTitle: 'Contact',
      pageSubtitle: 'Get in Touch',
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      email: 'info@umezoo.co.jp',
      addressLabel: 'Address',
      address: 'Tokyo, Japan',
      formTitle: 'Contact Form',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      companyLabel: 'Company',
      companyPlaceholder: 'Company Name',
      emailFormLabel: 'Email',
      emailFormPlaceholder: 'example@company.com',
      subjectLabel: 'Subject',
      subjectOptions: {
        select: 'Please select',
        project: 'Project Consultation',
        partnership: 'Business Partnership',
        career: 'Career Opportunities',
        other: 'Other'
      },
      messageLabel: 'Message',
      messagePlaceholder: 'Please enter your message',
      submitButton: 'Send'
    },
    // Privacy Policy Page
    privacy: {
      pageTitle: 'Privacy Policy',
      pageSubtitle: 'Privacy Policy',
      intro: 'We recognize the protection of personal information as an important responsibility and strive to handle it appropriately based on the following privacy policy.',
      section1Title: '1. Collection of Personal Information',
      section1Text: 'We collect personal information by lawful and fair means to the extent necessary for providing our services.',
      section2Title: '2. Purpose of Use',
      section2Text: 'We use collected personal information for the following purposes:',
      section2Items: ['Provision and operation of services', 'Responding to inquiries', 'Improvement of services and development of new services', 'Marketing activities'],
      section3Title: '3. Disclosure to Third Parties',
      section3Text: 'We will not provide personal information to third parties without the customer\'s consent, except as required by law.',
      section4Title: '4. Management of Personal Information',
      section4Text: 'We take necessary and appropriate measures for security management to prevent leakage, loss, and damage of personal information.',
      section5Title: '5. Contact',
      section5Text: 'For inquiries regarding the handling of personal information, please contact us at:',
      contactEmail: 'Email: privacy@umezoo.co.jp'
    },
    // Security Page
    security: {
      pageTitle: 'Security',
      pageSubtitle: 'Information Security',
      intro: 'We recognize the importance of information security and implement information security measures based on the following policy to appropriately protect the information assets of our customers and stakeholders.',
      section1Title: '1. Information Security Policy',
      section1Text: 'We comply with laws, regulations, and contractual requirements related to information security and strive for continuous improvement.',
      section2Title: '2. Organizational Measures',
      section2Text: 'We have established an information security management system with clear responsibilities and authorities.',
      section2Items: ['Appointment of Information Security Officer', 'Regular security training', 'Incident response system'],
      section3Title: '3. Technical Measures',
      section3Text: 'We implement technical security measures to prevent unauthorized access and information leakage to information systems.',
      section3Items: ['Access control', 'Encryption', 'Log monitoring', 'Vulnerability management'],
      section4Title: '4. Physical Measures',
      section4Text: 'We implement physical security measures for offices and information systems to protect information assets.',
      section5Title: '5. Contact',
      section5Text: 'For inquiries regarding information security, please contact us at:',
      contactEmail: 'Email: security@umezoo.co.jp'
    },
    // News Page
    news: {
      pageTitle: 'News',
      pageSubtitle: 'Latest Updates',
      categoryInfo: 'Information',
      categoryCompany: 'Company',
      news1Title: 'Website Renewed',
      news1Text: 'We have renewed the official UMEZOO website. Thank you for your continued support.',
      news2Title: 'New Year Greetings',
      news2Text: 'Happy New Year. We look forward to your continued support of UMEZOO this year.',
      news3Title: 'UMEZOO Inc. Established',
      news3Text: 'UMEZOO Inc. has been established as a food creative farm. We will continue to provide creative food experiences.'
    }
  },
  fr: {
    // Navigation
    nav: {
      about: 'About',
      work: 'Work',
      service: 'Service',
      career: 'Career',
      news: 'News',
      contact: 'Contact'
    },
    // Footer
    footer: {
      navigation: 'Navigation',
      legal: 'Juridique',
      privacyPolicy: 'Politique de confidentialité',
      security: 'Sécurité',
      copyright: '© 2024 UMEZOO Inc. Tous droits réservés.',
      desc: 'Une ferme créative alimentaire qui intègre des expériences alimentaires créatives dans les activités commerciales.'
    },
    // Hero
    hero: {
      subtitle: 'Ferme Créative Alimentaire',
      conceptTitle: 'Qu\'est-ce qu\'UMEZOO',
      conceptText: 'UMEZOO est une ferme créative alimentaire qui intègre des expériences alimentaires créatives dans les activités commerciales. Avec la direction des affaires alimentaires et la livraison de contenu au cœur de notre activité, nous nous spécialisons dans l\'élévation de toutes les expériences alimentaires offertes aux clients—y compris les produits, les magasins, les installations de fabrication, les réseaux sociaux, la vidéo, la musique d\'ambiance, le web, la conception spatiale et la décoration intérieure—en quelque chose de spécial grâce à la créativité. Nous visons à atteindre nos objectifs de manière unique grâce à diverses approches créatives et une logique systématique.'
    },
    // Features
    features: {
      direction: {
        title: 'Direction des Affaires Alimentaires',
        text: 'Direction complète pour les entreprises alimentaires, de la stratégie de marque à l\'exploitation des magasins.'
      },
      content: {
        title: 'Livraison de Contenu',
        text: 'Transmettre l\'attrait de la nourriture à travers divers médias, y compris la vidéo, les réseaux sociaux, le web et la conception spatiale.'
      },
      creative: {
        title: 'Design Créatif',
        text: 'Fournir un design qui améliore les expériences alimentaires, y compris l\'intérieur, l\'emballage et les visuels.'
      }
    },
    // CTA
    cta: {
      title: 'Contactez-nous',
      text: 'N\'hésitez pas à nous contacter pour des consultations de projet et des devis.',
      button: 'Contactez-nous'
    },
    // About Page
    about: {
      pageTitle: 'About',
      pageSubtitle: 'À propos de nous',
      heroTagline: 'Créer les possibilités de la nourriture.',
      storyTitle: 'Intégrer des expériences alimentaires créatives dans les activités commerciales',
      storyText1: 'UMEZOO est une ferme créative qui touche les cœurs à travers la nourriture.',
      storyText2: 'Nous ne faisons pas que conseiller sur les entreprises alimentaires—nous concevons l\'expérience alimentaire elle-même. Nous exploitons le pouvoir de la créativité dans tous les domaines liés à la nourriture, du développement de produits et de la conception de magasins au branding et au marketing.',
      storyText3: 'Produits, magasins, installations de production, réseaux sociaux, vidéo, musique d\'ambiance, web, conception spatiale, décoration intérieure. Nous nous spécialisons dans l\'élévation de toutes les expériences alimentaires offertes aux clients en quelque chose de spécial grâce à la créativité.',
      founderLabel: 'Fondateur & PDG',
      founderName: 'Shingo Umetsu',
      awardTitle: 'Lauréat du Silver Egg',
      founderBio1: 'Il a commencé sa carrière de chef lors de ses études en France, perfectionnant ses compétences dans des restaurants renommés au Japon et à l\'étranger. En 2021, il a remporté le Silver Egg au RED U-35, un prestigieux concours de chefs au Japon.',
      founderBio2: 'Ressentant l\'importance de réexaminer non seulement les techniques culinaires mais toutes les expériences entourant la nourriture d\'un point de vue créatif, il a fondé UMEZOO Inc. en 2024.',
      founderBio3: 'Avec pour mission de concevoir des expériences alimentaires mémorables qui vont au-delà de l\'acte de manger, il continue de poursuivre de nouvelles possibilités dans le secteur alimentaire.',
      valuesTitle: 'Nos Valeurs',
      valuesSubtitle: 'Ce en quoi nous croyons',
      value1Title: 'Créativité',
      value1Text: 'Nous poursuivons des solutions créatives à chaque défi. Nous nous efforçons constamment de créer de nouvelles valeurs sans être liés par des idées conventionnelles.',
      value2Title: 'Fluidité',
      value2Text: 'Nous gérons tout, de la planification à la production et à l\'exploitation de manière cohérente. Une collaboration fluide permet une progression de projet sans heurts.',
      value3Title: 'Équité',
      value3Text: 'Nous valorisons l\'équité envers tous les participants de la chaîne d\'approvisionnement alimentaire, des partenaires commerciaux aux consommateurs.',
      value4Title: 'Impact',
      value4Text: 'Nous relions directement la créativité aux résultats commerciaux. Nous concevons des expériences alimentaires qui sont non seulement belles mais aussi réussies en tant qu\'entreprise.',
      companyTitle: 'Entreprise',
      companySubtitle: 'Aperçu de l\'entreprise',
      companyName: 'UMEZOO Inc.',
      companyNameLabel: 'Nom de l\'entreprise',
      ceoLabel: 'PDG',
      ceo: 'Shingo Umetsu',
      establishedLabel: 'Fondée',
      established: '2024',
      businessLabel: 'Activité',
      business: 'Direction des affaires alimentaires, Production de contenu, Branding, Production de magasins',
      addressLabel: 'Adresse',
      address: 'Tokyo, Japon'
    },
    // Work Page
    work: {
      pageTitle: 'Work',
      pageSubtitle: 'Nos projets',
      sectionTitle: 'Projets',
      sectionSubtitle: 'Voici quelques-uns des projets sur lesquels nous avons travaillé.',
      project1Category: 'Branding',
      project1Title: 'Projet de Branding Restaurant',
      project1Text: 'Construction de marque et conception spatiale pour un nouveau restaurant.',
      project2Category: 'Production de Contenu',
      project2Title: 'Campagne Média Alimentaire',
      project2Text: 'Stratégie promotionnelle pour une marque alimentaire utilisant les réseaux sociaux et la vidéo.',
      project3Category: 'Production de Magasin',
      project3Title: 'Conception de Concept Café',
      project3Text: 'Production totale de la décoration intérieure au développement du menu pour un café.',
      project4Category: 'Développement de Produit',
      project4Title: 'Développement de Produit',
      project4Text: 'Projet de développement de nouveaux produits avec un fabricant alimentaire.'
    },
    // Service Page
    service: {
      pageTitle: 'Service',
      pageSubtitle: 'Nos services',
      sectionTitle: 'Services',
      sectionSubtitle: 'Nous offrons une large gamme de services pour rendre les expériences alimentaires spéciales.',
      service1Title: 'Direction des Affaires Alimentaires',
      service1Text: 'Direction complète pour les entreprises alimentaires, de la formulation de la stratégie de marque au soutien à l\'exploitation des magasins. Nous soutenons tous les éléments nécessaires au succès de l\'entreprise, y compris l\'analyse de marché, le développement de concepts et la planification commerciale.',
      service1Features: ['Stratégie de marque', 'Analyse de marché', 'Développement de concept', 'Planification commerciale'],
      service2Title: 'Livraison de Contenu',
      service2Text: 'Transmettre efficacement l\'attrait de la nourriture en utilisant divers médias tels que la production vidéo, l\'exploitation des réseaux sociaux et la création de sites web. Nous planifions des stratégies de contenu qui résonnent avec le public cible et gérons tout, de la production à l\'exploitation.',
      service2Features: ['Production vidéo', 'Réseaux sociaux', 'Production web', 'Production musicale'],
      service3Title: 'Design Créatif',
      service3Text: 'Fournir tous les designs qui améliorent les expériences alimentaires, y compris la décoration intérieure des magasins, le design d\'emballage et le design visuel. Nous exprimons l\'univers de la marque avec un design qui équilibre fonctionnalité et beauté.',
      service3Features: ['Décoration intérieure', 'Emballage', 'Visuel', 'Conception spatiale'],
      service4Title: 'Développement de Produits et Menus',
      service4Text: 'Développement de produits et de menus basé sur les besoins du marché et les concepts de marque. Nous soutenons les processus nécessaires à la commercialisation, du développement de recettes au calcul des coûts et à la construction de la chaîne d\'approvisionnement.',
      service4Features: ['Développement de recettes', 'Composition du menu', 'Calcul des coûts', 'Contrôle qualité']
    },
    // Career Page
    career: {
      pageTitle: 'Career',
      pageSubtitle: 'Rejoignez notre équipe',
      introTitle: 'Voulez-vous élargir les possibilités de la nourriture avec nous?',
      introText: 'UMEZOO recherche des membres d\'équipe passionnés par la nourriture et la créativité. Créons ensemble de nouvelles expériences alimentaires.',
      positionsTitle: 'Postes ouverts',
      position1Title: 'Directeur Commercial',
      position1Type: 'Temps plein',
      position1Location: 'Tokyo',
      position2Title: 'Commercial',
      position2Type: 'Temps plein / Contrat',
      position2Location: 'Télétravail possible',
      position3Title: 'Planificateur Alimentaire',
      position3Type: 'Temps plein / Contrat',
      position3Location: 'Télétravail possible',
      applyButton: 'Postuler'
    },
    // Contact Page
    contact: {
      pageTitle: 'Contact',
      pageSubtitle: 'Contactez-nous',
      infoTitle: 'Informations de contact',
      emailLabel: 'Email',
      email: 'info@umezoo.co.jp',
      addressLabel: 'Adresse',
      address: 'Tokyo, Japon',
      formTitle: 'Formulaire de contact',
      nameLabel: 'Nom',
      namePlaceholder: 'Jean Dupont',
      companyLabel: 'Entreprise',
      companyPlaceholder: 'Nom de l\'entreprise',
      emailFormLabel: 'Email',
      emailFormPlaceholder: 'exemple@entreprise.com',
      subjectLabel: 'Sujet',
      subjectOptions: {
        select: 'Veuillez sélectionner',
        project: 'Consultation de projet',
        partnership: 'Partenariat commercial',
        career: 'Opportunités de carrière',
        other: 'Autre'
      },
      messageLabel: 'Message',
      messagePlaceholder: 'Veuillez entrer votre message',
      submitButton: 'Envoyer'
    },
    // Privacy Policy Page
    privacy: {
      pageTitle: 'Privacy Policy',
      pageSubtitle: 'Politique de confidentialité',
      intro: 'Nous reconnaissons la protection des informations personnelles comme une responsabilité importante et nous nous efforçons de les traiter de manière appropriée sur la base de la politique de confidentialité suivante.',
      section1Title: '1. Collecte des informations personnelles',
      section1Text: 'Nous collectons des informations personnelles par des moyens légaux et équitables dans la mesure nécessaire à la fourniture de nos services.',
      section2Title: '2. Finalité d\'utilisation',
      section2Text: 'Nous utilisons les informations personnelles collectées aux fins suivantes:',
      section2Items: ['Fourniture et exploitation des services', 'Réponse aux demandes', 'Amélioration des services et développement de nouveaux services', 'Activités marketing'],
      section3Title: '3. Divulgation à des tiers',
      section3Text: 'Nous ne fournirons pas d\'informations personnelles à des tiers sans le consentement du client, sauf si la loi l\'exige.',
      section4Title: '4. Gestion des informations personnelles',
      section4Text: 'Nous prenons les mesures nécessaires et appropriées pour la gestion de la sécurité afin de prévenir les fuites, la perte et les dommages des informations personnelles.',
      section5Title: '5. Contact',
      section5Text: 'Pour les demandes concernant le traitement des informations personnelles, veuillez nous contacter à:',
      contactEmail: 'Email: privacy@umezoo.co.jp'
    },
    // Security Page
    security: {
      pageTitle: 'Security',
      pageSubtitle: 'Sécurité de l\'information',
      intro: 'Nous reconnaissons l\'importance de la sécurité de l\'information et mettons en œuvre des mesures de sécurité de l\'information basées sur la politique suivante pour protéger de manière appropriée les actifs informationnels de nos clients et parties prenantes.',
      section1Title: '1. Politique de sécurité de l\'information',
      section1Text: 'Nous respectons les lois, réglementations et exigences contractuelles liées à la sécurité de l\'information et nous nous efforçons d\'améliorer continuellement.',
      section2Title: '2. Mesures organisationnelles',
      section2Text: 'Nous avons établi un système de gestion de la sécurité de l\'information avec des responsabilités et des autorités claires.',
      section2Items: ['Nomination d\'un responsable de la sécurité de l\'information', 'Formation régulière à la sécurité', 'Système de réponse aux incidents'],
      section3Title: '3. Mesures techniques',
      section3Text: 'Nous mettons en œuvre des mesures de sécurité techniques pour prévenir l\'accès non autorisé et les fuites d\'information vers les systèmes d\'information.',
      section3Items: ['Contrôle d\'accès', 'Chiffrement', 'Surveillance des journaux', 'Gestion des vulnérabilités'],
      section4Title: '4. Mesures physiques',
      section4Text: 'Nous mettons en œuvre des mesures de sécurité physique pour les bureaux et les systèmes d\'information afin de protéger les actifs informationnels.',
      section5Title: '5. Contact',
      section5Text: 'Pour les demandes concernant la sécurité de l\'information, veuillez nous contacter à:',
      contactEmail: 'Email: security@umezoo.co.jp'
    },
    // News Page
    news: {
      pageTitle: 'News',
      pageSubtitle: 'Actualités',
      categoryInfo: 'Information',
      categoryCompany: 'Entreprise',
      news1Title: 'Site Web Renouvelé',
      news1Text: 'Nous avons renouvelé le site web officiel d\'UMEZOO. Merci de votre soutien continu.',
      news2Title: 'Voeux du Nouvel An',
      news2Text: 'Bonne Année. Nous espérons votre soutien continu à UMEZOO cette année.',
      news3Title: 'UMEZOO Inc. Créée',
      news3Text: 'UMEZOO Inc. a été créée en tant que ferme créative alimentaire. Nous continuerons à offrir des expériences alimentaires créatives.'
    }
  }
};

// Current language
let currentLang = 'ja';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language from localStorage or browser preference
  const savedLang = localStorage.getItem('umezoo-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }

  // Initialize components
  initSplash();
  initHeroBackground();
  initPageHeroBackground();
  initHeader();
  initMobileMenu();
  initLanguageSwitcher();
  initAnimations();
  initContactForm();

  // Apply translations
  applyTranslations();
});

// Splash screen
function initSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  // ロゴがふわっと出てきた後、2.5秒後にスプラッシュを非表示
  setTimeout(() => {
    splash.classList.add('is-hidden');
  }, 2500);
}

// Hero images array (shared between main hero and page heroes)
const heroImages = [
  'images/hero/hero-1.jpg',
  'images/hero/hero-2.jpg',
  'images/hero/hero-3.jpg',
  'images/hero/hero-4.jpg',
  'images/hero/hero-5.jpg',
  'images/hero/hero-6.jpg',
  'images/hero/hero-7.jpg',
  'images/hero/hero-8.jpg',
  'images/hero/hero-9.jpg',
  'images/hero/1768332177874.jpg',
  'images/hero/1768332287121.jpg',
  'images/hero/1768332314082.jpg',
  'images/hero/1768332359561.jpg',
  'images/hero/1768332385350.jpg',
  'images/hero/1768332415046.jpg',
  'images/hero/1768332447130.jpg',
  'images/hero/1768332476156.jpg',
  'images/hero/1768332498041.jpg',
  'images/hero/1768332521861.jpg',
  'images/hero/1768332543110.jpg',
  'images/hero/1768332571132.jpg',
  'images/hero/1768332589937.jpg',
  'images/hero/1768332610859.jpg',
  'images/hero/1768332676035.jpg',
  'images/hero/1768332703871.jpg'
];

// Hero background random image (for index.html)
function initHeroBackground() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;

  const randomIndex = Math.floor(Math.random() * heroImages.length);
  heroBg.style.backgroundImage = `url('${heroImages[randomIndex]}')`;
}

// Page hero background random image (for other pages)
function initPageHeroBackground() {
  const pageHeroBg = document.getElementById('page-hero-bg');
  if (!pageHeroBg) return;

  const randomIndex = Math.floor(Math.random() * heroImages.length);
  pageHeroBg.style.backgroundImage = `url('${heroImages[randomIndex]}')`;
}

// Header scroll effect
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

// Mobile menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });

  // Close menu when clicking on links
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('is-open');
      nav.classList.remove('is-open');
    });
  });
}

// Language switcher
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-switcher__btn');

  langButtons.forEach(btn => {
    // Set active state
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('lang-switcher__btn--active');
    }

    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      // Update active state
      langButtons.forEach(b => b.classList.remove('lang-switcher__btn--active'));
      btn.classList.add('lang-switcher__btn--active');

      // Update language
      currentLang = lang;
      localStorage.setItem('umezoo-lang', lang);

      // Apply translations
      applyTranslations();
    });
  });
}

// Apply translations to page
function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = getNestedValue(t, key);
    if (value) {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const value = getNestedValue(t, key);
    if (value) {
      el.placeholder = value;
    }
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;
}

// Get nested object value by dot notation
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Scroll animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Existing animations for feature cards, work cards, etc.
  document.querySelectorAll('.feature-card, .work-card, .service-item, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Fade-in-up animations for About page and other sections
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
}

// Add animation styles when visible
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});

// Contact form handling
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert(currentLang === 'ja' ? '必須項目を入力してください。' :
            currentLang === 'fr' ? 'Veuillez remplir les champs obligatoires.' :
            'Please fill in required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert(currentLang === 'ja' ? '有効なメールアドレスを入力してください。' :
            currentLang === 'fr' ? 'Veuillez entrer une adresse email valide.' :
            'Please enter a valid email address.');
      return;
    }

    // Show success message (in real implementation, this would send to server)
    alert(currentLang === 'ja' ? 'お問い合わせを受け付けました。' :
          currentLang === 'fr' ? 'Votre message a été envoyé.' :
          'Your message has been sent.');
    form.reset();
  });
}
