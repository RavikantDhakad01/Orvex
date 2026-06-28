# Orvex V1 - Product Requirements Document (PRD)

**Version:** 1.0
**Status:** In Development
**Project Type:** Full Stack Web Application (MERN)

---

# 1. Overview

Orvex is a lightweight project management application that enables users to organize their work using Workspaces, Projects, and Tasks.

The objective of Version 1 is to build a complete, production-style full-stack application while keeping the feature set focused, maintainable, and resume-worthy.

---

# 2. Objectives

* Build a complete MERN stack application.
* Gain real-world full-stack development experience.
* Create a resume-worthy portfolio project.
* Learn application architecture and best practices.
* Deliver a polished and complete Version 1.

---

# 3. Tech Stack

## Frontend

* React
* React Router
* Context API
* Axios
* Tailwind CSS
* Lucide React

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt
* Cookie Parser

---

# 4. User Flow

```text
Landing Page
      ↓
Register / Login
      ↓
Dashboard
      ↓
Workspace
      ↓
Projects
      ↓
Tasks
      ↓
Logout
```

---

# 5. Features

## Authentication

### Register

* User Registration
* Client-side Validation
* Server-side Validation
* Password Hashing
* Error Handling

### Login

* JWT Authentication
* HttpOnly Cookies
* Error Handling

### Authentication Flow

* Current User
* Context API
* Persist Login After Refresh
* Protected Routes
* Public Routes
* Logout

---

## Dashboard

### Dashboard Layout

* Sidebar
* Navbar
* Main Content

### Sidebar

Navigation

* Dashboard
* Workspace
* Projects
* Tasks

### Navbar

* User Avatar
* Profile Dropdown
* Logout Button

### Dashboard

* Welcome Message
* Current User Information

---

## Workspace

* Create Workspace
* View Workspaces
* Rename Workspace
* Delete Workspace

---

## Projects

* Create Project
* View Projects
* Update Project
* Delete Project

---

## Tasks

* Create Task
* View Tasks
* Update Task
* Delete Task
* Update Task Status
* Due Date

---

# 6. UI Guidelines

## Theme

* Light Mode Only

## Layout

* Fixed Sidebar
* Top Navigation Bar
* Responsive Design

## Footer

* Landing Page Only
* No Footer on Authentication Pages
* No Footer Inside Dashboard

## Design Principles

* Clean
* Minimal
* Professional
* Responsive

---

# 7. V1 Scope

## Included

### Authentication

* Register
* Login
* Current User
* Context API
* Persist Login
* Protected Routes
* Public Routes
* Logout

### Dashboard

* Dashboard Layout
* Sidebar
* Navbar
* User Dropdown

### Workspace

* CRUD Operations

### Projects

* CRUD Operations

### Tasks

* CRUD Operations

---

# 8. Out of Scope (V2)

## Authentication

* Email Verification
* Forgot Password Backend
* Reset Password Backend
* Change Password

## Dashboard

* Dark Mode
* Notifications
* Search
* Analytics

## Workspace

* Members
* Roles & Permissions

## Projects

* Comments
* File Attachments
* Activity Timeline

## Tasks

* Labels
* Priority
* Attachments
* Checklists
* Recurring Tasks

## General

* Real-time Updates
* WebSockets
* Push Notifications
* Two-Factor Authentication (2FA)
* Session Management

---

# 9. Success Criteria

Version 1 will be considered complete when:

* Users can register successfully.
* Users can log in successfully.
* Authentication persists after browser refresh.
* Protected routes work correctly.
* Public routes redirect authenticated users.
* Users can securely log out.
* Users can create, update, and delete Workspaces.
* Users can create, update, and delete Projects.
* Users can create, update, and delete Tasks.
* The application is responsive.
* The project is successfully deployed.
* README documentation is completed.
* The codebase is clean, modular, and maintainable.
