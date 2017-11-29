---
layout: page
title: Play
permalink: /play/
feature-img: "img/color.png"
---

Here are couple of my passion projects.
  <div class="play">
    {% for project in site.play limit:6 %}
        <li class="padding-small">
          <img src="{{ project.thumbnail-path }}" alt="{{ project.title }}"/>
          <a href="{{ project.url }}"><h4>{{ project.title }}</h4></a>
          <p>{{ project.short-description }}</p>
        </li>
    {% endfor %}
  </div>

