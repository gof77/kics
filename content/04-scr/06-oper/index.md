---
title: "IV.6. 운영위험액"
layout: single-index
thisId : '146'
toc : false
---

<div class="mermaid">
flowchart TD
    A[운영위험액] --> B("일반운영위험액 max(A, B)")
    A --> C(기초가정위험액)
    B -.-> B1("A:보험료위험액")
    B -.-> B2("B:현행추정부채위험액")
    C --> C1(지급금예실차 위험액)
    C --> C2(사업비예실차 위험액)

</div>
