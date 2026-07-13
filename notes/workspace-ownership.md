# Orvex V1 - Workspace Ownership Design Note

## Why `owner` exists in the Workspace model

Although ownership information is also represented in `WorkspaceMember` through the `OWNER` role, the `owner` field is intentionally kept in the `Workspace` model for V1.

### Reasons

* Simplifies duplicate workspace name validation per owner.
* Makes owner lookups faster and simpler.
* Keeps common queries (e.g., "My Workspaces") straightforward.
* Reduces query complexity for the V1 architecture.

---

## Source of Truth Rule

`Workspace.owner` and the corresponding `WorkspaceMember` record with role `OWNER` **must always remain synchronized**.

They represent the same ownership information and should never point to different users.

---

## Operations that must update both collections

Whenever any ownership-related operation happens, both `Workspace` and `WorkspaceMember` must be updated together.

### 1. Create Workspace

* Create `Workspace`
* Create `WorkspaceMember` with role `OWNER`

### 2. Transfer Ownership (Future)

* Update `Workspace.owner`
* Change previous owner's role from `OWNER` → `MEMBER`
* Change new owner's role from `MEMBER` → `OWNER`

### 3. Delete Workspace

* Delete `Workspace`
* Delete all related `WorkspaceMember` records
* Delete all related `Invitation` records
* (Future: Delete Projects, Tasks, etc.)

---

## Transaction Requirement

All ownership-related operations must be executed inside a MongoDB transaction.

Reason:

If one database operation succeeds and another fails, the database can become inconsistent (for example, a workspace exists without an owner, or `Workspace.owner` and `WorkspaceMember.role` point to different users).

A transaction guarantees that either:

* **All operations succeed (Commit)**, or
* **Everything is rolled back (Rollback)**

This keeps the ownership data consistent across the entire application.
