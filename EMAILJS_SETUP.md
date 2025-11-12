# EmailJS Setup Guide

Follow these steps to configure your contact form to send emails to your inbox.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **"Connect Account"**
   - Sign in with your Gmail account (jeremiahrosales.0516@gmail.com)
   - Allow EmailJS to send emails on your behalf
4. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from {{name}}

**Content (Body):**
```
You have a new message from your portfolio contact form!

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent via your Portfolio Website Contact Form
```

4. Click **"Save"**
5. Copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **"Account"** in the left sidebar
2. Under **"General"** tab, you'll see **"Public Key"**
3. Copy your **Public Key** (looks like a long string)

## Step 5: Update Your Code

Open `.env` file in the root of your project and add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

Replace the placeholder values with your actual credentials from EmailJS.

**Note**: The `.env` file is already configured in `Contact.jsx` and is added to `.gitignore` to keep your credentials secure.

## Step 6: Test Your Form

1. Run your portfolio: `npm run dev`
2. Go to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox (jeremiahrosales.0516@gmail.com)

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify all IDs are correct in Contact.jsx
- Check the browser console for errors
- Make sure you verified your EmailJS account

### Getting errors?
- Make sure @emailjs/browser is installed: `npm install @emailjs/browser`
- Check that your `.env` file has the correct variable names (VITE_ prefix is required)
- Restart your dev server after updating `.env` file
- Clear browser cache and try again
- Check EmailJS dashboard for any issues

### Rate limits
- Free plan: 200 emails/month
- If you need more, upgrade to a paid plan

## Security Note

Your EmailJS credentials are now stored in the `.env` file, which is automatically ignored by Git (added to `.gitignore`). This keeps your credentials secure and prevents them from being committed to your repository.

**Important**: 
- Never commit your `.env` file to Git
- Use `.env.example` as a template for others
- When deploying to Vercel, add environment variables in the Vercel dashboard:
  1. Go to your project settings
  2. Navigate to "Environment Variables"
  3. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`
  4. Redeploy your project

---

That's it! Your contact form will now send emails directly to your inbox. 📧
