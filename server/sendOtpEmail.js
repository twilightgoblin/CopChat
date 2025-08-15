const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'botchat879@gmail.com',
    pass: 'kogt hqxd tfsx hzly' // App password for Gmail
  },
  debug: true, // Enable debug logging
  logger: true // Enable logger
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

async function sendOtpEmail(to, otp) {
  try {
    console.log(`[sendOtpEmail] Starting email send process...`);
    console.log(`[sendOtpEmail] Recipient: ${to}`);
    console.log(`[sendOtpEmail] OTP: ${otp}`);
    console.log(`[sendOtpEmail] Transporter config:`, {
      service: transporter.options.service,
      host: transporter.options.host,
      port: transporter.options.port,
      secure: transporter.options.secure,
      auth: {
        user: transporter.options.auth.user,
        pass: transporter.options.auth.pass ? '***' : 'undefined'
      }
    });
    
    const mailOptions = {
      from: '"Police Service Portal" <botchat879@gmail.com>',
      to,
      subject: "OTP Verification - Police Service Portal",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🔐 OTP Verification</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 10px 10px;">
            <p style="margin-bottom: 20px; font-size: 16px;">Hello,</p>
            
            <p style="margin-bottom: 20px; font-size: 16px;">Here is your one-time password (OTP) for the Police Service Portal:</p>
            
            <div style="background: white; border: 2px solid #4F46E5; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
              <p style="font-size: 32px; font-weight: bold; color: #4F46E5; margin: 0; letter-spacing: 5px;">${otp}</p>
            </div>
            
            <p style="margin-bottom: 20px; font-size: 14px; color: #666;">
              <strong>⚠️ Important:</strong> This code will expire in 10 minutes.
            </p>
            
            <p style="margin-bottom: 20px; font-size: 14px; color: #666;">
              If you didn't request this OTP, please ignore this email and contact support immediately.
            </p>
            
            <div style="border-top: 1px solid #ddd; padding-top: 20px; margin-top: 20px;">
              <p style="margin: 0; font-size: 12px; color: #999; text-align: center;">
                — Police Service Portal Team<br>
                This is an automated message, please do not reply.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    console.log(`[sendOtpEmail] Mail options prepared, sending email...`);
    let info = await transporter.sendMail(mailOptions);
    console.log(`[sendOtpEmail] Email sent successfully to ${to}:`, info.response);
    console.log(`[sendOtpEmail] Message ID:`, info.messageId);
    return true;
  } catch (err) {
    console.error(`[sendOtpEmail] Error sending email to ${to}:`, err);
    console.error(`[sendOtpEmail] Error details:`, {
      name: err.name,
      message: err.message,
      code: err.code,
      command: err.command
    });
    
    // Handle common email errors
    if (err.code === 'EAUTH') {
      console.error(`[sendOtpEmail] Authentication failed. Check email credentials.`);
    } else if (err.code === 'ECONNECTION') {
      console.error(`[sendOtpEmail] Connection failed. Check network and SMTP settings.`);
    } else if (err.code === 'ETIMEDOUT') {
      console.error(`[sendOtpEmail] Connection timed out.`);
    }
    
    throw err;
  }
}

module.exports = sendOtpEmail;
