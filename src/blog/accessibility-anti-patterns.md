---
layout: base.njk
title: Top accessibility anti-patterns
date: 2025-09-23
description: Accessibility anti-patterns. Here we look at some common patterns of behaviour from organisations which lead to negative outcomes. 
tags: post
---


# Top accessibility anti-patterns

Where any processes or tasks lead to negative outcomes, this phenomenon may be referred to as an 'anti-pattern'. 

I have focussed on anti-patterns seen in the corporate accessiblity world, specifically, and what I write is just based on my experience. 

Hopefully this helps you to spot anti-patterns emerging wherever you are and prevent or reduce the impact from them. 
## Reactive accessibility 

Only working on accessibility in the last stages of a project or as a reaction to a consequence. 

Common examples include reacting to: 

- a looming regulatory or compliance deadline
- having received a complaint. 

This anti-pattern is top because it is so pervasive across organisations. Accessibility is still too often seen as only a problem to be fixed not an opportunity (it's a bit of both).

This reactive or last minute approach simply doesn't produce results as graceful and effective as when accessibility has been considered and acted on from the beginning &mdash; or at least the early phases. 

### Why the anti-pattern is bad 

Let's consider this example: 

An organisation launches a new design system and then shortly after checks its accessibility. The issue is lots of important design decisions will have already been made at this point and any changes needed can't be made easily. 

Another important consideration is certain changes can't be made in isolation without affecting the whole. 

Imagine the colour scheme in a new design system includes a key style: white text on a pale orange background. This won't be easy to read for most people and accessibility tests would confirm this. 

In this example, this colour issue has only been tested and proven to be an issue *after* the design system launch. This means there's insufficient time for a designer to create wholesale changes to the design system. Instead they need to force crude solutions &mdash; for example, using drop shadows behind text or creating new tints of colours that have not been formally signed off.
 
 It's a particularly nasty anti-pattern because the more of these slightly crude design tricks used, the less likely it is that designers &mdash; or anyone with visual sensitivity &mdash; will seek accessibility input next time around. 
 
 The vicious cycle has begun.
 
### What to do instead

Consider accessibility as early as possible. Encourage the senior leadership in your organisation to understand commercial, as well as ethical, arguments for accessibility. 

For accessibility to be prioritised (and worked on earlier) it often needs to be seen as more than just 'the right thing to do' (sadly) &mdash; particularly at C-Suite level. 

Do not wait until risk reduction alone is the only motivation for doing accessibility work. 

## Leaving accessibility to one person

In lower maturity organisations, passionate individuals often take on an informal role for accessibility. 

The corporate world generally hasn't understood accessibility and so hasn't created the space and budget for formal roles. 

But, accessibility is not a discrete *thing* a single person can *do*. 

To succeed, accessibility must woven throughout various disciplines, organisational areas and activities. IT security is not a wholly unreasonable comparison, here. In security, everyone has a role to play in its success and it should be thought about and integrated at various levels. 

The outcomes for accessibility and IT security are quite different, that said!

### Why the anti-pattern is bad

Leaving accessibility to one person creates a single point of dependency &mdash; and so often leads to failure.

It limits ability to enact real change or influence in an organisation.  

The person is a high risk of leaving the organisation through burnout &mdash; if they do, they likely take with them important knowledge and skills.

### What to do instead 

Start to engage various teams and individuals across your organisation in accessibility activity. 

Starting an <a href="https://businessdisabilityforum.org.uk/resource/technology-toolkit/role-of-the-a11y-champion-sponsor/">Accessibility Champions Network</a> can be effective initiative to help share workload and create momentum. 

You will probably want to bring in *proven* accessibility expertise to support earlier efforts, too &mdash; be this through contractors or specialist accessibility agencies, for example. 
## Having an accessible design system but not using it

Do you have a design system?

Has accessibility been robustly integrated?

Yes? 

Your next goal is to get everyone using it. Make sure you have an effective way to track and measure usage of the system. 

A surprising number of organisations have done lots of the hard work proving their design system is usable and accessible only to find people aren't actually using it. 

### Why the anti-pattern is bad

Here's an example I've seen a few times:

A new senior leader in marketing joins the organisation. They want to make an impact and so ask a new creative agency to create a new look and feel for a high-profile marketing campaign. This new look and feel needs to be reflected in the website so new front-end components are also hastily worked on. 

These new (un-tested) components replace the existing (accessible) design system &mdash; across various pages of the website. 

The result? Accessibility barriers for users. In some cases those users are completely blocked from interacting with campaign content. As a result, the campaign under-delivers. 

In my talk: <a href="https://www.youtube.com/watch?v=HyC1gGSXPcA">Building Inclusive Health Services (YouTube)</a> there are similar (real) stories about the under use or imitation of both the NHS and GOV.UK design systems.  

### What to do instead

First, make your design system accessible. Test it rigourously. 

Include people with disabilities in the initial design of the system and then again for the ongoing improvements and updates to the system. 

Now use it as much as possible &mdash; across your organisation products and services.

Have a plan to make sure updates and contributions to the system are accessible. 

Keep the design system accessible.  

Create a communications and integration plan for your design system. 

Consider how it could be used by partners, suppliers and other 3rd-parties as seamlessly as possible. 

For example, does your documentation make it easier for 'whitelabel' solutions to meet the accessibility standard demonstrated in your design system? 

Could you also help support people who procure technology by providing them with information on the advantages of solutions whose interface is 'headless' (front-end interface is de-coupled from the back-end data and logic) or whose interface is at least un-opinionated &mdash; in that it is highly customisable? 


## Running an automated tool and only fixing those issues

Running automated tools to find accessibility issues is a good start &mdash; you're making proactive steps to measure your accessibility status. But you should do more. 

### Why the anti-pattern is bad

Automated tools only find about 20-35% of the total testable issues (at the time of writing). So while some tests are better than none, your results will lead to overconfidence. 

The free mass market versions of automated tools often work with your live web pages only. So the issues you find are probably already presenting barriers to your users. To avoid this, you also need to test before content is live. 

Increasingly, tools not only find issues but claim to fix them, too. These tools are often called 'overlays' and many of the vendors of such tools use misleading marketing messages. 

<a href="https://overlayfactsheet.com/en/">The evidence for overlay vendor claims being misleading is overwhelming</a>. 

### What to do instead 

How do you avoid this anti-pattern of relying on automated tools?

- also complete manual tests &mdash; testing little and often throughout a project, start-end
- look at the Web Content Accessibility Guidelines (WCAG) 2.2 and start to understand how to test against these guidelines:

	- there are various <a href="https://www.getstark.co/wcag-explained/perceivable/">'plain language' versions of WCAG 2.2</a> and <a href="https://youtu.be/HtTyRajRuyY?si=wyQqLessqpk02AoL">helpful videos about manual accessibility testing</a> online, if you're finding things confusing
	- Consider how you can divide this testing up so it doesn't all rest on one team or discipline. 

#### User research 

Plus, make sure you're doing user research. Get real and representative users &mdash; in particular users with disabilities to use your product or service. The insights from this research will help you avoid introducing accessibility barriers into your product. 

There is no equivalent *or alternative* to this activity. 

## Not validating 3rd-party accessibility claims

You will at some point need to use 3rd-parties &mdash; such as agencies, vendors and software solutions. Many make quite bold claims about their accessibility capability.

### Why the anti-pattern is bad

 While there are great partners and vendors out there, it's up to you to make sure you are taking the right steps to validate their claims. If you don't, you'll likely find significant risk has been introduced to your organisation. 

As mentioned before, it's particularly important to fact check claims vendors of overlay tools make about their ability to identify and fix accessibility issues. 

### What to do instead 

Complete an analysis of any claims potential partners make relating to accessibility. Your analysis should include evidence 3rd-parties provide for any claims.

The analysis should also include a section that shows you have understood the trade-offs and risks associated with outsourcing work. Is outsourcing the best option or should you do it in-house? 

Do you have an accessibility policy? 

Does the policy clearly define what accessibility standards suppliers need to meet? Make sure this accessibility policy information is used in any contractural discussions with partners. 

The Business Disability Forum has some great tips on <a href="https://businessdisabilityforum.org.uk/resource/technology-toolkit/inclusive-technology-procurement-where-to-start/">accessible technology procurement</a>. 