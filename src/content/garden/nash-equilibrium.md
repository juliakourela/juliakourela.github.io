---
title: Nash equilibrium
created: 2026-03-15
updated: 2026-03-15
description: .
---

A **Nash equilibrium** is the best strategy to play given the strategy the other player is actually using.

This is weaker than a **dominant strategy** — a dominant strategy is the best strategy regardless of what the other player does, whereas a NE strategy is only optimal in response to a specific opponent strategy. A dominant strategy outcome is always a Nash equilibrium, but a Nash equilibrium is not necessarily a dominant strategy.

Nash proved that all finite competitive games have at least one Nash equilibrium.

---

## How to find Nash equilibria

Given a payoff matrix where rows = Player 1's strategies and columns = Player 2's strategies:

1. Go down the first column. Find the highest payoff to Player 2 (the column player) for that strategy.
2. Check whether Player 1's (the row player's) payoff in that box is also the highest payoff to Player 1 in that row. If so, that box is a NE, and the two strategies that produce it are NE strategies; otherwise there is no NE in that column.
3. Repeat for each column.

---

## Limitations

A Nash equilibrium describes a *stable* outcome, not necessarily a *good* one:

- In the [prisoner's dilemma](prisoners-dilemma), the unique NE leaves both players worse off than mutual cooperation — both players prefer box II but end up in box IV.
- When multiple NE exist (as in [Stag Hunt](stag-hunt.md) or [Battle of the Sexes](battle-of-the-sexes.md)), theory alone does not determine which equilibrium players will coordinate on.

In multi-NE games, a **focal point** (aka Schelling point) — a NE with some conspicuous, prominent, or salient feature that each player can reasonably expect the other to notice — can increase both players' propensity to choose it, even without communication.