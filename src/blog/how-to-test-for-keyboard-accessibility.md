---

layout: base.njk
title: Testing keyboard accessibility
date: 2023-09-05
description: A quick guide on testing for keyboard accessibility

---

# How to test for keyboard accessibility

In this blog we'll look at some of the ways you can check keyboard accessibility for your website content.

## Why keyboard accessibility is important

People may interact with your website using a keyboard alone for many reasons. For example, someone may choose or need to interact with a keyboard because they cannot complete precise movements with their hands and, as a result, does not use a mouse or trackpad. This might include people with repetitive strain injury (RSI) or with Parkinson's disease, for example. There are also various situational reasons why someone might benefit from a keyboard accessible experience. For example, parents who need to hold their baby in one arm and complete a task with the other.  

When we test for keyboard accessibility we also identify barriers for people using other adaptive inputs and keyboard-like interfaces. For example, switch devices and voice recognition software.  

## How to do a quick test

A simple and effective test for accessibility is to check that any tasks you can complete using a mouse are also possible using a keyboard. Test the following, specifically:

- <kbd>Tab</kbd> to move through the interactive elements of the page
- <kbd> Shift</kbd> + <kbd>Tab</kbd> to reverse back up to the page through the interactive elements
- <kbd>Enter</kbd> OR <kbd>Space bar</kbd> to select button controls
- <kbd>Left</kbd> / <kbd>Right</kbd> / <kbd>Up</kbd> /<kbd>Down</kbd> buttons for radio buttons.

Are all interactive elements reachable by keyboard? Can you navigate and complete tasks as you would expect or with equivalence to someone using a mouse? 

Once you start the previous key press tests, it's also important that you can easily see where you are on the page. Being able to see where you are on a page as a keyboard only user is known as seeing the 'keyboard focus'. The keyboard focus is a bit like how you can track the mouse cursor around the page. For keyboard users this position on the page visually identified by a 'keyboard focus style' or 'keyboard focus indicator'. 


## Keyboard focus styles

Accessible designs for interfaces include obvious focus styles. Essentially, this is about checking whether a broad group of people can see which element on a web page can be interacted with (has focus). 

A shortcut to an accessible focus style is to use a 2 pixel (px) thickness or above solid border around an element and make sure the border has at least a 3:1 contrast ratio against its adjcaent colour. Use the <a href="https://www.tpgi.com/color-contrast-checker/">Colour Contrast Analyser</a> to test designs. This Contrast Analyser tool includes an eye dropper which you can use to select the foreground and background colours which then generates a numerical ratio and a pass or fail result. 

There are more details to consider around colour contrast and designing effective focus styles but I don't aim to cover them in this post (for the sake of brevity). If you'd like to know more, I recommend this comprehensive <a href="https://www.sarasoueidan.com/blog/focus-indicators/">guide to focus indicators by Sara Soueidan</a>. 

## Expected behaviour for interactive elements using a keyboard

One of the questions I get asked when running training, is what the correct behaviour is when interacting with certain elements on a page using a keyboard. For example, 'I pressed <kbd>Space bar</kbd> to activate this link but nothing happened?!' In the case of links, they would only be activated by pressing the <kbd>Enter</kbd> key by default. 

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

If the website you're testing does not include clear focus styles, you'll find it hard to identify keyboard issues. If this is the case, you can force focus style for the page &mdash; this involves overriding the authored CSS for any given page to ensure you can see which element is in focus. To force focus styles you can install a simple tool called a 'bookmarklet'. These are tools which you can switch on via your web browser to perform simple tasks.

Head to the link below and follow the instructions to install the bookmarklet for forced focus styles:

<a href="https://www.pauljadam.com/bookmarklets/focus.html">Force / show keyboard focus style</a>

Once installed, you can then see what receives focus and you can then consider whether this is correct. 

It's likely you'll find things which are visually hidden but which still receive keyboard focus. This is quite common for carousel components, navigation menus and overlay content. This suggests the keyboard experience wasn't designed and tested effectively. 

## Logical order

While completing the previously outlined checks, you should also check whether the order that you move through the page using a keyboard is logical. For example, does the keyboard order make it hard to understand the information &mdash; does it affect the understanding of the key information / is it illogical? For example, if you move to a 'Submit' button and then backwards to the start of a list of form inputs, this would not be a logical order. 


## Voice recognition

When we test for keyboard accessibility we often end up finding improvements for a wider variety of input approaches &mdash; including voice input. For example, if a carousel component does not have 'Previous' and 'Next' button controls included, this most likely presents a barrier for people who cannot complete swiping gestures to show new content. But, it also makes it harder for people using voice recognition software. Without a control on screen whose name is visible, or at least can be guessed, it is tricky for someone using voice recognition to know what verbal command to use. However, if there's a control with button-like sttyling which contains the word 'Previous' I can speak "Click previous" (or similar) with more certainty.  

## Developer tools - active expression 

If you are familiar with developer tools, you can use the following technique to reliably track your focus, if the previous steps haven't worked.

- Open Developer Tools
- Open the Console
- Move to the 'Active Expression' input (it may be named differently dependent on your browser)
- Type in document.ActiveElement
- Press Enter
- Continue tabbing 
- Make a note of the elements shown in the Console

You should find the element in focus is printed in real time in the Console output.


For more information on keyboard accessibility see:

- <a href="https://webaim.org/techniques/keyboard/">WebAIM Keyboard accessibility</a>

- <a href="https://davatron5000.github.io/a11y-nutrition-cards/">Accessible components - a11y nutrition cards</a>



