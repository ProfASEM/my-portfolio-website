# Asem Haij | Data Analytics & Business Intelligence

I use Power BI, SQL, Python, and Excel to analyze markets, financial performance, and operations. This portfolio brings together my analytics projects, my background in mathematics, and my work in finance, project controls, and educational program management.

Explore the site in English or Arabic. The Arabic version includes a right-to-left layout.

[English portfolio](https://asemhaij.com/) · [النسخة العربية](https://asemhaij.com/ar/) · [Download my CV](./Asem_Haij_CV_Data_Analyst_Updated.docx)

## Explore the portfolio

| Section | What you’ll find | English | العربية |
| --- | --- | --- | --- |
| About | My mathematics degree, professional experience, and analytical toolkit. | [About](./about/about.html) | [نبذة عني](./ar/about/about.html) |
| Projects | Analyses of the Saudi real estate market, the Saudi financial sector, logistics performance, and healthcare efficiency and outcomes across MENA. The collection also includes web and mathematics projects. | [Projects](./projects/projects.html) | [المشاريع](./ar/projects/projects.html) |
| Blog | Learning topics covering the analytics workflow, Power BI, data engineering, data science, and KPI selection. | [Blog](./blog/blog.html) | [المدونة](./ar/blog/blog.html) |
| Contact | Ways to reach me about a role, project, or collaboration. | [Contact](./contact/contact.html) | [تواصل معي](./ar/contact/contact.html) |

## Run locally

The site uses static HTML, CSS, and JavaScript. To preview it with Git and Python 3 installed, run the following commands.

```bash
git clone https://github.com/ProfASEM/my-portfolio-website.git
cd my-portfolio-website
python -m http.server 8000
```

Open the [English homepage](http://localhost:8000/) or the [Arabic homepage](http://localhost:8000/ar/).

## Editing the site

- **Homepages** — The English and Arabic entry points are `index.html` and `ar/index.html`. When updating homepage content, also check `main/main.html` and `ar/main/main.html`.
- **Translations** — The About, Projects, Blog, and Contact pages each have a corresponding HTML file under `ar/`. Update both language versions when making a shared content change.
- **Styles and navigation** — Edit `assets/site.css` for shared styles and `assets/site.js` for interactions such as mobile navigation.
- **Images** — Portfolio images are stored in `images/`.
