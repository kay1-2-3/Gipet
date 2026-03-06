# Gipet

A social snippet app—posts, comments, votes, bookmarks, and tags. Built to learn and share with other beginners.

---

## Tech

**GraphQL** · **Prisma** · **PostgreSQL** · **JWT** · **React** · **MUI 5** · **Lottie**

---

## Features

**Auth & profile**
- Sign up, sign in (JWT)
- View and manage your posts, comments, votes, and bookmarks in your profile

**Content**
- Create posts (with optional images)
- Comment on posts and on comments (threaded)
- Add tags when creating posts; browse by tag

**Engagement**
- Upvote / downvote posts and comments
- Bookmark posts and comments
- Sort feed by votes, activity, or time
- Reading time for posts
- Approximate unique visit counts

**Discovery**
- Search users and tags from the home page (with autocomplete)
- Themes: red, blue, black, default, green
- Night and day mode per theme

**Under the hood**
- Skip/take pagination on home; cursor pagination on tag pages
- Global (Apollo) + local (React) state
- Responsive layout
- DB models for users, posts, pages, comments, votes, tags, bookmarks, visitors (one-to-one, one-to-many, many-to-many)

---

## Schema (ERD)

*Generated with [prisma-erd.simonknott.de](https://prisma-erd.simonknott.de/) — may not be fully up to date.*

![gipet-prisma-erd](https://user-images.githubusercontent.com/12322728/182235092-18c0d750-2659-46c3-a325-cf1db9a6b441.svg)

---

## Setup

*Full setup (DB, seeding, install, build, serve) is not fully documented yet. Local install and run are supported.*

---

## Upcoming

- Real-time notifications (votes and comments)
- Lottie for new posts
- Rich text editor
- PWA
- Domain-driven design refactor

*Note: Current and upcoming features are also being developed in [SpaceMonk](https://github.com/facinick/SpaceMonk). Goal: a faster, feature-rich generic social app that’s approachable to learn from.*
