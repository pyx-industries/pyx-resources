---
sidebar_position: 4
---

# Pyx Identity Resolver

:::info In Development
**Our Trust Architecture Knowledge Base is evolving, and instructions will be regularly updated. For questions, visit [Zulip Chat](https://chat.pyx.io/) to collaborate with experts.**

Need help? Join our [💬 UNTP community chat](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) for live support.
:::

This Knowledge Base page explains what an identity resolver is, how it relates to the UN Transparency Protocol (UNTP), and what the Pyx implementation provides.
It is intended for technical implementers and trust architects working on registry-based assurance, digital product labelling, decentralised identifiers, or system-wide traceability in trade, ESG, and supply chain ecosystems.

### 🔗 Current Version and Technical Documentation
The [Pyx Identity Resolver](https://pyx-industries.github.io/pyx-identity-resolver/) is free, open-source, and actively maintained.
Current Version: v1.1.3
Released: February 2026

Full documentation, including architecture, deployment guides, configuration options, scaling guidance, and contribution workflows:
👉 [pyx-industries.github.io/pyx-identity-resolver](https://pyx-industries.github.io/pyx-identity-resolver/)

### What is an Identity Resolver? 

An identity resolver is a web‑based service that accepts a machine‑readable identifier (like a barcode, QR code, URL, or decentralised identifier (DID)) and returns the data linked to it. That means it "resolves" the identifier, or redirects, to structured links to authoritative data sources. This enables systems, from handheld scanners to compliance platforms, to retrieve context‑specific information for traceability, certification, regulatory reporting and more.

An identity resolver is not a registry or primary data store. It acts as a routing and resolution layer that connects identifiers to the systems or authorities that hold the relevant data.

### What is an Identity Resolver as it relates to the UN Transparency Protocol 

UNTP treats an Identity Resolver as a core component of its trust architecture. In a UNTP-aligned architecture, the resolver sits between identifiers (labels, DIDs, digital links) and the authoritative data sources that issue or store verifiable information.

It enables the [discover → resolve → verify workflow](https://untp.unece.org/docs/specification/IdentityResolver/) by returning verifiable data about the product, component, or facility associated with a given identifier.

UNTP-aligned resolvers must support both:

- Registry-managed identifiers (e.g. GTINs or location codes assigned by authorities)

- Self-assigned identifiers, such as DIDs (Decentralised Identifiers) controlled by the entity itself

The resolver supports discoverability, resolvability, and verifiability, to enable interoperable digital product passports, facility records, and other cross-system trust mechanisms.

### What the Pyx Identity Resolver Does

The Pyx Identity Resolver is an open source tool that:

- Resolves identifiers (such as GS1 Digital Links, DIDs, or other URI-compatible schemes)
- Connects those identifiers to structured data about products, organisations, credentials, or events
- Supports both public and private links, using anonymous GET or authenticated write/update access
- Works across identifier types, including custom schemes used in specific sectors
- Deploys easily as a containerised app or [serverless function for AWS Lambda environments](https://pyx-industries.github.io/pyx-identity-resolver/docs/deployment-guide/serverless)

The Pyx Identity Resolver is currently deployed in UNTP-aligned pilot environments and production trade scenarios.

### Example Use Cases: 

- Linking sustainability credentials to Scope 3 emissions claims
- Enabling decentralised Digital Product Passports for regulated goods
- Connecting batch-level identifiers to verifiable origin and processing data
- Powering circular economy programs through repair, reuse, and material data links
- Supporting dynamic food labelling, including location-specific QR code content
- Publishing and updating certified links for audits or registries without new infrastructure

---

## Need Interactive Support?

:::info Get Live Help
🚀 **Join our community chat** for real-time assistance with UNTP implementation questions!

[**💬 Chat with UNTP Experts**](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) - Get instant help from our community of developers and trust architects.
:::

---
