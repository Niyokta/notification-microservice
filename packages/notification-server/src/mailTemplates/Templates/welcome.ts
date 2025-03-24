const imageurl = "";

const convertToWelcomeText = (username:string): string => {

    return `
    <html>
    <head>
    <title>Page Title</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1B1F2A;
            color: #E0E0E0;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 800px;
            margin: 20px auto;
            background-color: #2A2E3B;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        .logo {
            width: 150px;
        }
        h1 {
            color: #FFB400;
        }
        p {
            font-size: 16px;
            color:#ffffff;
        }
        .btn {
            display: inline-block;
            padding: 12px 20px;
            background-color: #246BFD;
            color: #ffffff;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            margin-top: 20px;
        }
        .btn:hover {
            background-color: #1A54C9;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #B0B0B0;
        }
    </style>
    </head>
    <body>

    <div class="container">

        <h1>Welcome to Niyokta!</h1>
        <p>Hi ${username},</p>
        <p>We're excited to have you on board. Start exploring opportunities, posting projects, and connecting with freelancers today!</p>
        <a href="https://niyokta.vercel.app" class="btn">Get Started</a>
        <p class="footer">If you have any questions, feel free to reach out to us at support@niyokta.com</p>
        <p class="footer">&copy; 2025 Niyokta. All rights reserved.</p>
    </div>
    </body>
    </html>
    `
    // return `
    // <h1> Welcome To Niyokta </h1>
    // <br>
    // <img src="https://drive.google.com/uc?export=view&id=11bAxk1xAVul4XxwaRqVgOvUV1KHLc-Vk" style="width:400px;height:300px;"/>
    // `
}



export { convertToWelcomeText }