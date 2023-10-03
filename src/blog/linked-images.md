---

layout: base.njk
title: Linked images
date: 2023-10-03
description: How to write alt text for linked images

---

# How to write <abbr title="alternative">alt</abbr> text for linked images

When starting out in learning about accessibility, one of the first things you're often told is: 

"You must provide a description for all images". 

This description is known as alternative text but is generally shortened to <strong>alt text</strong>. 

The advice that follows is usually something along the lines of:

"Provide a succinct but clear description of any image on the page so that someone who cannot see the page can still enjoy and understand the content &hellip;"

The teacher may even go on to provide a further hint such as:

"Imagine you were describing the page content to someone over the phone. How would you describe the image in context?"

When the image communicates information that is helpful or relevant for the website visitor, this is good advice and should certainly be followed. 

But, what if the image is wrapped in a link element? 

## Linked or 'functional' images

It is common in websites these days to wrap images in links in order to provide a visually engaging, large click or tap target area in interfaces. For example, linked images are use liberally across the web as part of <a href="https://www.nomensa.com/blog/how-build-accessible-cards-block-links/">'card' components</a>. 

The key thing to be aware of is once we've wrapped an image in a link it now performs an action if we were to interact with it. Or, the image is now 'functional'. <strong>Now, as opposed to describing the content and emotion of the image in the alt text, we should describe the link purpose or destination</strong>. Because the alt text is now acting as the description of the link not the image. 

Here is is how the HTML would change between a standard image description and a functional image description. 

    <code>
        &lt;img src="/path" alt="Scientist inspecting a petri dish in a lab setting"&gt;
    </code>


     <code>
       &lt;a href="/path-to-scientific-article"&gt; &lt;img src="/path" alt="Head to our blog for the June laboratory update "&gt; &lt;/a&gt;
    </code>

That's it. That's all for this post! 