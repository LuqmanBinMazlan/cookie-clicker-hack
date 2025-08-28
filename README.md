<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker Hacks README</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #1a202c;
        }
        .container {
            max-width: 800px;
            padding: 2.5rem;
            background-color: #2d3748;
            border-radius: 1rem;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
            color: #e2e8f0;
            margin: 2rem auto;
            text-align: center;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fbd38d;
            margin-bottom: 1rem;
        }
        h2 {
            font-size: 1.75rem;
            font-weight: 600;
            color: #cbd5e0;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1rem;
            line-height: 1.5;
            margin-bottom: 1.5rem;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li {
            background-color: #4a5568;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }
        code {
            background-color: #2c5282;
            color: #b794f4;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: monospace;
            font-size: 0.9rem;
            display: inline-block;
            margin-top: 0.5rem;
        }
        .text-center {
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="container mx-auto">
        <h1>Cookie Clicker Hacks</h1>
        <p>A simple guide to using some fun JavaScript commands to modify your Cookie Clicker game experience directly in your browser.</p>

        <h2>How to Use</h2>
        <p>
            You can enter these commands directly into the developer console of your web browser. Follow these steps:
            <ol class="list-decimal list-inside text-left mx-auto max-w-sm my-4">
                <li>Open Cookie Clicker in your browser.</li>
                <li>Press <code>F12</code> (or <code>Ctrl+Shift+I</code> / <code>Cmd+Option+I</code> on Mac) to open the developer tools.</li>
                <li>Navigate to the "Console" tab.</li>
                <li>Copy and paste one of the commands below and press <code>Enter</code>.</li>
            </ol>
        </p>

        <h2>Available Hacks</h2>
        <ul>
            <li>
                <h3 class="font-semibold text-lg text-left">Add a specific number of Cookies</h3>
                <p class="text-left">This command instantly adds a huge amount of cookies to your current total. Just change the number to whatever you want!</p>
                <div class="text-left">
                    <code>Game.cookies = 9999999999999999999;</code>
                </div>
            </li>
            <li>
                <h3 class="font-semibold text-lg text-left">Set a super-fast Auto-Clicker</h3>
                <p class="text-left">This command makes it so you never have to click the big cookie again. Cookies will generate automatically.</p>
                <div class="text-left">
                    <code>setInterval(function(){ Game.ClickCookie(); }, 1);</code>
                </div>
            </li>
            <li>
                <h3 class="font-semibold text-lg text-left">Add a specific number of Golden Cookies</h3>
                <p class="text-left">This command adds an endless supply of Golden Cookies to your game. They will appear every second.</p>
                <div class="text-left">
                    <code>setInterval(function(){ Game.goldenCookie.spawn(); }, 1000);</code>
                </div>
            </li>
            <li>
                <h3 class="font-semibold text-lg text-left">Unlock all achievements and upgrades</h3>
                <p class="text-left">This will instantly grant you every single achievement and upgrade in the game. You'll be a god of cookies!</p>
                <div class="text-left">
                    <code>Game.cookies = Infinity; Game.cookiesEarned = Infinity; Game.lumps = 999; Game.gainLumps(999); Game.storeBuyAll(); Game.ToggleAllUpgrades(); Game.SetAllAchievements();</code>
                </div>
            </li>
        </ul>

        <h2>Disclaimer</h2>
        <p>These commands are for fun and are intended to be used on your own save file. Using these hacks will prevent you from earning legitimate achievements on the game's leaderboards. Use at your own risk!</p>
    </div>

</body>
</html>
