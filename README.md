# The Task Tracker

> **Rule #1:** Your job during this sprint is to learn the following concepts and apply them when solving these issues. Your job is **not** to rush and worry about getting everything done.
>
>    1. Understanding the requirements
>    1. Modular code using Browserify
>    1. Defining actors with `Object.create()`
>    1. Defining related data structures
>    1. Implementing drag & drop

## User Story

### **As a task master, in order to keep track of my tasks, I need to record the task name, description, and due date**

## Acceptance Criteria

**Given** a user needs to create a new task

**When** the user opens the application

**Then** there should be an affordance for creating a new task

**And** there should be three visible columns labeled _To Do_, _Doing_, and _Done_

---

**Given** a user needs to create a new task

**When** the user performs a gesture on the new task affordance

**Then** a form should be displayed to the user with prompts and input fields for the name, description, and due date of the task

**And** there should be an affordance for saving the task

---

**Given** the user has filled in all the information for creating a new task

**When** the user performs a gesture on the save task affordance

**Then** a new task component should be rendered in the _To Do_ column. If there are existing tasks in the column, the new task should be rendered last in the list.

## User Story

### **As a task master, in order to keep track of the status of my tasks, I need to be able to move tasks to different status columns**


**Given** a user has started a task

**When** the user performs a drag gesture on a card from the _To Do_ column to the _Doing_ column

**Then** the card should be removed from the _To Do_ column and rendered in the _Doing_ column

**And** the card should have a different background color (of your choosing)

**And** if the due date on the card is in the past, the card should have the text _This task is overdue_ beneath the name, description, and due date.

---

**Given** the user has a task in the _Doing_ column

**When** the user performs a drag gesture on the card into the _To Do_ column

**Then** the operation should not complete

**And** the user should be notified that moving a task from _Doing_ to _To Do_ is not allowed

---

**Given** the user can completed a task

**When** the user performs a drag gesture on the card from the _Doing_ column into the _Done_ column

**Then** the card should be removed from the _Doing_ column and rendered in the _Done_ column

**And** the card should have a different background color (of your choosing)

**And** the card should have an archive affordance rendered at the bottom

---

**Given** the user has a task in the _Done_ column

**When** the user performs a drag gesture on the card into the _Doing_ column

**Then** the card should be removed from the _Done_ column and rendered in the _Doing_ column

**And** the archive affordance should be removed from the card

## User Story

### **As a task master, in order to keep my task board clean, I should be able to archive tasks**

**Given** there are cards in the _Done_ column

**When** the user performs a gesture on the archive affordance of a card

**Then** that task should no longer be rendered

> **Technical Note:** It should not be deleted from the database - just not rendered

## User Story

### **As a task master, in order to see if I completed tasks, I should be able to view my archived tasks**

---

**Given** the user has completed, and archived tasks

**When** the user opens the application

**Then** there should be an affordance for viewing archived tasks

---

**Given** the user has completed, and archived tasks

**When** the user performs a gesture on the view archives affordance

**Then** all archived task cards should be displayed in a grid and have the same background color (of your choosing)

**And** the 3-column interface for managing tasks should not be rendered

**And** there should be an affordance for exiting the archive view and returning to the tracking view

## User Story

### **As a task master, in order to track related tasks, I should be able to assign a category to any task**

---

**Given** a user has performed a gesture on the _Create Task_ affordance

**When** the task form is rendered

**Then** there should be an affordance for choosing which category the task belongs to

**And** the affordance should be labeled as optional

---

**Given** a user needs to create a new category

**When** the user opens the application

**Then** there should be an affordance for creating a new task category

---

**Given** a user needs to create a new category

**When** the user performs a gesture on the _New Category_ affordance

**Then** an affordance should be displayed to the user with the following elements

1. Prompt
1. Category name field
1. Button to save the category

## User Story

### **As a task master, in order to quickly view my efficiency, I should be able to view graphs of my data**

**Given** the user has entered in tasks

**When** the user visits the application

**Then** the user should see an affordance for viewing graphs about the tasks

1. How many tasks currently in each active column and how many are archived
1. How many tasks in each category (include uncategorized)
1. How many tasks were completed on time vs. how many were not
1. Average time it took to complete tasks in each category

## Helpful Links

1. [Codepen: CSS Grid Responsive Framework](https://codepen.io/justincavery/pen/PjYEjN)
1. [JavaScript toast notifications](https://github.com/jaredreich/notie)
1. [Common Responsive Layouts with CSS Grid ](https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df)
1. [A simple yet flexible JavaScript charting library](http://www.chartjs.org/)
1. [CSS Grid by Example](https://gridbyexample.com/examples/)