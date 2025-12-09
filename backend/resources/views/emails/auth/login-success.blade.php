<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Login Successful</title>
</head>
<body style="font-family: Arial, sans-serif; background-color:#f3f4f6; padding:20px;">

    <div style="max-width:600px; margin:0 auto; background:white; border-radius:10px; padding:25px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">

        <h2 style="color:#2d5dee; text-align:center; font-size:24px; margin-bottom:20px;">
            Login Successful 🎉
        </h2>

        <p style="font-size:16px; color:#333;">
            Hello <strong>{{ $user->fullname }}</strong>,
        </p>

        <p style="font-size:15px; color:#555; line-height:1.6;">
            You've successfully logged into your FlowShop account.  
            If this was you, no action is needed.
            If you notice any unfamiliar activity, please update your password immediately.
        </p>

        <div style="text-align:center; margin-top:30px;">
            <a href="" 
               style="background:#2d5dee; color:white; padding:12px 25px; text-decoration:none; border-radius:6px; display:inline-block;">
               Go to FlowShop
            </a>
        </div>

        <p style="margin-top:30px; font-size:13px; color:#777; text-align:center;">
            Thank you for choosing FlowShop 💛<br>
            — The FlowShop Team
        </p>
    </div>
</body>
</html>
