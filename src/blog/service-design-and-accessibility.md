---

layout: blog_detail.njk
title: Accessible service design
date: 2023-12-14
description: How to approach accessible service design

---

# Accessible service design &mdash; some thoughts

Accessibility continues to be addressed as an afterthought for many organisations. So, i'd like to take a look at its role in service design and how it affects the design and build of 'good services'. 

## Defining service design

Quoting Lou Downe former Director of Design for the Government Digital Service:

<blockquote>
"Service design is the design of services. To a user, a service is simple. It's something that helps them to do something - like to learn to drive, buy a house or become a childminder."
</blockquote>

## Good services

Returning to Lou Downe, in their role as Head of Services and later Director of Design, they created a set of principles which described things that need to be in place to build 'good services'. 

All of the principles contribute to removing barriers to accessibility in some way. 

A key factor that separates 'service design' to other types of design is that it considers the internal machinations of an organisation and how this influences the customer experience. For example, if the call centre staff is offshore and is detached from, say, operations what might this might mean in terms of providing a connected and positive end-to-end experience for customers contacting with an issue or query. 

## <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> role in good services

Even if you feel unsure where to start with the design and build of an accessible service, the principles aren't new. The steps should be familiar to anyone who is aware of, for example, the Web Content Accessibility Guidelines (WCAG) &mdash; or various other related principles and heuristics &mdash; including Jakob Nielsen's 10 heuristics. 


Let's look at the Good Services principles by Lou Downe and how they compare with guidance in WCAG:

## Be easy to find (1)

This principle would encompass the WCAG check of 'Multiple Ways' which asks that people are given multiple ways to locate and navigate content within a website. 

## Require the minimum possible steps to complete (8)

This principle would encompass the WCAG check of 'Redundant Entry' which asks us not to make people enter information which has already been supplied. 

## Be consistent throughout (9)

This principle encompasses various items in WCAG but, specifically, 'Consistent Navigation' which requires websites to position navigation in the same relative order each time they are repeated. It also encompasses 'Consistent Identification' which requires websites to make sure functionality which is repeated across pages is identified consistently. For example, if we include a log-in button in the header and footer, it should be labelled as 'Log in' across both. 

## Be usable by everyone, equally (11)

This is accessibility and inclusion.

<hr>

I draw this parallel between ideas in WCAG and the principles of 'good services' in the hope of showing how you can begin to introduce accessibility to the service design process - and, hopefully, it will be easier than you may think. 

So, we can see how the principles of good services can be applied at the interface level but service design is characterised by a broader outlook. How do we zoom out and remove barriers to accessibility and inclusion across not just pages but channels, teams and tools?

From this point, I should note that when I use the term 'accessibility' I mean removing barriers to people with disabilities and when I use the term 'inclusion' I mean where we consider more than disability as a barrier to using a service - including such things as: gender, race or socio-economic background.

## Traditional accessibility approaches vs service level thinking

My observation is that a lot of accessibility work that gets commissioned (in my experience) is still relatively constrained in scope. By this I mean that it tends to be completed at the interface level and is backwards looking (looking at stuff that has already been built). I'm suggesting this is more closely aligned with a interface (perhaps product-focussed) rather than service mindset.  

- The traditional approach tends to focus on a single channel - for example: app, website, intranet... service level thinking would consider multi-channel including offline (letters, telephone, in-person)

- Traditional accessibility activity tends to occur after digital strategy goals and outcomes have already been defined

- The traditional outlook includes interventions which may be more task oriented - for example, "can someone submit X form" rather than how has accessibility and inclusion influenced our overall cross-channel conversion rates

- Traditional accessibility activity tends to focus on interventions affecting guidelines or procedure as opposed to policy and strategy

<strong>If the above is true then inclusive service design would: take a cross channel view, look to feed into business outcomes and, ideally, influence at a policy and strategy level.</strong>

It is important to clarify that this blog is not out undermine any work which focusses on fixing specific, interface or product-level issues. A single attribute on an HTML attribute (<code>role="application"</code>) can obliterate a page for users and it's easy to underestimate the importance of fixing such details. Great experiences require people to address barriers at an interface level but we must also have people who see how this fits within a wider journey or experience. We need various planes of thinking. The reality of accessibility is that it is still heavily influenced by technological quirks &mdash; such as how certain assistive technologies work with certain web browsers and front-end coding practices. 


## Prompts for service designers

Are you a service designer? If so, here are some prompts for considering accessibility in your service: 

- If someone can't interact with us through one channel (for example app) do we offer accessible alternatives
- How might our payment structure create barriers to inclusion - for example, do we penalise someone for smaller regular payments vs yearly. Is our call centre phone number free phone or £X per minute
- How flexible is our eligibility criteria? Do we require fixed address, do we require someone to complete 2 Factor authentication and how might this create technology barriers?
- Do the features of our service prevent people from engaging with our service if we consider: gender, religion, ethnicity, socio-economic background or disability? For example, do you force people to identify their gender in certain ways at any point?


## Example of inaccessible service design

Let's look at a simple but common example of inaccessibility in service design. 

Many companies I work with make great progress fixing issues in their web pages. Even if we work hard to identify problematic content types during the standard scoping process, we may later find that important features of their service are trapped in inaccessible PDFs or that they have integrated inaccessible chat components or, often worse, accessibility overlays. The accessibility is dictated by the weakest link in the chain. 

A PDF may be a single document but, if the information within is important enough (and no alternative is offered), it may affect completion of goals across steps and channels. It may present a significant barrier and potentially straddle the gap between not just preventing completion of goals within that interface but rather inclusion to the service in general.

Monzo seems to have understood the importance of moving away from relying on PDFs for key information and has provided a well structured simple web-based version of their terms and conditions. While it could be further improved, it's a nice example of making their core information more accessible: <a href="https://monzo.com/legal/terms-and-conditions/">Monzo terms and conditions</a>

## Example of non inclusive service design 

The previous example still mostly focusses on barriers within a single medium (even if it presents a significant challenge to understanding the service). Let's look at inclusion across media and its impact on a service. 

Cancelling subscriptions is infamous for its issues. It is often easy to start a service but in an attempt to cancel, one is required to phone a costly call centre number and wait for unacceptable amounts of time to speak to someone &mdash; for most people this is beyond stressful even if the person does not identify as having some form of anxiety, for example. This process not only penalises people from a monetary point-of-view (call centre phone call costs) but also requires people to pay a tax from an attention and patience point-of-view. 

To further emphasise the distinction between something which is accessible at an interface level but which still contributes to a bad service experience we can consider the <a href="https://www.deceptive.design/">'deceptive pattern'</a>. This is a a certain type of content (or combinations of content) premeditated to fool users into a certain course of action. We might have a perfectly formed chunk of content on a page (from an accessibility point-of-view) which nevertheless &mdash; as a result of its design &mdash; tricks people into an a detrimental action. Examples include, travel insurance being automatically added to the basket during the purchase of airplane tickets without the user realising or the phenomenon of <a href="https://www.deceptive.design/types/confirmshaming">'confirm shaming'</a>.  

## Positive steps for inclusive services

- Identify problematic internal processes in recognition of how they can negatively impact the customer experience

- Involve accessibility subject matter experts in discovery and problem definition

- Involve people with disabilities and diverse perspectives throughout the design and build process

- Offer multiple channels to communicate and offer multiple ways for people to interact 

- Be critical of your service - are you asking more from your users than you'd be personally willing to accept?

## Further reading

<ul>
<li><a href="https://good.services/">Good Services</a>
</ul>