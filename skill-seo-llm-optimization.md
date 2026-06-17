# Skill: SEO + LLM Optimization for Any Website

Use this skill to audit and optimize any webpage for both traditional search engines
(Google, Bing) and AI/LLM systems (ChatGPT, Claude, Perplexity, Google AI Overview).

This skill is website-agnostic. Adapt all placeholders to the actual site.

---

## Why Both SEO and LLM Matter

- **SEO** = getting ranked in search results (Google, Bing)
- **LLM Optimization** = getting cited by AI assistants when users ask questions
- They share the same foundation: clear, factual, well-structured content
- LLMs prefer pages that state facts explicitly, use structured data, and answer questions directly

---

## 1. Meta Tags — Complete Head Section

Every page needs all of these. No exceptions.

```html
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Title: Primary Keyword | Secondary | Brand (50-60 chars max) -->
<title>{{ Primary Keyword }} | {{ Page Topic }} | {{ Brand Name }}</title>

<!-- Meta Description: Include keyword, clear value prop (150-160 chars) -->
<meta name="description" content="{{ Describe the page content in one sentence. Include primary keyword near the start. State the value clearly. }}">

<!-- Keywords (less critical for Google, still useful for Bing & AI parsers) -->
<meta name="keywords" content="{{ keyword1, keyword2, keyword3, brand name, location if relevant }}">

<!-- Author -->
<meta name="author" content="{{ Brand or Organization Name }}">

<!-- Robots: allow full indexing + rich results -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

<!-- Canonical: always the definitive URL for this page -->
<link rel="canonical" href="https://www.{{ domain.com }}/{{ page-slug }}.html">

<!-- ===================== -->
<!-- OPEN GRAPH (Facebook, LinkedIn, WhatsApp previews) -->
<!-- ===================== -->
<meta property="og:type" content="{{ website | article | product | hotel }}">
<meta property="og:url" content="https://www.{{ domain.com }}/{{ page-slug }}.html">
<meta property="og:title" content="{{ Same as <title> }}">
<meta property="og:description" content="{{ Same as meta description }}">
<meta property="og:image" content="https://www.{{ domain.com }}/img/{{ og-image.jpg }}">
<!-- OG image: minimum 1200x630px, under 8MB, shows actual page content -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="{{ Brand Name }}">
<meta property="og:locale" content="en_US">

<!-- ===================== -->
<!-- TWITTER / X CARD -->
<!-- ===================== -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@{{ twitter_handle }}">
<meta name="twitter:title" content="{{ Same as <title> }}">
<meta name="twitter:description" content="{{ Same as meta description }}">
<meta name="twitter:image" content="https://www.{{ domain.com }}/img/{{ twitter-image.jpg }}">

<!-- ===================== -->
<!-- LLM / AI META TAGS -->
<!-- These help AI assistants understand and cite your page accurately -->
<!-- ===================== -->

<!-- One-sentence summary an AI can quote directly -->
<meta name="ai:tldr" content="{{ One factual sentence: what this page is about, key number/stat, who it's for. }}">

<!-- Detailed description an AI can use when answering related questions -->
<meta name="ai:description" content="{{ 2-3 sentences. Cover: what the subject is, where/context, key facts, who benefits. Write as if telling someone the answer. }}">

<!-- Comma-separated list of features, services, or highlights -->
<meta name="ai:features" content="{{ feature1, feature2, feature3, feature4, feature5 }}">

<!-- Location context if relevant -->
<meta name="ai:location_context" content="{{ City, neighbourhood, distance to landmarks, transport access }}">

<!-- Pricing/cost information if relevant (makes AI quote-ready) -->
<meta name="ai:costs" content="{{ Price range, cost structure, free/paid, units }}">

<!-- Who this page is for -->
<meta name="ai:audience" content="{{ Target audience description }}">

<!-- ===================== -->
<!-- ADDITIONAL SEO META -->
<!-- ===================== -->

<!-- Article published/modified dates (helps Google freshness signals) -->
<meta property="article:published_time" content="{{ YYYY-MM-DD }}">
<meta property="article:modified_time" content="{{ YYYY-MM-DD }}">

<!-- Language alternates if multilingual -->
<!-- <link rel="alternate" hreflang="th" href="https://www.domain.com/th/{{ page }}.html"> -->
<!-- <link rel="alternate" hreflang="zh-CN" href="https://www.domain.com/zh/{{ page }}.html"> -->
<!-- <link rel="alternate" hreflang="x-default" href="https://www.domain.com/{{ page }}.html"> -->

</head>
```

---

## 2. Schema.org JSON-LD Structured Data

Paste inside `<head>` or at start of `<body>`. Use multiple `<script type="application/ld+json">` blocks — one per schema type.

### 2a. Always Include: WebPage or Article

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ Exact H1 text of the page }}",
  "description": "{{ Meta description }}",
  "url": "https://www.{{ domain.com }}/{{ page-slug }}.html",
  "datePublished": "{{ YYYY-MM-DD }}",
  "dateModified": "{{ YYYY-MM-DD }}",
  "author": {
    "@type": "{{ Organization | Person }}",
    "name": "{{ Author or Brand Name }}",
    "url": "https://www.{{ domain.com }}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "{{ Brand Name }}",
    "url": "https://www.{{ domain.com }}",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.{{ domain.com }}/img/logo.png"
    }
  },
  "image": "https://www.{{ domain.com }}/img/{{ main-image.jpg }}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.{{ domain.com }}/{{ page-slug }}.html"
  }
}
</script>
```

### 2b. Always Include: BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.{{ domain.com }}/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{ Parent Category }}",
      "item": "https://www.{{ domain.com }}/{{ parent-category }}.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{ This Page }}",
      "item": "https://www.{{ domain.com }}/{{ page-slug }}.html"
    }
  ]
}
</script>
```

### 2c. FAQPage — Add Whenever You Have a FAQ Section

**Critical rule:** The `"name"` in schema must match the `<h3>` heading text in the HTML exactly.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{ Question text — copy from H3 exactly }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ Full plain-text answer. No HTML tags inside this value. }}"
      }
    },
    {
      "@type": "Question",
      "name": "{{ Question 2 }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ Answer 2 }}"
      }
    }
  ]
}
</script>
```

### 2d. LocalBusiness (for physical locations)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{ LocalBusiness | Restaurant | Hotel | Store | MedicalClinic }}",
  "name": "{{ Business Name }}",
  "description": "{{ Short business description }}",
  "url": "https://www.{{ domain.com }}/",
  "telephone": "+{{ country code }}{{ number }}",
  "email": "{{ contact@domain.com }}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{ Street number and name }}",
    "addressLocality": "{{ City }}",
    "addressRegion": "{{ State/Province }}",
    "postalCode": "{{ Postal Code }}",
    "addressCountry": "{{ ISO 2-letter country code, e.g. TH, US, GB }}"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": {{ decimal latitude }},
    "longitude": {{ decimal longitude }}
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "{{ $ | $$ | $$$ | $$$$ }}",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ 4.2 }}",
    "reviewCount": "{{ 850 }}",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

### 2e. Product Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ Product Name }}",
  "description": "{{ Product description }}",
  "image": "https://www.{{ domain.com }}/img/{{ product.jpg }}",
  "brand": {
    "@type": "Brand",
    "name": "{{ Brand Name }}"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.{{ domain.com }}/{{ page-slug }}.html",
    "priceCurrency": "{{ USD | THB | EUR }}",
    "price": "{{ 99.00 }}",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ 4.5 }}",
    "reviewCount": "{{ 120 }}"
  }
}
</script>
```

---

## 3. HTML Content Structure for SEO + LLM

### 3a. Heading Hierarchy Rules

```
<h1>  — Exactly ONE per page. Contains primary keyword.
<h2>  — Major section titles. Each contains a secondary keyword or question.
<h3>  — Sub-sections, FAQ questions. Long-tail keywords.
<h4>  — Sub-sub-sections, callout labels. Optional.
```

**H1 pattern:**
```html
<h1>{{ Primary Keyword }} <strong>{{ Qualifier/Brand }}</strong>
  <span>{{ Subtitle: 1 sentence with supporting fact }}</span>
</h1>
```

**H2 as a question** (triggers featured snippets + AI citations):
```html
<h2>What Is {{ Topic }} and How Does It Work?</h2>
<h2>How to {{ Task }} in {{ Context }}</h2>
<h2>Best {{ Category }} for {{ Audience }} in {{ Year }}</h2>
```

### 3b. Content That LLMs Trust and Cite

Write content that **directly answers** questions. LLMs prefer:

```html
<!-- GOOD: Direct answer in first sentence -->
<h2>How far is {{ Location A }} from {{ Location B }}?</h2>
<p>{{ Location A }} is <strong>200 meters (3-minute walk)</strong> from {{ Location B }}.
Walk straight out of the main entrance, turn right, and {{ Location A }} is on your left.</p>

<!-- BAD: Burying the answer -->
<p>Many visitors wonder about the distance. The area has great connectivity.
There are many ways to get there. The distance varies by route...</p>
```

**Content patterns LLMs prefer:**
- Lead with the fact, then explain
- Use `<strong>` on key numbers, names, prices
- State location, price, hours, size explicitly
- Use bullet lists for features and comparisons
- Include a FAQ section with direct Q&A format

### 3c. Breadcrumb HTML

```html
<div style="font-size:12px; margin:10px 0; color:#666;">
    <a href="/" style="color:#666;">Home</a> »
    <a href="/{{ category }}.html" style="color:#666;">{{ Category }}</a> »
    <span>{{ Current Page }}</span>
</div>
```

### 3d. FAQ Section Structure

```html
<section id="faq">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-item">
        <h3>{{ Question exactly matching schema "name" }}</h3>
        <p>{{ Direct answer. Use <strong> on key facts. }}</p>
    </div>

    <div class="faq-item">
        <h3>{{ Question 2 }}</h3>
        <p>{{ Answer 2 }}</p>
    </div>
</section>
```

Minimum 4 FAQ items per page. Questions should be real queries from:
- Google "People Also Ask"
- Google Autocomplete
- Common customer support questions

---

## 4. Internal Linking Strategy

### Rules

1. Every page must link to at least **5 other internal pages**
2. Use descriptive anchor text — never "click here" or "read more"
3. Link from content body, sidebar, and related articles widget
4. The most important pages on your site should receive the most internal links

### Anchor Text Pattern

```html
<!-- GOOD: keyword-rich anchor -->
<a href="/nana-plaza-guide.html">complete guide to Nana Plaza Bangkok</a>

<!-- GOOD: contextual inline link -->
<p>See our <a href="/pricing-guide.html" style="color:#856404;font-weight:bold;">
2026 pricing guide</a> for detailed cost breakdowns.</p>

<!-- BAD: generic anchor -->
<a href="/nana-plaza-guide.html">click here</a>
```

### Related Articles Widget (4-card grid)

At the bottom of every page, link to 4 topically related pages:

```html
<section id="related-articles" style="background:#f8f9fa;border-radius:8px;padding:30px;margin:30px 0;">
    <h3 style="text-align:center;margin-bottom:25px;">Related {{ Topic }} Guides</h3>
    <!-- 4 cards side by side: each card = title + description + arrow link -->
</section>
```

---

## 5. Image Optimization

Every `<img>` must have:

```html
<img
    src="/img/{{ descriptive-filename.jpg }}"
    alt="{{ Descriptive text with primary keyword. Describe what's in the image. }}"
    title="{{ Hover tooltip — human-readable label }}"
    width="{{ actual pixel width }}"
    height="{{ actual pixel height }}"
    loading="{{ eager | lazy }}"
    decoding="async"
    class="scale-with-grid">
```

- `alt`: written for visually impaired users — describes the image content naturally
- `title`: short label (5-8 words)
- Always set `width` and `height` to prevent layout shift (CLS)
- Use `loading="lazy"` on all below-the-fold images
- Use `loading="eager"` on hero/above-fold image
- Filename should describe content: `hotel-pool-nana-bangkok.jpg` not `IMG_0042.jpg`

---

## 6. Page Speed Essentials

```html
<!-- Preconnect to external domains used on the page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com">

<!-- Preload hero image (largest contentful paint element) -->
<link rel="preload" as="image" href="/img/{{ hero-image.jpg }}">

<!-- Defer non-critical scripts -->
<script src="/js/analytics.js" defer></script>
<script src="/js/chat-widget.js" defer></script>

<!-- Async third-party scripts that don't depend on DOM -->
<script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" async></script>
```

---

## 7. URL Structure Rules

| Pattern | Good | Bad |
|---|---|---|
| Use hyphens | `nana-plaza-guide` | `nana_plaza_guide` |
| Lowercase | `best-hotel-bangkok` | `Best-Hotel-Bangkok` |
| Descriptive | `budget-hotels-sukhumvit` | `page2` or `p=123` |
| Short | `nana-guide` | `the-complete-and-ultimate-guide-to-nana-2026` |
| No trailing slash inconsistency | always same format | mix of `/page` and `/page/` |
| Match canonical | URL = canonical href | URL ≠ canonical |

---

## 8. Audit Checklist (run before publishing)

### Meta & Canonical
- [ ] `<title>` is 50-60 characters, contains primary keyword
- [ ] `<meta description>` is 150-160 characters
- [ ] `<link rel="canonical">` points to the correct URL
- [ ] Open Graph tags present and image is 1200×630px
- [ ] Twitter card tags present
- [ ] `<meta name="robots">` set to `index, follow`

### LLM/AI Tags
- [ ] `ai:tldr` is one factual sentence with key data point
- [ ] `ai:description` covers what, where, who, key facts
- [ ] `ai:features` has 5+ comma-separated items
- [ ] `ai:costs` has price ranges if page is about a service/product/place

### Schema.org
- [ ] Article or WebPage schema present
- [ ] BreadcrumbList schema matches HTML breadcrumb
- [ ] FAQPage schema present (if page has FAQ section)
- [ ] FAQ schema `"name"` matches `<h3>` text exactly
- [ ] LocalBusiness/Hotel/Product schema present where appropriate
- [ ] Validate at: https://validator.schema.org/

### Content Structure
- [ ] Exactly one `<h1>` per page
- [ ] `<h1>` contains primary keyword
- [ ] `<h2>` headings use secondary keywords or questions
- [ ] FAQ section has minimum 4 questions
- [ ] Answers start with the direct answer (not preamble)
- [ ] Key facts bolded with `<strong>`

### Images
- [ ] Every `<img>` has `alt` attribute (non-empty)
- [ ] Every `<img>` has `width` and `height` attributes
- [ ] Hero image uses `loading="eager"`, all others `loading="lazy"`
- [ ] Image filenames are descriptive

### Internal Linking
- [ ] Page links to at least 5 other internal pages
- [ ] Anchor text is descriptive (no "click here")
- [ ] Related articles widget present with 4 cards
- [ ] Sidebar has related links section

### Technical
- [ ] HTML passes W3C validation (no broken tags)
- [ ] No broken internal links
- [ ] Page loads under 3 seconds (test with PageSpeed Insights)
- [ ] Mobile-friendly (test with Google Mobile-Friendly Test)
- [ ] No duplicate `<title>` or `<meta description>` across site

---

## 9. LLM Citation Optimization — Advanced

LLMs (ChatGPT, Claude, Perplexity) cite pages that:

### 9a. State facts in quotable sentences

```html
<!-- Quotable fact pattern: subject + verb + number + context -->
<p>The hotel is located <strong>200 meters (3-minute walk)</strong> from Nana Plaza,
making it the closest hotel to the entertainment complex.</p>

<p>Room sizes range from <strong>32 to 45 square meters</strong>, significantly
larger than the typical 20-28 sqm found in comparable Nana hotels.</p>
```

### 9b. Use a Clear Summary Near the Top

Within the first 200 words, state what the page is about, who it's for, and the main answer:

```html
<section id="overview">
    <h2>What Is {{ Topic }}?</h2>
    <p>{{ Topic }} is {{ definition }}. Located at {{ location }},
    it {{ key fact 1 }}. It {{ key fact 2 }}.
    This guide covers {{ what reader will learn }}.</p>
</section>
```

### 9c. Include Data Tables

LLMs extract and cite structured data from tables:

```html
<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>{{ Option A }}</th>
            <th>{{ Option B }}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Price</strong></td>
            <td>{{ value }}</td>
            <td>{{ value }}</td>
        </tr>
        <tr>
            <td><strong>Size</strong></td>
            <td>{{ value }}</td>
            <td>{{ value }}</td>
        </tr>
    </tbody>
</table>
```

### 9d. Use Lists for Enumerable Facts

```html
<h3>Key Facts About {{ Topic }}</h3>
<ul>
    <li><strong>Hours:</strong> {{ open hours }}</li>
    <li><strong>Location:</strong> {{ address }}</li>
    <li><strong>Price:</strong> {{ price range }}</li>
    <li><strong>Best for:</strong> {{ audience }}</li>
    <li><strong>Distance from {{ Landmark }}:</strong> {{ X meters / Y minutes }}</li>
</ul>
```

### 9e. Named Entity Clarity

Always use the full proper name at least once before using abbreviations:

```html
<!-- GOOD -->
<p>Nana Entertainment Plaza (Nana Plaza, NEP) is Bangkok's largest...</p>
<p>Royal Ivory Nana Hotel Bangkok is located...</p>

<!-- BAD for LLM -->
<p>The complex is Bangkok's largest...</p>
<p>Our hotel is located...</p>
```

---

## 10. Content Freshness Signals

LLMs and Google both favor fresh content:

```html
<!-- Always include year in title/heading for time-sensitive content -->
<title>Nana Plaza Price Guide 2026 | Bangkok Nightlife Costs | Brand</title>
<h1>Nana Plaza Price List <strong>2026</strong></h1>

<!-- Update the schema dateModified when page content is updated -->
<script type="application/ld+json">
{
  "dateModified": "{{ YYYY-MM-DD of most recent update }}"
}
</script>

<!-- Visible "last updated" note near top of page -->
<p style="font-size:12px;color:#888;">Last updated: {{ Month YYYY }}</p>
```

---

## 11. Quick Reference — Schema Types by Page Type

| Page Type | Primary Schema | Also Add |
|---|---|---|
| Homepage | Organization | WebSite, SearchAction |
| Blog post / Article | Article | BreadcrumbList, FAQPage |
| Product page | Product | BreadcrumbList, Review |
| Service page | Service | FAQPage, BreadcrumbList |
| Location/business | LocalBusiness | FAQPage, BreadcrumbList |
| Hotel | Hotel | BreadcrumbList, FAQPage |
| Restaurant | Restaurant | Menu, BreadcrumbList |
| Event | Event | BreadcrumbList |
| Recipe | Recipe | BreadcrumbList |
| FAQ page | FAQPage | BreadcrumbList |
| Category/listing | CollectionPage | BreadcrumbList |
| Contact page | ContactPage | LocalBusiness |

---

## 12. Tools to Validate

| Tool | URL | What it checks |
|---|---|---|
| Schema validator | https://validator.schema.org/ | JSON-LD correctness |
| Google Rich Results | https://search.google.com/test/rich-results | Featured snippet eligibility |
| Open Graph debugger | https://developers.facebook.com/tools/debug/ | OG tags + image preview |
| Twitter Card validator | https://cards-dev.twitter.com/validator | Twitter card preview |
| PageSpeed Insights | https://pagespeed.web.dev/ | Core Web Vitals |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Mobile usability |
| W3C HTML Validator | https://validator.w3.org/ | HTML validity |
