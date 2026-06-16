---
sidebar_position: 1
---

# Glossary

A reference of key terms and definitions used throughout the Pyx Knowledge Base and Trust Architecture ecosystem.

---

#### Backend Services
Supporting software components that enable the functioning of the reference implementation (e.g., storage services, identity resolution tools).

---

#### Business Case
The rationale for issuing and using digital credentials like DPPs, usually grounded in the value exchanged between buyers and suppliers. [Source: The Business Case for UNTP Implementation](https://spec-untp-fbb45f.opensource.unicc.org/docs/business-case)

---

#### Chat.pyx.io
An online community space where Trust Architects and others involved in the transparency ecosystem can connect, collaborate, and seek help. [Source](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics)

---

#### Digital Conformity Credential
A credential that validates a claim (e.g., about sustainability, compliance, or performance) through third-party verification. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/ConformityCredential)

---

#### Digital Facility Record (DFR)
A credential containing key information about a facility's characteristics, certifications, and role in the supply chain. Provides verified information about a production or logistics facility, used to demonstrate compliance and traceability. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalFacilityRecord)

---

#### Digital Identity Anchor (DIA)
A credential that establishes the verifiable identity of an entity (person, business, or device) within a supply chain or value chain ecosystem. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/AnchorCredential)

---

#### Digital Product Passport (DPP)
A verifiable digital credential containing structured, schema-based information about a product's origin, attributes, composition, sustainability, and compliance history. Designed to support transparency, traceability, and market access. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalProductPassport)

---

#### Digital Traceability Events (DTE)
Verifiable records of specific actions or changes in the lifecycle of a product or process—such as production, transport, transformation, or verification. Each event captures structured data (e.g. timestamp, location, actor, input/output) to support supply chain transparency and compliance. Defined under the UNTP specification. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalTraceabilityEvents)

- **Aggregation Event** — A type of DTE that represents the grouping (or ungrouping) of similar items into a collection or container. *Example: Stacking bales of cotton onto a pallet.* [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalTraceabilityEvents/)
- **Association Event** — A type of DTE that records the establishment of a relationship between otherwise independent items. *Example: Attaching new tyres to a car.* [Source](https://untp.unece.org/docs/specification/DigitalTraceabilityEvents)
- **Object Event** — A type of DTE that represents an observation, action, or handling step affecting a specific product or batch. *Example: A safety inspection performed on a battery.* [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalTraceabilityEvents/)
- **Transaction Event** — A type of DTE that captures the transfer of ownership or custody of one or more products between parties. *Example: Sale or shipment of cotton cloth from one company to another.* [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalTraceabilityEvents/)
- **Transformation Event** — A type of DTE that describes a manufacturing or processing step in which one or more input items (materials, components) are consumed or assembled to produce one or more distinct outputs. *Example: Converting cotton thread into woven fabric.* [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/DigitalTraceabilityEvents/)

---

#### Identity Resolver
A tool that takes a product, facility or organisational identifier (such as a barcode, QR code or DID) and returns the set of verifiable credentials or links associated with that identifier. It supports discoverability and traceability in a trust-architecture ecosystem. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/IdentityResolver)

---

#### Trust Anchors
Make existing trust verifiable. A trust anchor — such as a national land, trademark, or business registry, or a national accreditation body accrediting conformity assessors — ensures digital integrity by linking sustainability claims and identities to authoritative sources. Supporting instruments must define protocols for trust anchors to maintain their roles digitally, typically by issuing registration certificates as digitally verifiable documents tied to the registered entity's digital identity. [Source - Link to Rec. 49 pdf](https://uncefact.unece.org/download/attachments/231866398/UNECE_Recommendation_49_v1.6_plain_16.02.2025.pdf?api=v2)

---

#### UNTP Extension
An add-on or customisation of the United Nations Transparency Protocol (UNTP) that allows sectors, regulators, or organisations to define additional schemas, policies, or logic beyond the core UNTP specification. Extensions enable flexibility while maintaining interoperability with the base protocol. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/extensions)

---

#### UNTP Playground
A testing environment provided by UNTP to test whether credentials conform to the UNTP schema and can be used to confirm standard compliance. [Source](https://test.uncefact.org/untp-playground)

---

#### UNTP Test Suite
A GitHub-based open-source toolset that allows users to create, issue, and validate credentials according to the United Nations Transparency Protocol. [Source](https://uncefact.github.io/tests-untp/)

---

#### Verifiable Credential (VC)
A digital credential that can be cryptographically verified to ensure authenticity, data integrity, and issuer validity. [Source](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials)

---

:::info Contributing
Have a term that should be included? Join our [Community Forums](https://forum.community.pyx.io/) or [Zulip Chat](https://chat.pyx.io/) to suggest additions.
:::
