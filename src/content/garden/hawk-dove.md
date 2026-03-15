---
title: Hawk-dove game
created: 2026-03-15
updated: 2026-03-15
description: .
---

**Hawk-Dove** (also called Chicken or Swerve) is a game with no dominant strategy but two [Nash equilibria](nash-equilibrium). It contrasts with the [prisoner's dilemma](prisoners-dilemma) in that defection is not always the best move — the worst outcome is when *both* players refuse to back down.

---

## Payoff Matrix

|  | **P2: Swerve** | **P2: Straight** |
|--|----------------|------------------|
| **P1: Swerve** | II | III |
| **P1: Straight** | I | **IV ← worst outcome** |

- **P1 prefers**: I > II > III > IV
- **P2 prefers**: III > II > I > IV

---

There are two Nash equilibrium strategies:

1. If the other player goes **straight,** the NE strategy is to **swerve**.
2. If the other player **swerves,** the NE strategy is to go **straight**.

Neither player wants to be the one who swerves when the other goes straight (box I for P2, box III for P1), but both players most want to avoid the mutual collision/worst possible outcome of box IV. 

Going straight (the "tough" move) is only rational if the other player swerves; if both go straight, both suffer the worst possible outcome.