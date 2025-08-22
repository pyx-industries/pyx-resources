---
sidebar_position: 3
---

# Create and Verify a UNTP compliant Digital Product Passport

:::info
**Here we will Issue a Digital Product Passport, find it and verify it**

Need help? Join our [💬 UNTP community chat](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) for live support.
:::

## Prerequisites:

- A running Reference Implementation - Visit [How to Launch a Local UNTP Reference Implementation](./launch-ri.md) to launch a reference implementation on your local computer.

## Steps

1. Navigate to the Reference Implementation
    1. Enter http://localhost:3003 in your browser
    2. Select "example company"
        
        <img src="/img/dev_docs/250821_01.png" alt="Select Example Company" width="60%" />
        
    3. Click Issue DPP
        
        <img src="/img/dev_docs/250821_02.png" alt="Click Issue DPP" width="60%" />
        
    4. This takes you to a form to add information about your product
        
        <img src="/img/dev_docs/250821_03.png" alt="Product Information Form" width="60%" />
        
    5. Scroll to the bottom and select "Issue DPP"
        
        <img src="/img/dev_docs/250821_04.png" alt="Issue DPP Button" width="60%" />
        
    6. See the "Action Successful" dialog
        
        <img src="/img/dev_docs/250821_05.png" alt="Action Successful Dialog" width="60%" />
        
    
    **Congratulations, you've issued your first Digital Product Passport**
    
    ### Find your Product Passport
    
    1. If you accepted the defaults your digital product passport will be at this location:
        1. http://localhost:3000/api/1.0.0/gs1/01/09359502000034/21/12345
            
            <img src="/img/dev_docs/250821_06.png" alt="Digital Product Passport Location" width="60%" />
            
        2. This uses the Identity Resolution (IDR) Service to display this data.

### Verify Your Product Passport:

1. Download your UNTP compliant Digital Product Passport
    
    <img src="/img/dev_docs/250821_07.png" alt="Download DPP" width="60%" />
    
2. Visit UNTP Validation Playground
    1. https://test.uncefact.org/untp-playground (Online)
    2. http://localhost:4000/ (as part of your backing services)
3. Upload the credential you just downloaded (vc.json)
    
    <img src="/img/dev_docs/250821_08.png" alt="Upload Credential" width="60%" />
    

:::tip
💡 If you see green checks and confetti you know that you've issued a UNTP compliant UNTP credential correctly.
:::

---

## Need Interactive Support?

:::info Get Live Help
🚀 **Join our community chat** for real-time assistance with UNTP implementation questions!

[**💬 Chat with UNTP Experts**](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) - Get instant help from our community of developers and trust architects.
:::

---
