# Week 5

## Today

* Blog and ideas review
* Individual tutorials 
* Workshop: [GitHub](https://github.com/)


## App ideas 

[Initial ideas on this Google Document](http://bit.ly/web14203-app-ideas)

### Questions

I will ask them to you individually during the tutorials.

* What's the **interface** going to be like?
* Where is the **data** coming from? 
* Is your app **location-aware**?

[Tutorials feedback here](https://github.com/matteomenapace/rave-WEB14203/blob/master/notes/week-5-tutorials.md)



## Blogs and ideas

### [Burak](http://www.fourthfloor.me/blogs/bozdemir/2014/10/22/my-app-idea/)

* Everyone likes chocolate :)
* The app does not `automatically make a decision for you`. That would be rather scary, in a sci-fi way.
* Your blog posts look a bit like a *blob* of words, a long paragraph with no space to breath. There's *room* for improvement there ;)

![](http://www.fourthfloor.me/blogs/bozdemir/files/2014/10/photoo-1024x768.jpg)


### [Matt](http://www.fourthfloor.me/blogs/mstarr/2014/10/22/decision-app-idea/)

* People hate decisions! Therefore `my app tells you how to feel`. Controversial but exciting :)
* `Studies have shown...` ok, show me the evidence, or link to it!
* I really like that in your blog post you assume there's someone reading it, and you address them directly, using `you` (7 times!). You clearly aim to **explain** your ideas and **entertain** your reader(s), which is great. 

![](http://www.fourthfloor.me/blogs/mstarr/files/2014/10/Photo-on-09-10-2014-at-12.06-1024x682.jpg)


### Simeron

App idea not found :(

Looking at [your first blog post](http://www.fourthfloor.me/blogs/staak/2014/10/16/week-1-decision-app-web14203/), a couple of comments

* What you write is interesting, however it feels like a *blob* of words, a long paragraph with no space to breath. You can use headings, sub-headings, bold and italics and links to give your posts some **visual rythm**.
* **Screenshots** are really useful (*one picture is worth 100~ words* they say), and it would be great if you make them big, and cut out the noise (we don't need to see your laptop's applications dock, or its top bar)


### [Kimberly](http://www.fourthfloor.me/blogs/ksalazar/2014/10/21/week-2-dynamic-web/)

* `For this week we decided` it's ok to say that `Matteo decided` and I won't get offended if you write `..and I think it was a really lame idea` :)
* `I personally feel i need more practise with JS to understand better how variables, functions and logic work.` That's what we (well, I) want to read: **personal observations**, as opposed to a flat log of what happened in class (we know what happened in class already, we were there).
* Your post has 2 sections: one about Rock-paper-scissors in JS, and the other about *brainswarming*. It would be really good if you divided it up visually, using headings to summarise your post at a glance.

![](http://www.fourthfloor.me/blogs/ksalazar/files/2014/10/IMG_5247.jpg)



### [Harry](http://www.fourthfloor.me/blogs/hfoster/2014/10/22/week-1/)

* Nice screenshots, even better if you added a short caption for each. 
* Good to wrap up with `3 things I learnt`, and very useful to read. Bullet points also help to make it feel more *to the point*
* `Writing the blog at the time helps.` Indeed :)


### [Innocent](http://www.fourthfloor.me/blogs/iSekajja/category/web14203/)

`This is somewhat embarrassing, isn’t it?`


### [Margot](http://www.fourthfloor.me/blogs/mmercier/2014/10/23/app-idea-wtf-should-i-watch-now/) 

* Can we haz **big images** please?
* I like the idea of a *conversational* interface, eg `Something more recent`, `Yay!`, `I have already seen this`: it gives your app a **personality** (whilst still collecting data)
* Perhaps you could elaborate a bit more on the ideas that you jotted down. Your blog seems to work like a **personal notebook**, which is great. Even better if we (the readers) could understand more from it, and being able to suggest ideas and inspirations. What do you think?

![](http://www.fourthfloor.me/blogs/mmercier/files/2014/10/App-Brainswarming-1024x574.jpg)



### [Callum](http://www.fourthfloor.me/blogs/cholland/2014/10/16/dynamic-web-week-3/)

* Blog a little dry. 


### [Liam](http://www.fourthfloor.me/blogs/lparker/2014/10/23/brainswarming-and-app-ideas/)

* `Brainswarming, while similar to brainstorming...` as a reader this leads me hungry for an explanation. Also, as a teacher it makes me wonder if you understood the difference between b-storming and b-warming. Why not *google* it and link to a page explaining it?
* `...different ideas though, that would instead benefit the user more rather just benefiting me` this is excellent. As designers/makers, it's easy to fall into the **design for yourselfie** trap (aka [homophily](http://en.wikipedia.org/wiki/Homophily)) 
* `I found the whole task of brainswarming useful as it was extremely useful...` avoid repetition and keep it short: if you can say it in one sentence instead of two, then do it!






















## GitHub

It's not a *hub of gits*. 

**What is it then?** It's a **distributed version control system**. it allows teams to work on the same documents (often code) at the same time, and without stepping on each other's toes. 

**Why do we need it?** Because when you think it's time to back up your files, it's too late.

Can we not use DropBox instead? Yes, however Git is more powerful. It allows you to **collaborate**

[Learn more about it here](https://try.github.io/)

Using [Terminal](http://en.wikipedia.org/wiki/Terminal_(OS_X)) (or any other command-line tool) is very cool, in a Matrix-like way. However it's easier to have a visual interface sometimes. Most of the times. For that, you can use [SourceTree](http://www.sourcetreeapp.com/)

1. Download [SourceTree](http://www.sourcetreeapp.com/), it's free!
* Sign up (or log in) to [GitHub](https://github.com/) 
* Clean up the global .gitignore (add `.DS_Store` so that files that are generated by Mac OSX will not be pushed to the *mothership*)

### The workflow

##### 1. Commit

The files you've changed on your machine (aka *Working Copy*) need to be **committed**, as they are not in the repository yet. We can add or remove files from the **Stage** before we store them in the repository.

##### 2. Pull

Before you can upload your new/modified files to the mothership (aka *origin repository*), you need to **pull** the latest version from the mothership into your working copy. 

**Pull = download**

##### 3. Push

The **push** command tells Git where to put your local changes (aka *commits*) when you're ready to upload them to the mothership (aka *origin repository*).

The name of our remote is *origin* and the default local branch name is *master*. 

**Push = upload**




# Assignment for next~ish week!

Design your **app page**, as it would appear on an apps marketplace (such as the App Store, Google Play etc) or on a one-page site. 

Make texts **short and snappy**, and **sketch out key screens** (at least 3)!

Upload your designs to your 4F blog

### Examples & inspirations

- [Breath](http://breathapp.com/)
- [Somebody](http://somebodyapp.com/)
- [Spell Tower](http://www.spelltower.com/)
- [TimeHop](http://timehop.com/)




## Blog review

### General observations

* Nobody uses **[links](http://en.wikipedia.org/wiki/Hyperlink)**. Why? The Web wouldn't be a Web without links!
* Please don't write a primary school log of what we've done in class. We know what we've done in class already. Tell us what you've learned and why you think it's **relevant**. Or **boring**, or **confusing**.
* Aim to **explain and entertain**. Make it enjoyable for people to read. Remember that you're primarily wirting for yourself, but it's much more fun to write with **someone else** in mind!
* **Paragraphs** are a good thing! When you see a block of text that is longer than 5 lines (eg on FB), do you want to read it? Or do you find yourself skimming over it?  
* Use headings, sub-headings, bold and italics and links to give your posts some **visual rythm**. 
* **Images**: make them big! There's nothing more painful (typographically) than squinting your eyes to try and make sense of a image, with text wrapping around it.
* You can **ask questions** in your posts, from the obvious `What do you think?` to the specific `Which colours should I use for my app's background?`. **Involve** your reader(s)! 

## 4F problemz

Discussing the FourthFloor blogging platform, and why students mildly hate it.

The editing and reading **experiences are disconnected**: 

* what you see is NOT what you get (try [Medium](http://medium.com))..
* the sigle post page looks ok, but the feed page breaks the formatting
* painful on the eye



* time constraint
* not mobile-friendly
* word count not a concern


* dont' `regurgitate`
* don't keep your posts in a box, open them up (with **links**)


