---
layout: post
title:  "Anki Beginner Steps"
date:   2019-01-29 12:00:00 -0000
categories: [SRS]
tags: [Anki, Tutorial]
permalink: anki-beginner-steps
published: true
---

![Anki](/assets/anki.png){:height="300em" width="300em" style="float: left;  padding-right:1em"}

This guide assumes you already *want* to begin using a Spaced Repetition System (SRS) to retain knowledge and assist in learning. `"But how do I begin?"` or `"What does this terminology mean?"` This guide will cover the basics of setting up Anki, as well as some common terminology and use cases.

<!-- # Todo
1. Make Accounts
   1. AnkiWeb
2. Test deck, some basics
   1. Notes -> Cards
   2. Stats
   3. Importing a deck
3. Advanced
   1. Ease
   2. Card States
   3. Card Intervals
   4. extensions
   5. Phone syncing
   6. Switching Profiles / Multiple Users 
   7. Deck Order
   8.  Burying/Suspending

 - Things not covered:
   1. Custom Study
   2. Deck Browsing Specifics
      1. Decks vs Sub-decks
      2. Tags
      3. Custom search terms
   3. Card Creation help
      1. Cloze
      2. CSS
      3. Media
      4. Card Templates
         1. Conditional Creation
   4. General Tips
      1. Cleaning up Media
      2. Clearing Empty Cards
   5. Mindset
      1. Optimum Recall
      2. Missing Reviews
-->




## Download Anki
Download and install __[Anki]__.

When installed it should look like this:

![Image](/assets/anki-examples/main-page.png)


---

### Importing a Deck

Visit the [Anki Shared Decks][AnkiSharedDecks] page to see decks people have created and shared. Find a deck you want to try, using the categories to help, or just by searching by name.

[![Image](/assets/anki-examples/search-for-deck.png){: style="border: 1px solid black;"}][AnkiSharedDecks]

You can download and import these decks into your Anki, then change the decks however you want. If the author makes a change to the original deck yours will not change, but you can usually re-download the updated version and apply the changes without impacting your study progress.

Let's take this deck on the [NATO Phonetic Alphabet][NatoDeck] as our example.

[![Image](/assets/anki-examples/nato-deck-page.png){: style="border: 1px solid black;"}][NatoDeck]

Download^ the deck, and open the `.apkg` package. It will open Anki, saying it has imported. Like this:

![Image](/assets/anki-examples/main-page-with-nato.png)

---

## Study 
Now you have a deck of flashcards, and can begin studying! Simply click on a deck, and click the `Study Now` button.

![Image](/assets/anki-examples/nato-study.png){: style="border: 1px solid black;"}

# Studying new cards

You'll be shown the front of a **card** in the deck.

![Image](/assets/anki-examples/nato-front.png)

Hit `Show Answer` to view the back of the card, with the answer. **Remember** your goal is to *recall* the information on the back of the card *before* looking.

![Image](/assets/anki-examples/nato-back.png)

You are given three choices *when learning new cards*: `Again`, `Good`, and `Easy`. The time above these options states how long it will be until you see this card again. For new cards this is called the "Learning Step". Selecting `Good` will push the review 10mins away, `Easy` 4days, and `Again` 1min. 

If you know the and you found the question easy, then select `Easy`, and Anki will make sure to schedule this card further in the future from now on. If you were just correct select `Good`, and if you were wrong select `Again`. These options help Anki better tune specific cards to ask for review at the optimum time for learning.

Cards are also shown in a random order by default, so you do not simply recall the order.

# Studying learned cards

![Image](/assets/anki-examples/nato-back-learned-cards.png)

You will get four choices *when reviewing learned cards*: `Again`, `Hard`, `Good`, and `Easy`. The last two act the same as for learning new cards, `Again` is slightly differently, and `Hard` is only an option for learned cards.

When you select `Again` for a card you had previously learned, that means the card has *lapsed*. You once knew it, and no longer do. It will go from being a "learned" card to a "(re)learning" card. Anki will show this card more frequently in the future.

Select `Hard` when you knew the answer, but it was very difficult to recall (perhaps you initially thought of a wrong answer). The card will get only a slightly longer delay than the last period.



![Image](/assets/SRS.png)

E.g. 1d -> 3d -> 8d -> 20d -> 50d.



---

## Browse Cards

The card Browser can be found by clicking `Browse` in the main window of Anki.

If you can't see the sidebar, then in the  hit `Go -> Sidebar` to bring it up.

>The sidebar on the left allows quick access to common search terms. Various search terms as described below are listed, along with all deck names and tag names. Clicking on an item will search for it.

![Image](/assets/anki-examples/browse.png)

You can browse cards by specific decks, sub-decks, tags, or even save search terms.

### Due Dates

Each card has a Due column, with either a date or a number. Cards with Dates have been seen before, and the date is when they are next due to be reviewed. Cards with numbers are Unseen, and the number indicated their order for learning; lower cards first. If you wish to change the order of new cards, select any you wish, right click, and select `Reposition`. If you wish to move new cards to the end of the new card queue, or reschedule seen cards within a specific date range, then instead select the `Reschedule` option.


### Notes vs Cards

Clicking a *Card* in the Browser will show you the *Note* which created the card below it. *Notes* are a grouping of fields which make up some related knowledge. Anki then takes a Note and uses it to generate *Card(s)*, which can be changed in any way.

<p style='color:blue'>A Note is in blue below.</p>
<p style='color:red'>Three cards generated by that Note are in red.</p>

![Image](/assets/anki-examples/note-example.png)

This note is taken and converted into those three cards, which can look like:

<!-- ![Image](/assets/anki-examples/note-example-card-3.png){: height="400em" width="300em" style="border: 1px solid black;"}
![Image](/assets/anki-examples/note-example-card-2.png){: height="400em" width="300em" style="border: 1px solid black;"}
![Image](/assets/anki-examples/note-example-card-1.png){: height="400em" width="300em" style="border: 1px solid black;"} -->
![Image](/assets/anki-examples/note-example-cards.png)

Each of these cards uses part of the Note to create different types of questions and answers. Some of them also contain an audio file on the back side of the card, which will automatically play.

You can add any new Fields to the Note in the `Fields` button, as well as the templates to generate any of your cards in the `Cards` button, above the Note.

---

## Stats


![Image](/assets/anki-examples/stats.png){:height="600em" width="200em" style="float: right;  padding-right:1em"}

Stats can be found by clicking `Stats` in the main window of Anki. These stats report on how many reviews you have in the future, how many cards you have studied, how long you spent reviewing them, how often you answered each option, how much of the deck is know, and more!



### Card Types

As shown in the stats above, cards have different states: 

- `Unseen`: never seen
- `Learning`: currently learning
- `Young`: learned recently
- `Mature`: learned a long time ago, considered 'known'
- `Suspended`: See [#Suspending and Leeches](#suspending-and-leeches)
- `Buried`. See [#Burying](#burying)


![Image](/assets/anki-examples/stats2.png){: height="350em" width="500em" style="border: 1px solid black;"}

---

## AnkiWeb Syncing

Make an account on __[AnkiWeb]__, then verify your email. After that click `Sync` in the main window of Anki, in the top bar at the right, and sign in. You will be asked if you want to Upload or Download from AnkiWeb; if this is your first time then select Upload.

### Syncing to/between Mobile

Download the Anki app on your preferred mobile OS ([Android][AnkiMobileAndroid] or [iOS][AnkiMobileIOS]). Sign in with your AnkiWeb account, and sync. You'll have to select "Download from AnkiWeb" if you already have synced before on desktop. Whenever you review cards on mobile, try and remember to sync before you close the app, so you do not lose your progress on desktop.

**Note:** Yes the iOS app is about £24, whereas the Android app is free. This is because the iOS app is made by the Anki developer, and is the only way he funds the development of Anki. Whereas the Android app is open source on [Github][AnkiDroidGithub] made by a third party. This means that it may not have all the of Anki iOS and Desktop, or may lag behind at times. You can find the manual for the Android version [here][AnkiDroidManual].



---

## Advanced Functionality Round-up

Here I'll quickly touch on some more advanced functionality of Anki.

### Card Intervals
As mentioned in [#Study](#study) the period of a card is changed to be closer or further away when you select `Easy` or `Hard` (also for `Again` for learned cards). This is because these options change the card's *Ease Factor* which starts at 250%. When you mark a card as correct, it's new interval is calculated by the formula: `Current Interval x Ease Factor x Deck Interval Modifier`. Which is usually something like: `2d x 250% x 100%` = 5d.

*Current Interval* is the current period of the card, how long since your last review of it. 

*Ease Factor* is how easy the card is, the higher the % the easier it is. When you select `Hard` during a review, Anki first lowers the card's *Ease Factor* by some % *then* calculates the next interval. Same with `Easy`, but it increases the *Ease Factor*. This change to the *Ease Factor* is permanent, and so it will affect all future reviews of this card, making them longer or shorter.

*Deck Interval Modifier* is set in the Deck options, and will simply change each card's interval by its value. If you want to see every card in the deck more often then decrease it, and the opposite to see all cards less often.

### [Burying][AnkiManualSiblings]

*Burying* is done by Anki automatically, in an effort to not show *Siblings* (Cards which are generated from the same Note). This is because they will most likely share some information, and therefore impact of the later shown cards may be hurt by reviewing the first. *Burying* a card means to put it back on-top of the deck for tomorrow, essentially delaying the review.

### [Suspending and Leeches][AnkiManualLeeches]

Anki tracks how many times each card has *lapsed* (where it was learned, and then was forgotten). If the number of lapses gets above a threshold (default: 8 times) then Anki marks this card as a Leech. The default behaviour is to automatically tag the card with `Leech` and then *Suspend* the card, which means the card will never show up in a review again, until you un-suspend it. 

You can also manually Suspend a card (or an entire note) through the options menu.



### [Extensions/Add-ons][AnkiAddons]

Anki is open source, and has great support for Extensions, which you can view [here][AnkiAddons].

To install an extension go into the Extension's page and find the download code.

![Image](/assets/anki-examples/extention-download.png){: style="border: 1px solid black;"}

Copy this code, then in the Anki main window click `Tools -> Add-ons -> Get Add-ons` type the code in the box, and hit `OK`. The Extension will install, and require a reboot of Anki to function.

Here are some extensions I can recommend:
1. [Night Mode](https://ankiweb.net/shared/info/1496166067)
2. [True Retention](https://ankiweb.net/shared/info/613684242)
3. [Image Resizer](https://ankiweb.net/shared/info/1214357311)
4. [Image Occlusion Enhanced](https://ankiweb.net/shared/info/1374772155)


### [Profiles for Multiple Users][AnkiManualProfiles]

`File -> Switch Profile`

>Profiles are intended to be used by different people, and each AnkiWeb account can only keep one profile in sync. For dividing up your own content, you should use separate decks rather than separate profiles, except when using extra profiles for experimenting with changes you don't plan to sync to other devices.

Very useful for multiple people using the same computer, as you'll each have your own account to sign into, and sync progress to.





---
---
---

## Further reading


![Image](/assets/SuperMemo.png){:height="120em" width="120em" style="float: left;  padding-right:1em"}
#### [Effective Learning: Twenty Rules of Formulating Knowledge][SuperMemo20Rules] by Dr Piotr Wozniak
An article which details 20 rules on how to organise your knowledge. Written by Dr Piotr Wozniak, who created [SuperMemo], the first SRS application.


---

![Image](/assets/RememberByNickCase.png){:height="120em" width="120em" style="float: left;  padding-right:1em"}
#### [How to Remember Anything Forever-ish][NCaseRemember] by Nicky Case
An interactive web-comic which explains Spaced Repetition Systems, and their background. Very useful for explaining to someone who has never heard of it.

---

![Image](/assets/FluentForeverFrontCover.jpg){:height="150em" width="120em" style="float: left;  padding-right:1em"}
#### [Fluent Forever: How to Learn Any Language Fast and Never Forget It][FluentForever] by Gabriel Wyner
A book about Language Learning using SRS, which contains many simple techniques for creating cards to get the optimum results from minimum effort.

---

![Image](/assets/anki.png){:height="120em" width="120em" style="float: left;  padding-right:1em"}
#### [Anki User Manual][AnkiManual]
Documentation covering all functionality Anki has to offer. Also see the [Anki Github Page](https://github.com/dae/anki) if interested, as it's all Open Source.

---

<iframe width="500em" height="300em" src="https://www.youtube.com/embed/QS2G-k2hQyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[SuperMemo]: https://www.supermemo.com/
[SuperMemo20Rules]: https://www.supermemo.com/en/articles/20rules
[NCaseRemember]: https://ncase.me/remember/
[FluentForever]: https://www.goodreads.com/book/show/19661852-fluent-forever

[Anki]: https://apps.ankiweb.net/
[AnkiWeb]: https://ankiweb.net/account/register
[AnkiAddons]: https://ankiweb.net/shared/addons/2.1
[AnkiSharedDecks]: https://ankiweb.net/shared/decks/
[NatoDeck]: https://ankiweb.net/shared/info/976506290

[AnkiManual]: https://apps.ankiweb.net/docs/manual.html
[AnkiManualSiblings]: https://apps.ankiweb.net/docs/manual.html#siblings
[AnkiManualLeeches]: (https://apps.ankiweb.net/docs/manual.html#leeches)
[AnkiManualProfiles]: https://apps.ankiweb.net/docs/manual.html#profiles-&-preferences

[AnkiMobileAndroid]: https://play.google.com/store/apps/details?id=com.ichi2.anki&hl=en_GB
[AnkiMobileIOS]: https://itunes.apple.com/gb/app/ankimobile-flashcards/id373493387?mt=8
[AnkiDroidGithub]: https://github.com/ankidroid
[AnkiDroidManual]: https://docs.ankidroid.org/manual.html