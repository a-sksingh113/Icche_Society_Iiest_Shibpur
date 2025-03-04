const { transporter } = require("../middleware/emailConfigMiddleware");
const sendForgetPasswordURL = async (email, resetURL) => {
    try {
        const response = await transporter.sendMail({
            from: '"Icche Web Support" <i.sksingh113@gmail.com>',
            to: email,
            subject: "Password Reset Request", 
            text: "Please click the link below to reset your password.", 
            html: `
               <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f4f4f9; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
    <div style="text-align: center; padding: 10px 0;">
        <img src="default.png" alt="Logo" style="max-width: 150px;">
    </div>
    <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
        <h2 style="color: #333;">Password Reset Request</h2>
        <p style="color: #555; line-height: 1.6;">
            We received a request to reset your password. Click the button below to reset it:
        </p>
        <div style="text-align: center; margin: 20px 0;">
            <a href="${resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">Reset Password</a>
        </div>
        <p style="color: #999; font-size: 14px;">
            <strong>Note:</strong> This link expires in 10 minutes.
        </p>
        <p style="color: #555; line-height: 1.6;">
            If you did not request this, please ignore this email or contact support if you have concerns.
        </p>
    </div>
    <div style="text-align: center; margin-top: 20px; color: #aaa; font-size: 12px;">
        © 2025 Icche Web Support team. All rights reserved.
    </div>
</div>

            `,
        });
        console.log('Password forget email sent successfully:', response);
    } catch (error) {
        console.error('Error sending forget password email:', error);
    }
};

// Send Welcome Email
const sendWelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"Icche Web Support Team" <i.sksingh113@gmail.com>',
            to: email,
            subject: "Password Reset!", 
            text: `Welcome, ${name}! Your password is reset successfuly.`, 
            html: `
               <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
    <h2 style="color: #3de84e; font-size: 28px; margin-bottom: 10px; text-align: center;">
      Welcome to Icche, ${name}!
    </h2>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
      We are excited to have you join our community. Get started by exploring your new note-taking space.
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
      
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center;">
      Best Regards,<br>
      <strong style="color: #0fe456;">Icche Web Support Team</strong>
    </p>
  </div>
  
            `,
        });
        console.log('Welcome email sent successfully:', response);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

const sendApprovalEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"Icche Web Support Team" <i.sksingh113@gmail.com>',
            to: process.env.ADMIN_EMAIL,
            subject: "Signup Approval Request!", 
            text: `${name} has needs approval for signup , Please approve if this user is admin else ignore`, 
            html: `
               <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
    <h2 style="color: #3de84e; font-size: 28px; margin-bottom: 10px; text-align: center;">
     ${name}! Wants to be admin
    </h2>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
     If this user is admin then approve else ignore
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
    Email of this user is ${email}
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center;">
      Best Regards,<br>
      <strong style="color: #0fe456;">Icche Web Support Team</strong>
    </p>
  </div>
  
            `,
        });
        console.log('Approval email send succesfully', response);
    } catch (error) {
        console.error('Error sending approval email:', error);
    }
};


const sendApprovedEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"Icche Web Support Team" <i.sksingh113@gmail.com>',
            to: email,
            subject: "Your Admin Request is Approved!", 
            text: `Welcome, ${name}! Your Sigup request has been approved  successfuly.`, 
            html: `
               <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
    <h2 style="color: #3de84e; font-size: 28px; margin-bottom: 10px; text-align: center;">
      Welcome to Icche, ${name}!
    </h2>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
      We are excited to have you join our society.
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
     
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center;">
      Best Regards,<br>
      <strong style="color: #0fe456;">Icche Web Support Team</strong>
    </p>
  </div>
  
            `,
        });
        console.log('Approved email sent successfully:', response);
    } catch (error) {
        console.error('Error sending approved email:', error);
    }
};

const sendApprovalRejectEmail= async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"Icche Web Support Team" <i.sksingh113@gmail.com>',
            to: email,
            subject: "Your Admin Request is Rejected!", 
            text: ` ${name}! Your Sigup request has been Rejected  by Admins.`, 
            html: `
               <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
    <h2 style="color: #3de84e; font-size: 28px; margin-bottom: 10px; text-align: center;">
      <h2>We regret to inform you</h2><p>Your request to become an admin has been rejected.</p>
    </h2>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
      Please try again later. If you have any questions, feel free to contact us.
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center; margin-bottom: 20px;">
     
    </p>
    <p style="color: #555555; font-size: 18px; line-height: 1.6; text-align: center;">
      Best Regards,<br>
      <strong style="color: #0fe456;">Icche Web Support Team</strong>
    </p>
  </div>
  
            `,
        });
        console.log('Rejected email sent successfully:', response);
    } catch (error) {
        console.error('Error sending Rejected email:', error);
    }
};


const sendAdminDashboardReportEmail= async (email,name,totalStudents,totalVolunteers,totalAlumni,totalGalleryItems,totalFestivals,totalActivities,totalFarewell,totalInduction,totalDonationDrive) => {
    try {
        const response = await transporter.sendMail({
            from: '"Icche Web Support Team" <i.sksingh113@gmail.com>',
            to: email,
            subject: "ICCHE Website Statistics Report", 
            text: ` ${name} This is your Websites Report`, 
            html:`
        <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ICCHE Website Statistics Report</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">

      <table width="100%" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <tr>
          <td style="text-align: center; padding-bottom: 20px;">
            <h2 style="color: #333;">ICCHE Website Statistics Report</h2>
            <hr style="border: 1px solid #ddd;">
          </td>
        </tr>

        <tr>
          <td>
            <p style="color: #555; font-size: 16px;">Hello Admin,</p>
            <p style="color: #555; font-size: 16px;">Here is the latest data from the ICCHE website:</p>

            <table width="100%" style="border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Students:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalStudents}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Volunteers:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalVolunteers}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Alumni:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalAlumni}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Photos & Videos:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalGalleryItems}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Festivals:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalFestivals}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Activities:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalActivities}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Farewells:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalFarewell}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Inductions:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalInduction}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total Donation Drives:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${totalDonationDrive}</td>
              </tr>
            </table>

            <p style="color: #555; font-size: 16px; margin-top: 20px;">Best Regards,</p>
            <p style="color: #555; font-size: 16px;"><strong>ICCHE Team</strong></p>
          </td>
        </tr>
      </table>

    </body>
    </html>
      `,
        });
        console.log('Report email sent successfully:', response);
    } catch (error) {
        console.error('Error sending Report email:', error);
    }
};




module.exports = { sendForgetPasswordURL, sendWelcomeEmail,sendApprovalEmail ,sendApprovedEmail,sendApprovalRejectEmail,sendAdminDashboardReportEmail};
