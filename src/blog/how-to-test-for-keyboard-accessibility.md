---

layout: base.njk
title: Testing keyboard accessibility
date: 2023-09-05
description: Testing keyboard accessibility - practical tips covering navigation keys and their role, using browser developer tools and checking focus styles
tags: post

---

# How to test for keyboard accessibility

In this blog we'll look at some of the ways you can check the keyboard accessibility of website content.

## Why keyboard accessibility is important

People may interact with your website using a keyboard alone for many reasons. Some people can't make precise movements with their hands and so will use a keyboard rather than a mouse or trackpad to interact. For example, people with repetitive strain injury (RSI) or with Parkinson's Disease. There are various situational reasons why someone may benefit from good keyboard accessibility, too. For example, parents might hold a baby in one arm and need to complete a task using a keyboard using only one hand. 

Testing for keyboard accessibility also allows us to identify barriers for people using other adaptive inputs and keyboard-like interfaces. For example, switch devices and voice recognition software - both of which are somewhat based on keyboard logic.  

## How to do a quick test

A simple and effective test to identify potential accessibility barriers is to consider the tasks you can complete with a mouse or trackpad on a webpage and then check they're possible using a keyboard alone. The following is a short list of navigation keys to use in your tests:

- <kbd>Tab</kbd> to move through the interactive elements of the page
- <kbd>Shift</kbd> + <kbd>Tab</kbd> to reverse back up the page through the interactive elements
- <kbd>Enter</kbd> OR <kbd>Space bar</kbd> to select button controls
- <kbd>Left</kbd> / <kbd>Right</kbd> / <kbd>Up</kbd> /<kbd>Down</kbd> keys for radio buttons.

With the preceding keys, check whether all interactive elements &mdash; such as links, form inputs and buttons can be interacted with using a keyboard. Then, make a note of whether you can navigate and complete tasks as you would using a mouse. 

An important thing to note is that, as a mouse user, you can almost always follow where you are on the page via a cursor - an arrow or hand icon indicating your position on the page. 

But, if you navigate using your keyboard alone, it is often harder to track where you are. This is because there is no clear focus indicator (or focus style).  


## Keyboard focus styles

Good designs include clear focus styles. Focus styles help someone who is navigating with a keyboard (or similar input) to track where they are on a page. 

A quick way of designing an accessible focus style is to use a 2 pixel (px) thickness or above solid border around an element and make sure the border has at least a 3:1 contrast ratio against its adjacent colour. Use the <a href="https://www.tpgi.com/color-contrast-checker/">Colour Contrast Analyser</a> to test designs. This Contrast Analyser tool includes an eye dropper which allows you to select the foreground and background colours to generate a numerical ratio which is a pass or fail of the minimum contrast according to the Web Content Accessibility Guidelines (WCAG). 

There are more details to consider around colour contrast and designing effective focus styles but I don't aim to cover them in this post (for the sake of brevity). If you'd like to know more, I recommend this comprehensive <a href="https://www.sarasoueidan.com/blog/focus-indicators/">guide to focus indicators by Sara Soueidan</a>. 

## Expected behaviour for interactive elements using a keyboard

One of the questions I get asked when running training is what the correct behaviour is when interacting with certain elements on a page using a keyboard. For example, 'I pressed <kbd>Space bar</kbd> to activate this link but nothing happened?!' In the case of links, they would only be activated by pressing the <kbd>Enter</kbd> key by default. 

So, here's a list of common interactive elements and their expected keyboard behaviour. 

<dl>
    <dt>Link</dt>
    <dd><kbd>Enter</kbd> to follow</dd>
    <dt>Button</dt>
    <dd><kbd>Enter</kbd> or <kbd>Space bar</kbd> to activate</dd>
    <dt>Checkbox</dt>
    <dd><kbd>Tab</kbd> to reach each input. Note: <kbd>left,</kbd> <kbd>right</kbd>, <kbd>up</kbd>, and <kbd>down</kbd> key presses not supported by default</dd>
    <dd><kbd>Space bar</kbd> to check and uncheck</dd>  
    <dt>Radio button</dt>
    <dd><kbd>Tab</kbd> to reach first input in a group</dd>
    <dd><kbd>Left</kbd>, <kbd>right</kbd>, <kbd>up</kbd>, and <kbd>down</kbd> key presses are supported and allow you to move through each item in a group</dd>
    <dd><kbd>Space bar</kbd> to select a radio</dd>

</dl>


## Knowing what has 'focus'

If the website you're testing does not include clear focus styles, you'll find it hard to spot keyboard issues. You can force focus styles for a page &mdash; this involves overriding the authored CSS for any given page with a nice, clear indicator. To force focus styles you can install a simple tool called a 'bookmarklet'. These are tools which you can switch on via your web browser to perform simple tasks.

Head to the link below and follow the instructions to install the bookmarklet for forced focus styles:

<a href="https://www.pauljadam.com/bookmarklets/focus.html">Force / show keyboard focus style</a>

It's likely certain elements can be reached even though the designer intends for them to be hidden. This is quite common for carousel components, navigation menus and overlay content. This suggests the keyboard experience wasn't designed and tested effectively. 

## Logical order

While completing the previously outlined checks, you should also check whether the order that you move through the page using a keyboard is logical. For example, does the order match the intention of the visual design and could it negatively affect the understanding of the key information. For example, if you were to move to a 'Submit' button at the end of a form and then backwards to the start of the form inputs, this would not be a logical order. 


## Voice recognition

When we test for keyboard accessibility we often end up finding improvements for a wider variety of input approaches &mdash; including voice input. For example, if a carousel component does not have 'Previous' and 'Next' button controls, it makes it harder for people using voice recognition software. Without a control on screen whose name is visible, or at least can be guessed, it is hard for someone using voice recognition to know what verbal command to use to interact. However, if there's a control which looks like a button and contains the word 'Next' I can speak "Click next" (or similar) and reveal more content from the carousel. 

Of course, in this example the website visitor actually wants to interact with a carousel which might require some suspention of disbelief unless the website happens to the BBC or Netflix. 

## Developer tools - active expression 

If you are familiar with developer tools, you can use the following technique to reliably track your focus, if the 'force focus bookmarklet' hasn't worked.

- Open Developer Tools
- Open the Console
- Move to the 'Live Expression' input (it may be named differently dependent on your browser)
- Type in document.activeElement
- Press Enter
- Continue tabbing 
- Make a note of the elements shown in the Console

You should find the element in focus is printed in real time in the Console output.

## Further reading:

- <a href="https://webaim.org/techniques/keyboard/">WebAIM Keyboard accessibility</a>

- <a href="https://davatron5000.github.io/a11y-nutrition-cards/">Accessible components - a11y nutrition cards</a>



