## Setup

* *npm install* - to run locally
* *npm run dev* - heroku will compile assets with webpack.prod.config.js and run the express web server in server.js


## About the Project

[Production link](realtime-175.herokuapp.com)


Every project that we've done so far—with the exception of Game Time—has been bound by the whole HTTP request/response cycle. In this project, we're going to head off the beaten track for a bit and build real time applications with WebSockets. When the server gets new information, it pushes it out to all of the connected clients.

Your mission in this project is to build one of two real-time applications based on the user personas explained below. You will choose the approach that you feel works best.

## Learning Objectives

- Build a rich web application that leverages WebSockets to push data to connected clients in real time.
- Evaluate the trade-offs involved in different approaches and make informed decisions about your application's design and architecture.

## Thoughts on Approach

This is your last project at Turing, which means you're about to go off and be developers out in the real world. A big topic for Module 4 has been this idea of trade-offs. Your mission is to complete a base set of requires and satisfy the user personas described below. How you choose to approach it is up to you. Some possible approaches might be:

### On the Server

- Build a Node application that starts off just keeping all of the data in memory using local variables. This is problematic because if your process crashes it will lose all of that data in memory. On the other hand, it's simple to get up and running. Once you have the basic application up and running, you can use a simple key-value data store like Redis to persist your data in the event that your process goes down.
- Build two applications: a Rails application that handles data persistence, providing an API, and serving static assets along with a Node application that focuses exclusively on pushing messages to client over WebSocket connections. You could use Redis to facilitate PubSub messaging between the two applications.

### On the Client

- Use jQuery for all updating and DOM manipulations.
- Explore a front-end framework like Ember or React to handle all of the client-side concerns of your application.

## Project Concepts

### Personal Time

#### Case Studies and User Flows

- Marissa works at a local non-profit helping where she helps people find jobs in the technology industry. Many of the students want to schedule time with her, but it can be hard sometimes to work around everyone's schedule and whatnot. She decides to use Personal Time to schedule her appointments.
  - She heads over to the Personal Time website and clicks on the link to create a new schedule.
  - This generates two unique URLs: one where she can see all of her appointments and one that she can give to people to schedule a time.
  - She puts in a bunch of dates and times into the administration page and sends the URL to the scheduling page out to everyone she is working with.
  - On the scheduling page, if someone selects a time, it becomes disabled for everyone viewing the page, this means that it isn't possible to be double booked.
  - Users can also deselect their current choice if they want to free up that spot while they think about it a little more.
  - After selecting a slot, the people scheduling a meeting with Marisa sees that they can download an iCal file and add it to their calendar.
  - Later on, she finds out that her friend Tan is trying to schedule lunch with a bunch of people. She notices that lunch overlaps with some of her appointment slots. She heads over the administration view and notices that she can delete open time slots, but she cannot delete time slots that have been scheduled.
- Mary mentors up and coming software engineers because of the deep joy generates in her heart. As much as she loves working with junior developers, she is on the East Coast and many of the people she works with live in Mountain Time. Mary, being comfortable with technology, decides to offload this task to a computer rather than dealing with it herself.
  - She heads over to the Personal Time website and creates a bunch of sites. She notices that the site already knew she was on Eastern Time. She puts in a number of time slots.
  - She sends the link out to her proteges.
  - When they visit the page, they all of the dates and times in their current time zones as well, so there is no confusion about when they're meeting.

## Evaluation Criteria

### Code Style (JavaScript and/or Ruby)

* 4: Developer writes code that is exceptionally clear and well-factored
* 3: Developer solves problems with a balance between conciseness and clarity and often extracts logical components
* 2: Developer writes effective code, but does not breakout logical components
* 1: Developer writes code with unnecessary variables, operations, or steps which do not increase clarity
* 0: Developer writes code that is difficult to understand

#### Client-Side Application

* 4 - Your application has exceptionally well-factored code with little or now duplication and all components separated out into logical components.
* 3 - Your application is thoughtfully put together with some duplication and no major bugs.
* 2 - Your application has a significant amount of duplication and one or major bugs.
* 1 - Your client-side application does not function.

#### Test-Driven Development

* 4 - The code demonstrates high test coverage (>80%), tests at the feature and unit levels, and does not rely on external services.
* 3 - The code demonstrates high test coverage (>80%), tests at feature and unit levels, but relies on external services
* 2 - The code demonstrates high test coverage (>80%), but does not adequately balance feature and unit tests
* 1 - The code does not have 80% test coverage

### Encapsulation / Breaking Logic into Components

* 4: Application is expertly divided into logical components each with a clear, single responsibility
* 3: Application effectively breaks logical components apart but breaks the principle of SRP
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear
* 1: Application logic shows poor decomposition with too much logic mashed together

#### Concept

Does the application deliver on the concept?

* 4 - Exceeded expectations, this application is great
* 3 - Met expectations as outlined by the user personas, the application is a solid first version
* 2 - Below expectations, this is at-best a prototype
* 1 - Far below expectations, this doesn't demonstrate the value of the concept

#### Interface

Does it have a highly usable interface?

* 4 - The application is pleasant, logical, and easy to use
* 3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality
* 2 - The application shows effort in the interface, but the result is not effective
* 1 - The application is confusing or difficult to use

#### Features

Does it have the expected features?

* 4 - There are more features than we planned
* 3 - All planned features were delivered
* 2 - Some features were sacrificed to meet the deadline
* 1 - Major features are missing and/or the application is not deployed to production

[Real-time project link](https://github.com/turingschool/curriculum/blob/master/source/projects/real_time.markdown)


## Special thanks for the great template
[Alan Smith react/node starter template](https://github.com/alanbsmith/react-node-example)
