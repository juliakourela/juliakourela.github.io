---
title: Book - The Design of Everyday Things
updated: 2026-03-13
description: Notes on _The Design of Everyday Things_ by Don Norman.
---


# The Design of Everyday Things by Don Norman — Notes (in progress)

---

**Discoverability** — Is it possible to figure out what actions are possible and how to perform them?

**Understanding** — What does it mean? How is the product supposed to be used? What do all the different controls and settings mean?

---

**Industrial Design** — Optimizing function, value, and appearance for the user's and manufacturer's benefit 

**Interaction Design** — Enhancing people's understanding of what can be done, what is happening, and what has just occurred 

**Experience Design** — Quality and enjoyment of the total user experience

**Human-Centered Design (HCD)** — A process that ensures design matches the needs and capabilities of the intended users.

> *The Three Mile Island nuclear disaster was caused by poor design.*

---
### Affordance
A relationship between the properties of an object and the capabilities of an agent that determines the space of possibilities for how the object could be used.

- **Anti-affordance** — the prevention of interaction
- To be effective, both affordances and anti-affordances must be *perceivable*
- Rooted in **Gibsonian psychology** (an ecological approach to perception)

> *Example: Scissors. The holes afford finger insertion (affordance), their relative sizes indicate which fingers go where (signifier/mapping), and fingers are the only logical thing that fits (constraint).*

### Signifier
Any mark, sound, or other perceivable indicator that communicates appropriate behavior to a person.

> *Example: A bookmark. As an **intentional signifier** it marks someone's place; as an **unintentional signifier** it reveals how much of the book remains.*

### Mapping
A relationship between the elements of two sets of things (e.g., a set of light switches and the lights they control).

**Natural mapping** — uses grouping and proximity (cf. Gestalt psychology) to make relationships immediately understandable.

### Feedback
Communicating the results of an action; the system letting a user know it is working on their request.

Feedback should be:
- **Immediate** and **informative**
- **Planned** and **prioritized** — unimportant feedback should be unobtrusive; important feedback should be obtrusive

### Conceptual Model
A simplified explanation of how something works (e.g., file and folder icons on a computer).

- The same person may hold multiple, potentially conflicting mental models of the same object
- **System image** — the combined information available to a user (appearance, past experience, etc.) from which they form their conceptual model

### Designer should bridge two "gulfs":

**Gulf of Execution** — trying to figure out how an object operates. Bridge through signifiers, constraints, mapping, and a conceptual model. 

**Gulf of Evaluation** — trying to figure out what happened as a result of their interaction with the object. Bridge through feedback and a conceptual model.

---

## The Seven Stages of the Action Cycle

```
Goal
  │
  ├── EXECUTION
  │     ├── Plan    — "What are the possible action sequences?"
  │     ├── Specify — "What action can I do now?"
  │     └── Perform — "How do I do it?"
  │
  └── EVALUATION
        ├── Perceive  — "What happened?"
        ├── Interpret — "What does it mean?"
        └── Compare   — "Is it OK? Have I achieved my goal?"
```

- Most behavior involves **multiple feedback loops** — results of one activity direct the next; goals spawn subgoals; plans spawn subplans
- **Goal-driven (top-down)** — starts by establishing a new goal
- **Event-driven (bottom-up)** — starts by perceiving an event
- **Opportunistic actions** — take advantage of circumstances; less precise but require less mental effort

**Root cause analysis** — asking "why?" repeatedly until the fundamental cause of an action is reached.

**Feedforward** helps answer questions of *execution*; **feedback** helps answer questions of *evaluation*.

---
**Declarative memory** - Memory for facts; e.g. the name of the street you live on

**Procedural memory** - Memory for action; e.g. recalling which side your doorknob is on by mentally acting out opening the door 

**Overlearning** — continued practice after initial mastery, resulting in performance that feels effortless and automatic.

---

## The Three Levels of Mental Processing

### 1. Visceral
- Basic, subconscious protective mechanisms; makes quick good/bad, safe/dangerous judgements
- Tightly connected to the motor system
- **For design:** Style and aesthetics matter — immediate perception drives visceral response
- *Action cycle stages: Perform, Perceive*

### 2. Behavioral
- Largely subconscious learned skills triggered by pattern-matching
- **For design:** Every action is associated with an expectation that must be managed with feedback
- *Action cycle stages: Specify, Interpret*

### 3. Reflective
- Conscious cognition; deep and slow — often occurs *after* an event
- Evaluates circumstances, actions, and outcomes to assign value judgements
- **For design:** Reflective memories of an experience are often more important than the objective reality of it
- *Action cycle stages: Plan, Compare*

> *Recommended reading: **Emotional Design** (Norman)*

---

- **Cognition** attempts to make sense of the world; **emotion** provides value judgements
- We craft **narratives** (attributing causes to events) to understand our experiences, then generalize these into models of how things behave — which are often erroneous
  - *Example: The misconception that turning a thermostat to maximum heats/cools a room faster*
- We tend to **blame ourselves** for failures with everyday objects — often incorrectly — leading to **learned helplessness**

---

### On Errors & Feedback
- Humans err constantly; no system should be designed so that a single action can cause calamity
- Human tendency to **repeat a failed action** can be dangerous — hence "panic bars" on emergency exit doors
- Target feedback within **0.1 seconds** of a user action (even if it's just a progress indicator)
- **Under-predict** completion time — show the upper end of the estimated range
- Prefer **guidance messages** over error messages; assume partial correctness and move forward
- Accommodate the full variety of ways a user might complete a task

> *"The paradox of technology: the more functions a device has, the harder it is to learn — making it simultaneously more and less useful."*

---

## The Seven Fundamental Principles of Design

1. **Discoverability** — It is possible to determine what actions are possible and the current state of the device.
2. **Feedback** — Full and continuous information about results and current state; after an action, the new state is easy to determine.
3. **Conceptual Model** — The design projects all information needed to build a good mental model, leading to understanding and a sense of control.
4. **Affordances** — The proper affordances exist to make desired actions possible.
5. **Signifiers** — Effective signifiers ensure discoverability and that feedback is well communicated and intelligible.
6. **Mappings** — The relationship between controls and actions follows principles of good mapping, enhanced through spatial layout and temporal contiguity.
7. **Constraints** — Physical, logical, semantic, and cultural constraints guide actions and ease interpretation.

---