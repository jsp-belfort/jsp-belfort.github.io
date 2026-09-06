---
name: generate-lesson-page
description: From a list of dates + a list of contents, generate a lessons page.
argument-hint: section
---

The `programmation` directory contains annual lesson pages.

1. Use the `dates.js` as base for the list of dates, and the `contents.js` as base for the list of contents.
2. The dates blacklist object name is <section argument in uppercase>_DATES_BLACKLIST. The lessons list object name is <section argument in uppercase>_LESSONS. Use the dates blacklist to filter out the dates.
3. If there are not enough elements in the lessons list, repeat the lessons from the beginning of the list until all filtered dates have a corresponding lesson. Display the generated lesson list in the chat.
4. Insert the [mid-year exam](#mid-year-exam) as an additional entry after the halfway point of the generated lesson list. Do not replace or remove a lesson: all generated lessons must be preserved, and the entries after the exam must keep their original lesson indexes shifted by one. If there are too much items in the list, pop the last item.
5. Write the `cours/<section>.md` file with the [following structure](#file-structure). The table mapping is shown [below](#table-mapping).
6. To have the file formatted, run `pre-commit run --files cours/<section>.md` after the file is generated.

## Table mapping

* Thème = `theme`
* Méthode = `method`
* Insister sur = `important`
* Livre = `book`
* Fiche = <the current item key. If it is M, empty the cell.>

## File structure

```markdown
# Cours <section argument in uppercase>

## Cours <counter> (date)

| Thème                                     | Méthode | Insister sur                                       | Livre | Fiche     |
|:------------------------------------------|:--------|:---------------------------------------------------|:---------|:----------|
<list of lessons>
```

## Mid-year exam

```markdown
## Partiel et révisions à la carte (date)

| Thème                                                   | Méthode                                      | Insister sur                                                                                                                 | Livre J2 | Fiche |
|:--------------------------------------------------------|:---------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:---------|:------|
| Révisions: 90 minutes                                   | Théorique                                    | Demander aux formateurs les points bloquants                                                                                 |          |       |
| “Partiel”: mini 1h                                      | Interrogation écrite                         | La concision: “plus t’écris, plus t’as de chance d’avoir faux”.<br>Se calmer et lire toutes les questions avant de se lancer |          |       |
| Correction interrogation \+ éventuellement re-révisions | Sous-groupes suivant le nombre de formateurs |                                                                                                                              |          |       |
```
