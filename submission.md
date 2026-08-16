# Project Submission Report

## 1. Student Details

- **Full Name:** Daniella Wambua
- **GitHub Username:** DaniellaWambua
- **Email:** daniella.wambua@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/Pitlane-Runway-166533/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/Pitlane-Runway-166533/commit/125680b
- **Why this one?** This commit uses the conventional `feat` type and clearly describes the addition of learning progress tracking. It represents a meaningful completed feature linked to Issue #33 and was subsequently merged through PR #36.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/Pitlane-Runway-166533/pull/29
- **What happened and how did you recover?** The showcase images initially failed to load correctly on GitHub Pages because their paths did not resolve correctly under the deployed project path, producing 404 errors. I traced the problem to `scripts/showcase.js`, corrected the image path handling, and submitted the fix through PR #29; a follow-up correction was then made through PR #30.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/Pitlane-Runway-166533/pull/28
- **What did you check before merging?** I reviewed the completed Meet the Grid page, checking that the driver content, layout, navigation, and visual presentation worked as intended. I also reviewed the changes against the linked issue to make sure the feature was complete before merging.

### D. One Thing You Would Do Differently

- **What would you change?** I would establish the issue-linked branch and pull-request workflow before making the first project changes. This would give every change a clear issue and branch from the beginning and make the project history easier to trace and manage.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/Pitlane-Runway-166533/commit/e1591c9

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
### Milestones
<img width="2572" height="1584" alt="image" src="https://github.com/user-attachments/assets/eb9f5646-89bf-4dde-a12d-6019898c0f1e" />


* **Caption:** The GitHub milestones show how the project was organized into progressive stages, from initial setup through foundations and final depth and polish.

### Closed Issues
![alt text](ClosedIssues.png)

 **Caption:** The closed issues demonstrate granular tracking of individual project tasks and provide evidence that the planned interactive and functional features were completed.

### B. Project Board
![alt text](ProjectBoard.png)

* **Caption:** The GitHub Project Board provided a visual workflow for tracking issues from planned work through implementation and completion.

### C. Branching Architecture
![alt text](image-3.png)

* **Caption:** The branch list demonstrates the use of conventional Git naming patterns, with feature branches prefixed using feat/ and development work separated from the main branch.

### D. Pull Requests & Traceability
![alt text](PR.png)

* **Caption:** This Pull Request demonstrates traceability between development work and GitHub issue tracking by linking the feature implementation to its corresponding issue and automatically closing the issue when the PR is merged.

---

## 5. Merge Conflict Evidence

---

### Conflict 1 — Full Chronology

**What cause did you use?** File Rename

#### Step 1: Generating the Clash

![alt text](image-4.png)

* **Caption:** The conflict/file-rename-a and conflict/file-rename-b branches collided because both branches renamed the same file differently. GitHub detected the conflicting rename operations and displayed a warning, preventing the pull request from being merged automatically.

#### Step 2: Inside the Code Editor (Conflict Markers)
![alt text](image-5.png)

* **Caption:** The `conflict/file-rename-a` and `conflict/file-rename-b` branches produced conflicting rename operations on the same file. The conflict required the competing file paths to be reviewed manually before selecting the intended filename and completing the merge.

#### Step 3: Resolution & Clean Merge
![alt text](image-6.png)

* **Caption:** The file-rename conflict was resolved by retaining the intended file path and completing the merge. The resulting branch contained the resolved file structure, and the changes were successfully merged without any remaining conflict.

---

### Conflict 2 — Delete/modify

**What cause did you use?** Delete/Modify

**Why does this cause trigger a conflict?** A delete/modify conflict occurs when one branch deletes a file while another branch modifies that same file. Git cannot automatically determine whether the file should be deleted or retained with the modifications, so manual resolution is required.

![alt text](image-7.png)

* **Caption:** The conflict/delete-modify-a and conflict/delete-modify-b branches conflicted because conflict/delete-modify-a deleted the glossary page while conflict/delete-modify-b modified the same glossary page. Git detected the incompatible delete and modify operations and required the conflict to be resolved before the changes could be merged.

---

### Conflict 3 — Same-Line Editing

**What cause did you use?**  Same-Line Editing
**Why does this cause trigger a conflict?** Both branches changed the same line of the index.html file to different <title> values. Since Git cannot determine which version should be kept automatically, it marks the overlapping changes as a conflict.

![alt text](image-8.png)
![alt text](image-9.png)
![alt text](image-10.png)

* **Caption:** Conflict between the HEAD branch and conflict/same-line-a where both branches modify the same <title> line in the index.html file.

---
