---
description: Blogs
title: All blogs
layout: "base.njk"
---

  <h1>Blogs</h1>

  <ul class="blogs-list">

  {%- for post in collections.post reversed -%}
    
  <li>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{post.data.description}} <span class="post-date">&nbsp;·&nbsp;{{post.data.date | postDate}}</span></p> 
  </li>

{%- endfor -%} 

  </ul>






