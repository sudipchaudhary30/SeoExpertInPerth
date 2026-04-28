# SendGrid Email Integration Guide

## Step 1: Create SendGrid Account

1. Go to https://sendgrid.com/free
2. Sign up (FREE tier: 100 emails/day)
3. Verify your email
4. Complete account setup

## Step 2: Add Sender Identity

1. Go to Settings → Sender Authentication
2. Click "Create Single Sender"
3. Fill in:
   - Email: `noreply@sudipchaudhary101.com.np`
   - Name: `Sudip Chaudhary`
   - Address: Your address
4. Verify the email
5. Check your inbox and click the link

## Step 3: Get API Key

1. Go to Settings → API Keys
2. Click "Create API Key"
3. Name: `Portfolio Contact Form`
4. Select: `Full Access`
5. Click Create
6. **COPY AND SAVE** the key (only shown once!)

## Step 4: Add to Environment Variables

### For Development (.env.local):

```env
SENDGRID_API_KEY=SG.your_key_here_from_step_3
SENDGRID_FROM_EMAIL=noreply@sudipchaudhary101.com.np
SENDGRID_TO_EMAIL=chsudip28@gmail.com
```

### For Production (Cloudflare Pages):

1. Go to Cloudflare Pages → Your Project
2. Settings → Environment Variables
3. Add:
   - Name: `SENDGRID_API_KEY`
   - Value: (paste your key)
4. Click Save

## Step 5: Update Contact Form API

Update `src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email via SendGrid
    const sendgridKey = process.env.SENDGRID_API_KEY;
    const sendgridFromEmail = process.env.SENDGRID_FROM_EMAIL;
    const sendgridToEmail = process.env.SENDGRID_TO_EMAIL;

    if (!sendgridKey || !sendgridFromEmail || !sendgridToEmail) {
      console.error("SendGrid environment variables not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Reply to: ${email}</small></p>
    `;

    // Send via SendGrid API
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sendgridKey}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: sendgridToEmail }],
            subject: `New Contact: ${subject}`,
          },
        ],
        from: { email: sendgridFromEmail },
        content: [
          {
            type: "text/html",
            value: emailContent,
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
      }),
    });

    if (!response.ok) {
      console.error("SendGrid error:", await response.text());
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

## Step 6: Test the Contact Form

1. Run locally: `npm run dev`
2. Go to http://localhost:3000
3. Fill out contact form
4. Submit
5. Check your email (chsudip28@gmail.com)

You should receive an email within seconds!

## Step 7: Deploy to Cloudflare

1. Commit changes:
   ```bash
   git add .
   git commit -m "Add SendGrid email integration"
   git push
   ```
2. Cloudflare automatically deploys
3. Test live form at sudipchaudhary101.com.np
4. Verify email received

## Step 8: Monitor SendGrid

1. Go to https://app.sendgrid.com
2. Dashboard shows:
   - Emails sent today
   - Bounces/complaints
   - Delivery rate

## Troubleshooting

### "Email not sending"
- Check API key is correct
- Verify environment variable is set
- Check SendGrid sender verification
- Review SendGrid activity log

### "Too many requests"
- SendGrid free tier: 100/day
- Upgrade for higher limits
- Or add rate limiting

### "Bounced emails"
- Invalid recipient email
- Check firewall/spam filters
- Update SendGrid sender

### "API Key not working"
- API Key is case-sensitive
- Must include full `SG.` prefix
- Check permissions are Full Access

## Free Tier Limits

- **100 emails/day**
- **Unlimited contacts**
- **Basic automation**
- **Basic reporting**

Enough for a portfolio contact form!

## Upgrade Path (Optional)

For higher volume:
- Pro Plan: $39.95/month (500K emails/month)
- Enterprise: Custom pricing

## Alternative Email Services

If you prefer alternatives:

1. **Resend** (Next.js optimized)
   - 100 emails/day free
   - Similar setup

2. **Mailgun**
   - 1000 emails/month free
   - More generous free tier

3. **AWS SES**
   - $0.10 per 1000 emails
   - Very cheap at scale

4. **Postmark**
   - Focused on transactional emails
   - Premium quality

## Advanced: Email Templates

Create branded email templates in SendGrid:

1. Go to Marketing → Templates
2. Create → Transactional
3. Design your template
4. Use template ID in API call

## Compliance

- **CAN-SPAM**: Always include unsubscribe link (not needed for contact forms)
- **GDPR**: Get consent before adding to lists
- **SPF/DKIM**: SendGrid adds automatically

## Security Best Practices

1. Never commit API keys to GitHub
2. Use environment variables
3. Rotate keys periodically
4. Monitor API usage
5. Use rate limiting on frontend

## Next Steps

- ✅ SendGrid account created
- ✅ API integrated
- ✅ Test emails working
- → Monitor email logs
- → Optimize email templates
- → Track engagement

---

**Your portfolio now has a fully functional contact form!** 📧
