<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To FlowShop</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                
                <!-- Email container -->
                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

                    <!-- Header -->
                    <tr>
                        <td style="background: #2d5dee; padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Welcome to FlowShop 🎉</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 30px; color: #333;">

                            <h2 style="margin-top: 0;">Hello {{ $user->fullname }}, 👋</h2>

                            <p style="font-size: 16px; line-height: 1.6;">
                                We’re excited to have you join <strong>FlowShop</strong> — your trusted place to find quality products at great prices!
                                <br><br>
                                Your account is now ready. Enjoy your shopping experience and explore a wide range of items tailored just for you.
                            </p>

                            <p style="font-size: 16px; line-height: 1.6;">
                                If you ever need help, feel free to reach out to our support team.
                            </p>

                            <!-- CTA Button -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href=""
                                   style="background: #2d5dee; color: #fff; padding: 12px 25px; text-decoration: none; font-size: 16px; border-radius: 5px;">
                                   Start Shopping 🛒
                                </a> {{-- Add the frontend url --}}
                            </div>

                            <p style="font-size: 14px; color: #777;">
                                With love,<br>
                                <strong>The FlowShop Team</strong>
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 13px; color: #888;">
                            © {{ date('Y') }} FlowShop. All rights reserved.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>

