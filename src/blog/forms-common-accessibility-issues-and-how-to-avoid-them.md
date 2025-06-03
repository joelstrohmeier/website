---

layout: base.njk
title: Forms - common accessibility issues and how to avoid them
date: 2024-04-03
description: Some of the common accessibility issues in forms and practical ways to avoid them
tags: post

---

# Forms: common accessibility issues and ways to avoid them

<p class="post-date">Published on {{ date | date: "%B %-d, %Y" }}</p>


Forms are fundamental to modern internet-enabled services. They're how we provide or upload information, buy stuff and otherwise make value exchanges with brands and organisations in our daily lives. If they're designed and built to work for _all_ your website visitors, they offer a commercial advantage.  

Here are some of the top accessibility issues i've collected in recent years and how you can avoid them. This is not an exhaustive list but I hope it is useful. 

## Broken labels 

Labels tell someone what information to provide for a form input. Generally, visible labels are included in web designs. This means people who can see the screen benefit. For people who rely on screen reading techology &mdash; technology which translates on sceen information into audible announcements &mdash; we take extra steps. There is a continuing trend where labels are not associated with their relevant input in the HTML code. Without this code association people using screen readers, for example, may be unsure what information to provide. 

The fix for this is simple. We use the <code>for</code> attribute on the label. The value for the <code>for</code> attribute should be the value of an <code>id</code> which we add to the relevant input. This creates what is sometimes referred to as a 'programmatic association'. For example:


<pre>
<code>
&lt;label for="first-name"&gt;First name&lt;/label&gt; </br>
&lt;input type="text" id="first-name"&gt;
</code>
</pre>


One simple way to check this has worked is to click on the label text. If keyboard focus is moved to the adjacent form input, the label has been associated correctly. 

It is possible to wrap a label around its input to produce the same result. However, this is shown to cause issues for people using voice recognition software so is not recommended. 

## Help or error information not announced

When errors are shown on screen we must make sure these are also announced for people using screen reading technology. As with labels, we can make this connection in the code using an attribute whose value is an <code>id</code> we add to the relevant form input. In this case, the attribute is <code>aria-describedby</code>. Here is a code example: 

<pre>
<code>
&lt;p class="error" id="error-first-name"&gt;Error: please provide your first name&lt;/p&gt; </br>
&lt;input type="text" aria-describedby="error-first-name"&gt;
</code>
</pre>

## Related form inputs not labelled and grouped
Related inputs such as radio buttons and checkboxes should be grouped together using the <code>fieldset</code> element. The main question or theme for this group should be wrapped by the <code>legend</code> element. In so doing, people using screen readers benefit from the main question being announced automatically &mdash; as soon as keyboard focus is moved to the first input in that group. 

This technique can be used when a single question is being asked with multiple possible answers or when asking multiple questions about a single thing. 

### 1. Question with multiple possible answers

We might ask, 'How often do you exercise?'

With several radio button options, for example:

- Never
- Once a month
- Once a week
- Daily

## 2. Multiple questions about the same topic

We might include a section in a form which asks for various bits of information on the same topic. For example, we might ask 'Address details':

- Street
- Town or city
- Country
- Postcode

In example 1 (How often do you exercise?), if the inputs aren't grouped in a <code>fieldset</code> with a <code>legend</code>, someone using a screen reader will move to the first input and hear something like:

"Never, radio button, 1 of 4". 

But with no understanding of which question 'never' refers to as an answer.  

In example 2, if we hear 'Street', we know what type of information is expected but not how the information relates to the form overall. 

For example, we might have bought a gift but want it to be delivered to a friend or family member's address not ours. We need to be sure we supply the right information in the right section. Or, it may be we're asked for our billing address and delivery address in the same form. In any situation where multiple addresses could be valid, we need the key question (content within our <code>&lt;legend&gt;</code> element) to be announced. 

## Length and complexity of forms

It is important to consider the experience of people with cognitive impairments or disabilities. The length and complexity of forms will significantly affect how easy they are for people to complete. Some website visitors are more inclined to become tired, distracted or anxious filling in forms. This is likely to be true, in particular, for autistic users or people with ADHD, to provide a couple of examples.   

Only ask necessary questions in forms &mdash; don't be tempted to gather as much data as you can, because you think you can! 

Write simply, avoid abbreviations, jargon, sayings and idioms. 

Help people avoid errors and provide useful ways for people to recover from any errors. 

For example, rather than saying 'There is an error', be specific: 'Error: First name is missing'. 

## Automatic timeouts

Automatic timeouts are a common aspect of form design and are there as a security measure. They also introduce user experience and accessibility issues. There are a few ways the experience can be made a little better, which we'll look at now. 

### Manage expectations

Warn people their website session will end before it happens and provide enough time for people to read this warning before the session is ended. 

### Allow people to extend their time

Provide a way for people to stop this timeout process and extend it. Allowing people to extend their visit is now more common (at least in my experience, i'm pleased to say). 

Generally a warning message is shown in an overlay pop-up window (modal). These modals tend to include a short message notifying people that they are soon to be timed out and include a button allowing people to extend their visit. These modals, however, are often inaccessible.

Make sure to build or use a robust component for the modal. It should be one that has been tested and proven to be accessible. 

The component should be tested to make sure: 
- when it shows on screen this triggers a screen reader announcement
- all controls in it do not rely on a mouse or trackpad interaction
- the content inside it is available to screen readers
- content can be magnified up to 400% without loss of information.

## Bonus item: low contrast error text

If your error messages are red, be sure to choose a specific accessible shade. Often developers will use <code>red</code> as the color value in website CSS. The issue is the contrast ratio for <code>red</code>is below the 4.5:1 minimum, as required by the Web Content Accessibility Guidelines (WCAG). Make sure you choose a specific shade of red for your error text that is comfortably past the minimum contrast ratio. This should help to ensure your error text can be read easily by a broad group of website visitors. 

## Further reading

Requirements for providing reasonable time for people to read and interact with content: <a href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html">WCAG Timing Adjustable (2.2.1)</a>.

A short guide to <a href="https://www.w3.org/WAI/WCAG2/supplemental/patterns/o4p04-supportive-forms/">designing forms to prevent mistakes - W3C</a>     