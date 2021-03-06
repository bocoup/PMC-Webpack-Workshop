# Table of Contents (home to return)

- [Chapter 1 - Core](#ch1)
  - [Section 1 - Introduction to Webpack](#ch1)
      - [Module Bundlers](#ch1-sec1)
      - [MEChA](#ch1-sec2)
      - [Setup](#ch1-sec3)
      - [Exercise: My First App](#ch1-ex1)
      - [Development Server](#ch1-sec5)
      - [Exercise: Dev Server](#ch1-ex2)
  - [Section 2 - Loaders](#ch1.2)
      - [File Loader](#ch1.2-sec1)
      - [Exercise: File Loader](#ch1.2-ex1)
      - [Style and CSS Loaders](#ch1.2-sec3)
      - [Exercise: Bundle Assets](#ch1.2-ex2)
      - [Recap](#ch1.2-sec5)
  - [Section 3 - Plugins](#ch1.3)
      - [Extract Text Webpack Plugin](#ch1.3-sec1)
      - [HTML Webpack Plugin](#ch1.3-sec2)
      - [Exercise: Extract](#ch1.3-ex1)
      - [UglifyJS Plugin](#ch1.3-sec4)
      - [Define Plugin](#ch1.3-sec5)
      - [Exercise: Uglify and Define](#ch1.3-ex2)

---

# Table of Contents (cont.)

- [Chapter 2 - Working with Incompatibilities](#ch2)
  - [Resolving Require](#ch2-sec1)
  - [Module Problems](#ch2-sec2)
  - [Script Loader](#ch2-sec3)
  - [Exports Loader](#ch2-sec4)
  - [Imports Loader](#ch2-sec5)
  - [Review](#ch2-sec6)
- [Chapter 3 - More Loaders and Plugins](#ch3)
  - [CSS Processing](#ch3-sec1)
  - [Babel Loading - ES2015+](#ch3-sec2)
  - [Static HTML with Client JS](#ch3-sec3)
  - [Exercise: Bake HTML](#ch3-sec4)

---

class: center, middle

# webpack workshop
## How does one pack the web?


Welcome to the class!  Today we are going to learn about webpack, but before we get started, let's handle some introductions and share some important information.

---

## Info:

* Code of Conduct: [https://bocoup.com/guidelines/code-of-conduct](https://bocoup.com/guidelines/code-of-conduct)
* Class website: [https://github.com/bocoup/PMC-Webpack-Workshop](https://github.com/bocoup/PMC-Webpack-Workshop)
* Clone repo: [https://github.com/bocoup/PMC-Webpack-Workshop](https://github.com/bocoup/PMC-Webpack-Workshop)

---

# Chapter 1: Webpack Core

???

In the first chapter of our webpack class, we will be covering a few topics to get you familiar with webpack's core concepts.

--

### 1. Introduction to webpack and module bundlers

???

First we will describe what webpack is, what problems it solves, and teach some very simple basics of setting up webpack with an example application.

--
### 2. Webpack Loaders

???

The second section we will study in more detail one of webpacks extremely powerful features, loaders.  We will be building upon our previous example application to include some loaders.

--

### 3. Webpack Plugins

???

After we've practiced with loaders, we will learn how to further enhance our projects with webpack plugins.

---

# Questions before we get started?

???
Are there any questions, before we get started?
