---
sidebar_position: 2
---

# Stage 2 - UNTP Data Mapping
:::info In Development
Our Trust Architecture Knowledge Base is evolving, and instructions will be regularly updated.  
For questions, visit our [Community Forums](https://forum.pyx.io/) or [Zulip Chat](https://chat.pyx.io/) to collaborate with experts.

We welcome community contributions!
Click **"Edit This Page"** at the bottom of any article to suggest edits via GitHub.  
Once reviewed, your changes will be published.
:::

# Understanding UNTP Schemas and JSON

This guide will help you understand **United Nations Transparency Protocol (UNTP) Schemas** and how they are structured in **JSON**. The goal is to enable you to start building **Verifiable Credentials (VCs)** effectively.

---

## What is JSON?

JSON (JavaScript Object Notation) is a structured data format used to exchange information between systems. Think of JSON as a big **envelope** containing smaller envelopes (**objects**) and documents (**key-value pairs**). This hierarchical structure makes it easy to organize, read, and process data.

---

## UNTP Schemas Overview

The **UNTP schemas** define standardized data structures for global interoperability, ensuring the data is trustworthy and consistent. These schemas are especially important for Verifiable Credentials.

### Useful Links:

- [UNTP Core Domain](https://jargon.sh/user/unece/untp-core/v/0.5.0/artefacts/readme/render#untp-core-domain)
- [UNTP Architecture Overview](https://uncefact.github.io/spec-untp/docs/specification/Architecture/)
- [Verifiable Credentials Specification](https://uncefact.github.io/spec-untp/docs/specification/VerifiableCredentials/)

---

## Digital Product Passport (DPP) Example

The **Digital Product Passport (DPP)** is an example of a Verifiable Credential. Its structure in JSON can be visualized as a series of nested envelopes and documents.

### 1. Top-Level Object: `DigitalProductPassport`

This is the "big envelope" that represents the DPP. It contains:

- `@context`: Defines the schema's context.
- `id`: A unique identifier for the DPP.
- `issuer`: The entity issuing the DPP.
- `validFrom`: The start date of the credential's validity.
- `validUntil`: The end date of the credential's validity.
- `product`: A nested object (another envelope).

Example:

```json
{
  "@context": ["https://schema.org/", "https://www.unece.org/untp-core"],
  "id": "dpp-12345",
  "issuer": "Company XYZ",
  "validFrom": "2024-01-01",
  "validUntil": "2025-01-01",
  "product": {
    "gtin": "1234567890123",
    "conformityClaim": [
      {
        "type": "Environmental",
        "description": "Certified biodegradable"
      },
      {
        "type": "Safety",
        "description": "Meets international safety standards"
      }
    ]
  }
}
```

### 2. Nested Object: `Product`

The product object contains more envelopes and documents, such as:

- `batch_number`: A document representing the product’s production details.
- `conformityClaim`: A list (array) of envelope, containing similar documents defined by the object:claim about the product’s conformity.

Example of conformityClaim:

```json
"conformityClaim": [
  {
    "type": "Environmental",
    "description": "Certified biodegradable"
  },
  {
    "type": "Safety",
    "description": "Meets international safety standards"
  }
]
```

---

### Understanding JSON Syntax

- **Objects**: Represented by curly braces `{}`. These are like envelopes containing data.

```json
{
  "id": "12345",
  "issuer": "Company XYZ"
}
```

- **Key-Value Pairs**: Inside an object, data is stored as `key: value` pairs.

```json
"id": "12345"
```

- **Arrays**: Represented by square brackets `[]`. These hold multiple values or objects.

```json
"conformityClaim": [
  {"type": "Environmental"},
  {"type": "Safety"}
]
```

---

## Tips for Working with JSON and UNTP Schemas

Here are some practical tips to help you navigate and work with JSON and UNTP schemas effectively:

### 1. Watch an Intro to JSON:

- Watch this short [JSON tutorial](https://www.youtube.com/watch?v=iiADhChRriM) to understand the basics

### 2. **Learn from UML Diagrams**

- Use the UML diagrams provided in the [UNTP Architecture Overview](https://uncefact.github.io/spec-untp/docs/specification/Architecture/) to visualize relationships between objects and understand the data structure.

### 3. **Understand Arrays (**`[]`**)**

- If you see a definition like `conformityClaim: Claim[]`, it indicates that the `conformityClaim` field can hold multiple `Claim` objects.  
  **Example:**

```json
"conformityClaim": [
    {"type": "Environmental"},
    {"type": "Safety"}
]
```

- Arrays are used to represent lists, so you can add more entries as needed.

### 4. **Refer to Schema Documentation**

- Always consult the official UNTP schema documentation for definitions and examples: 
  - [UNTP Core Schema](https://jargon.sh/user/unece/untp-core/v/0.5.0/artefacts/readme/render#untp-core-domain)
  - [Verifiable Credentials Specification](https://uncefact.github.io/spec-untp/docs/specification/VerifiableCredentials/)

### 6. **Break Down Complex Structures**

- Work step-by-step: 
  - Start with the top-level object (like `DigitalProductPassport`).
  - Drill down into nested objects (like `Product`).
  - Explore arrays and sub-objects systematically.

# Modelling Your First Digital Product Passport (DPP)

This guide will walk you through the steps to model and create your first **Digital Product Passport (DPP)**. The DPP provides structured data about your product, ensuring traceability, transparency, and trust.

---

## What is a DPP?

A **Digital Product Passport** is a structured, verifiable credential containing information about a product, including its characteristics, conformity claims, and evidence. It follows the schema defined by the UNTP standards.

### Useful Links:

- [Digital Product Passport Overview](https://uncefact.github.io/spec-untp/docs/specification/DigitalProductPassport/)
- [UNTP DPP Schema](https://jargon.sh/user/unece/DigitalProductPassport/v/0.5.0/artefacts/readme/render)

---

## Steps to Create Your First DPP

### Step 1: Understand the DPP Schema

- Familiarize yourself with the **DigitalProductPassport** object, which forms the top-level structure of the DPP.
- Review its nested components, such as `@context`, `id`, `issuer`, `validFrom`, `validUntil`, and `product`.

Refer to the [UNTP DPP Schema](https://jargon.sh/user/unece/DigitalProductPassport/v/0.5.0/artefacts/readme/render) for detailed information.

### Step 2: Identify Product Characteristics

- List the key characteristics of your product to include in the DPP.  
  **Example:**  
  For Copper Cathodes from Copper Mine A: 
  - **Product ID**: GTIN or a unique identifier.
  - **Physical Characteristics**: Weight, dimensions.
  - **Manufacturer Information**: Name, location.

Some guidance on what data is considered to be characteristics.
Characteristics is data which defines the product and typically describes the product. For example, the weight and dimensions. Details such as the purity of a product can be argues to be a claim.

Use the [UNTP DPP Schema](https://jargon.sh/user/unece/DigitalProductPassport/v/0.5.0/artefacts/readme/render) as a reference to decide what to include.

### Step 3: Identify Conformity Claims and Evidence

- Specify any claims about your product's conformity, such as environmental standards, safety certifications, or ethical sourcing. <br /> The goal here is to provide information that your customers value. For example, customers of copper cathodes from smelters want to know about the copper composition of a product.
- If possible, collect evidence to support these claims (e.g., certificates, reports). <br /> It is not compulsory it include evidance for your claim, however, the idea is that providing supporting evidence increases trust in your product. Evidence attesting to what a copper composition claim could simply be a lab report.

**Example Conformity Claims for Copper Cathodes:**

```json
"conformityClaim": [
  {
    "type": "Environmental",
    "description": "Certified 99.9% recyclable",
    "evidence": "Certificate of Recyclability #12345"
  },
  {
    "type": "Ethical Sourcing",
    "description": "Sourced under fair labor practices",
    "evidence": "Fair Trade Certification #67890"
  }
]
```

### Step 4: Build a Rough DPP Structure

- Start by sketching a high-level structure of your DPP, including all key fields and relationships.
- Visualize the hierarchy, beginning with the DigitalProductPassport object and its nested objects.
- See below example: representing a high-level DPP for Copper Cathodes.

<img
  src="assets/Liquified Copper DPP Structure.png"
  alt="CopperMark Data Structure Plan"
  style={{ width: '600px' }} 
/>

### Step 5: Translate Your DPP into JSON

You can create the DPP using one of the following methods:

#### 1. Pyx's Reference Implementation (RI)

- Enter your product details manually via the RI frontend.
- Recommended for users who prefer a graphical interface.

#### 2. Directly in JSON

- Write your DPP directly in JSON format.
- Be cautious: JSON files are sensitive to syntax errors (e.g., missing commas or brackets).
- It is recommended to your a Text Editor that supports JSON: a recommended tool is [atom](https://atom-editor.cc/).

# Modelling Your First Digital Conformity Credential (DCC)

This guide provides a step-by-step approach to creating your first **Digital Conformity Credential (DCC)**, which is essential for demonstrating a product's compliance with standards and certifications.

## What is a DCC?

A **Digital Conformity Credential** provides structured and verifiable information about a product’s conformity to specified standards. It includes details about the claims being made, evidence supporting those claims, and the issuer's identity.

### Useful Links:

- [Conformity Credential Overview](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential)
- [UNTP DCC Schema](https://jargon.sh/user/unece/ConformityCredential/v/0.5.0/artefacts/readme/render)

---

## Steps to Model Your First DCC

### Step 1: Review UNTP Implementation Guidance and UNTP Schema

- Begin by reviewing the official [UNTP Implementation Guidance](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential#implementation-guidance) for DCCs.
- Familiarize yourself with the schema structure, key components, and best practices.
- Review the **ConformityCredential** object to understand its structure.
- Explore fields such as `@context`, `id`, `issuer`, `issuedDate`, `conformityScope`, and `evidence`.

Refer to the [UNTP DCC Schema](https://jargon.sh/user/unece/ConformityCredential/v/0.5.0/artefacts/readme/render) for details.

### Step 2: Define Your DCC's Scope

Identify the key details your DCC should convey, including:

- **Product Details**: What product or product category the DCC applies to.
- **Conformity Scope**: The specific requirements, standards, or certifications it addresses.
- **Issuer Details**: Who is issuing the DCC (e.g., manufacturer, certifying body).
- **Evidence**: Supporting documents or references proving conformity.

**Example for Copper Cathodes:**

- **Conformity Scope**: Certified recyclable material.
- **Issuer**: Copper Mine A.
- **Evidence**: Certification documents or test results.

### Step 3: Build a High-Level Map

Sketch the structure of your DCC, including all necessary fields and their relationships. Start with:

- **Root Object**: ConformityCredential.
- **Key Attributes**: Issuer, issue date, conformity scope.
- **Nested Evidence Object**: Attach any supporting documents or certificates.

### Step 4: Translate Your DCC into JSON

You can create the DCC using one of the [methods](#step-5-translate-your-dpp-into-json) described above

---

# Modelling your first DFR.

A Digital Facility Record largely follows the same principles a Digital Product Passport, where you are making a set of claim about a Facility.

When you are creating your first DFR, it is recommended that you follow the same pathway identified in the above "Modeling your first DPP"

---