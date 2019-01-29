---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="home">

<!-- <img src="/assets/2019-01-11/6.jpg" />   -->
<p>Test message 1234</p>


<ul>
  {% for post in site.posts %}
    {% if post.menu != 'review' %}
    <li>{{post.categories[0] }} - 
      <a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%-d %B %Y" }} </a>
    </li>
    {% endif %}
  {% endfor %}
</ul>

---

<h1>Posts by Category</h1>

{% assign items = site.categories | sort %}
{% for category in items %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      {% if post.menu != 'review' %}
        <li><a href="{{ post.url }}">{{ post.title }} - {{ post.date | date: "%-d %B %Y" }} </a></li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}
</div>