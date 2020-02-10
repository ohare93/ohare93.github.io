---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

This blog is dedicated to anything and everything I find interesting, such as Learning :books:, Programming :keyboard:, Denmark :denmark:, Board Games :game_die:, and Self Improvement :+1:{% include margin.html content="If I ever eventually start posting regularly, that is!" %}


<div class="home">


<h2>Posts</h2>


<ul>
  {% for post in site.posts %}
    {% if post.hidden != true and post.categories[0] != "Tool" %}
      <li><a href="{{ post.url }}">{{ post.title-prepend }} {{ post.title }} {{ post.title-append }}</a>
        <br>
        <h5>{{ post.date | date: "%-d %B %Y" }} - {{ post.categories | array_to_sentence_string }}</h5>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<!-- Production Only Code -->
{% if jekyll.environment != 'production' %}
<h2>:exclamation: Dev Only Posts :exclamation:</h2>
<ul>
  {% for post in site.posts %}
    {% if post.hidden == true %}
    <li><a href="{{ post.url }}">{{ post.title }}</a>
       <br>
       <h5>{{ post.date | date: "%-d %B %Y" }} - {{ post.categories | array_to_sentence_string: "" }}</h5>
    </li>
    {% endif %}
  {% endfor %}
</ul>

{% endif %}
<!-- Production Only Code -->


<h2>Tools :gear: :hammer:</h2>
<ul>
  {% for post in site.posts %}
    {% if post.hidden != true %}
      {% for category in post.categories %}
        {% if category == 'Tool' %}
          <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <br>
            <h5>{{ post.description }}</h5>
          </li>
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
</ul>


<h6>
Last Updated at: {{ site.time }}
</h6>
</div>