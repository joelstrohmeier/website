---

layout: base.njk
title: A more accessible web design workflow - some key tips
date: 2024-07-17
description: A few key ways to introduce accessibility best practices to your visual design workflow
tags: post

---

# A more accessible web design workflow &mdash; some key tips

<p class="post-date">Published on {{ date | date: "%B %-d, %Y" }}</p>

Here are some tips to help you to create more accessible visual designs. This is not a complete list. The blog focusses on a few key issues i've seen repeated in designs over the past few years. 

I have assumed that you are aware of some of the more fundamental accessibility principles for designers &mdash; such as the importance of colour contrast and designing with responsive web design in mind. 

I hope it is useful. 

## Provide labels for all form inputs

Provide a text label for each form input included in your designs. 

Don't rely on placeholder text alone. 

By 'placeholder' I mean text (generally light grey text) which sits inside a form input. They are intended to help you understand what type or format of information is suitable for each form input. 

Because placeholders sit inside the input itself &mdash; rather than above or adjacent to the input (which is the case with real labels) &mdash; they are often (over) used in design as a way to save space. 

Placeholders introduce barriers because they:

- generally have poor contrast and so are hard to read
- lead people to think the input has already been filled in
- stop working as an effective prompt because the placeholder disappears as soon as you start writing

## Include button controls for any complex gestures &mdash; such as 'swipe to reveal more'

Designs often include components in which content appears to spill out of the edge of the screen. This visual approach or device has become understood to mean that the user would 'swipe' left or right to reveal more content. A common example of this behaviour is the 'carousel' component.  

Not everyone, however, can complete these swiping gestures. 

People with limited dexterity or limited upper body movement may interact with a keyboard or 'switch' device alone. People with no upper body movement may interact with, for example: 

- eye tracking software 
- head wands
- voice recogntion software 

In any of these cases, they can't 'swipe'. 

To avoid designing these barriers, we should include alternative controls to allow the revelation of more content. The simplest way is to include visible button controls in our designs. For example 'next' and 'previous' buttons next to our carousel component. 

Including these visible controls provides a target for non-mouse/trackpad interactions. For example, as a voice recognition user, I can now say "Click next" and our carousel should slide new content into view. 

Including these controls in our designs from the start helps clarify requirements for developers and helps to avoid these issues being identified in accessibility reviews and testing later in the process. 

As an aside, from a usability perspective, it's worth considering that there's a lot of evidence to suggest that carousels and similar components are often ineffective. <a href="https://shouldiuseacarousel.com/">More information on the user experience pitfalls of carousels (contains automated animation)</a>. 

## Provide descriptive names for all links and buttons in your design

Where you include buttons or links in your design, avoid vague text such as 'read more', 'learn more' or 'find out more'. 

People who cannot see the screen may be using screen reading technology. This technology takes your website content and turns it into audible announcements. It's common for people using screen reading technology to skip to buttons and links without hearing the surrounding content. So, if our link is vague those visitors won't know the value or destination of the element. "Read more about what?!" 

If there are vague link and button names in your designs, it signals room for improvement in your process and/ or team. You probably need a content expert &mdash; for example, content editor / designer. 

## Introduce complex components with care

Simple designs tend to lead to more accessible experiences. 

The more complex your designs are, the more work there is for a developer. This means greater potential for accessibility and usability issues to be introduced. 

Wherever possible, lean towards standard HTML interface elements in designs. Avoid introducing complex components unless necessary. For example, including a <a href="https://www.w3.org/WAI/tutorials/carousels/">carousel</a> requires far more JavaScript than if static images are used. If the carousel is then nested within a <a href="https://design-system.service.gov.uk/components/tabs/">tab component</a>, this increases the complexity significantly again. The total number of acceptance criteria we would need to meet in our testing phase could easily reach 40-50 +. Which represents many hours of work! 

Key to being an effective designer is having an awareness of the impact of your design as part of a holistic process. 


Combining or nesting components brings another drawback. It reduces clarity. 

We want people who visit our interface to feel confident about how to use it and what the results will be. The more we experiment, combine things or try to be clever or cute, the more we undermine how clearly the interface speaks for itself &mdash; we lessen the effectiveness of the affordances. We introduce doubt for the user.

Two related topics I recommend investigating are the ideas of <a href="https://alistapart.com/article/material-honesty-on-the-web/">material honesty on the web</a> and <a href="https://tink.uk/perceived-affordances-and-the-functionality-mismatch/">perceived affordances and their mismatches in web design</a>. 

## Don't rely on colour to communicate issues or errors 

If there is an error in a form don't simply change the colour of the form border to communicate an issue (for example from grey to red). 

The reason is, for people with colour vision deficiency (aka colour blindness) or people using screen reading technology, this is ineffective. They cannot perceive this change.  

Make sure your design includes a textual description of the issue (as well as any changes in colour). 

## Start using a good accessibility plug-in

Use a tool to help automate some of the simpler checks as you design. I recommend the <a href="https://www.figma.com/community/plugin/1208180794570801545/includeaccessibility-annotations">Include plug-in for Figma by the team at Ebay</a>

## Further reading:

- <a href="https://gerireid.com/wcag-for-designers.html">WCAG for designers: accessibility checklist - Geri Reid</a>
- <a href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/">Dos and Dont's for designing for accessibility - GOV.UK</a>
