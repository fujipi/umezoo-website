const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const RSS_URL = 'https://note.com/cccellars/rss';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'note-articles.json');
const MAX_ARTICLES = 10; // 最新10件を取得

async function fetchNoteRSS() {
  const parser = new Parser({
    customFields: {
      item: [
        ['media:thumbnail', 'thumbnail', { keepArray: false }],
        ['note:creatorName', 'creatorName'],
      ]
    }
  });

  console.log('Fetching RSS feed from:', RSS_URL);

  try {
    const feed = await parser.parseURL(RSS_URL);

    const articles = feed.items.slice(0, MAX_ARTICLES).map((item, index) => {
      // 日付をYYYY.MM.DD形式に変換
      const pubDate = new Date(item.pubDate);
      const formattedDate = `${pubDate.getFullYear()}.${String(pubDate.getMonth() + 1).padStart(2, '0')}.${String(pubDate.getDate()).padStart(2, '0')}`;

      // descriptionからHTMLタグを除去して要約を作成
      const plainText = item.content || item.contentSnippet || item.description || '';
      const summary = plainText
        .replace(/<[^>]*>/g, '')
        .replace(/\n/g, ' ')
        .trim()
        .substring(0, 100) + '...';

      // サムネイル画像URLを取得
      let thumbnailUrl = '';
      if (item.thumbnail && item.thumbnail.$) {
        thumbnailUrl = item.thumbnail.$.url;
      } else if (item.enclosure && item.enclosure.url) {
        thumbnailUrl = item.enclosure.url;
      }

      return {
        id: `note-${index + 1}`,
        tag: 'Journey',
        date: formattedDate,
        title: item.title,
        link: item.link,
        summary: summary,
        image: thumbnailUrl,
        isExternal: true
      };
    });

    // JSONファイルに保存
    const outputData = {
      lastUpdated: new Date().toISOString(),
      feedTitle: feed.title,
      feedLink: feed.link,
      articles: articles
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(outputData, null, 2), 'utf8');
    console.log(`Successfully saved ${articles.length} articles to ${OUTPUT_PATH}`);

    // 生成されたデータを表示
    console.log('\nGenerated articles:');
    articles.forEach(article => {
      console.log(`- ${article.date}: ${article.title}`);
    });

    return outputData;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    process.exit(1);
  }
}

fetchNoteRSS();
