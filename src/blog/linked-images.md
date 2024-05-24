---

layout: blog_detail.njk
title: How to write alternative text for linked images
date: 2023-10-03
description: A short guide to writing alternative text for linked images 

---

# How to write <abbr title="alternative">alt</abbr> text for linked images

When starting to learn accessibility, we're often told: provide alternative text description for all images. 

At some point, we might gather a bit more detail on writing these descriptions. Something like: 

"Imagine you were describing the page content to someone over the phone. How would you describe the image in context. What is the content and what is the emotion?"

When the image communicates information that is helpful or relevant for the website visitor, we should follow the preceding advice. 

But, when an image is wrapped in a link, we must take a different appproach. We'll look at that now. 

## Linked or 'functional' images

Images are regularly wrapped with links. For example, this approach is commonly found across the web in the build of <a href="https://www.nomensa.com/blog/how-build-accessible-cards-block-links/">'card' components</a>. 

What's important to note is, once the image sits inside a link element it's what's known as a 'functional' image &ndash; it can now be interacted with and its primary role has changed from communicating information to transporting people to a new destination. 

<p class="highlight">
<span class="visually-hidden">Important:</span>So, while the aim for static images is to convey the content and emotion within, for functional images we should use the alternative text to describe the link purpose or destination.
<span class="tag" aria-hidden="true">Highlight</span>
</p>

Let's imagine we have 2 versions of a card component. In the first, the image is not linked. In the second, it is linked and navigates people to a blog article: 

<pre>
<code>
&lt;img src="/lab-photo.jpg" alt="Scientist inspecting a petri dish in a lab setting"&gt;
</code>
</pre>

Now the image is linked, the alt text describes the link destination:
<pre> 
<code>
&lt;a href="/path-to-scientific-article"&gt; &lt;img src="/lab-photo.jpg" alt="Head to our blog for the June laboratory update"&gt; &lt;/a&gt;
</code>
</pre>

To provide a final example. Say we have a linked icon of a phone which takes people to a 'contact us' page. Here is the incorrect and then correct approach to alt text:

<pre>
<code>
&lt;a href="/contact-us"&gt; &lt;img src="/telephone-icon" alt="Phone icon"&gt; &lt;/a&gt;
</code>
</pre>

Rather than describing the appearance of the icon, we instead provide a description of the link destination:

<pre>
<code>
&lt;a href="/contact-us"&gt; &lt;img src="/telephone-icon" alt="Visit contact us form"&gt; &lt;/a&gt;
</code>
</pre>

## Further reading

<p><a href="https://www.w3.org/WAI/tutorials/images/functional/">W3C functional images</a></p>