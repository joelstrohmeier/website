---
description: Blogs
title: All blogs
layout: "base.njk"
---

  <h1>Blogs</h1>

  <ul class="blogs-list" role="list">

  {%- for post in collections.post reversed -%}
    
  <li>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{post.data.description}} <span class="post-date">Published: {{post.data.date | postDate}}</span></p> 
  </li>

{%- endfor -%} 

  </ul>






