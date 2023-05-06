---
title: "VI. 경과조치"
excerpt: "경과조치."
toc: false
---

<ul>
{% for document in site.kics %}
  {% if document.categories contains 'trans' %}
    <h2><a href="{{ document.url }}">{{ document.title }}</a></h2>
    <p>{{ document.excerpt | strip_html | truncatewords: 45, '...' }}</p>
  {% endif %}
{% endfor %}
</ul>
