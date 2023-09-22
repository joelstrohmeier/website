---

layout: base.njk
title: Testing keyboard accessibility
date: 2023-09-05
description: A quick guide on testing for keyboard accessibility

---

# How to test for keyboard accessibility

In this blog we'll look at some of the ways you can check keyboard accessibility for your website content.

## Why keyboard accessibility is important

People may interact with your website using a keyboard alone for many reasons. For example, someone may choose or need to interact with a keyboard because they cannot complete precise movements with their hands and, as a result, do not use a mouse or trackpad. This might include people with repetitive strain injury (RSI) or with Parkinson's disease, as two examples. There are also various situational reasons why someone might benefit from a keyboard accessible experience. For example, parents who need to continue holding a baby in one arm and complete a task with the other.  

The information below will also help to find issues for people who interact using keyboard-like inputs. For example, people using assistive technology &mdash; including switch devices and head wands and some voice recognition software considerations, too. 

## How to do a quick test

A simple and effective test of the accessibility of an interface is to check that any tasks you can complete with a mouse are also possible using a keyboard. Test the following, specifically:

- <kbd>Tab</kbd> to move through the interactive elements of the page
- <kbd> Shift</kbd> + <kbd>Tab</kbd> to reverse back up to the page through the interactive elements
- <kbd>Enter</kbd> OR <kbd>Space bar</kbd> to select button controls
- <kbd>Left</kbd> / <kbd>Right</kbd> / <kbd>Up</kbd> /<kbd>Down</kbd> buttons for radio buttons.

Are all interactive elements reachable by keyboard? Can you navigate and complete tasks as you would expect or with equivalence to someone using a mouse? 

Once you start the previous key press tests, it's also important that you can easily see where you are on the page. Being able to see where you are on a page as a keyboard only user is known as seeing the 'keyboard focus'. The keyboard focus is a bit like how you can track the mouse cursor around the page (arrow, hand and other icons). For keyboard users this position on the page is identified through the visual design by a 'keyboard focus style' or 'keyboard focus indicator'. 


## Keyboard focus styles

An accessible interface design includes strong, easily discernible focus styles. Essentially, this is about checking whether a broad group of people can easily see which element on a web page currently has focus. 

One way to ensure you have an accessible focus style would be to use a 2 pixel (px) thickness or above solid border around the element and make sure the colour has at least a 3:1 contrast ratio. To check the contrast ratios in your design, you can use the <a href="https://www.tpgi.com/color-contrast-checker/">Colour Contrast Analyser</a>. This allows you to select the foreground and background colours using an eye dropper tool and see whether the result passes or fails. 

There are more details to consider around colour contrast and designing effective focus styles but I don't aim to cover them in this post (for the sake of brevity). If you'd like to know more, I recommend this comprehensive <a href="https://www.sarasoueidan.com/blog/focus-indicators/">guide to focus indicators by Sara Soueidan</a>. 

## Expected behaviour for interactive elements using a keyboard

One of the questions I get asked when running training, is what to expect when interacting with certain elements on a page using a keyboard. For example, 'I pressed <kbd>Space bar</kbd> to activate this link but nothing happened?!'

So, here's a list of common interactive elements and their expected keyboard behaviour. 

<dl>
    <dt>Link</dt>
    <dd><kbd>Enter</kbd> to activate /follow</dd>
    <dt>Button</dt>
    <dd><kbd>Enter</kbd> or <kbd>Space bar</kbd> to activate/follow</dd>
    <dt>Checkbox</dt>
    <dd><kbd>Tab</kbd> to reach each input. Note: <kbd>left,</kbd> <kbd>right</kbd>, <kbd>up</kbd>, and <kbd>down</kbd> key presses not supported by default</dd>
    <dd><kbd>Space bar</kbd> to check and uncheck</dd>  
    <dt>Radio button</dt>
    <dd><kbd>Tab</kbd> to reach first input in a group</dd>
    <dd><kbd>Left</kbd>, <kbd>right</kbd>, <kbd>up</kbd>, and <kbd>down</kbd> key presses are supported and allow you to move through each item in a group</dd>
    <dd><kbd>Space bar</kbd> to select a radio</dd>

</dl>


## Knowing what has 'focus'

If the design used for your website doesn't include clear focus styles it may be difficult to test what has focus. If this is the case you can force focus style which means you can more easily identify issues. To force focus styles you can install a simple tool called a 'bookmarklet'. These tools are bits of code you can turn on for any given page you are on through your web browser - Chrome or Firefox, for example. 

Head to the web page and drag the link to your bookmarks to install the bookmarklet for forced focus styles:

<a href="https://www.pauljadam.com/bookmarklets/focus.html">Force / show keyboard focus style</a>

Once installed, you can then see what receives focus and you can think about whether this is correct. 

In some cases, things which mouse or trackpad users would not be expected to interact with may be highlighted. For example, in some cases things like modal windows or links can be reached by keyboard but are not intended to be active. If things receive keyboard focus but are visually hidden this is likely a sign of a mistake affecting keyboard users specifically. 

## Logical order

While completing the other checks, you should also check whether the order that you move through the page using a keyboard is logical. For example, does the keyboard order make it hard to understand the information -- does it affect the understanding of the key information / is it illogical? 


## Voice recognition

When we test for keyboard accessibility we often end up finding improvements for a wider variety of input approaches -- including voice input. For example, if a carousel component does not have 'Previous' and 'Next' button controls included, this most likely presents a barrier for people who cannot complete swiping gestures to show new content. But, it also makes it harder for people using voice recognition software. Without a control on screen whose name I can see, or at least guess, it is tricky for someone using voice recognition to know what verbal command to use. However, if there's a control with button-like sttyling which contains the word 'Previous' I can speak "Click previous" (or similar) with more certainty.  

For more information on keyboard accessibility see:

- <a href="https://webaim.org/techniques/keyboard/">WebAIM Keyboard accessibility</a>

- <a href="https://davatron5000.github.io/a11y-nutrition-cards/">Accessible components - a11y nutrition cards</a>



