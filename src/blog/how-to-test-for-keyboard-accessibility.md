---

layout: base.njk
title: Testing keyboard accessibility
date: 2023-09-05
description: A quick guide on testing for keyboard accessibility

---

# How to test for keyboard accessibility

In this blog we'll look at some of the ways you can check keyboard accessibility for your website content.

## Why keyboard accessibility is important

People may interact with your website using only a keyboard for many reasons. For example, someone may choose or need to interact with a keyboard because they cannot complete precise movements with their hands meaning they're not using a mouse or trackpad. People with repetitive strain injury (RSI) or who have Parkinson's are just two examples of groups who benefit from an accessible keyboard experience. But, parents who need to hold a baby in one arm but complete an online form are another group who also benefit. 

The information below will also help to find issues for people who interact using keyboard-like inputs. For example people using assistive technology -- including head wannds, switch devices or eye tracking software. The checks will also help you find issues for people using voice recognition software. 

## How to do a quick test

A simple and effective test of the accessibility of an interface is to check that any tasks you can complete with a mouse are also possible using a keyboard. Test the following, specifically:

- <kbd>Tab</kbd> to move through the interactive elements of the page
- <kbd> Shift</kbd> + <kbd>Tab</kbd> to reverse back up to the page through the interactive elements
- <kbd>Enter</kbd> OR <kbd>Space bar</kbd> to select button controls
- <kbd>Left</kbd> / <kbd>Right</kbd> / <kbd>Up</kbd> /<kbd>Down</kbd> buttons for radio buttons.

Are all interactive elements reachable by keyboard? Can you navigate and complete tasks as you would expect or with equivalence to someone using a mouse? 

Once you start the previous key press tests, it's also important that you can easily see where you are on the page. Being able to see where you are on a page as a keyboard only user is known as seeing the 'keyboard focus'. The keyboard focus is a bit like how you can track the mouse cursor around the page (arrow, hand and other icons). For keyboard users this position on the page is identified through the visual design by a 'keyboard focus style' or 'keyboard focus indicator'. 

## Keyboard focus styles

An accessible interface design includes strong, easily discernible focus styles. Essentially, this is about checking whether a broad group of people can easily see which element on a web page currently has focus. For example you could achieve this by adding a highly contrasting thick border around each interactive element in focus. Such elements include buttons, links or form inputs. 

The Web Content Accessibility Guidelines (WCAG) requires the focus style to use colours which have at least a 3:1 contrast against their adjacent colour. You can check which colour combinations meet this contrast ratio using a helper tool. The <a href="https://www.tpgi.com/color-contrast-checker/">Colour Contrast Analyser</a> allows you to select the foreground and background colours using an eye dropper tool. If it's below 3:1 then the focus style fails accessibility (in the eyes of WCAG rules). 

There are more details to consider around colour contrast and designing effective focus styles which I don't aim to cover in this post (for the sake of brevity). If you'd like to know more, I recommend this comprehensive <a href="https://www.sarasoueidan.com/blog/focus-indicators/">guide to focus indicators by Sara Soueidan</a>. 


## Knowing what has 'focus'

If the design used for your website doesn't include clear focus styles it may be difficult to test what has focus. If this is the case you can force focus style which means you can more easily identify issues. To force focus styles you can install a simple tool called a 'bookmarklet'. These tools are bits of code you can turn on for any given page you are on through your web browser - Chrome or Firefox, for example. 

Head to the web page and drag the link to your bookmarks to install the bookmarklet for forced focus styles:

<a href="https://www.pauljadam.com/bookmarklets/focus.html">Force / show keyboard focus style</a>

Once installed, you can then see what receives focus and you can think about whether this is correct. 

In some cases, things which mouse or trackpad users would not be expected to interact with may be highlighted. For example, in some cases things like modal windows or links can be reached by keyboard but are not intended to be active. If things receive keyboard focus but are visually hidden this is likely a sign of a mistake affecting keyboard users specifically. 

## Logical order

While completing the other checks, you should also check whether the order that you move through the page using a keyboard is logical. For example, does the keyboard order make it hard to understand the information -- does it affect the understanding of the key information / is it illogical? 

For more information on keyboard accessibility see:

- <a href="https://webaim.org/techniques/keyboard/">WebAIM Keyboard accessibility</a>

- <a href="https://davatron5000.github.io/a11y-nutrition-cards/">Accessible components accessibility nutrition cards</a>



