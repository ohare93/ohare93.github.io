---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

This blog is dedicated to anything and everything I find interesting, such as Learning :books:, Programming :keyboard:, Denmark :denmark:, Board Games :game_die:, and Self Improvement :+1:


<div class="home">


<h2>Posts</h2>


<ul>
  {% for post in site.posts %}
    {% if post.hidden != true and post.categories[0] != "Tool" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a>
        <br>
        <h5>{{ post.date | date: "%-d %B %Y" }} - {{ post.categories | array_to_sentence_string: "|" }} - {{ post.tags | array_to_sentence_string: "|" }}</h5>
      </li>
    {% endif %}
  {% endfor %}
</ul>


{% if jekyll.environment != 'production' %}
<h2>Dev Only Posts</h2>
<ul>
  {% for post in site.posts %}
    {% if post.hidden == true %}
    <li><a href="{{ post.url }}">{{ post.title }}</a>
       <br>
       <h5>{{ post.date | date: "%-d %B %Y" }} - {{ post.categories | array_to_sentence_string: "|" }} - {{ post.tags | array_to_sentence_string: "|" }}</h5>
    </li>
    {% endif %}
  {% endfor %}
</ul>

{% endif %}


<h3>Tools</h3>
<ul>
  {% for post in site.posts %}
    {% if post.hidden != true %}
      {% for category in post.categories %}
        {% if category == 'Tool' %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
</ul>


<h6>
Last Updated at: {{ site.time }}
</h6>
</div>