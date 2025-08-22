---
sidebar_position: 2
---

# How to Launch a Local UNTP Reference Implementation

:::info
**Here you'll launch your own UNTP Reference Implementation on your local computer. This will enable you to issue your own set of credentials including Digital Product Passports, Digital Facility Records, Digital Traceability Events and more.**

Need help? Join our [💬 UNTP community chat](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) for live support.
:::

## The UNTP Test Suite Includes:

- **Verifiable Credential Service (VCkit)**: Manages DIDs and issues, verifies, and revokes Verifiable Credentials.
- **Storage Service**: Stores UNTP credentials.
- **Identity Resolver Service (IDR)**: Manages links to data (including UNTP credentials) that are associated with identifiers.
- **Mock GS1 IDR Service**: Stand-in resolver for GS1.
- **Database (Postgres)**: Required for VCkit.

## Prerequisites

- Docker Desktop - https://docs.docker.com/desktop/
- Node Version Manager (NVM) - Install through CLI explained later

## Skill Level

- Entry Level Developer
- Mid-level Analyst

## Steps

1. Clone/Download the UNTP Reference Implementation and Test Suite from a Terminal CLI or directly from GitHub
    1. If using Git terminal (recommended), use Git to clone the repo
        
        ```bash
        git clone https://github.com/uncefact/tests-untp.git
        ```
        
    2. Or download as ZIP directly from the link:  https://github.com/uncefact/tests-untp
        
        ![Download ZIP from GitHub](/img/dev_docs/250821zip.png)
        
2. Install Prerequisites
    1. Change to test-untp working directory
        
        ```bash
        cd tests-untp
        ```
        
    2. Install NVM 20.12.2 and follow prompts to confirm version
        
        ```bash
        nvm install 20.12.2
        nvm use 20.12.2
        ```
        
    3. Install Yarn 1.22.22
        
        ```bash
        npm install -g yarn@1.22.22
        ```
        
    4. ****CRITICAL****: Verify Node version is actually 20.12.2 - Node Version Manager behaves differently depending on your local Operating System.  Verify the current running version of node, if it's not 20.12.2 you may need to explore this on your own (LLM Chat Services are great for this) to ensure that 20.12.2 is running
        
        ```bash
        node -v
        ```
        
    5. **If you see a different version (common on Windows):**
        1. Close your terminal completely and reopen it
        2. Run `nvm use 20.12.2` again
        3. If still wrong, try running commands in Command Prompt instead of Git Bash
        4. Or manually set PATH: `export PATH="/c/Users/[username]/AppData/Roaming/nvm/v20.12.2:$PATH"`
    6. Once 20.12.2 is confirmed to be running, you can move on to next step.
3. Launch Docker Compose Services
    1. Launch Docker Desktop
        1. Verify Docker is running:
            
            ```bash
            docker --version
            ```
            
        2. If this fails, make sure Docker Desktop is fully started
    2. Launch Docker "Backing Services" Images
        
        ```bash
        SEEDING=true docker compose up -d
        ```
        
    3. You will see a result like this which can take several minutes to complete
        
        ![Docker Compose Seeding](/img/dev_docs/250821seeddock.png)
        
    4. Final Version Check before launching the Reference Implementation - Check Node and Yarn Versions
        
        ```bash
        node -v
        yarn -v
        ```
        
        1. Node 20.12.2
        2. Yarn 1.22.22
    5. Once versions are confirmed, proceed to launch the Reference Implementation in Step 4
4. Install and Launch Reference Implementation - This will take several minutes (10+)
    
    ```bash
    yarn install
    yarn build
    yarn start
    ```
    
    1. Windows WSL Configuration Fix
        1. Issue - On Windows with Git Bash/WSL, the original instructions fail due to environment variable syntax incompatibility.
        2. Solution: Fix Environment Variable Handling
        3. Navigate to mock-app package
            
            ```bash
            cd packages/mock-app
            
            ```
            
        4. Install cross-env
            
            ```bash
            yarn add --dev cross-env
            
            ```
            
        5. Update package.json start script
            1. Edit `packages/mock-app/package.json` and change:
                
                **From:**
                
                ```json
                "start": "PORT=3003 craco start"
                
                ```
                
                **To:**
                
                ```json
                "start": "cross-env PORT=3003 craco start"
                
                ```
                
        6. Test the fix
            
            ```bash
            cd ../..
            yarn start
            
            ```
            
        7. Expected Results
            1. No `'PORT' is not recognized as an internal or external command` error
            2. Development server starts successfully on port 3003
            3. **App loads at http://localhost:3003**

### The Reference Implementation should now be running in your browser

---

:::tip
Development server startup can take several minutes on first launch - this is normal.
:::

---

## Need Interactive Support?

:::info Get Live Help
🚀 **Join our community chat** for real-time assistance with UNTP implementation questions!

[**💬 Chat with UNTP Experts**](https://chat.pyx.io/#narrow/stream/25-Community---UNTP-Topics) - Get instant help from our community of developers and trust architects.
:::

---