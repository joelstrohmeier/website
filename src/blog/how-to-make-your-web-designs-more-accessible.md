---

layout: blog_detail.njk
title: Making your web designs more accessible
date: 2024-07-17
description: Introducing some key accessibility practices into your web design workflow

---

# Making your web designs more accessible

Below are a key tips to help you to avoid introducing accessibility barriers as you produce visual design outputs (for example using tools like Figma). This is far from a complete list. It is, instead, informed by my past few years working with designers. 

It also assumes that you are aware of some of the more fundamental accessible design principles such as: the importance of colour/contrast and designing with responsive web design in mind. 

I hope it is useful. 

## Provide labels for all form inputs

Provide a written text label next to each form input included in your designs. 

Don't rely on placeholder text alone. 

To expand on the term: 'placeholder' this is text (generally light grey text) which sits inside a form input. It is there as a prompt for what type /format of data is considered suitable to enter. 

Crucially, placeholders do not sit above or separate to the form input. As such, they are often (over) used in design as a space-saving excercise.

But, placeholders introduce barriers because they:

- generally have poor contrast and so are hard to read
- lead people to think text has already been entered into the input
- stop working as an effective prompt as soon as people start to write things in the input (because they disappear)

## Include button controls for any complex gestures &mdash; such as 'swipe to reveal more'

Designs often include blocks of content which seem to continue or disappear beyond edge of the artboard frame or device edge. This has become understood as a way to communicate that the interface includes overflow content. Developers and interaction designers understand that this means the user would 'swipe' to left /right to reveal more content. 

The issue is that many people cannot complete swiping gestures. 

People with limited dexterity or limited upper body movement may interact with a keyboard or 'switch' device alone. People with limited or no upper body movement may interact with (for example): 

- eye tracking software 
- head wands
- voice recogntion software 

In any of these cases, they may be blocked by the requirement to 'swipe'. 

To avoid barriers for these people, we must ensure we include alternative ways to reveal more content in our design. One simple way to achieve this is to make sure we include visible button controls in our designs. For example 'next' and 'previous' buttons adjacent to our component. 

By providing distinct visible button controls in the design, this essentially guarantees a developer will code them. In so doing, we provide a target for non-mouse and trackpad interactions and allow a variety of different inputs (some of which were listed previously) to succesfully trigger the revelation of more content with (next to) no issue. 

From a usability perspective, it's worth considering that there's sufficient evidence to suggest that carousels, and similar collections which ask us to reveal more of their content, are quite likely to be ineffective. <a href="https://shouldiuseacarousel.com/">More information on the user experience pitfalls of carousels (contains automated animation)</a>. 

## Provide descriptive names for all links and buttons in your design

Where you include buttons or links in your design, avoid vague text such as 'read more', 'learn more' or 'find out more'. 

People who cannot see the screen may be using screen reading technology &mdash; which takes your website content and turns it into audible announcements. If the links and buttons are announced as 'read more', they have no clue as to the value or destination for those elements. "Read more about what?!" 

If you find yourself including this vague text in your design, it may be a sign you are missing a key skill / discipline. By this I mean a content expert (for example, content editor, strategist or content designer). 

## Introduce complex components with care

Clarity or simplicity of design is fundamental to producing accessible design. 

The more complex components or implied complex interactions that are included in your designs, the more work there is for a developer, and, crucially, the more potential there is for accessibility and usability issues to be introduced. 

This is not to say you shouldn't include complex components but rather to introduce them intentionally and with a disciplined outlook. One thing to be particularly aware of is combining complex components. For example, the following are just a few of the requirements for ensuring the accessibility of a tab component:

- each tab control must have a visible focus indicator
- the text inside each tab control must have a minimum 4.5:1 contrast ratio (in all of its states)
- it must be possible to reach and interact with each tab control using a keyboard alone
- each tab control must announce when it is selected to a screen reader

If we now imagine that inside each of the tabs (once activated) a carousel is also revealed, the complexity of what needs to be coded and tested has increased significantly. It might only take 10% more time as a designer to suggest these interactions but it is not a careful or disciplined approach when we consider how our designs will be picked up and moved onwards as part of a holistic project. 

Nesting or combining components also brings another key drawback. It reduces the clarity of the interface. The ultimate aim is for any person visiting our website to presses 'Enter' or clicks something that they are confident of the result. The more experimental we are with components; the more we combine, re-work or merge them, the more we undermine the mental models and conventions people have learned about what a thing is and how we expect it to behave. 

I won't go into the topic here (for brevity) but another similar topic I recommend investigating is the idea of <a href="https://alistapart.com/article/material-honesty-on-the-web/">material honesty on the web</a>. 

## Don't rely on colour to communicate issues or errors 

If there is an issue &mdash; for example on a form, don't simply change the border of the form input to red. The reason for this is, for people with colour vision deficiency (aka colour blindness) or people using screen reading technology this is ineffective. 

Make sure your design includes a textual description of the issue. 

## Start using a good accessibility plug-in

Use a tool to help automate some of the simpler checks as you design. I recommend the <a href="https://www.figma.com/community/plugin/1208180794570801545/includeaccessibility-annotations">Include plug-in for Figma by the team at Ebay</a>

## Further reading:

- <a href="https://gerireid.com/wcag-for-designers.html">WCAG for designers: accessibility checklist - Geri Reid</a>
- <a href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/">Dos and Dont's for designing for accessibility - GOV.UK
