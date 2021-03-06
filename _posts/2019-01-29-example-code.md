---
layout: post
title:  "Test"
date:   2019-01-28 15:58:16 -0000
categories: [test]
tags: [test]
published: true
hidden: true
author: "Bart Simpson"
meta: "Springfield"
permalink: test
---



### Image Test

{% highlight html%}{% raw %}
![Test](/assets/GetOnMyLevel.jpg)
{% endraw %}{% endhighlight %}
![Test](/assets/GetOnMyLevel.jpg)


![Image](/assets/SuperMemo.png){:height="20%" width="20%" style="float: right"}


### References

- [SuperMemo 20 Rules][SuperMemo20Rules] by Dr Piotr Wozniak
- [How to Remember Anything Forever-ish][NCaseRemember] by Nicky Case
- [Fluent Forever: How to Learn Any Language Fast and Never Forget It][FluentForever] by Gabriel Wyner


[SuperMemo20Rules]: https://www.supermemo.com/en/articles/20rules
[NCaseRemember]: https://ncase.me/remember/
[FluentForever]: https://www.goodreads.com/book/show/19661852-fluent-forever


### Links to other pages

[Url link to the testing page]({% post_url 2019-01-30-anki-beginner-instructions %})



## Tables

| Test                       |                                Other |
| :------------------------- | -----------------------------------: |
| testinfjdsfgdsfndskjfdskfn | sdfjkdsfndsfssskdfkdsjfndsjkfnjkdsnf |
| no                         |                         yesfsdfdsffs |

>Use Alt+Shift+F to reformat the table



## Youtube Videos

<iframe width="400" height="300" src="https://www.youtube.com/embed/QS2G-k2hQyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

###### Set Manual Image, and have it link to video
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=QS2G-k2hQyg&yt%3Acc=on)


## Heading References

[Image Test](#image-test)
Reference needs to be lower case, with spaces changes to -s



### Emojis
:smile: :worried: :+1:


### Liquid tips and tricks

[Liquid Help Page][Liquid]

[Liquid]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

#### List all tags with commas
{% highlight liquid%}{% raw %}
    {% assign tagNum = post.tags.size %}
    {% if tagNum > 1 %} {% for i in (0..(tagNum-1)) %}
        {{ post.tags[i] }},
    {% endfor %} {% endif %}
    {{ post.tags.last }}
{% endraw %}{% endhighlight %}

#### Non Breaking Characters:

| NB space | &nbsp; |
| NB - | &#8209; |