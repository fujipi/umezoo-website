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
      workstyleTitle: 'UMEZOOの働き方',
      workstyleSubtitle: 'Working Style',
      workstyleIntro1: 'UMEZOOの「働き方」は固定ではなく、事業・チーム・フェーズに合わせてベストを更新し続ける運用です。オフィスで生まれるコラボレーション（試食・試作・製造・撮影・ワークショップ等）と、リモートが生む集中と効率を掛け合わせ、個と組織のアウトプットを最大化します。',
      workstyleIntro2: '私たちは「食体験をデザインする」会社です。商品/店舗/空間から、SNS・映像・Webまで含めて一気通貫で作るため、働き方もクリエイティブ制作会社と事業会社のハイブリッドになります。',
      workLocationTitle: '働く場所',
      offlineWorkTitle: 'オフライン推奨の仕事',
      offlineWorkText: 'UMEZOOは「食」を扱う以上、オフラインでしか品質が決まらない瞬間があります。',
      remoteWorkTitle: 'リモート推奨の仕事',
      remoteWorkText: '以下はリモートの方が生産性が出やすい業務です。',
      remoteWorkNote: '目安の運用：チーム/案件単位で「今週は現場比率高め」「今週は制作集中」など、成果が最大化する配置を合意して動きます。',
      workHoursTitle: '働く時間',
      workHoursText: 'UMEZOOは、成果と品質に責任を持つプロフェッショナルとして、個々の事情と役割に応じた柔軟性を重視します（職種・契約形態により例外あり）。',
      workProcessTitle: '仕事の進め方 ― "Seamless"な仕組み',
      workProcessText: 'UMEZOOの価値は、企画→制作→運用を切らずに繋げる「Seamless」です。プロジェクトでは最低限これを徹底します。',
      positionsTitle: '募集職種',
      positionsSubtitle: 'Open Positions',
      benefitsTitle: '福利厚生・共通条件',
      benefitsSubtitle: 'Benefits & Conditions',
      benefitLocationLabel: '勤務地',
      benefitLocationValue: '東京都千代田区東神田（馬喰町駅 徒歩2分）',
      benefitWorkStyleLabel: '勤務形態',
      benefitWorkStyleValue: 'フレックスタイム制（コアタイムあり）\n出社・リモートの比率は職種・役割に応じて設定し、オファー時に提示',
      benefitEmploymentLabel: '雇用形態',
      benefitEmploymentValue: '正社員（試用期間6ヶ月 ※期間中の待遇に差異なし）',
      benefitSalaryLabel: '給与',
      benefitSalaryValue: '年俸制（固定残業代含む、超過分は別途支給）\n職種・経験に応じて設定、詳細は各募集要項に記載',
      benefitBonusLabel: '賞与・昇給',
      benefitBonusValue: '成果連動型インセンティブあり、昇給年1回',
      benefitLeaveLabel: '休日・休暇',
      benefitLeaveValue: '完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇',
      benefitInsuranceLabel: '社会保険',
      benefitInsuranceValue: '完備（健康保険・厚生年金・雇用保険・労災保険）',
      benefitPerksLabel: '諸手当・福利厚生',
      benefitPerksValue: '通勤手当（月額2万円まで）、リモートワーク補助、試食・まかない、試作品持ち帰り、食体験イベントへの参加機会',
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
      workstyleTitle: 'How We Work at UMEZOO',
      workstyleSubtitle: 'Working Style',
      workstyleIntro1: 'At UMEZOO, our work style is not fixed — we continuously update best practices to match the business, team, and phase. We maximize output by combining the collaboration born in our office (tasting, prototyping, production, photography, workshops) with the focus and efficiency that remote work enables.',
      workstyleIntro2: 'We are a company that "designs food experiences." Because we create everything seamlessly — from products, stores, and spaces to SNS, video, and web — our work style is a hybrid of a creative production company and a business company.',
      workLocationTitle: 'Work Location',
      offlineWorkTitle: 'Offline-Recommended Work',
      offlineWorkText: 'Since UMEZOO deals with "food," there are moments when quality can only be determined in person.',
      remoteWorkTitle: 'Remote-Recommended Work',
      remoteWorkText: 'The following tasks tend to be more productive when done remotely.',
      remoteWorkNote: 'Guideline: Teams agree on the optimal balance per project — "more on-site this week" or "focused on production this week" — to maximize results.',
      workHoursTitle: 'Working Hours',
      workHoursText: 'UMEZOO values flexibility based on individual circumstances and roles, as professionals responsible for outcomes and quality (exceptions may apply by position and contract type).',
      workProcessTitle: 'How We Work — A "Seamless" System',
      workProcessText: 'UMEZOO\'s value lies in "Seamless" — connecting planning, production, and operations without breaks. We ensure at minimum the following in every project.',
      positionsTitle: 'Open Positions',
      positionsSubtitle: 'Job Listings',
      benefitsTitle: 'Benefits & Common Conditions',
      benefitsSubtitle: 'Benefits & Conditions',
      benefitLocationLabel: 'Location',
      benefitLocationValue: 'Higashi-Kanda, Chiyoda-ku, Tokyo (2 min walk from Bakurocho Station)',
      benefitWorkStyleLabel: 'Work Style',
      benefitWorkStyleValue: 'Flextime system (with core hours)\nOn-site/remote ratio set by role, presented at offer',
      benefitEmploymentLabel: 'Employment',
      benefitEmploymentValue: 'Full-time (6-month probation period, no difference in conditions)',
      benefitSalaryLabel: 'Salary',
      benefitSalaryValue: 'Annual salary system (includes fixed overtime pay, excess paid separately)\nSet according to role and experience, details in each job listing',
      benefitBonusLabel: 'Bonus & Raises',
      benefitBonusValue: 'Performance-based incentives, annual salary review',
      benefitLeaveLabel: 'Holidays',
      benefitLeaveValue: 'Full 2-day weekends, annual paid leave, special occasion leave, year-end/New Year holidays',
      benefitInsuranceLabel: 'Insurance',
      benefitInsuranceValue: 'Full coverage (health, pension, employment, workers\' compensation)',
      benefitPerksLabel: 'Benefits & Perks',
      benefitPerksValue: 'Commuting allowance (up to ¥20,000/month), remote work support, food tasting & meals, take-home prototypes, food experience event participation',
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
      workstyleTitle: 'Notre façon de travailler',
      workstyleSubtitle: 'Working Style',
      workstyleIntro1: 'Chez UMEZOO, notre mode de travail n\'est pas figé — nous actualisons continuellement nos pratiques pour nous adapter au business, à l\'équipe et à la phase du projet. Nous maximisons les résultats en combinant la collaboration née au bureau (dégustation, prototypage, production, photographie, ateliers) avec la concentration et l\'efficacité du travail à distance.',
      workstyleIntro2: 'Nous sommes une entreprise qui « conçoit des expériences alimentaires ». Parce que nous créons tout de manière fluide — des produits, magasins et espaces aux réseaux sociaux, vidéos et web — notre mode de travail est un hybride entre une société de production créative et une entreprise.',
      workLocationTitle: 'Lieu de travail',
      offlineWorkTitle: 'Travail recommandé en présentiel',
      offlineWorkText: 'Puisque UMEZOO travaille avec la « nourriture », certains moments de qualité ne peuvent être déterminés qu\'en personne.',
      remoteWorkTitle: 'Travail recommandé à distance',
      remoteWorkText: 'Les tâches suivantes tendent à être plus productives en télétravail.',
      remoteWorkNote: 'Principe directeur : les équipes s\'accordent sur l\'équilibre optimal par projet — « plus de présentiel cette semaine » ou « concentration sur la production cette semaine » — pour maximiser les résultats.',
      workHoursTitle: 'Horaires de travail',
      workHoursText: 'UMEZOO valorise la flexibilité selon les circonstances individuelles et les rôles, en tant que professionnels responsables des résultats et de la qualité (des exceptions peuvent s\'appliquer selon le poste et le type de contrat).',
      workProcessTitle: 'Notre méthode — Un système "Seamless"',
      workProcessText: 'La valeur d\'UMEZOO réside dans le « Seamless » — connecter planification, production et opérations sans rupture. Nous garantissons au minimum ce qui suit dans chaque projet.',
      positionsTitle: 'Postes ouverts',
      positionsSubtitle: 'Offres d\'emploi',
      benefitsTitle: 'Avantages & Conditions communes',
      benefitsSubtitle: 'Benefits & Conditions',
      benefitLocationLabel: 'Lieu',
      benefitLocationValue: 'Higashi-Kanda, Chiyoda-ku, Tokyo (2 min à pied de la gare Bakurocho)',
      benefitWorkStyleLabel: 'Mode de travail',
      benefitWorkStyleValue: 'Horaires flexibles (avec heures de base)\nRatio présentiel/télétravail défini par rôle, présenté lors de l\'offre',
      benefitEmploymentLabel: 'Type d\'emploi',
      benefitEmploymentValue: 'CDI (période d\'essai de 6 mois, conditions identiques)',
      benefitSalaryLabel: 'Salaire',
      benefitSalaryValue: 'Système de salaire annuel (heures supplémentaires fixes incluses, excédent payé séparément)\nDéfini selon le poste et l\'expérience, détails dans chaque offre',
      benefitBonusLabel: 'Primes & Augmentations',
      benefitBonusValue: 'Incentives basés sur la performance, révision salariale annuelle',
      benefitLeaveLabel: 'Congés',
      benefitLeaveValue: 'Week-ends complets de 2 jours, congés payés annuels, congés spéciaux, vacances de fin d\'année',
      benefitInsuranceLabel: 'Assurance',
      benefitInsuranceValue: 'Couverture complète (santé, retraite, emploi, accidents du travail)',
      benefitPerksLabel: 'Avantages',
      benefitPerksValue: 'Indemnité de transport (jusqu\'à ¥20 000/mois), aide au télétravail, dégustations et repas, prototypes à emporter, participation aux événements culinaires',
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
  initNewsModal();
  initCareerModal();
  initNoteArticles();

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
  document.querySelectorAll('.feature-card, .work-card, .service-item, .value-card, .workstyle-item').forEach(el => {
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

// News data for modal
const newsData = {
  1: {
    tag: 'プレスリリース',
    date: '2024.03.15',
    title: 'UMEZOO株式会社を設立しました',
    image: 'images/news/company-founding.jpg',
    body: `<p>2024年3月15日、UMEZOO株式会社を設立いたしました。</p>
<p>UMEZOOは「創造的な食体験を、事業活動に浸透させる」をミッションに掲げるフードクリエイティブファームです。フードビジネスディレクションとコンテンツデリバリーを軸に、商品、店舗、製造施設、SNS、映像、BGM、Web、空間演出、内装デザインなど、お客様に提供するあらゆる食体験を、クリエイティビティで特別なものに昇華することを生業としております。</p>
<p>代表を務める梅津信吾は、フランス留学中に料理人としてのキャリアをスタートし、国内外の名店で研鑽を積んできました。2021年には国内最大級のシェフコンペティション「RED U-35」にてシルバーエッグを受賞。料理の技術だけでなく、食を取り巻く体験すべてをクリエイティブの視点で捉え直すことの重要性を感じ、この度の会社設立に至りました。</p>
<p>「食べる」という行為を超えて、記憶に残る食体験をデザインすることをミッションに掲げ、フードビジネスの新しい可能性を追求してまいります。</p>
<p>今後ともUMEZOOをよろしくお願いいたします。</p>`
  },
  2: {
    tag: 'お知らせ',
    date: '2024.03.20',
    title: '公式ウェブサイトを公開しました',
    image: 'images/news/website-launch.jpg',
    body: `<p>本日、UMEZOO株式会社の公式ウェブサイトを公開いたしました。</p>
<p>当サイトでは、UMEZOOが提供するサービスの詳細、これまでの実績、そして私たちが大切にしている価値観をご覧いただけます。</p>
<p><strong>ウェブサイトのコンテンツ</strong></p>
<p>・About：UMEZOOの理念と代表・梅津信吾のプロフィール<br>
・Work：高畠ワイナリー、YAMAGATA FUSION、三井不動産&mogなど、これまでの実績<br>
・Service：フードビジネスディレクション、コンテンツデリバリー、クリエイティブデザインなどのサービス紹介<br>
・Career：採用情報<br>
・News：最新のお知らせ<br>
・Contact：お問い合わせフォーム</p>
<p>多言語対応（日本語・英語・フランス語）にも対応しており、海外のお客様にもUMEZOOの活動をお伝えできるようになっております。</p>
<p>プロジェクトのご相談、業務提携のお問い合わせなど、お気軽にご連絡ください。</p>`
  },
  3: {
    tag: 'Journey',
    date: '2024.03.25',
    title: '代表・梅津信吾が語る「食とクリエイティブの未来」',
    image: 'images/news/founder-message.jpg',
    body: `<p>UMEZOO株式会社の設立にあたり、代表・梅津信吾が会社設立の背景と、フードクリエイティブが切り拓く新しい食体験について語りました。</p>
<p><strong>なぜフードクリエイティブファームを立ち上げたのか</strong></p>
<p>「料理人として様々な経験を積む中で、食の価値は"味"だけではないと強く感じるようになりました。お皿に盛られた料理だけでなく、空間、音楽、サービス、そしてストーリー。これらすべてが一体となって初めて、人の心に残る食体験が生まれます。</p>
<p>UMEZOOは、この"食体験全体"をデザインする会社です。レシピ開発や店舗プロデュースはもちろん、映像制作やBGM、Webサイト、SNSコンテンツまで、食に関わるあらゆるクリエイティブを一貫して手がけます。」</p>
<p><strong>大切にしている価値観</strong></p>
<p>「私たちが大切にしているのは、Creativity（創造性）、Seamless（シームレスな連携）、Fairness（公正さ）、Impact（成果）の4つです。特にFairnessは、生産者から消費者まで、食に関わるすべての人に対してフェアで共創的であることを意味しています。</p>
<p>食は人々の暮らしに深く根ざしたものです。だからこそ、ビジネスとして成功するだけでなく、関わるすべての人が幸せになれる形を追求したいと考えています。」</p>
<p><strong>今後の展望</strong></p>
<p>「UMEZOOとして、食の可能性をさらに広げていきたいと考えています。国内だけでなく海外の案件にも積極的に取り組み、日本の食文化の素晴らしさを世界に発信していく。そんな架け橋になれたら嬉しいです。」</p>`
  },
  4: {
    tag: 'プロジェクト',
    date: '2024.09.14',
    title: '「YAMAGATA FUSION」を開催しました',
    image: 'images/work/yamagata-fusion.jpg',
    body: `<p>2024年9月14日、東京にて「YAMAGATA FUSION」を開催いたしました。</p>
<p>本イベントは、山形県が誇る食材とワインを融合させた新たな食体験を発信するコラボイベントです。高畠ワイナリー様のご協力のもと、CLUB REDメンバーとして企画・運営を担当させていただきました。</p>
<p><strong>イベント概要</strong></p>
<p>・日時：2024年9月14日（土）<br>
・会場：東京都内<br>
・内容：山形の食材を活かしたコース料理と高畠ワインのペアリング体験</p>
<p><strong>山形の食材とワインの融合</strong></p>
<p>山形県は、米沢牛、だだちゃ豆、ラ・フランスなど豊かな食材の宝庫です。また、高畠ワイナリーは日本を代表するワイナリーの一つとして知られています。</p>
<p>今回のイベントでは、山形から届いた旬の食材を活かした創作料理と、それに合わせた高畠ワインのペアリングを提案。東京にいながら山形の「テロワール」を五感で体験していただきました。</p>
<p>ご参加いただいた皆様、そしてご協力いただいた高畠ワイナリーの皆様に、心より感謝申し上げます。</p>
<p><a href="https://www.redu35.jp/clubred/report/11301/" target="_blank" rel="noopener noreferrer">イベントレポートはこちら →</a></p>`
  },
  5: {
    tag: 'プロジェクト',
    date: '2024.05.10',
    title: '三井不動産「&mog」にてワークショップを共催',
    image: 'images/work/andmog.jpg',
    body: `<p>2024年5月、三井不動産様が運営する飲食事業者の共創プラットフォーム「&mog（アンドモグ）」にて、クリエイティブ制作ワークショップを共催いたしました。</p>
<p><strong>&mogとは</strong></p>
<p>&mogは、三井不動産様が展開する飲食事業者向けの共創プラットフォームです。飲食店経営者、食品メーカー、クリエイターなど、食に関わる様々なプレイヤーが集い、新しいビジネスの創出を目指しています。</p>
<p><strong>ワークショップの内容</strong></p>
<p>今回のワークショップでは、消費者向け食品のプロモーションにおけるクリエイティブ制作をテーマに、以下の内容を実施しました：</p>
<p>・食品ブランディングの基礎<br>
・SNSコンテンツの企画・制作手法<br>
・写真・動画撮影のポイント<br>
・効果的なストーリーテリング</p>
<p><strong>参加者との共創</strong></p>
<p>参加いただいた飲食事業者の皆様と共に、各社の商品やサービスをより魅力的に伝えるためのクリエイティブアイデアを議論。実践的なワークを通じて、すぐに活用できるスキルとナレッジを共有しました。</p>
<p>UMEZOOは今後も、食に関わる事業者の皆様とのコラボレーションを通じて、フードビジネスの発展に貢献してまいります。</p>
<p><a href="https://www.and-mog.com/assets/data/magazine-20240510_ja.pdf" target="_blank" rel="noopener noreferrer">詳細資料はこちら →</a></p>`
  },
  6: {
    tag: 'プロジェクト',
    date: '2025.06（予定）',
    title: '福島県大熊町「Fun Eat Makers」プロジェクトに参画',
    image: 'images/work/fun-eat-makers.jpg',
    body: `<p>UMEZOOは、福島県大熊町で進行中の農業再生プロジェクト「Fun Eat Makers in Okuma」に参画しております。<strong>2025年6月ローンチ予定</strong>です。</p>
<p><strong>プロジェクトの背景</strong></p>
<p>福島県大熊町は、東日本大震災および原発事故からの復興を進める中で、新たな産業の創出と地域の活性化に取り組んでいます。「Fun Eat Makers」は、農業と食を軸にした復興プロジェクトとして、地域に新しい価値を生み出すことを目指しています。</p>
<p><strong>「つくる・たべる・つながる」</strong></p>
<p>本プロジェクトは「つくる・たべる・つながる」をコンセプトに掲げ、以下の取り組みを推進しています：</p>
<p>・<strong>つくる</strong>：地元での農産物生産の再開と新しい栽培技術の導入<br>
・<strong>たべる</strong>：地元食材を活かした料理開発と食体験の提供<br>
・<strong>つながる</strong>：生産者・料理人・消費者をつなぐコミュニティの形成</p>
<p><strong>UMEZOOの役割</strong></p>
<p>UMEZOOは本プロジェクトにおいて、食体験のクリエイティブディレクションを担当。地元で生産された食材を活用したメニュー開発、イベント企画、情報発信などを通じて、大熊町の食の魅力を広く伝える活動を行っています。</p>
<p>食を通じた地域復興に、クリエイティブの力で貢献してまいります。</p>
<p><a href="https://www.cri.co.jp/news/005713.html" target="_blank" rel="noopener noreferrer">プロジェクト詳細はこちら →</a></p>`
  }
};

// News modal functionality
function initNewsModal() {
  const modal = document.getElementById('newsModal');
  if (!modal) return;

  const newsCards = document.querySelectorAll('.news-card');
  const overlay = modal.querySelector('.news-modal__overlay');
  const closeBtn = modal.querySelector('.news-modal__close');
  const modalTag = modal.querySelector('.news-modal__tag');
  const modalDate = modal.querySelector('.news-modal__date');
  const modalTitle = modal.querySelector('.news-modal__title');
  const modalImage = modal.querySelector('.news-modal__image');
  const modalBody = modal.querySelector('.news-modal__body');

  // Open modal when clicking on news card
  newsCards.forEach(card => {
    card.addEventListener('click', () => {
      const newsId = card.dataset.newsId;
      const news = newsData[newsId];

      if (news) {
        modalTag.textContent = news.tag;
        modalDate.textContent = news.date;
        modalTitle.textContent = news.title;
        modalImage.style.backgroundImage = `url('${news.image}')`;
        modalBody.innerHTML = news.body;

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal functions
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

// Job data for career modal
const jobData = {
  1: {
    title: 'ビジネスディレクター',
    type: '正社員',
    location: 'Tokyo',
    role: 'クライアントの事業課題を深く理解し、多様なサービスを組み合わせたソリューションを設計・推進する責任者',
    body: `
      <h3>主な業務内容</h3>
      <ul>
        <li>クライアントの経営者・事業責任者との対話を通じた課題のヒアリングと分析</li>
        <li>課題解決に向けた包括的なサービスプランの設計と提案</li>
        <li>プロジェクト全体のディレクションおよび社内外のリソース調整</li>
        <li>クライアントとの継続的なリレーション構築と追加提案</li>
      </ul>
      <h3>求める経験・スキル</h3>
      <ul>
        <li>事業会社またはコンサルティングファームでの事業企画・経営企画経験</li>
        <li>複数ステークホルダーを巻き込んだプロジェクトマネジメント経験</li>
        <li>経営レベルとの折衝およびプレゼンテーション経験</li>
        <li>食・クリエイティブ領域への強い関心</li>
      </ul>
      <h3>求める人物像</h3>
      <ul>
        <li>クライアントの課題を自分ごととして捉え、最後まで責任を持てる方</li>
        <li>多様な専門家と協働し、チームとして成果を出すことに喜びを感じる方</li>
        <li>未経験領域でも積極的に学び、自ら動ける方</li>
      </ul>
      <h3>待遇</h3>
      <p>詳細はオファー時にご提示します。共通条件は本ページ下部「福利厚生・共通条件」をご確認ください。</p>
    `
  },
  2: {
    title: 'セールス',
    type: '正社員 / 業務委託',
    location: 'ハイブリッド',
    role: 'UMEZOOのサービスを必要とする企業を開拓し、継続的な取引関係を構築する営業担当',
    body: `
      <h3>主な業務内容</h3>
      <ul>
        <li>ターゲット企業のリサーチとアプローチリスト作成</li>
        <li>新規顧客へのアウトバウンド営業（電話・メール・SNS等）</li>
        <li>商談設定および初回ヒアリングの実施</li>
        <li>提案資料の作成支援と契約クロージング</li>
        <li>CRMを活用した顧客管理とパイプライン可視化</li>
      </ul>
      <h3>求める経験・スキル</h3>
      <ul>
        <li>法人向け新規営業経験（業界不問）</li>
        <li>目標達成意欲が高く、PDCAを自ら回せる方</li>
        <li>基本的なPCスキル（スプレッドシート、プレゼン資料作成）</li>
      </ul>
      <h3>求める人物像</h3>
      <ul>
        <li>フットワーク軽く、スピード感を持って行動できる方</li>
        <li>断られても粘り強くアプローチを続けられる方</li>
        <li>食やクリエイティブ業界への興味がある方</li>
      </ul>
      <h3>待遇</h3>
      <p>詳細はオファー時にご提示します。共通条件は本ページ下部「福利厚生・共通条件」をご確認ください。</p>
    `
  },
  3: {
    title: 'フードプランナー',
    type: '正社員 / 業務委託',
    location: 'ハイブリッド',
    role: 'レシピ開発・商品開発・メニュー設計など、フード領域の成果物を高い品質で納品する実務担当者',
    body: `
      <h3>主な業務内容</h3>
      <ul>
        <li>クライアント要件に基づいたレシピ・メニューの開発</li>
        <li>試作・試食会の実施とフィードバック反映</li>
        <li>原価計算、栄養計算、商品仕様書の作成</li>
        <li>製造工程の設計と外部パートナー（OEM工場等）との連携</li>
      </ul>
      <h3>求める経験・スキル</h3>
      <ul>
        <li>飲食店・ホテル・食品メーカー等でのレシピ開発またはメニュー開発経験</li>
        <li>調理師免許または栄養士資格（尚可）</li>
        <li>食材・調味料・調理法に関する幅広い知識</li>
      </ul>
      <h3>求める人物像</h3>
      <ul>
        <li>美味しさと再現性を両立できる方</li>
        <li>細部までこだわり、品質に妥協しない方</li>
        <li>トレンドに敏感で、新しい食体験を探求し続ける方</li>
      </ul>
      <h3>待遇</h3>
      <p>詳細はオファー時にご提示します。共通条件は本ページ下部「福利厚生・共通条件」をご確認ください。</p>
    `
  },
  4: {
    title: 'フードコンサルタント',
    type: '正社員 / 業務委託',
    location: 'Tokyo',
    role: '市場分析・戦略立案・事業計画策定などの事業関連成果物を提供するコンサルタント',
    body: `
      <h3>主な業務内容</h3>
      <ul>
        <li>市場調査（定量・定性）と競合分析の実施</li>
        <li>事業計画書・ビジネスモデルの策定支援</li>
        <li>ブランドコンセプト・ポジショニングの設計</li>
        <li>クライアントへのプレゼンテーションと報告書作成</li>
      </ul>
      <h3>求める経験・スキル</h3>
      <ul>
        <li>コンサルティングファームまたは事業会社での戦略立案経験</li>
        <li>食品・飲食業界の知識（尚可）</li>
        <li>リサーチスキルおよび論理的な資料作成能力</li>
        <li>Excel/PowerPoint等を用いた分析・資料作成スキル</li>
      </ul>
      <h3>求める人物像</h3>
      <ul>
        <li>データと仮説を行き来しながら戦略を構築できる方</li>
        <li>クライアントの意思決定を後押しする説得力のあるアウトプットを出せる方</li>
        <li>食産業の未来に興味を持ち、業界課題を自分ごと化できる方</li>
      </ul>
      <h3>待遇</h3>
      <p>詳細はオファー時にご提示します。共通条件は本ページ下部「福利厚生・共通条件」をご確認ください。</p>
    `
  },
  5: {
    title: '人材採用スタッフ',
    type: '正社員 / 業務委託',
    location: 'ハイブリッド',
    role: '採用計画の立案から母集団形成、選考運営、入社後フォローまで、採用プロセス全体を推進',
    body: `
      <h3>主な業務内容</h3>
      <ul>
        <li>採用計画の策定と採用チャネルの選定</li>
        <li>求人票の作成、媒体運用、スカウト送信</li>
        <li>応募者対応、面接日程調整、選考フローの運営</li>
        <li>内定者フォローおよびオンボーディング支援</li>
        <li>採用ブランディング施策の企画・実行</li>
      </ul>
      <h3>求める経験・スキル</h3>
      <ul>
        <li>人事・採用担当としての実務経験</li>
        <li>採用媒体、ダイレクトリクルーティングの運用経験</li>
        <li>基本的なPCスキルと丁寧なコミュニケーション能力</li>
      </ul>
      <h3>求める人物像</h3>
      <ul>
        <li>候補者一人ひとりに真摯に向き合える方</li>
        <li>会社のカルチャーを理解し、自ら発信できる方</li>
        <li>スタートアップのスピード感を楽しめる方</li>
      </ul>
      <h3>待遇</h3>
      <p>詳細はオファー時にご提示します。共通条件は本ページ下部「福利厚生・共通条件」をご確認ください。</p>
    `
  },
  6: {
    title: 'コンシューマー向け新規事業責任者',
    type: '正社員',
    location: 'Tokyo',
    role: '一般消費者向けの新規事業を立ち上げ、成長させる責任者（部長レベル）',
    body: `
      <h3>主な業務内容</h3>
      <ul>
        <li>新規事業のアイデア創出、市場検証（MVP構築）</li>
        <li>事業計画の策定とKPI設計</li>
        <li>チーム組成とマネジメント</li>
        <li>プロダクト開発、マーケティング、オペレーション全般の推進</li>
        <li>経営陣への進捗報告と意思決定サポート</li>
      </ul>
      <h3>求める経験・スキル</h3>
      <ul>
        <li>新規事業立ち上げまたは事業責任者としての経験</li>
        <li>P/L管理、チームマネジメントの経験</li>
        <li>食品・飲食・消費財領域でのビジネス経験（尚可）</li>
        <li>不確実性の高い環境で意思決定し、推進できる能力</li>
      </ul>
      <h3>求める人物像</h3>
      <ul>
        <li>ゼロイチを楽しみ、自ら手を動かせる方</li>
        <li>事業成長に対するオーナーシップを持てる方</li>
        <li>失敗を恐れず、高速でPDCAを回せる方</li>
      </ul>
      <h3>待遇</h3>
      <p>詳細はオファー時にご提示します。共通条件は本ページ下部「福利厚生・共通条件」をご確認ください。</p>
    `
  }
};

// Career modal functionality
function initCareerModal() {
  const modal = document.getElementById('careerModal');
  if (!modal) return;

  const positionCards = document.querySelectorAll('.position-card');
  const overlay = modal.querySelector('.career-modal__overlay');
  const closeBtn = modal.querySelector('.career-modal__close');
  const modalType = modal.querySelector('.career-modal__type');
  const modalLocation = modal.querySelector('.career-modal__location');
  const modalTitle = modal.querySelector('.career-modal__title');
  const modalRole = modal.querySelector('.career-modal__role');
  const modalBody = modal.querySelector('.career-modal__body');

  // Open modal when clicking on position card
  positionCards.forEach(card => {
    card.addEventListener('click', () => {
      const jobId = card.dataset.jobId;
      const job = jobData[jobId];

      if (job) {
        modalType.textContent = job.type;
        modalLocation.textContent = job.location;
        modalTitle.textContent = job.title;
        modalRole.textContent = job.role;
        modalBody.innerHTML = job.body;

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal functions
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

// News categories for filtering
const NEWS_CATEGORIES = ['すべて', 'Journey', 'プレスリリース', 'プロジェクト', 'レポート', 'お知らせ'];

// Load note articles and integrate with news grid
async function initNoteArticles() {
  const newsGrid = document.querySelector('.news-grid');
  if (!newsGrid) return;

  try {
    const response = await fetch('data/note-articles.json');
    if (!response.ok) {
      console.log('Note articles data not found');
      initNewsFilter(); // Initialize filter even without note articles
      return;
    }

    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      // Add note articles to the news grid
      const noteCardsHTML = data.articles.map(article => `
        <article class="news-card news-card--external" data-tag="${article.tag}" data-date="${article.date}" onclick="window.open('${article.link}', '_blank')">
          <div class="news-card__image" style="background-image: url('${article.image || 'images/news/default-note.jpg'}');">
            <span class="news-card__image-placeholder">${article.title.substring(0, 20)}...</span>
          </div>
          <div class="news-card__content">
            <div class="news-card__meta">
              <span class="news-card__tag">${article.tag}</span>
              <time class="news-card__date">${article.date}</time>
            </div>
            <h3 class="news-card__title">${article.title}</h3>
            <p class="news-card__summary">${article.summary}</p>
            <span class="news-card__external-link">noteで読む →</span>
          </div>
        </article>
      `).join('');

      // Insert note articles at the beginning of the grid
      newsGrid.insertAdjacentHTML('afterbegin', noteCardsHTML);
      console.log(`Loaded ${data.articles.length} note articles`);
    }

    // Initialize filter after adding note articles
    initNewsFilter();

  } catch (error) {
    console.log('Error loading note articles:', error);
    initNewsFilter(); // Initialize filter even on error
  }
}

// News filter functionality
function initNewsFilter() {
  const newsGrid = document.querySelector('.news-grid');
  const filterContainer = document.querySelector('.news-filter');
  if (!newsGrid || !filterContainer) return;

  const filterButtons = filterContainer.querySelectorAll('.news-filter__btn');
  const newsCards = newsGrid.querySelectorAll('.news-card');

  // Add data-tag to existing news cards that don't have it
  newsCards.forEach(card => {
    if (!card.dataset.tag) {
      const tagEl = card.querySelector('.news-card__tag');
      if (tagEl) {
        card.dataset.tag = tagEl.textContent.trim();
      }
    }
  });

  // Sort all cards by date (newest first)
  sortNewsByDate();

  // Filter button click handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      // Update active state
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Filter cards
      const allCards = newsGrid.querySelectorAll('.news-card');
      allCards.forEach(card => {
        if (category === 'すべて' || card.dataset.tag === category) {
          card.style.display = '';
          card.classList.remove('is-hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// Sort news cards by date
function sortNewsByDate() {
  const newsGrid = document.querySelector('.news-grid');
  if (!newsGrid) return;

  const cards = Array.from(newsGrid.querySelectorAll('.news-card'));

  cards.sort((a, b) => {
    const dateA = parseDateString(a.dataset.date || a.querySelector('.news-card__date')?.textContent || '');
    const dateB = parseDateString(b.dataset.date || b.querySelector('.news-card__date')?.textContent || '');
    return dateB - dateA; // Newest first
  });

  // Re-append in sorted order
  cards.forEach(card => newsGrid.appendChild(card));
}

// Parse date string like "2024.03.15" or "2025.06（予定）"
function parseDateString(dateStr) {
  const match = dateStr.match(/(\d{4})\.(\d{2})(?:\.(\d{2}))?/);
  if (match) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const day = match[3] ? parseInt(match[3]) : 1;
    return new Date(year, month, day);
  }
  return new Date(0);
}
