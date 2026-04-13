---
name: update-docs-and-commit
description: Update the project vault docs and create a git commit for all staged/unstaged changes.
---

Update the project vault docs and create a git commit for all staged/unstaged changes.

## Steps

### 1. Update vault docs

The vault is at `/Volumes/o1k/Public/04 Documents/vaults/Vault 037/projects/Pale Kweyol/`.

**Update `project_status.md`:**
- Review what changed in this session (git diff, modified files)
- Update the "Recently Completed" section with what was done
- Update the "In Progress / Known Issues" section — add new issues found, remove issues that were resolved
- Update the "Last updated" date to today

**Update `changelog.md`:**
- Add a new dated entry at the top (below the frontmatter and `# changelog` heading)
- Summarise the changes made in this session concisely
- Follow the existing format: bullet points, present tense, grouped by concern

### 2. Create the git commit

- Run `git status` and `git diff` to review all changes
- Stage all modified source files (do not stage .env or secrets)
- Write a conventional commit message that accurately summarises the changes
- Commit with:
  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

### 3. Report back

Confirm what was updated in the docs and what was committed.
