// const bot_express = require("bot-express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());

// app.use("/webhook", bot_express({
//     apiai_client_access_token: process.env.APIAI_CLIENT_ACCESS_TOKEN, // 必須
//     default_skill: "default_skill", // 必須。Intentが特定されなかった場合に使うスキル
//     line_channel_id: "あなたのLINE Channel ID", // LINE対応の場合必須
//     line_channel_secret: "あなたのLINE Channel Secret", // LINE対応の場合必須
//     line_channel_access_token: "あなたのLINE Channel Access Token", // LINE対応の場合必須
//     facebook_app_secret: "あなたのFacebook App Secret", // Facebook対応の場合必須
//     facebook_page_access_token: "あなたのFacebook Page Access Token", // Facebook対応の場合必須
//     facebook_verify_token: "あなたのFacebook Verify Token", // オプション。FacebookのWebhook認証用トークン。デフォルトはfacebook_page_access_tokenに指定した値
//     default_intent: "あなたのintent", // オプション。api.aiが意図を特定できなかった場合に返すresult.actionの値。デフォルトはinput.unknown
//     // beacon_skill: { "beaconイベントタイプ":"利用されるスキル" }, // オプション。beaconイベントとそのイベントで利用されるスキル。現在サポートされるbecaonイベントタイプはenterとleave。デフォルトはすべてのイベントでdefault_skill
//     // skill_path: "", // オプション。Skillファイルが保存されるディレクトリをこのアプリのルートディレクトリからの相対PATHで指定。デフォルトは"./skill"
//     // message_platform_type: "プラットフォーム識別子", // オプション。現在サポートされているのはlineのみ。デフォルトはline
//     // memory_retention: ミリ秒 // オプション。Botが会話を記憶する期間をミリ秒で指定。デフォルトは60000 (60秒)
// }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Node is runnig on port" + port);
});

app.get("/", (req, res) => {
    res.send("Node is runnig on port" + port);
});

app.post("/webhook", (req, res) => {
    res.status(200).end();
    for(var event of req.body.event){
        if (event.type === "message") console.log(event.message);
    }
});
