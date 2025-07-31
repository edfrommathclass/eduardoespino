# Vercel Deployment Troubleshooting Guide

## Current Issue
- Custom domain "eduardoespino.com" showing Vercel 404 error
- Local development works fine
- Deployment builds successfully

## Step-by-Step Solution

### 1. Check Domain Configuration in Vercel Dashboard
1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Ensure "eduardoespino.com" is added and verified
4. Check that the domain status shows "Active" or "Valid"

### 2. Verify DNS Settings
Your domain registrar should have these DNS records:
```
Type: A
Name: @ (or root)
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 3. Check Vercel Project Settings
1. In Vercel dashboard, go to Settings → General
2. Verify the "Framework Preset" is set to "Next.js"
3. Check "Root Directory" is set to "./" (root)
4. Verify "Output Directory" is set to ".next"

### 4. Domain Propagation
- Use tools like https://dnschecker.org to verify DNS propagation
- DNS changes can take up to 48 hours to fully propagate

### 5. Force Redeploy
After making changes:
1. Push changes to your repository
2. In Vercel dashboard, go to Deployments
3. Click the three dots on the latest deployment → "Redeploy"

### 6. Check Function Logs
1. Go to Vercel dashboard → Functions tab
2. Check for any errors in the logs
3. Look for 404 or routing-related errors

## Common Solutions

### Solution 1: Add Environment Variables (if needed)
If your app requires environment variables, make sure they're set in Vercel:
- Go to Settings → Environment Variables
- Add any required variables

### Solution 2: Check Build Settings
Ensure these build settings in Vercel:
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Solution 3: Clear Vercel Cache
Sometimes clearing the build cache helps:
1. Go to Settings → Functions
2. Click "Clear Cache" if available

## Testing URLs
After fixes, test these URLs:
- https://eduardoespino.com
- https://www.eduardoespino.com
- Your Vercel deployment URL (*.vercel.app)

## Files Modified
- `next.config.ts` - Added Vercel-specific configuration
- `vercel.json` - Added explicit Vercel routing configuration
