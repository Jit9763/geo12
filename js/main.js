/**
 * Navigation and Dynamic Content Logic for Class 12 Geography
 */

const chapters = [
  // Book 1: Fundamentals of Human Geography
  { id: 1, title: "मानव भूगोल: प्रकृति एवं विषय-क्षेत्र", book: 1 },
  { id: 2, title: "विश्व जनसंख्या: वितरण, घनत्व और वृद्धि", book: 1 },
  { id: 3, title: "जनसंख्या संघटन (Population Composition)", book: 1 },
  { id: 4, title: "मानव विकास (Human Development)", book: 1 },
  { id: 5, title: "प्राथमिक क्रियाएँ (Primary Activities)", book: 1 },
  { id: 6, title: "द्वितीयक क्रियाएँ (Secondary Activities)", book: 1 },
  { id: 7, title: "तृतीयक और चतुर्थ क्रियाकलाप (Tertiary & Quaternary)", book: 1 },
  { id: 8, title: "परिवहन एवं संचार (Transport & Communication)", book: 1 },
  { id: 9, title: "अंतर्राष्ट्रीय व्यापार (International Trade)", book: 1 },
  { id: 10, title: "मानव बस्ती (Human Settlements)", book: 1 },
  
  // Book 2: India – People and Economy
  { id: 11, title: "जनसंख्या: वितरण, घनत्व, वृद्धि एवं संगठन", book: 2 },
  { id: 12, title: "मानव बस्तियाँ", book: 2 },
  { id: 13, title: "भू-संसाधन तथा कृषि", book: 2 },
  { id: 14, title: "जल संसाधन", book: 2 },
  { id: 15, title: "खनिज तथा ऊर्जा संसाधन", book: 2 },
  { id: 16, title: "भारत के संदर्भ में नियोजन और सततपोषणीय विकास", book: 2 },
  { id: 17, title: "परिवहन तथा संचार", book: 2 },
  { id: 18, title: "अंतर्राष्ट्रीय व्यापार", book: 2 },
  { id: 19, title: "भौगोलिक परिप्रेक्ष्य में चयनित कुछ मुद्दे एवं समस्याएँ", book: 2 }
];

document.addEventListener('DOMContentLoaded', () => {
  renderChapters(chapters);

  const searchBar = document.getElementById('searchBar');
  if(searchBar) {
    searchBar.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = chapters.filter(c => c.title.toLowerCase().includes(term));
      renderChapters(filtered);
    });
  }
});

function renderChapters(data) {
  const grid = document.getElementById('chapter-grid');
  if(!grid) return;

  grid.innerHTML = '';

  data.forEach(chapter => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="chapter-num">${String(chapter.id).padStart(2, '0')}</div>
      <div class="badge" style="margin-bottom: 0.5rem; font-size: 0.7rem;">Book ${chapter.book}</div>
      <h3 class="chapter-title">${chapter.title}</h3>
      <div class="chapter-actions">
        <button class="btn-primary" onclick="window.open('notes_html_view.html?id=${chapter.id}', '_blank')">📖 MEGA NOTES</button>
        <button class="btn-primary" style="background: #059669; border-color: #047857;" onclick="window.open('qa_html_view.html?id=${chapter.id}', '_blank')">📝 Q&A BANK</button>
      </div>
    `;
    grid.appendChild(card);
  });
}
