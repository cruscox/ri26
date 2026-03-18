# Skill: Create a New Royal Ivory Hotel Article Page

Use this skill whenever you need to build a new HTML article, guide, or hotel page
for the Royal Ivory Nana Hotel Bangkok website (royalivory.com).

---

## 1. File Naming Rules

- Filename: lowercase, hyphenated, descriptive, end in `.html`
- Examples: `nana-safety-guide.html`, `sukhumvit-soi-4-hotel.html`
- Canonical URL always: `https://www.royalivory.com/FILENAME.html`

---

## 2. Three Page Types

| Type | Use For | Schema |
|---|---|---|
| **Article/Guide** | Nana Plaza guides, Bangkok area articles | FAQPage + NightClub/TouristAttraction |
| **Hotel Page** | Hotel comparison, hotel feature pages | Hotel + BreadcrumbList |
| **Area/Info Guide** | Neighbourhood, transport, services | Article + BreadcrumbList |

---

## 3. Complete HTML Head Template

Replace ALL `{{ }}` placeholders before saving.

```html
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

<!-- Basic Page Needs -->
<meta charset="utf-8"><link rel="manifest" href="/manifest.json"><link rel="alternate" type="application/rss+xml" title="Royal Ivory Hotel Bangkok" href="/feed.xml"><link rel="security" href="/.well-known/security.txt">
<title>{{ PAGE TITLE | Target Keyword | Royal Ivory Hotel }}</title>
<meta name="description" content="{{ 150-160 char description. Include primary keyword, hotel name, and value prop. }}">
<meta name="keywords" content="{{ keyword1, keyword2, keyword3, nana bangkok, royal ivory hotel }}">
<meta name="author" content="Royal Ivory Nana Hotel Bangkok">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

<!-- Canonical URL -->
<link rel="canonical" href="https://www.royalivory.com/{{ filename.html }}">

<!-- AI-Specific Meta Tags (Article/Guide pages) -->
<meta name="ai:tldr" content="{{ One sentence: what this page covers, key facts, distance from hotel. }}">
<meta name="ai:description" content="{{ 2-3 sentences covering what, where, who it's for, key facts. }}">
<meta name="ai:features" content="{{ comma-separated list of features/highlights }}">
<meta name="ai:location_context" content="{{ Sukhumvit Soi 4, distance from Royal Ivory Hotel, BTS access }}">
<meta name="ai:costs" content="{{ price ranges in Thai Baht if applicable }}">

<!-- Open Graph (Hotel pages + Area Guides — include on all new pages) -->
<meta property="og:type" content="{{ article | hotel }}">
<meta property="og:url" content="https://www.royalivory.com/{{ filename.html }}">
<meta property="og:title" content="{{ Same as <title> }}">
<meta property="og:description" content="{{ Same as meta description }}">
<meta property="og:image" content="https://www.royalivory.com/img/royal-ivory-hotel-building.jpg">
<meta property="og:site_name" content="Royal Ivory Nana Hotel Bangkok">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ Same as <title> }}">
<meta name="twitter:description" content="{{ Same as meta description }}">
<meta name="twitter:image" content="https://www.royalivory.com/img/royal-ivory-hotel-building.jpg">

<!-- Google web font -->
<link href='https://fonts.googleapis.com/css?family=Terminal+Dosis|PT+Sans+Narrow:400,700|Nothing+You+Could+Do' rel='stylesheet' type='text/css'>

<!-- Mobile Specific Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- CSS -->
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/skeleton.css">
<link rel="stylesheet" href="css/menu.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/optimized-pages.css">
```

---

## 4. Schema.org JSON-LD (paste before `</head>`)

### 4a. Article/Guide Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ Full H1 text }}",
  "description": "{{ Meta description }}",
  "author": {"@type": "Organization", "name": "Royal Ivory Nana Hotel Bangkok"},
  "publisher": {"@type": "Organization", "name": "Royal Ivory Nana Hotel Bangkok", "url": "https://www.royalivory.com"},
  "datePublished": "2026-01-01",
  "dateModified": "2026-03-18"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.royalivory.com/"},
    {"@type": "ListItem", "position": 2, "name": "{{ Parent Section }}", "item": "https://www.royalivory.com/{{ parent.html }}"},
    {"@type": "ListItem", "position": 3, "name": "{{ This Page Name }}", "item": "https://www.royalivory.com/{{ filename.html }}"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{ Question text — match H3 in FAQ section exactly }}",
      "acceptedAnswer": {"@type": "Answer", "text": "{{ Full answer text }}"}
    },
    {
      "@type": "Question",
      "name": "{{ Question 2 }}",
      "acceptedAnswer": {"@type": "Answer", "text": "{{ Answer 2 }}"}
    }
  ]
}
</script>
```

### 4b. Hotel Page Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Royal Ivory Nana Hotel Bangkok",
  "alternateName": "Royal Ivory Nana",
  "slogan": "Best Hotel in Nana Bangkok - Authentic Thai Style & Quiet Comfort",
  "description": "{{ Hotel description focused on page topic }}",
  "url": "https://www.royalivory.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "73 Sukhumvit 4 Alley",
    "addressLocality": "Khwaeng Khlong Toei",
    "addressRegion": "Bangkok",
    "postalCode": "10110",
    "addressCountry": "Thailand"
  },
  "geo": {"@type": "GeoCoordinates", "latitude": 13.7434, "longitude": 100.5538},
  "telephone": "+6626567888",
  "email": "reservations@royalivory.com",
  "priceRange": "$$",
  "starRating": {"@type": "Rating", "ratingValue": "3"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "reviewCount": "850",
    "bestRating": "5",
    "worstRating": "1"
  },
  "numberOfRooms": 90,
  "checkInTime": "14:00",
  "checkOutTime": "12:00",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Outdoor Swimming Pool", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "No Joiner Charge", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Free Breakfast", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Laundry Service", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Airport Transfer", "value": true}
  ],
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 18,
    "audienceType": "International Travelers, Solo Travelers, Group Travelers, Male Travelers"
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.royalivory.com/"},
    {"@type": "ListItem", "position": 2, "name": "{{ This Page Name }}", "item": "https://www.royalivory.com/{{ filename.html }}"}
  ]
}
</script>
```

### 4c. NightLife/Attraction Schema (for Nana Plaza articles)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NightClub",
  "name": "{{ Venue Name }}",
  "alternateName": ["{{ Alt name 1 }}", "{{ Alt name 2 }}"],
  "description": "{{ Venue description }}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4 Sukhumvit Road, Soi 4",
    "addressLocality": "Khlong Toei District",
    "addressRegion": "Bangkok",
    "postalCode": "10110",
    "addressCountry": "Thailand"
  },
  "geo": {"@type": "GeoCoordinates", "latitude": 13.7434, "longitude": 100.5538},
  "openingHours": "Mo-Su 18:00-02:00",
  "touristType": ["Adult Entertainment Seekers", "Nightlife Enthusiasts", "International Visitors", "Business Travelers"]
}
</script>
```

---

## 5. Complete Navigation (copy exactly — only change active page style)

```html
<header>
<div class="container">
	<div class=" four columns" id="logo"><a href="index.html">Royal Ivory Nana Hotel</a></div>
	<div class="twelve columns">
	<ul id="lang">
		<li><a href="zh-CN.html">简体字</a></li>
		<li><a href="ar.html">العربية</a></li>
		<li><a href="ja.html">日本語</a></li>
		<li><a href="ko.html">한국어</a></li>
		<li><a href="th.html">ไทย</a></li>
		<li><a href="about.html">More</a></li>
	</ul>
	</div>
	<div class="twelve columns">
		<nav>
	<ul id="main-nav" class="sf-menu">
		<li><a href="index.html">Home</a></li>
		<li><a href="about.html">About</a>
		<ul>
			<li><a href="rooms.html">Rooms</a></li>
			<li><a href="restaurant.html">Restaurant</a></li>
			<li><a href="360pano.html">Panoramic View</a></li>
		</ul></li>
		<li><a href="promotions.html">Promotions</a></li>
		<li><a href="about.html">Articles</a>
		<ul>
			<li><a href="bangkok.html">Ivory & Bangkok</a>
			<ul>
				<li><a href="benjakitti-park.html">Benjakitti Park</a></li>
				<li><a href="wat-arun-temple.html">Wat Arun Temple</a></li>
				<li><a href="floating-market.html">Floating Market</a></li>
				<li><a href="chatuchak-weekend-market.html">Chatuchak Market</a></li>
				<li><a href="muay-thai-boxing.html">Muay Thai Boxing</a></li>
				<li><a href="chinatown-bangkok.html">Chinatown</a></li>
				<li><a href="grand-palace-bangkok.html">Grand Palace</a></li>
				<li><a href="jim-thompson-house.html">Jim Thompson House</a></li>
			</ul></li>
			<li><a href="nightlife.html">Night Life</a>
			<ul>
				<li><a href="nana-plaza.html">Nana Plaza</a></li>
				<li><a href="soi-cowboy.html">Soi Cowboy</a></li>
				<li><a href="patpong.html">Patpong</a></li>
				<li><a href="rca-clubs.html">RCA Clubs</a></li>
				<li><a href="khao-san-road.html">Khao San Road</a></li>
				<li><a href="bed-supperclub.html">BED Supperclub</a></li>
				<li><a href="bangkok-night-markets.html">Night Markets</a></li>
			</ul></li>
			<li><a href="malls.html">Shopping Malls</a>
			<ul>
				<li><a href="terminal-21.html">Terminal 21</a></li>
				<li><a href="central-world.html">Central World</a></li>
				<li><a href="mbk-center.html">MBK Center</a></li>
				<li><a href="siam-paragon.html">Siam Paragon</a></li>
				<li><a href="pratunam-fashion.html">Pratunam Fashion</a></li>
				<li><a href="emquartier-emporium.html">EmQuartier & Emporium</a></li>
			</ul></li>
			<li><a href="nana-plaza.html">Nana Plaza</a>
			<ul>
				<li><a href="nana-plaza.html">Nana Plaza</a></li>
				<li><a href="nana-pricing-guide.html">Nana Pricing Guide</a></li>
				<li><a href="nana-safety-guide.html">Nana Safety Guide</a></li>
				<li><a href="nana-bangkok-area-guide.html">Nana Area Guide</a></li>
				<li><a href="soi-cowboy-vs-nana.html">Soi Cowboy vs Nana</a></li>
				<li><a href="bangkok-nightlife-guide.html">Bangkok Nightlife Guide</a></li>
				<li><a href="budget-travel-bangkok-guide.html">Budget Travel Bangkok</a></li>
				<li><a href="first-time-bangkok-guide.html">First Time Bangkok</a></li>
				<li><a href="solo-travel-bangkok-guide.html">Solo Travel Bangkok</a></li>
				<li><a href="soi-4-directory.html">Soi 4 Directory</a></li>
			</ul></li>
			<li><a href="best-hotel-nana-bangkok.html">Bangkok Hotels</a>
			<ul>
				<li><a href="best-hotel-nana-bangkok.html">Best Hotel Nana Bangkok</a></li>
				<li><a href="hotel-near-nana-plaza-bangkok.html">Hotel Near Nana Plaza</a></li>
				<li><a href="nana-bangkok-hotel-guide.html">Nana Hotel Guide</a></li>
				<li><a href="bangkok-hotels-no-joiner-charge.html">No Joiner Charge Hotels</a></li>
				<li><a href="adult-friendly-hotel-bangkok.html">Adult Friendly Hotel</a></li>
				<li><a href="nightlife-hotel-bangkok.html">Nightlife Hotel</a></li>
				<li><a href="bts-nana-hotel.html">BTS Nana Hotel</a></li>
				<li><a href="hotel-with-pool-nana-bangkok.html">Hotel with Pool</a></li>
				<li><a href="quiet-hotel-nana-area.html">Quiet Hotel Nana</a></li>
				<li><a href="sukhumvit-soi-4-hotel.html">Sukhumvit Soi 4 Hotel</a></li>
				<li><a href="couples-hotel-bangkok.html">Couples Hotel Bangkok</a></li>
				<li><a href="long-stay-hotel-bangkok.html">Long Stay Hotel</a></li>
				<li><a href="hotel-breakfast-included-bangkok.html">Hotel with Breakfast</a></li>
				<li><a href="weekend-hotel-bangkok.html">Weekend Hotel Bangkok</a></li>
				<li><a href="hotel-near-terminal-21-bangkok.html">Hotel Near Terminal 21</a></li>
				<li><a href="hotel-groups-friends-bangkok.html">Hotel for Groups</a></li>
				<li><a href="best-3-star-hotels-bangkok.html">Best 3-Star Hotels</a></li>
				<li><a href="budget-hotel-sukhumvit-bangkok.html">Budget Hotel Sukhumvit</a></li>
				<li><a href="thai-style-hotel-bangkok.html">Thai Style Hotel</a></li>
				<li><a href="expat-hotel-bangkok.html">Expat Hotel Bangkok</a></li>
				<li><a href="family-hotel-bangkok.html">Family Hotel Bangkok</a></li>
				<li><a href="late-checkout-hotel-bangkok.html">Late Checkout Hotel</a></li>
			</ul></li>
		</ul></li>
		<li><a href="contacts.html">Contact us</a></li>
		<li><a href="budget_bangkok_gallery_columns.html">Gallery</a></li>
		<li><a href="#" target="_blank" rel="noopener">Other Hotels</a>
				<ul>
				<li><a href="https://www.andatelhotel.com" target="_blank" rel="noopener">Andatel Patong Phuket</a></li>
				<li><a href="https://www.miragepatong.com" target="_blank" rel="noopener">Mirage Patong</a></li>
				<li><a href="https://www.phoenixpatong.com" target="_blank" rel="noopener">Phoenix Patong</a></li>
				<li><a href="https://www.phoenixkaron.com" target="_blank" rel="noopener">Phoenix Karon</a></li>
				</ul></li>
	</ul>
	</nav>
	</div>
</div>
</header>
```

### Active Page Styling Rule

Find the nav `<a>` tag that matches the CURRENT page and add `style="color:#8B4513;"`:

```html
<!-- Example: if building nana-safety-guide.html -->
<li><a href="nana-safety-guide.html" style="color:#8B4513;">Nana Safety Guide</a></li>
```

Only ONE link in the entire nav gets this style — the exact current page.

---

## 6. Page Body Template

### 6a. Breadcrumb (just after `</header>`)

```html
<!-- Breadcrumb Navigation -->
<div class="container">
	<div class="sixteen columns">
		<div style="font-size:12px; margin:10px 0; color:#666;">
			<a href="index.html" style="color:#666;">Home</a> »
			<a href="{{ parent.html }}" style="color:#666;">{{ Parent Name }}</a> »
			<span>{{ This Page Name }}</span>
		</div>
	</div>
</div>
```

For hotel pages (2-level breadcrumb):
```html
<div class="container">
	<div class="sixteen columns">
		<div style="font-size:12px; margin:10px 0; color:#666;">
			<a href="index.html" style="color:#666;">Home</a> »
			<span>{{ This Page Name }}</span>
		</div>
	</div>
</div>
```

### 6b. Hero Section + Two-Column Layout

```html
<div class="container">
	<div class="sixteen columns add-bottom">
		<h1>{{ Primary Keyword }} <strong>{{ Brand/Qualifier }}</strong><span>{{ Subtitle with key facts }}</span></h1>
		<div style="font-size:13px;color:#666;margin:10px 0;">
			{{ emoji }} {{ Key Fact 1 }} | {{ emoji }} {{ Key Fact 2 }} | {{ emoji }} {{ Key Fact 3 }} | {{ emoji }} {{ Key Fact 4 }}
		</div>
	</div>

	<!-- Main Content (11 cols) + Sidebar (5 cols) -->
	<div class="eleven columns">
		<!-- CONTENT SECTIONS GO HERE -->
	</div>

	<aside class="five columns omega">
		<!-- SIDEBAR GOES HERE -->
	</aside>
</div>
```

### 6c. Content Sections Template

Each major topic gets a `<section>` with an anchor `id`. Suggested sections:

```html
<section id="overview">
	<h2>{{ Section Title }}</h2>
	<div class="four columns picture alpha">
		<img src="img/articles/{{ image-name.jpg }}"
			alt="{{ descriptive alt text with keyword }}"
			title="{{ Hover title }}"
			class="scale-with-grid"
			width="270"
			height="405"
			style="aspect-ratio: 2/3; object-fit: cover;">
	</div>
	<div class="seven columns omega">
		<p>{{ Content paragraph. Bold key facts with <strong>. }}</p>
		<ul class="list_4">
			<li>{{ Bullet point }}</li>
		</ul>
	</div>
</section>

<section id="details">
	<h2>{{ Section 2 Title }}</h2>
	<p>{{ Content }}</p>

	<!-- Green info box -->
	<div style="background:#e8f5e8; padding:20px; margin:20px 0; border-radius:8px; border-left:4px solid #27ae60;">
		<h4 style="color:#27ae60; margin-bottom:10px;">{{ emoji }} {{ Box Title }}</h4>
		<p>{{ Content }}</p>
	</div>

	<!-- Yellow tip box -->
	<div style="background:#fff3cd; padding:15px; margin:15px 0; border-left:4px solid #ffc107;">
		<p><strong>💡 {{ Tip Title }}:</strong></p>
		<p>{{ Tip content }}</p>
	</div>

	<!-- Blue info box -->
	<div style="background:#f9f9f9; padding:15px; margin:15px 0; border-left:4px solid #17a2b8;">
		<p><strong>{{ emoji }} {{ Info Title }}</strong></p>
		<p>{{ Info content }}</p>
	</div>
</section>

<section id="faq">
	<h2>Frequently Asked Questions</h2>

	<div class="faq-item">
		<h3>{{ Question — must match FAQPage schema exactly }}</h3>
		<p>{{ Answer with <strong> on key facts }}</p>
	</div>

	<div class="faq-item">
		<h3>{{ Question 2 }}</h3>
		<p>{{ Answer 2 }}</p>
	</div>
</section>

<section id="royal-ivory-advantage">
	<h2>Why Stay at Royal Ivory Hotel</h2>
	<div style="background:#e8f5e8; padding:20px; margin:20px 0; border-radius:8px; border-left:4px solid #27ae60;">
		<h4 style="color:#27ae60; margin-bottom:10px;">🏨 200 Meters from {{ Topic }}</h4>
		<ul class="list_4">
			<li>{{ Advantage 1 }}</li>
			<li>{{ Advantage 2 }}</li>
			<li>{{ Advantage 3 }}</li>
		</ul>
	</div>
	<a href="https://ibe.hoteliers.guru/ibe/en/Royal-Ivory-Nana-Hotel-Bangkok-Klong-Toey-Bangkok-TH?utm_source=royalivory&utm_medium={{ filename-without-extension }}&utm_id=directweb"
		target="_blank" rel="noopener"
		style="display:inline-block;background:#27ae60;color:white;padding:12px 20px;text-decoration:none;border-radius:5px;font-weight:bold;margin-right:10px;">
		View Rooms & Book Direct
	</a>
	<a href="promotions.html"
		style="display:inline-block;background:#f39c12;color:white;padding:12px 20px;text-decoration:none;border-radius:5px;font-weight:bold;">
		See Current Promotions
	</a>
</section>
```

### 6d. Table Template

```html
<table class="facilities-table">
	<thead>
		<tr>
			<th>{{ Column 1 }}</th>
			<th>{{ Column 2 }}</th>
			<th>{{ Column 3 }}</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>{{ Row Label }}</strong></td>
			<td>{{ Value }}</td>
			<td>{{ Value }}</td>
		</tr>
	</tbody>
</table>
```

For hotel comparison tables, highlight Royal Ivory values in green:
```html
<td style="color:#27ae60;"><strong>{{ Royal Ivory Value }}</strong></td>
```

### 6e. Sidebar Template

```html
<aside class="five columns omega">

	<!-- Booking CTA -->
	<div id="check_avail" class="add-bottom">
		<h2>{{ Short Value Prop }}</h2>
		<p>{{ Supporting sentence }}</p>
		<a href="https://ibe.hoteliers.guru/ibe/en/Royal-Ivory-Nana-Hotel-Bangkok-Klong-Toey-Bangkok-TH?utm_source=royalivory&utm_medium={{ filename-without-extension }}&utm_id=directweb"
			target="_blank" rel="noopener">
			<button type="submit" class="button_yellow">CHECK RATES & BOOK</button>
		</a>
	</div>

	<!-- Quick Navigation -->
	<div style="background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;padding:15px;margin-bottom:20px;">
		<h4 style="margin-bottom:12px;color:#495057;font-size:14px;">{{ emoji }} {{ Page Title }}</h4>
		<ul style="list-style:none;margin:0;padding:0;">
			<li style="margin-bottom:8px;border-bottom:1px solid #f1f3f4;padding-bottom:6px;">
				<a href="#overview" style="color:#007bff;text-decoration:none;font-size:12px;display:block;padding:4px 8px;">{{ Section Name }}</a>
			</li>
			<li style="margin-bottom:8px;border-bottom:1px solid #f1f3f4;padding-bottom:6px;">
				<a href="#details" style="color:#007bff;text-decoration:none;font-size:12px;display:block;padding:4px 8px;">{{ Section Name }}</a>
			</li>
			<li style="margin-bottom:8px;border-bottom:1px solid #f1f3f4;padding-bottom:6px;">
				<a href="#faq" style="color:#007bff;text-decoration:none;font-size:12px;display:block;padding:4px 8px;">FAQ</a>
			</li>
		</ul>
	</div>

	<!-- Related Internal Links -->
	<div style="background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;padding:15px;margin-bottom:20px;">
		<h4 style="color:#495057;font-size:14px;margin-bottom:12px;">🔗 {{ Category Name }}</h4>
		<ul class="list_4">
			<li><a href="{{ related-page.html }}">{{ Link Text }}</a></li>
			<li><a href="{{ related-page.html }}">{{ Link Text }}</a></li>
			<li><a href="{{ related-page.html }}">{{ Link Text }}</a></li>
			<li><a href="{{ related-page.html }}">{{ Link Text }}</a></li>
			<li><a href="{{ related-page.html }}">{{ Link Text }}</a></li>
		</ul>
	</div>

</aside>
```

### 6f. Related Articles Widget (below two-column section)

```html
<!-- Related Articles Widget -->
<div class="container">
	<div class="sixteen columns">
		<hr style="margin-top: 40px;">
		<section id="related-articles" style="background:#f8f9fa;border-radius:8px;padding:30px;margin:30px 0;">
			<h3 style="text-align:center;margin-bottom:25px;color:#333;">📚 {{ Related Articles Section Title }}</h3>
			<div class="sixteen columns">
				<div class="four columns alpha">
					<div style="background:white;border-radius:8px;padding:20px;height:200px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
						<h4 style="font-size:16px;margin-bottom:10px;"><a href="{{ page1.html }}" style="color:#333;text-decoration:none;">{{ Title 1 }}</a></h4>
						<p style="font-size:14px;color:#666;line-height:1.4;">{{ 1-sentence description }}</p>
						<p style="margin-top:15px;"><a href="{{ page1.html }}" style="color:#007bff;font-size:13px;">{{ Read More }} →</a></p>
					</div>
				</div>
				<div class="four columns">
					<div style="background:white;border-radius:8px;padding:20px;height:200px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
						<h4 style="font-size:16px;margin-bottom:10px;"><a href="{{ page2.html }}" style="color:#333;text-decoration:none;">{{ Title 2 }}</a></h4>
						<p style="font-size:14px;color:#666;line-height:1.4;">{{ 1-sentence description }}</p>
						<p style="margin-top:15px;"><a href="{{ page2.html }}" style="color:#007bff;font-size:13px;">{{ Read More }} →</a></p>
					</div>
				</div>
				<div class="four columns">
					<div style="background:white;border-radius:8px;padding:20px;height:200px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
						<h4 style="font-size:16px;margin-bottom:10px;"><a href="{{ page3.html }}" style="color:#333;text-decoration:none;">{{ Title 3 }}</a></h4>
						<p style="font-size:14px;color:#666;line-height:1.4;">{{ 1-sentence description }}</p>
						<p style="margin-top:15px;"><a href="{{ page3.html }}" style="color:#007bff;font-size:13px;">{{ Read More }} →</a></p>
					</div>
				</div>
				<div class="four columns omega">
					<div style="background:white;border-radius:8px;padding:20px;height:200px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
						<h4 style="font-size:16px;margin-bottom:10px;"><a href="{{ page4.html }}" style="color:#333;text-decoration:none;">{{ Title 4 }}</a></h4>
						<p style="font-size:14px;color:#666;line-height:1.4;">{{ 1-sentence description }}</p>
						<p style="margin-top:15px;"><a href="{{ page4.html }}" style="color:#007bff;font-size:13px;">{{ Read More }} →</a></p>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
```

---

## 7. Footer (copy exactly)

```html
<footer>
    <div class="container">
        <nav class="eleven columns home_width">
        <ul id="nav-footer">
            <li><a href="https://www.royalivory.com">Home</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="https://ibe.hoteliers.guru/ibe/en/Royal-Ivory-Nana-Hotel-Bangkok-Klong-Toey-Bangkok-TH?utm_source=royalivory&utm_medium={{ filename-without-extension }}&utm_id=directweb" target="_blank" rel="noopener">Book now</a></li>
            <li><a href="restaurant.html">Restaurant</a></li>
            <li><a href="contacts.html">Contacts</a></li>
        </ul>
        </nav>
    <div class="five columns copy">© 2025/2026 Royal Ivory Nana Hotel. All Rights Reserved.</div>
	<div class="footer-pdf-link">
		<a href="factsheet.pdf" target="_blank">Hotel FactSheet</a>
	</div>
    </div>
</footer>
```

---

## 8. Scripts (paste before `</body>`)

```html
<!-- Scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/functions.js"></script><script src="js/mobile-menu.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
</script>
</body>
</html>
```

---

## 9. Image Guidelines

- Path for article images: `img/articles/{{ image-name.jpg }}`
- Path for hotel/room images: `img/{{ image-name.jpg }}`
- Always include `alt`, `title`, `width`, `height`, `class="scale-with-grid"`
- Add `style="aspect-ratio: 2/3; object-fit: cover;"` for portrait images
- Add `loading="lazy"` on below-the-fold images
- `alt` text: descriptive + include primary keyword naturally
- `title` text: human-readable hover label

---

## 10. UTM Tracking Rule

Every booking link on the page must include the page filename (without `.html`) as the UTM medium:

```
utm_source=royalivory&utm_medium={{ filename-without-extension }}&utm_id=directweb
```

---

## 11. After Creating the File — Checklist

- [ ] `<title>` contains primary keyword + "Royal Ivory Hotel"
- [ ] `<meta name="description">` is 150–160 chars
- [ ] Canonical URL matches filename exactly
- [ ] Active page link in nav has `style="color:#8B4513;"`
- [ ] At least one `<h1>` (only one per page)
- [ ] All `<h2>` and `<h3>` headings use keywords naturally
- [ ] FAQPage schema questions match `<h3>` text in FAQ section exactly
- [ ] All images have `alt` and `title`
- [ ] All booking links have UTM medium = page filename
- [ ] Related articles widget has 4 cards linking to real pages
- [ ] Sidebar has at least 5 internal links to related pages
- [ ] Footer `Book now` link has correct UTM medium
- [ ] No broken `href` references — all linked `.html` files exist in the repo

---

## 12. Adding the New Page to the Nav

After creating the file, run this to update the nav across all existing HTML files:

```bash
# Update the nav submenu where the new page belongs (e.g., Nana Plaza submenu)
# Add: <li><a href="{{ filename.html }}">{{ Menu Label }}</a></li>
# to the correct <ul> block in ALL .html files using sed or a Python script
```

Use the same Python replace-across-all-files approach used in previous nav updates.
