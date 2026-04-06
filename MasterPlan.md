# 🌍 Geography Class 12 Master Plan (ULTRA-MEGA VOLUME Series)

This project aims to build a high-fidelity educational portal for Class 12 NCERT Geography, following the "Ultra-Mega Volume" requirement: 20 parts per chapter, with each part having 3 distinct segments and a volume of approx. 2 pages (Google Docs equivalent).

---

## 🏗️ Chapter Structure (The "Ultra-Mega Volume" Framework)

### 1. Ultra-Mega Notes File (`copy_master_ch*.html`)
- **20-Part Master Framework:** EVERY chapter must be deeply divided into strictly 20 massive parts. 
- **3-Segment Rule:** Each of the 20 parts must have 3 clear sub-headings/segments (E.g., 1.1, 1.2, 1.3).
- **Volume Rule:** Each part must be long enough to occupy approx. 2 pages in Google Docs (Total ~40 pages per chapter).
- **Styling Standards:**
    - **Header:** Large rounded card (Emerald Gradient).
    - **Cards (`.series-part`):** Glassmorphism style, 60px padding, 60px border-radius.
    - **Typography:** `Outfit` (Headers) & `Inter` (Body). Font sizes: **2rem (Body), 4rem (H2), 5.5rem (H1)**.
    - **Highlight Boxes:** 20px yellow-gold border-left for key concepts.

### 2. Multi-Level Q&A File (`qa_master_ch*.html`)
- **20 MCQs:** Grid layout (2 columns), light gray borders, clean emerald highlighting for correct options.
- **30 Subjective Questions:** Detailed "Describe" style answers.
- **Projector Optimization:** 
    - **Font Size:** 2.1rem for answers (Highly readable from distance).
    - **Structure:** Structured bullet points with detailed explanations (Describe policy).
    - **Icons:** Custom `✦` (Emerald/Gold) markers for lists.
    - **Colors:** Light mint backgrounds (`#f0fdfa`) with thick emerald side borders.

---

## 🎨 Global UI & Viewer Settings (`qa_html_view.html` & `notes_html_view.html`)

> [!IMPORTANT]
> **Minimalist UI**: No top fixed header/strip ("Green Patti" removed). Full-screen content focus.

### Floating Navigation (Smart Sidebar)
- **Icons Only**: Only 3 circular buttons on the right side.
    - 🏠 **Home**: (`location.href='index.html'`)
    - 📋 **Copy**: Clipboard HTML copy for Google Docs.
    - 🖨️ **Print**: One-click professional PDF print.
- **Hide-on-Scroll Behavior**: Sidebar hides (`translateY(-50%) translateX(100px)`) when scrolling down, reappears when scrolling up or at top.

### Pro-PDF Print System (`@media print`)
- **Universal Support**: Handled by the Viewer, not the chapter files.
- **Rules**: High-fidelity preservation of colors, fonts, and structured bullets.
- **Exclude**: Hides UI buttons and scrollbars in the output.

---

## 📅 Roadmap (17 Chapters - 20-Part Standard)
- [x] **Chapter 10:** Human Settlements (GOLD MASTER - Completed)
- [ ] **Chapter 11:** Population: Distribution, Density, Growth and Composition (Next Step)
- [ ] **Chapter 1-9:** (Building/Refining)
- [ ] **Chapter 11-19:** (To be built)

---

## 🛠️ Code Snippet Reference (Premium Q&A Answer)
```html
<div class="qa-card">
    <h3>प्रश्न X: ...?</h3>
    <ul>
        <li><b>Point Name:</b> Detailed description for teaching...</li>
        <li><b>Point Name:</b> Another detailed descriptive point...</li>
    </ul>
</div>
```
