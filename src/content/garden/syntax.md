---
title: Syntax
created: 2026-03-14
updated: 2026-03-14
description: .
---

- Whereas grammar is the set of rules governing a spoken language, **syntax** is the part of grammar that represents a speaker's knowledge of sentences and their structures.

---

- Rules of syntax demonstrate the **creative** aspect of language (permit speakers to produce/understand a limitless number of entirely new sentences)
- Rules of syntax define correct word order for a language and specify the **grammatical relations** of a sentence like the DO/IO — specify who is doing what to whom
- Sentences have a treelike structure/hierarchical arrangement of words — **tree diagram**
- Subunits (subtrees) of a sentence: **constituents** — can be nested inside each other (e.g., in "The child found a puppy"; "a puppy" is a constituent; so is "found a puppy" and "the child")
  - Constituent ends at/corresponds to the node where the branches meet
  - Words in a constituent = contiguous; not all contiguous words form a constituent
- **Constituency tests:**
  - **Stand Alone test:** If a group of words can stand alone (e.g., as the answer to a question), they form a constituent
  - **Replacement by a Pronoun test:** If a pronoun can substitute for a group of words
  - **Move-as-a-Unit test:** Can the group be moved together and remain grammatical?
  - Ex: "the puppy played in the garden" — "in the garden" is a constituent
- Constituent structure of a sentence may be graphically represented by a tree diagram
- **Lexical ambiguity:** Multiple interpretations of a sentence caused by a word having multiple meanings. **Structural ambiguity:** When a sentence has more than one possible tree structure associated with it.
 
### Syntactic Categories
 
- **Noun Phrase (NP):** May function as subject or object in a sentence; often contains a determiner (a, an, the); may also contain a proper noun, a pronoun, a determiner-less noun, or a clause/sentence that functions as a noun
- **Verb Phrase (VP):** Always contains a verb (V); may also contain a NP or PP
- **Prepositional Phrase (PP):** A preposition followed by an NP (ex: "in the park")
- Also **Adjective Phrase (AP)**, **Adverbial Phrase (AdvP)**
- **Lexical categories:** Noun (N), Verb (V), Preposition (P), Adjective (A), Adverb (Adv)
- **Phrase Structure Tree/Constituent Structure Tree:** Tree diagram w/ syntactic categories that represents their hierarchical structure (ex: a S is composed of an NP followed by a VP; a VP is composed of a V that may be followed by an NP; etc.)
  - Every higher node **dominates** all the categories beneath it; it **immediately dominates** the categories one level beneath it; categories immediately dominated by the same node are **sisters**
- **Complementizer Phrase (CP):** Consists of an embedded sentence (ex: "that the students read the book" in "The professor hoped that the students read the book")
 
### Phrase Structure Rules
 
- Dominating category → the categories it immediately dominates
- "Dominating category X may contain a Y followed by a Z in that order"
- "A Y followed by a Z qualifies as a member of dominating category X"
- `S -> NP VP`
- `NP -> Det N`
- `VP -> V` | `VP -> V NP` | `VP -> V PP` | `VP -> V CP`
- `PP -> P NP`
- `CP -> C S`
- `AP -> A PP`
- **Recursive set of rules:** Same symbol appears on both the left and right side of the rule
  - `VP -> V CP` | `CP -> C S` | `S -> NP VP`
  - Recursion illustrates the difference between competence and performance — all speakers of English can embed phrases within each other ad infinitum (competence), but as the structure grows longer, performance becomes harder
- Use a triangle under NP to indicate that proper names are full NPs, not nouns
- The core of every phrase is its **head:** a lexical category of the same syntactic type
  - Ex: head of "the mother of James" is *mother*; head of "sing karaoke" is *sing*
- **Complement:** A phrasal category that occurs next to a head (not obligatory)
  - **Intransitive verbs** cannot take an NP complement
  - **C-selection** or **subcategorization:** Info about the complement types selected by particular verbs and other lexical items (e.g., "belief" selects either a PP or a sentence complement, while "sympathy" selects a PP but not a sentence)
  - **S-selection (semantic selection):** How a verb imposes certain semantic requirements on its subjects and complements (e.g., "murder" requires its subject and object to be animate)
    - This is why *Colorless green ideas sleep furiously* is anomalous
  - A phrase that is well-formed obeys PS rules, C-selection, and S-selection
- **Specifiers:** Elements that may precede the head in a phrase (ex: specifier of "the mother of James" is *the*; specifier of "Nellie's ball" is *Nellie's*) (not obligatory)
 
### X-Bar (x̄) Schema
 
- Three-tiered structure that specifies how the phrases of a language are organized + how PS rules are formed
- New PS rules under x̄ schema:
  - `NP -> (det) N-bar` | `N-bar -> N (XP)`
  - `VP -> (Spec) V-bar` | `V-bar -> V (XP)`
- X-bar schema is hypothesized to be part of Universal Grammar — all languages have 3-tier head/specifier/complement structure, although order may differ
- X-bar structure for sentences relies on: sentences are always **tensed**
  - Specifier = subject of sentence; complement = a VP; head = tense + modal verbs like *can*/*would*, and takes VP as its complement
  - Linguists refer to sentences as **TPs (Tense Phrases)**
 
### Recursive X-Bar Rules (allowing for infinite modification)
 
- `N-bar -> A N-bar`
- `A-bar -> Intensifier/Int A-bar`
- `V-bar -> V-bar PP`
 
- **Adjunct:** A phrasal category that is sister to an X-bar and daughter of a higher X-bar
- **Linear Agreement Rule:** The verb must agree in person and number with the head noun
- **Structure dependent agreement rule:** The verb agrees in person and number with the *subject* of the sentence, defined as the NP immediately dominated by S (TP)
  - Structure dependency is a principle of Universal Grammar
- **Declarative** sentences: Asserts that a state is true
- **Yes-no questions:** Directly related to declarative sentence; asks whether state is true
  - Yes-no questions are generated in two steps:
    1. PS-rules generate a basic structure
    2. **Aux inversion** (a transformational rule) applies to the basic structure to produce the derived structure
- **Basic structure** of a sentence = **deep structure** or **d-structure.** Variations on the basic structure derived via transformational rules = **surface structures** or **s-structures.**
- Yes-no questions tell us that all sentences have CP as their root. New rules:
  - `CP -> (spec) C` | `C-bar -> C TP`
  - The sentence root is CP and TP is the complement to the head C
  - C contains the abstract element +Q for questions or −Q for declaratives
  - C provides a home for T when Aux inversion relocates it
- **Parameters:** Points of variation between different languages of the order of their constituents (ex: English is head-initial; Japanese is head-final)