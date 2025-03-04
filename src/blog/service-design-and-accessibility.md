---

layout: base.njk
title: Accessible service design
date: 2023-12-14
description: Accessible service design - collected thoughts
tags: post
---

# Accessible service design &mdash; some thoughts

Accessibility continues to be addressed as an afterthought for many organisations. So, i'd like to take a look at its role in service design and how it affects the design and build of 'good services'.

This blog assumes (apologies!) you understand what the Web Content Accessibility Guidelines are. If that's not the case, please take a look at: <a href="https://w3c.github.io/wcag/guidelines/22/">WCAG 2.2 AA official documentation</a>. 

## Defining service design

Quoting Lou Downe former Director of Design for the Government Digital Service:

<blockquote>
"Service design is the design of services. To a user, a service is simple. It's something that helps them to do something - like to learn to drive, buy a house or become a childminder."
</blockquote>

## Good services

Returning to Lou Downe, in their role as Head of Services and later Director of Design, they created a set of principles which described things that need to be true in the creation of 'good services'. 

What we find is all of the 'good services' principles contribute to removing barriers to accessibility in some way. 

Organisations often invest money and effort into improving their public-facing touchpoints &mdash; such as their website, emails and mobile applications. But, they often only address the symptoms of user experience issues. A key factor that separates 'service design' from other disciples is that it considers the internal machinations of an organisation and how this impacts the public-facing user experience. 

To provide an example, if call centre staff are 'outsourced' in another country and cannot access the same customer complaints database as, say, an operations team how does this impact the organisation in its ability to provide a connected and positive end-to-end experience for effective responses to customer complaints? 

## <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> role in good services

If you feel unsure where to start with the design and build of an accessible service, the principles aren't new. The <a href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG)</a> &mdash; which are the internationally recognised standard for building accessible digital interfaces &mdash; have documented various principles and techniques that, with some consideration, can and should be applied at a service design level. 

Now, I'm going to try to help bridge the gap between the topics of service design and accessibility. Each heading below is a 'Good Services' principle and, below this, the corresponding criterion (or check) from the WCAG. Then, we will reverse this approach and focus on WCAG criteria and how they relate to 'Good Services' principles.

## Be easy to find (1)

This principle would encompass the WCAG check of 'Multiple Ways' which asks that people are given multiple ways to locate and navigate content within a website. 

## Require the minimum possible steps to complete (8)

This principle would encompass the WCAG check of 'Redundant Entry' which asks us not to make people enter information which has already been supplied. 

## Be consistent throughout (9)

This principle encompasses various items in WCAG but, specifically, 'Consistent Navigation' which requires websites to position navigation in the same relative order each time it is repeated. It also encompasses 'Consistent Identification' which requires websites to make sure functionality which is repeated across pages is identified consistently. For example, if we include a log-in button in the header and footer, it should be labelled as 'Log in' across both. 

## Be usable by everyone, equally (11)

This is accessibility and inclusion.

<hr>

We can see that there is clear connection between more recent service design principles and observations with longstanding accessibility requirements. There is perhaps more cross-over than might be apparent to each discipline. 

## How might we re-use WCAG for services

While established service design principles may indirectly address accessibility requirements (as described in WCAG), the opposite is also true. 

Looking closer at WCAG, how might we abstract its requirements such that they can be used in a cross-channel service design context?

Let's look at a single WCAG success criterion and see how this could help a service designer consider accessibility.

### Consistent Help (3.2.6) 

At an interface level, the 'Consistent Help (3.2.6)' success criterion says we must place help support in a consistent position across web pages. This helps ensure the route to finding support is predictable from a cognitive point-of-view and simplifies the task of finding help for people who use assistive technology. 

While the WCAG focusses on 'help' across web pages, the kernel of the guidance is about making help easy to find, in general. In the service design world, we might use this check to focus the mind on signposting and providing help clearly, consistently across, for example: letters, emails, web pages, mobile apps and then across all our products. 

Imagine a situation where a totally new customer, based in certain geographical location, can benefit from 24/7 online chat-based support but customers based elsewhere with older products are forced to phone in for support. This would be an example of inconsistent provision of help. But, rather than help being inconsistently positioned across web pages, it is inconsistent at a service level; across channels. As a service designer, we can identify this as a barrier inspired by the spirit of the WCAG 'Consistent Help (3.2.6)' success criterion!   

With this mindset, the WCAG can be considered by service designers as a guide which can be slightly tweaked in scope and specificity and deployed to remove barriers for a broader more holistic purpose. 

## Prompts for service designers

Here are some more general prompts for considering accessibility in your service: 

- If someone can't interact with us through one channel (for example app) do we offer accessible alternatives
- How might our payment structure create barriers to inclusion - for example, do we penalise someone for smaller regular payments vs yearly. Is our call centre phone number free phone or £X per minute
- How flexible is our eligibility criteria? Do we require fixed address, do we require someone to complete 2 Factor authentication and how might this create technology barriers?
- Do the features of our service prevent people from engaging with our service if we consider: gender, religion, ethnicity, socio-economic background or disability? For example, do you force people to identify their gender in certain ways at any point?


## Inaccessible service design: documents

Let's look at another simple but common example of inaccessibility in service design. 

Many companies I work with make great progress fixing issues in their web pages. Even if we work hard to identify problematic content types during the standard scoping process, we may later find that important features of their service are trapped in inaccessible PDFs or that they have integrated inaccessible chat components or, often worse, accessibility overlays. The accessibility is dictated by the weakest link in the chain. 

A PDF may be a single document but, if the information within is important enough (and no alternative is offered), it may affect completion of goals across steps and channels. It may present a significant barrier and potentially straddle the gap between not just preventing completion of goals within that interface but rather inclusion to the service in general.

Monzo seems to have understood the importance of moving away from relying on PDFs for key information and has provided a well structured simple web-based version of their terms and conditions. While it could be further improved, it's a nice example of making their core information more accessible: <a href="https://monzo.com/legal/terms-and-conditions/">Monzo terms and conditions</a>

## Symptoms-based accessibility vs service design mindset 

Service design is characterised by a broader outlook than that often gifted to, or expected of accessibility practitioners &mdash; who seem to be more commonly asked to focus on accessibility issues once they have manifested in public-facing interfaces. But, if we start to also consider accessibility through a service design lens we may be able to better identify root causes for inaccessibility at a systemic/organisation level. Let's break this down:

- While accessibility audits tend to focus on a single channel - for example: app, website, intranet... service level thinking would consider multi-channel including offline (letters, telephone, in-person)

- Accessibility projects often occur after digital strategy goals and outcomes have already been defined

- A more 'traditional' accessibility outlook is more task oriented - for example, "can someone submit X form" service design would consider holistic cross-channel outcomes

- Accessibility outputs tend to appear more in process or procedural documents than policy and strategy

<p class="highlight">
<span class="visually-hidden">Important:</span>If the above is true then inclusive service design would: take a cross channel view, look to feed into business outcomes and, ideally, influence at a policy and strategy level. 
<span class="tag" aria-hidden="true">Highlight</span>
</p>

## Service design and deceptive patterns

The process of cancelling a subscription is infamous from a customer experience perspective. It is often easy to start a service (online) but in an attempt to cancel, one is required to use expensive call centre phone numbers and wait for unacceptable amounts of time to speak to someone. For most people this is beyond stressful. This process not only penalises people from a monetary point-of-view (call centre phone call costs) but also requires people to pay a tax from an attention and patience point-of-view. The barrier this creates is multiplied for people who experience cognitive disability or impairment of any kind. 

A common theme of bad services is the <a href="https://www.deceptive.design/">'deceptive pattern'</a>. This is a a certain type of content or feature designed to fool users into a certain course of action. While something can be technically 'accessible', it can still be highly detrimental. One example of this is when certain airlines have been known to add travel insurance to the user basket in such a subtle way that it is only possible to detect once it is too late. 

## Closing steps for inclusive services

Here are some final prompts to help you avoid inclusion barriers and build better services:  

- Consider if you have problematic internal systems and processes &mdash; how might these also negatively impact the customer experience

- Involve accessibility subject matter experts in discovery and problem definition

- Involve people with disabilities and diverse perspectives throughout the design and build process

- Offer multiple channels to communicate and offer multiple ways for people to interact 

- Be critical of your service - are you asking more from your users than you'd be personally willing to accept?

This is a blog of collected thoughts. I realise it is far from a well-rounded piece but I hope it sparks some ideas!

## Further reading

<ul>
<li><a href="https://good.services/">Good Services</a>
</ul>