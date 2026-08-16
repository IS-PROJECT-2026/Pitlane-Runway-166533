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
<img width="1600" height="801" alt="image" src="https://github.com/user-attachments/assets/c862ce42-b621-4e71-95ef-e78f3b5d386a" />


 **Caption:** The closed issues demonstrate granular tracking of individual project tasks and provide evidence that the planned interactive and functional features were completed.

### B. Project Board
<img width="2940" height="1546" alt="image" src="https://github.com/user-attachments/assets/2a65e747-bb4c-488a-882c-412af64eb8e5" />


* **Caption:** The GitHub Project Board provided a visual workflow for tracking issues from planned work through implementation and completion.

### C. Branching Architecture
<img width="2572" height="1584" alt="image" src="https://github.com/user-attachments/assets/6a742d92-010e-4a91-9cfc-fb6c3bd969d9" />


* **Caption:** The branch list demonstrates the use of conventional Git naming patterns, with feature branches prefixed using feat/ and development work separated from the main branch.

### D. Pull Requests & Traceability
<img width="2940" height="1670" alt="image" src="https://github.com/user-attachments/assets/b5387a3c-ad57-4ce9-abee-3c96220f2520" />


* **Caption:** This Pull Request demonstrates traceability between development work and GitHub issue tracking by linking the feature implementation to its corresponding issue and automatically closing the issue when the PR is merged.

---

## 5. Merge Conflict Evidence

---

### Conflict 1 — Full Chronology

**What cause did you use?** File Rename

#### Step 1: Generating the Clash

<img width="1280" height="229" alt="image" src="https://github.com/user-attachments/assets/23e9fb86-f422-4179-a55d-89164c4f97c9" />


* **Caption:** The conflict/file-rename-a and conflict/file-rename-b branches collided because both branches renamed the same file differently. GitHub detected the conflicting rename operations and displayed a warning, preventing the pull request from being merged automatically.

#### Step 2: Inside the Code Editor (Conflict Markers)
<img width="2186" height="244" alt="image" src="https://github.com/user-attachments/assets/13110afe-f54c-4e38-b397-a7fe6b237dbf" />


* **Caption:** The `conflict/file-rename-a` and `conflict/file-rename-b` branches produced conflicting rename operations on the same file. The conflict required the competing file paths to be reviewed manually before selecting the intended filename and completing the merge.

#### Step 3: Resolution & Clean Merge
<img width="1280" height="104" alt="image" src="https://github.com/user-attachments/assets/f67b8e05-e655-44c7-8acc-34f3da21ec43" />


* **Caption:** The file-rename conflict was resolved by retaining the intended file path and completing the merge. The resulting branch contained the resolved file structure, and the changes were successfully merged without any remaining conflict.

---

### Conflict 2 — Delete/modify

**What cause did you use?** Delete/Modify

**Why does this cause trigger a conflict?** A delete/modify conflict occurs when one branch deletes a file while another branch modifies that same file. Git cannot automatically determine whether the file should be deleted or retained with the modifications, so manual resolution is required.

<img width="1280" height="193" alt="image" src="https://github.com/user-attachments/assets/cd591274-b644-4db5-9f01-bda0f0597ffc" />


* **Caption:** The conflict/delete-modify-a and conflict/delete-modify-b branches conflicted because conflict/delete-modify-a deleted the glossary page while conflict/delete-modify-b modified the same glossary page. Git detected the incompatible delete and modify operations and required the conflict to be resolved before the changes could be merged.

---

### Conflict 3 — Same-Line Editing

**What cause did you use?**  Same-Line Editing
**Why does this cause trigger a conflict?** Both branches changed the same line of the index.html file to different <title> values. Since Git cannot determine which version should be kept automatically, it marks the overlapping changes as a conflict.

<img width="1600" height="171" alt="image" src="https://github.com/user-attachments/assets/cb03100d-626c-4052-9475-b897b8d46be1" />
<img width="1280" height="68" alt="image" src="https://github.com/user-attachments/assets/a793a28f-02df-475b-9906-1f91a54bf72c" />
<img width="1352" height="116" alt="image" src="https://github.com/user-attachments/assets/d591e9ed-c0c8-4f0f-bf29-9c1470b048bc" />


* **Caption:** Conflict between the HEAD branch and conflict/same-line-a where both branches modify the same <title> line in the index.html file.

---
