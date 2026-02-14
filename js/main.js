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
      business1: '食品及び飲料に関する事業、マーケティング、製造のコンサルティング支援',
      business2: '食品及び飲料の企画、開発、販売',
      business3: 'ケータリングサービス業',
      business4: 'インターネット、カタログによる食料品及び食品の通信販売及びその他通信網を利用する情報提供及び処理業務',
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
      pageSubtitle: '3つの領域で、パートナーの事業を動かす',
      createSectionTitle: 'つくる',
      createBody: 'UMEZOOのフードプランナーが、コンセプト設計からレシピ開発、試作、原価計算、OEM先との製造調整、品質管理まで一貫して担当します。納品して終わりではなく、月額パートナーとして商品の改良・拡張を継続的に支えます。',
      create1Title: '新商品企画・レシピ開発', create1Desc: '試作・改良を繰り返し、味と事業性を両立',
      create2Title: '製造管理・OEM調整', create2Desc: '製造仕様書作成、工場との品質・コスト交渉',
      create3Title: '原価計算・利益率設計', create3Desc: '売れる価格帯を逆算した収益設計',
      create4Title: 'メニュー開発・OP設計', create4Desc: '飲食店の調理オペレーションまで最適化',
      create5Title: '食品表示・規格対応', create5Desc: '栄養成分表示、HACCP、賞味期限設定',
      create6Title: 'ペアリング・テイスティング', create6Desc: '日本酒・ワイン等との組み合わせ提案',
      deliverSectionTitle: '届ける',
      deliverBody: 'レシピ開発・料理撮影・フードスタイリングを社内で完結できるUMEZOOだからこそ、食品に最適化されたコンテンツを制作できます。投稿企画から運用・分析・改善まで、月額で伴走します。',
      deliver1Title: 'SNS運用・コンテンツ制作', deliver1Desc: 'Instagram / X / TikTok の企画・投稿・分析',
      deliver2Title: 'レシピコンテンツ企画', deliver2Desc: 'ペアリング・アレンジレシピの開発と撮影',
      deliver3Title: '料理撮影・動画制作', deliver3Desc: 'フードスタイリングから撮影・編集まで内製',
      deliver4Title: 'EC・GA分析・レポーティング', deliver4Desc: 'データに基づく改善提案とKPI管理',
      deliver5Title: 'LINE OA・メルマガ・note', deliver5Desc: 'CRM設計からコンテンツ配信まで一貫運用',
      deliver6Title: 'ブランディング戦略', deliver6Desc: '市場調査・ターゲット分析・ブランド設計',
      expandSectionTitle: '広げる',
      expandBody: 'コンセプト設計から事業計画、物件選定、店舗設計・施工、厨房設計、メニュー開発、オペレーション構築まで。開業後は運営支援として「つくる」「届ける」のサービスと接続し、事業が軌道に乗るまで伴走します。',
      expand1Title: 'コンセプト設計・事業計画', expand1Desc: '市場調査、競合分析、収支シミュレーション',
      expand2Title: '物件選定・店舗設計施工', expand2Desc: '立地分析から内装・設備導入まで',
      expand3Title: '厨房設計・機器選定', expand3Desc: '業態最適化された厨房レイアウトとOP設計',
      expand4Title: 'セントラルキッチン開発', expand4Desc: '製造ライン設計、HACCP対応、品質管理体制',
      expand5Title: '補助金申請支援', expand5Desc: '事業計画に基づく資金調達サポート',
      expand6Title: '開業後の運営支援', expand6Desc: 'メニュー改良・マーケ運用・品質管理の継続伴走',
      ctaTitle: 'まずは、食の課題をお聞かせください。',
      ctaDesc: '貴社の状況に合わせて、最適な関わり方とチーム体制をご提案します。',
      ctaButton: '無料相談を予約する'
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
      workLocationBase: '拠点：',
      workLocationBaseValue: '東京（千代田区東神田）',
      workLocationStyle: '勤務形態：',
      workLocationStyleValue: '職種ごとに設定します（例：セールスはハイブリッドなど）。',
      workDetailButton: 'オフライン / リモート推奨の仕事を見る',
      offlineWorkTitle: 'オフライン推奨の仕事',
      offlineWorkText: 'UMEZOOは「食」を扱う以上、オフラインでしか品質が決まらない瞬間があります。',
      offlineTag1: '試食・試作',
      offlineTag2: '品質チェック',
      offlineTag3: '撮影（フードスタイリング含む）',
      offlineTag4: '体験設計 / ワークショップ',
      offlineTag5: '店舗 / 製造現場での検証',
      offlineTag6: '研究開発',
      remoteWorkTitle: 'リモート推奨の仕事',
      remoteWorkText: '以下はリモートの方が生産性が出やすい業務です。',
      remoteTag1: '提案書 / 企画書 / 事業計画',
      remoteTag2: '編集・台本・構成',
      remoteTag3: '分析（SNS / GA等）',
      remoteTag4: '制作進行',
      remoteTag5: 'ナレッジ整理・手順書整備',
      remoteWorkNote: '目安の運用：チーム/案件単位で「今週は現場比率高め」「今週は制作集中」など、成果が最大化する配置を合意して動きます。',
      workHoursTitle: '働く時間',
      workHoursText: 'UMEZOOは、成果と品質に責任を持つプロフェッショナルとして、個々の事情と役割に応じた柔軟性を重視します（職種・契約形態により例外あり）。',
      workHoursDetail1: 'コラボレーション時間帯（例：日中の一定時間）はチームで揃え、レビュー・意思決定の密度を上げる',
      workHoursDetail2: 'それ以外は、各自が最もパフォーマンスが出る時間帯で集中',
      workFoundationTitle: '働く土台',
      workFoundationText: 'UMEZOOの価値は、企画→制作→運用を切らずに繋げる「Seamless」です。プロジェクトでは最低限これを徹底します。',
      workFoundationKpi: '目的とKPI：',
      workFoundationKpiValue: 'Impact（成果）を先に置く',
      workFoundationQuality: '品質基準：',
      workFoundationQualityValue: 'レシピ/撮影/デザイン/運用の"当たり前水準"を言語化',
      workFoundationRole: '役割と締切：',
      workFoundationRoleValue: '責任の所在を曖昧にしない（属人化を潰す）',
      positionsTitle: '募集職種',
      positionsSubtitle: 'Open Positions',
      benefitsTitle: '福利厚生・共通条件',
      benefitsSubtitle: 'Benefits & Conditions',
      benefitLocationLabel: '勤務地',
      benefitLocationValue: '東京都千代田区東神田（馬喰町駅 徒歩2分）',
      benefitWorkStyleLabel: '勤務形態',
      benefitWorkStyleValue: 'フレックスタイム制（コアタイムあり）\n出社・リモートの比率は職種・役割に応じて設定し、オファー時に提示',
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
      business1: 'Consulting for food & beverage business, marketing, and manufacturing',
      business2: 'Planning, development, and sales of food & beverages',
      business3: 'Catering services',
      business4: 'Online and catalog sales of food products, and information services via telecommunications networks',
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
      pageSubtitle: 'Three domains that drive your partner\'s business',
      createSectionTitle: 'Create',
      createBody: 'UMEZOO\'s food planners handle everything from concept design to recipe development, prototyping, cost calculation, OEM coordination, and quality control. We don\'t just deliver — as a monthly partner, we continuously support product improvement and expansion.',
      create1Title: 'New Product Planning & Recipe Development', create1Desc: 'Iterating prototypes to achieve both taste and business viability',
      create2Title: 'Production Management & OEM Coordination', create2Desc: 'Manufacturing spec sheets, quality and cost negotiations with factories',
      create3Title: 'Cost Analysis & Profit Design', create3Desc: 'Revenue design reverse-calculated from marketable price points',
      create4Title: 'Menu Development & OP Design', create4Desc: 'Optimizing restaurant cooking operations',
      create5Title: 'Food Labeling & Standards Compliance', create5Desc: 'Nutrition labeling, HACCP, shelf-life setting',
      create6Title: 'Pairing & Tasting', create6Desc: 'Pairing suggestions with sake, wine, and more',
      deliverSectionTitle: 'Deliver',
      deliverBody: 'Because UMEZOO can complete recipe development, food photography, and food styling in-house, we create content optimized for food products. From content planning to operations, analysis, and improvement — we partner with you monthly.',
      deliver1Title: 'SNS Management & Content Creation', deliver1Desc: 'Instagram / X / TikTok planning, posting & analytics',
      deliver2Title: 'Recipe Content Planning', deliver2Desc: 'Development and photography of pairing and arrangement recipes',
      deliver3Title: 'Food Photography & Video Production', deliver3Desc: 'From food styling to shooting and editing, all in-house',
      deliver4Title: 'EC & GA Analysis & Reporting', deliver4Desc: 'Data-driven improvement proposals and KPI management',
      deliver5Title: 'LINE OA, Newsletter & note', deliver5Desc: 'End-to-end CRM design and content distribution',
      deliver6Title: 'Branding Strategy', deliver6Desc: 'Market research, target analysis, and brand design',
      expandSectionTitle: 'Expand',
      expandBody: 'From concept design to business planning, site selection, store design and construction, kitchen design, menu development, and operations setup. After opening, we connect with our "Create" and "Deliver" services for ongoing operational support until the business is on track.',
      expand1Title: 'Concept Design & Business Planning', expand1Desc: 'Market research, competitive analysis, P&L simulation',
      expand2Title: 'Site Selection & Store Design', expand2Desc: 'From location analysis to interior and equipment installation',
      expand3Title: 'Kitchen Design & Equipment Selection', expand3Desc: 'Kitchen layouts and OP design optimized for the business format',
      expand4Title: 'Central Kitchen Development', expand4Desc: 'Production line design, HACCP compliance, quality control systems',
      expand5Title: 'Subsidy Application Support', expand5Desc: 'Funding support based on business plans',
      expand6Title: 'Post-Opening Operational Support', expand6Desc: 'Ongoing menu improvement, marketing operations, and quality management',
      ctaTitle: 'Tell us about your food business challenges.',
      ctaDesc: 'We\'ll propose the optimal engagement model and team structure tailored to your situation.',
      ctaButton: 'Book a Free Consultation'
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
      workLocationBase: 'Base: ',
      workLocationBaseValue: 'Tokyo (Higashi-Kanda, Chiyoda-ku)',
      workLocationStyle: 'Work Style: ',
      workLocationStyleValue: 'Set per role (e.g., Sales is hybrid).',
      workDetailButton: 'View Offline / Remote Work Details',
      offlineWorkTitle: 'Offline-Recommended Work',
      offlineWorkText: 'Since UMEZOO deals with "food," there are moments when quality can only be determined in person.',
      offlineTag1: 'Tasting & Prototyping',
      offlineTag2: 'Quality Checks',
      offlineTag3: 'Photography (incl. Food Styling)',
      offlineTag4: 'Experience Design / Workshops',
      offlineTag5: 'Store / Production Site Verification',
      offlineTag6: 'R&D',
      remoteWorkTitle: 'Remote-Recommended Work',
      remoteWorkText: 'The following tasks tend to be more productive when done remotely.',
      remoteTag1: 'Proposals / Plans / Business Plans',
      remoteTag2: 'Editing / Scripts / Structure',
      remoteTag3: 'Analysis (SNS / GA etc.)',
      remoteTag4: 'Production Management',
      remoteTag5: 'Knowledge Organization / Documentation',
      remoteWorkNote: 'Guideline: Teams agree on the optimal balance per project — "more on-site this week" or "focused on production this week" — to maximize results.',
      workHoursTitle: 'Working Hours',
      workHoursText: 'UMEZOO values flexibility based on individual circumstances and roles, as professionals responsible for outcomes and quality (exceptions may apply by position and contract type).',
      workHoursDetail1: 'Align collaboration hours (e.g., certain daytime hours) as a team to increase review and decision-making density',
      workHoursDetail2: 'Outside those hours, focus during the time that produces your best performance',
      workFoundationTitle: 'Work Foundation',
      workFoundationText: 'UMEZOO\'s value lies in "Seamless" — connecting planning, production, and operations without breaks. We ensure at minimum the following in every project.',
      workFoundationKpi: 'Purpose & KPIs: ',
      workFoundationKpiValue: 'Put Impact (results) first',
      workFoundationQuality: 'Quality Standards: ',
      workFoundationQualityValue: 'Verbalize the "baseline standards" for recipes, photography, design, and operations',
      workFoundationRole: 'Roles & Deadlines: ',
      workFoundationRoleValue: 'Never leave accountability ambiguous (eliminate over-reliance on individuals)',
      positionsTitle: 'Open Positions',
      positionsSubtitle: 'Job Listings',
      benefitsTitle: 'Benefits & Common Conditions',
      benefitsSubtitle: 'Benefits & Conditions',
      benefitLocationLabel: 'Location',
      benefitLocationValue: 'Higashi-Kanda, Chiyoda-ku, Tokyo (2 min walk from Bakurocho Station)',
      benefitWorkStyleLabel: 'Work Style',
      benefitWorkStyleValue: 'Flextime system (with core hours)\nOn-site/remote ratio set by role, presented at offer',
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
      business1: 'Conseil en affaires alimentaires et boissons, marketing et fabrication',
      business2: 'Planification, développement et vente de produits alimentaires et boissons',
      business3: 'Services de restauration',
      business4: 'Vente en ligne et par catalogue de produits alimentaires, et services d\'information via les réseaux de télécommunications',
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
      pageSubtitle: 'Trois domaines pour faire avancer l\'activité de nos partenaires',
      createSectionTitle: 'Créer',
      createBody: 'Les planificateurs alimentaires d\'UMEZOO gèrent tout, de la conception du concept au développement de recettes, au prototypage, au calcul des coûts, à la coordination OEM et au contrôle qualité. Nous ne nous contentons pas de livrer — en tant que partenaire mensuel, nous soutenons continuellement l\'amélioration et l\'expansion des produits.',
      create1Title: 'Planification de nouveaux produits et développement de recettes', create1Desc: 'Itération de prototypes pour allier goût et viabilité commerciale',
      create2Title: 'Gestion de production et coordination OEM', create2Desc: 'Cahiers des charges, négociations qualité et coûts avec les usines',
      create3Title: 'Analyse des coûts et conception des profits', create3Desc: 'Conception de revenus calculée à partir de prix de marché compétitifs',
      create4Title: 'Développement de menus et conception OP', create4Desc: 'Optimisation des opérations de cuisine en restauration',
      create5Title: 'Étiquetage alimentaire et conformité', create5Desc: 'Étiquetage nutritionnel, HACCP, durée de conservation',
      create6Title: 'Accords et dégustation', create6Desc: 'Suggestions d\'accords avec saké, vin et plus',
      deliverSectionTitle: 'Distribuer',
      deliverBody: 'Parce qu\'UMEZOO peut réaliser en interne le développement de recettes, la photographie culinaire et le stylisme alimentaire, nous créons du contenu optimisé pour les produits alimentaires. De la planification à l\'exploitation, l\'analyse et l\'amélioration — nous vous accompagnons chaque mois.',
      deliver1Title: 'Gestion SNS et création de contenu', deliver1Desc: 'Planification, publication et analyse Instagram / X / TikTok',
      deliver2Title: 'Planification de contenu de recettes', deliver2Desc: 'Développement et photographie de recettes d\'accords et de variations',
      deliver3Title: 'Photographie culinaire et production vidéo', deliver3Desc: 'Du stylisme alimentaire à la prise de vue et au montage, tout en interne',
      deliver4Title: 'Analyse EC et GA et reporting', deliver4Desc: 'Propositions d\'amélioration basées sur les données et gestion des KPI',
      deliver5Title: 'LINE OA, newsletter et note', deliver5Desc: 'Conception CRM et distribution de contenu de bout en bout',
      deliver6Title: 'Stratégie de marque', deliver6Desc: 'Étude de marché, analyse de cible et conception de marque',
      expandSectionTitle: 'Développer',
      expandBody: 'De la conception du concept à la planification commerciale, la sélection de sites, la conception et la construction de magasins, la conception de cuisines, le développement de menus et la mise en place des opérations. Après l\'ouverture, nous nous connectons à nos services « Créer » et « Distribuer » pour un accompagnement opérationnel continu jusqu\'à la stabilisation de l\'activité.',
      expand1Title: 'Conception de concept et planification commerciale', expand1Desc: 'Étude de marché, analyse concurrentielle, simulation P&L',
      expand2Title: 'Sélection de site et conception de magasin', expand2Desc: 'De l\'analyse de localisation à l\'aménagement intérieur et l\'installation d\'équipements',
      expand3Title: 'Conception de cuisine et sélection d\'équipements', expand3Desc: 'Agencements de cuisine et conception OP optimisés pour le format d\'activité',
      expand4Title: 'Développement de cuisine centrale', expand4Desc: 'Conception de lignes de production, conformité HACCP, systèmes de contrôle qualité',
      expand5Title: 'Aide aux demandes de subventions', expand5Desc: 'Soutien au financement basé sur les plans d\'affaires',
      expand6Title: 'Accompagnement post-ouverture', expand6Desc: 'Amélioration continue des menus, opérations marketing et gestion de la qualité',
      ctaTitle: 'Parlez-nous de vos défis alimentaires.',
      ctaDesc: 'Nous vous proposerons le modèle d\'engagement et la structure d\'équipe optimaux, adaptés à votre situation.',
      ctaButton: 'Réserver une consultation gratuite'
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
      workLocationBase: 'Base : ',
      workLocationBaseValue: 'Tokyo (Higashi-Kanda, Chiyoda-ku)',
      workLocationStyle: 'Mode de travail : ',
      workLocationStyleValue: 'Défini par rôle (ex. : Ventes en mode hybride).',
      workDetailButton: 'Voir les détails travail présentiel / à distance',
      offlineWorkTitle: 'Travail recommandé en présentiel',
      offlineWorkText: 'Puisque UMEZOO travaille avec la « nourriture », certains moments de qualité ne peuvent être déterminés qu\'en personne.',
      offlineTag1: 'Dégustation & Prototypage',
      offlineTag2: 'Contrôle qualité',
      offlineTag3: 'Photographie (incl. stylisme culinaire)',
      offlineTag4: 'Conception d\'expériences / Ateliers',
      offlineTag5: 'Vérification en magasin / site de production',
      offlineTag6: 'R&D',
      remoteWorkTitle: 'Travail recommandé à distance',
      remoteWorkText: 'Les tâches suivantes tendent à être plus productives en télétravail.',
      remoteTag1: 'Propositions / Plans / Business plans',
      remoteTag2: 'Édition / Scripts / Structure',
      remoteTag3: 'Analyse (SNS / GA etc.)',
      remoteTag4: 'Gestion de production',
      remoteTag5: 'Organisation des connaissances / Documentation',
      remoteWorkNote: 'Principe directeur : les équipes s\'accordent sur l\'équilibre optimal par projet — « plus de présentiel cette semaine » ou « concentration sur la production cette semaine » — pour maximiser les résultats.',
      workHoursTitle: 'Horaires de travail',
      workHoursText: 'UMEZOO valorise la flexibilité selon les circonstances individuelles et les rôles, en tant que professionnels responsables des résultats et de la qualité (des exceptions peuvent s\'appliquer selon le poste et le type de contrat).',
      workHoursDetail1: 'Aligner les heures de collaboration (ex. : certaines heures en journée) en équipe pour densifier les revues et prises de décision',
      workHoursDetail2: 'En dehors, se concentrer aux heures où chacun performe le mieux',
      workFoundationTitle: 'Base de travail',
      workFoundationText: 'La valeur d\'UMEZOO réside dans le « Seamless » — connecter planification, production et opérations sans rupture. Nous garantissons au minimum ce qui suit dans chaque projet.',
      workFoundationKpi: 'Objectifs & KPIs : ',
      workFoundationKpiValue: 'Placer l\'Impact (résultats) en premier',
      workFoundationQuality: 'Standards qualité : ',
      workFoundationQualityValue: 'Verbaliser les « standards de base » pour recettes, photographie, design et opérations',
      workFoundationRole: 'Rôles & Délais : ',
      workFoundationRoleValue: 'Ne jamais laisser la responsabilité ambiguë (éliminer la dépendance individuelle)',
      positionsTitle: 'Postes ouverts',
      positionsSubtitle: 'Offres d\'emploi',
      benefitsTitle: 'Avantages & Conditions communes',
      benefitsSubtitle: 'Benefits & Conditions',
      benefitLocationLabel: 'Lieu',
      benefitLocationValue: 'Higashi-Kanda, Chiyoda-ku, Tokyo (2 min à pied de la gare Bakurocho)',
      benefitWorkStyleLabel: 'Mode de travail',
      benefitWorkStyleValue: 'Horaires flexibles (avec heures de base)\nRatio présentiel/télétravail défini par rôle, présenté lors de l\'offre',
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
  initWorkstyleModal();
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
  document.querySelectorAll('.feature-card, .work-card, .service-item, .value-card, .workstyle-item, .svc-item').forEach(el => {
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
    title: 'ビジネスプロデューサー（アライアンス）',
    type: '正社員',
    location: 'ハイブリッド',
    role: 'クライアントの事業課題を深く理解し、多様なサービスを組み合わせたソリューションを設計・構築する責任者',
    body: `
      <h3>ポジション概要</h3>
      <p>食産業内外のあらゆる法人とのアライアンスを構築し、UMEZOOのサービスを起点にした共創プロジェクトを企画・推進するポジションです。単なる営業ではなく、パートナー企業の経営課題を理解した上で、UMEZOOの企画力・創造力を掛け合わせた事業提携を行います。</p>
      <h3>業務内容</h3>
      <ul>
        <li>パートナー企業開拓とリレーション構築</li>
        <li>パートナー企業の経営課題ヒアリング〜共創プロジェクトの企画・提案</li>
        <li>アライアンススキームの設計（レベニューシェア、JV、OEM連携等）</li>
        <li>プロジェクト全体のPM（社内チームとパートナー企業のハブ）</li>
        <li>契約条件の交渉・締結</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>320年の歴史を持つ酒蔵や不動産ディベロッパーなど、UMEZOOの既存パートナーとの共創案件に初期から関われます。「食×クリエイティブ×ビジネス」の交差点で、業界の常識を変えるようなアライアンスを自ら設計できる環境です。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>法人向け事業開発またはアライアンスの経験 3年以上</li>
        <li>複数ステークホルダーを巻き込んだプロジェクト推進経験</li>
        <li>契約条件の交渉・クロージング経験</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>食品・飲料・外食業界、またはIT・Web・テクノロジー業界での業務経験</li>
        <li>新規事業の立ち上げまたはプロジェクトマネジメントの経験</li>
        <li>スタートアップでの業務経験</li>
      </ul>
      <h3>求める人物像</h3>
      <p>単に案件を取るのではなく、パートナーと一緒に事業を作ることに面白さを感じる方。食の領域に強い関心があり、業界のプレイヤーとの信頼関係を長期で築ける方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）／ハイブリッド</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）、出社・リモート比率はオファー時に提示</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  2: {
    title: 'セールス',
    type: '正社員 / 業務委託',
    location: '東京',
    role: 'UMEZOOのサービスを必要とする企業を開拓し、継続的な取引関係を構築する営業担当',
    body: `
      <h3>ポジション概要</h3>
      <p>UMEZOOの運営支援サービス（マーケティング運用代行・商品開発パートナー・新規事業支援など）を食品メーカー・酒蔵・飲食企業等に提案・受注するポジションです。リストアップからアポ取得、商談、クロージングまでを一気通貫で担当します。</p>
      <h3>業務内容</h3>
      <ul>
        <li>ターゲット企業のリストアップ・アプローチ（テレアポ・メール・展示会等）</li>
        <li>初回商談〜課題ヒアリング〜提案書作成〜クロージング</li>
        <li>既存クライアントへのアップセル・クロスセル提案</li>
        <li>セールスKPIの管理・改善（架電数、商談数、受注率等）</li>
        <li>マーケティングチームとの連携によるリード獲得施策への参画</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>提案内容の自由度が高く、自らが考案した企画や計画が形になることを肌で感じられます。食の専門サービスという競合が少ない領域で、自分の提案スタイルを確立できます。立ち上げ初期のセールスチームで、仕組みづくりから関わることができます。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>法人営業経験 1年以上（業界不問）</li>
        <li>新規開拓営業の経験（テレアポ・飛び込み等）</li>
        <li>目標達成への強いコミットメント</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>食品・飲料・外食業界への営業経験</li>
        <li>SaaSなどのストック型サービスの営業経験</li>
        <li>CRMツールの運用経験</li>
        <li>マーケティングや食品および飲料に関する興味と知識</li>
      </ul>
      <h3>求める人物像</h3>
      <p>泥臭い新規開拓もいとわず、数字にこだわれる方。同時に、クライアントの課題を深く理解し、最適な提案を組み立てることに喜びを感じる方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員（業務委託の場合は別途条件提示）</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  3: {
    title: '法人営業マネージャー（課長〜部長クラス）',
    type: '正社員',
    location: 'ハイブリッド',
    role: '法人営業チームを統括し、売上目標の達成と顧客基盤の拡大を推進するマネジメントポジション',
    body: `
      <h3>ポジション概要</h3>
      <p>セールスチームを率い、チームの売上目標達成と営業組織の仕組みづくりを担うポジションです。プレイングマネージャーとして自ら重要案件のクロージングも行いながら、KPI設計・パイプライン管理・メンバー育成を推進します。また業務提携を含む新規プロジェクトの立ち上げも担う部門でもあるため、社会的にインパクトの大きな仕事を手掛けることもできます。</p>
      <h3>業務内容</h3>
      <ul>
        <li>セールスチームのマネジメント（目標設定・進捗管理・1on1・育成）</li>
        <li>売上予算の策定と達成に向けた営業戦術立案・実行</li>
        <li>営業プロセスの標準化（トークスクリプト・提案テンプレート・KPI設計）</li>
        <li>重要案件のハンドリング・クロージング（プレイングマネージャー）</li>
        <li>新規プロジェクトの企画・立案</li>
        <li>経営層への売上報告・戦略提案</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>初期のPMFを経て組織化のフェーズで、営業組織の土台をイチから設計できます。単なる管理職ではなく、セールスの仕組み・カルチャー・採用まで含めた「営業組織そのもの」を作る経験ができます。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>法人営業チームのマネジメント経験 3年以上</li>
        <li>5名以上のチームで売上目標を達成した実績</li>
        <li>営業プロセスの設計・改善経験</li>
        <li>KPIマネジメントの経験</li>
        <li>営業をハックする思考を持つことができる</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>食品・飲料・外食業界での営業経験</li>
        <li>スタートアップまたは成長期企業でのセールス組織立ち上げ経験</li>
        <li>コンサルティングサービスなど無形商材の営業経験</li>
        <li>1億円以上の事業インパクトを創出した経験</li>
        <li>単価100万円以上の無形商材の営業経験</li>
      </ul>
      <h3>求める人物像</h3>
      <p>自ら数字を作りながら、チームの成果を最大化できる方。メンバーの成長にコミットし、再現性のある営業組織を構築することに情熱を持てる方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）／ハイブリッド</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）、出社・リモート比率はオファー時に提示</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  4: {
    title: 'フードプランナー',
    type: '正社員 / 業務委託',
    location: '東京',
    role: 'レシピ開発・商品開発・メニュー設計など、フード領域の成果物を高い品質で納品する実務担当者',
    body: `
      <h3>ポジション概要</h3>
      <p>レシピ開発・メニュー設計・商品企画を軸に、クライアントの食品事業を形にするポジションです。コンセプト設計から試作・原価計算・製造仕様書作成・OEM先との調整まで、商品が世に出るまでの全工程に関わります。</p>
      <h3>業務内容</h3>
      <ul>
        <li>クライアントの商品コンセプトに基づくレシピ開発・試作・改良</li>
        <li>飲食店メニューの開発・原価計算・オペレーション設計</li>
        <li>製造仕様書の作成、OEM先・工場との製造調整</li>
        <li>食品表示・栄養成分表示対応</li>
        <li>ペアリング提案（日本酒・ワイン等）、テイスティング・品質評価</li>
        <li>撮影用フードスタイリング</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>酒蔵との日本酒ペアリング、冷凍ビリヤニのD2Cブランド、惣菜工場の製造ライン設計など、ジャンルの幅が圧倒的に広いのが特徴です。「料理が作れる」だけでなく「食品事業を設計できる」プランナーとしてのキャリアを築けます。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>レシピ開発または食品商品開発の実務経験 2年以上</li>
        <li>原価計算・利益率設計の理解</li>
        <li>調理師免許または同等の調理技術</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>OEM先との製造調整経験</li>
        <li>食品表示・HACCP関連の知識</li>
        <li>フードスタイリング・料理撮影の経験</li>
        <li>日本酒・ワイン等の酒類知識</li>
        <li>工場での大量製造レシピへの変換経験</li>
      </ul>
      <h3>求める人物像</h3>
      <p>料理の腕だけでなく、事業として成立させるための数字感覚を持っている方。「美味しい」を再現可能な仕組みに落とし込むことに面白さを感じる方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員（業務委託の場合は別途条件提示）</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  5: {
    title: 'マーケター',
    type: '正社員 / 業務委託',
    location: '東京',
    role: 'デジタルマーケティング施策の企画から実行・分析までを担い、食品特化のコンテンツ戦略を推進',
    body: `
      <h3>ポジション概要</h3>
      <p>クライアントのSNS運用・コンテンツ制作・EC分析・LINE OA運用など、デジタルマーケティング施策の企画から実行・分析までを担うポジションです。食品特化のマーケティングに必要な撮影ディレクション・レシピコンテンツ企画にも関わります。</p>
      <h3>業務内容</h3>
      <ul>
        <li>SNS運用代行（Instagram / X / TikTok等の投稿企画・制作・コミュニケーション管理）</li>
        <li>コンテンツ企画・制作ディレクション（レシピ動画・静止画・記事）</li>
        <li>GA / EC分析・月次レポーティング・KPI設計</li>
        <li>LINE公式アカウント運用（配信設計・会員管理・ステップ配信）</li>
        <li>メルマガ・note等の記事ライティング</li>
        <li>マーケティング戦略の立案（市場調査・ターゲット分析・ブランディング）</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>食品SNSの成果は「料理の質」で決まります。UMEZOOでは社内にレシピ開発チームがいるため、コンテンツの企画から制作まで一気通貫でコントロールでき、マーケターとしての打ち手の幅が圧倒的に広がります。また、マーケティングを通じて食卓をデザインできる、食体験の提供に携わることができるのも、面白さの一つです。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>SNS運用またはデジタルマーケティングの実務経験 2年以上</li>
        <li>GA等のアクセス解析ツールの運用経験</li>
        <li>コンテンツ企画・制作ディレクションの経験</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>食品・飲料業界でのマーケティング経験</li>
        <li>LINE公式アカウント・CRM運用の経験</li>
        <li>撮影ディレクション・動画制作の経験</li>
        <li>EC運営・分析の経験</li>
        <li>ライティングスキル（note・メルマガ等）</li>
        <li>デザイン業務の経験</li>
      </ul>
      <h3>求める人物像</h3>
      <p>データに基づいて改善を回しながらも、クリエイティブの質にこだわれる方。食に対する感度が高く、生活者目線のコンテンツ設計ができる方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員（業務委託の場合は別途条件提示）</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  6: {
    title: '人材採用',
    type: '正社員 / 業務委託',
    location: 'ハイブリッド',
    role: '採用計画の立案から母集団形成、選考運営、入社後フォローまで、採用プロセス全体を推進',
    body: `
      <h3>ポジション概要</h3>
      <p>拡大フェーズへの組織構築を担う、UMEZOOの採用担当ポジションです。採用戦略の策定から母集団形成、面接設計、オファー、入社オンボーディングまでを一貫して担当します。採用だけでなく、組織設計・人事制度の整備にも関わる機会があります。</p>
      <h3>業務内容</h3>
      <ul>
        <li>採用戦略・採用計画の策定（職種別の要件定義・チャネル選定）</li>
        <li>求人媒体・エージェント・ダイレクトリクルーティングの運用</li>
        <li>候補者とのコミュニケーション・面接調整・面接実施</li>
        <li>選考プロセスの設計・改善（歩留まり分析・面接品質の向上）</li>
        <li>入社オンボーディングの設計・実行</li>
        <li>採用ブランディング（採用ページ・SNS発信等）</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>組織の倍増フェーズで、採用だけでなく「どんなチームを作るか」から設計できます。食×クリエイティブという独自領域での採用ブランディングを、ゼロから作り上げる経験ができます。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>中途採用の実務経験 2年以上（企業人事またはエージェント）</li>
        <li>複数職種の同時採用をハンドリングした経験</li>
        <li>候補者・現場双方とのコミュニケーション力</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>スタートアップまたは成長期企業での採用経験</li>
        <li>ダイレクトリクルーティングの運用経験</li>
        <li>人事制度設計・組織開発への関心</li>
        <li>採用ブランディング・採用広報の経験</li>
      </ul>
      <h3>求める人物像</h3>
      <p>「この人と一緒に働きたい」と思える人材を見極め、口説く力を持つ方。組織フェーズに合わせて、柔軟に手法を変えられる方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員（業務委託の場合は別途条件提示）</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）／ハイブリッド</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）、出社・リモート比率はオファー時に提示</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  7: {
    title: '事業戦略',
    type: '正社員 / 業務委託',
    location: 'ハイブリッド',
    role: 'UMEZOOの経営戦略に紐づく事業戦略の構築、事業企画/事業開発を取締役直下で推進',
    body: `
      <h3>ポジション概要</h3>
      <p>UMEZOOの経営戦略に紐づく事業戦略の構築、およびそれに伴う事業企画/事業開発など、幅広い業務領域を取締役直下で推進するポジションです。子会社事業のマネジメント、法人向け事業の標準化や戦略的パートナーシップ、M&A戦略の推進、新たな事業/サービスラインの設計、PMI業務など、UMEZOOの頭脳を担っていただきます。</p>
      <h3>業務内容</h3>
      <ul>
        <li>新規事業のコンセプト設計・市場調査・事業計画策定</li>
        <li>収支シミュレーション・投資判断の材料作成</li>
        <li>事業立ち上げのプロジェクトマネジメント</li>
        <li>中期経営戦略の策定支援（M&A・ロールアップ戦略含む）</li>
        <li>既存事業の収益改善・サービス設計の最適化</li>
        <li>サービスの体系化およびノウハウによるPMIの推進</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>食業界のロールアップ戦略の初期フェーズに参画できます。役員直下で経営の意思決定プロセスに関わりながら、自ら事業を設計・実行する経験が積めます。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>事業企画・事業開発・経営企画のいずれかの経験 5年以上</li>
        <li>事業責任者またはプロジェクトマネージャーの経験3年以上</li>
        <li>事業計画・収支モデルおよび打ち手の計画から実行</li>
        <li>複数部門を巻き込んだプロジェクト推進力</li>
        <li>常識を疑って考えることのできる論理的思考力</li>
        <li>ネイティブレベルの日本語</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>食品・飲料・外食業界での事業経験</li>
        <li>IT・Web・テクノロジー業界での事業経験</li>
        <li>M&A・PMIの実務経験</li>
        <li>コンサルティングファームでの業務経験</li>
        <li>ビジネスレベルの英語</li>
      </ul>
      <h3>求める人物像</h3>
      <p>戦略を描くだけでなく、自ら手を動かして事業を形にできる方。不確実性を楽しみながら、仮説検証を高速で回せる方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員（業務委託の場合は別途条件提示）</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）／ハイブリッド</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）、出社・リモート比率はオファー時に提示</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
      </ul>
    `
  },
  8: {
    title: '新卒 / 第二新卒',
    type: '正社員',
    location: '東京',
    role: 'UMEZOOの事業全体を経験しながら、自身の強みと志向に合わせてキャリアを形成',
    body: `
      <h3>ポジション概要</h3>
      <p>UMEZOOの事業全体を経験しながら、自身の強みと志向に合わせてキャリアを形成するポジションです。OJTを通じて実務スキルを身につけます。</p>
      <h3>業務内容</h3>
      <ul>
        <li>配属チームの実務（フードコミュニケーションチーム／フードクリエイティブチーム）</li>
        <li>クライアントワークへの参加（先輩社員のサポートから段階的に主担当へ）</li>
        <li>社内プロジェクトの企画・推進（改善提案含む）</li>
        <li>全社定例・勉強会への参加、ナレッジの文書化</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>少数精鋭のスタートアップで、入社初期からクライアントワークの最前線に立てます。食品業界のバリューチェーン全体（企画→開発→製造→マーケ→販売）を横断的に学べるのは、UMEZOOならではの環境です。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>2026年3月以降に卒業済みまたは卒業見込みの方（第二新卒は社会人経験3年未満が目安）</li>
        <li>食体験やテクノロジーに対する強い興味関心</li>
        <li>主体的に学び、行動できる姿勢</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>飲食店・食品関連のアルバイト・インターン経験</li>
        <li>SNS運用・コンテンツ制作の経験（個人・学生団体含む）</li>
        <li>営業・接客のアルバイト経験</li>
        <li>調理師免許・栄養士資格等の食関連資格</li>
      </ul>
      <h3>求める人物像</h3>
      <p>食の領域で自分のキャリアを作りたいという強い意志を持つ方。答えのない環境で試行錯誤を楽しめる方。大企業では得られないスピード感と裁量を求める方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
    `
  },
  9: {
    title: 'オープンポジション',
    type: '正社員 / 業務委託',
    location: '東京 / ハイブリッド',
    role: 'UMEZOOの事業に共感し、自身のスキル・経験を活かして貢献したい方のためのポジション',
    body: `
      <h3>ポジション概要</h3>
      <p>上記のポジションに当てはまらないが、UMEZOOの事業に共感し、自身のスキル・経験を活かして貢献したい方のためのポジションです。ご応募いただいた方のスキルセットと志向に応じて、最適な役割をご相談します。</p>
      <h3>業務内容</h3>
      <ul>
        <li>ご経験・スキルに応じて決定</li>
        <li>現在特に歓迎するスキルセット：映像制作・動画編集、Webデザイン・UI/UX、管理部門（経理・法務）、データ分析・BI構築</li>
      </ul>
      <h3>このポジションのユニークなチャレンジ</h3>
      <p>成長フェーズのスタートアップで、自分の専門性を起点に新しい役割やチームをつくることができます。「ポジションがないから応募できない」ではなく「あなたの強みでポジションをつくる」という発想です。</p>
      <h3>必須スキル・経験</h3>
      <ul>
        <li>何らかの専門領域で3年以上の実務経験</li>
        <li>UMEZOOの事業内容・価値観への共感</li>
        <li>自ら課題を発見し、提案・実行できる自走力</li>
      </ul>
      <h3>歓迎スキル・経験</h3>
      <ul>
        <li>食品・飲料・外食業界での業務経験</li>
        <li>スタートアップでの業務経験</li>
        <li>複数領域にまたがるスキルセット</li>
      </ul>
      <h3>求める人物像</h3>
      <p>既存の枠にとらわれず、自分の強みで価値を生み出せる方。UMEZOOの「食体験をデザインする」というミッションに共感し、一緒に組織を作っていきたい方。</p>
      <h3>待遇</h3>
      <ul>
        <li>雇用形態：正社員（業務委託の場合は別途条件提示）</li>
        <li>勤務地：東京都千代田区東神田（馬喰町駅 徒歩2分）／ハイブリッド</li>
        <li>勤務形態：フレックスタイム制（コアタイムあり）、出社・リモート比率はオファー時に提示</li>
        <li>給与：年俸制（固定残業代 月45時間分を含む、超過分は別途支給）</li>
        <li>賞与・昇給：成果連動型インセンティブあり、昇給年1回</li>
        <li>試用期間：6ヶ月（待遇に差異なし）</li>
        <li>休日・休暇：完全週休2日制、年次有給休暇、慶弔休暇、年末年始休暇</li>
        <li>社会保険：完備（健康保険・厚生年金・雇用保険・労災保険）</li>
        <li>通勤手当あり（合理的に最も経済的な移動手段を選択し、月額2万円まで）</li>
        <li>福利厚生：試食・まかない、試作品持ち帰り、食体験イベントへの参加機会、AIなどの先端技術に関する勉強会</li>
      </ul>
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

// Workstyle detail modal functionality
function initWorkstyleModal() {
  const modal = document.getElementById('workstyleDetailModal');
  const btn = document.getElementById('workstyleDetailBtn');
  if (!modal || !btn) return;

  const overlay = modal.querySelector('.workstyle-modal__overlay');
  const closeBtn = modal.querySelector('.workstyle-modal__close');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

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
