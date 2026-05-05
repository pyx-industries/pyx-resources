---
sidebar_position: 4
---

# Pyx Identity Resolver

This Knowledge Base page explains what an identity resolver is, how it relates to the UN Transparency Protocol (UNTP), and what the Pyx implementation provides.

It is intended for technical implementers and trust architects working on registry-based assurance, digital product labelling, decentralised identifiers, or system-wide traceability in trade, ESG, and supply chain ecosystems.

Looking for the latest guidance on using the Pyx Identity Resolver (IDR) Service? Check out the full set of updated documentation here:

👉 [pyx-industries.github.io/pyx-identity-resolver](https://pyx-industries.github.io/pyx-identity-resolver/)

## What is an Identity Resolver?

An identity resolver is a web-based service that accepts a machine-readable identifier (like a barcode, QR code, URL, or decentralised identifier (DID)) and returns the data linked to it.

That means it "resolves" the identifier, or redirects, to structured links to authoritative data sources. This enables systems, from handheld scanners to compliance platforms, to retrieve context-specific information for traceability, certification, regulatory reporting and more.

An identity resolver is not a registry or primary data store. It acts as a routing and resolution layer that connects identifiers to the systems or authorities that hold the relevant data.

## How Identity Resolvers fit within the UN Transparency Protocol (UNTP)

UNTP treats an Identity Resolver as a core component of its trust architecture. In a UNTP-aligned architecture, the resolver sits between identifiers (labels, DIDs, digital links) and the authoritative data sources that issue or store verifiable information.

It enables the [discover → resolve → verify workflow](https://untp.unece.org/docs/specification/IdentityResolver/) by returning verifiable data about the product, component, or facility associated with a given identifier.

UNTP-aligned resolvers must support both:

- Registry-managed identifiers (e.g. GTINs or location codes assigned by authorities)
- Self-assigned identifiers, such as DIDs (Decentralised Identifiers) controlled by the entity itself

The resolver supports discoverability, resolvability, and verifiability, to enable interoperable digital product passports, facility records, and other cross-system trust mechanisms.

## What the Pyx Identity Resolver Does

The Pyx Identity Resolver is an open source tool that:

- Resolves identifiers (such as GS1 Digital Links, DIDs, or other URI-compatible schemes)
- Connects those identifiers to structured data about products, organisations, credentials, or events
- Supports both public and private links, including role-based access controls for different types of users, with anonymous GET and authenticated write/update access
- Works across multiple identifier types, including custom schemes used in specific sectors
- Deploys easily as a containerised app or [serverless function for AWS Lambda environments](https://pyx-industries.github.io/pyx-identity-resolver/docs/deployment-guide/serverless)

The Pyx Identity Resolver is embedded in the [UNTP reference implementation](https://github.com/uncefact/tests-untp) and is currently deployed in UNTP-aligned pilot environments and production trade scenarios.

**Example Use Cases:**

- Linking sustainability credentials to Scope 3 emissions claims
- Enabling decentralised Digital Product Passports for regulated goods
- Connecting batch-level identifiers to verifiable origin and processing data
- Powering circular economy programs through repair, reuse, and material data links
- Supporting dynamic food labelling, including location-specific QR code content
- Publishing and updating certified links for audits or registries without new infrastructure

## How the Pyx Identity Resolver has evolved in practice

As the Pyx Identity Resolver has been implemented in real-world UNTP-aligned environments, several capabilities have been introduced to support production use:

- **Links can be managed individually**
  Each link is treated as its own object, with its own identifier, lifecycle, and version history. Links can be updated or removed without re-registering the full set.
- **Versioning and history are built in**
  Changes to links do not overwrite previous states. Historical versions are retained and can be referenced, supporting audit and verification use cases.
- **Role-based access to data**
  Resolution responses can be filtered based on the role of the requesting party (e.g. consumer, verifier, auditor), enabling controlled disclosure of information.
- **Structured and validated link types**
  Link types follow a defined `prefix:key` format and align with recognised vocabularies (e.g. GS1 and UNTP), improving interoperability across systems.
- **Dynamic resolution of live data**
  Responses are constructed at request time from active links, ensuring that resolved data reflects the current state of the system.

These capabilities make the resolver suitable for production environments where data changes frequently, access needs to be controlled, and historical context must be preserved.

## Standards compliance

The IDR implements the following open standards so that identifiers and links work consistently across different systems and organisations. You do not need to understand these standards to use the service because the IDR handles compliance for you.

- [**ISO 18975**](https://www.iso.org/standard/85540.html) — Defines a universal way to turn identifiers into web addresses. This is the standard that governs how resolver URLs are structured, so that any client that understands ISO 18975 can resolve identifiers from any compliant resolver.
- [**RFC 9264**](https://datatracker.ietf.org/doc/html/rfc9264) — Defines the linkset format, which is the structured JSON format the resolver uses to return a set of links. When you ask the resolver "what links exist for this identifier?" the response follows this format.
- [**RFC 8288**](https://datatracker.ietf.org/doc/html/rfc8288) — The web standard for Link headers. The resolver includes Link headers in HTTP responses so that clients can discover related resources through standard HTTP mechanisms.
- [**GS1 Digital Link**](https://ref.gs1.org/standards/digital-link/1.1.3/) — A real-world implementation of these standards for product barcodes. If you are working with GS1 identifiers (GTINs, GLNs, SSCCs), the IDR supports the GS1 Digital Link standard out of the box. But the IDR is not limited to GS1; it works with any identifier scheme you define.

The IDR is released under the Apache License 2.0, a permissive open-source license that allows commercial use and integration into proprietary systems.

## Need Interactive Support?

:::info Get Live Help
🚀 **Join our community chat** for real-time assistance with UNTP implementation questions!

[**💬 Chat with UNTP Experts**](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) - Get instant help from our community of developers and trust architects.
:::
